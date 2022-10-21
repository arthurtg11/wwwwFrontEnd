import { rejects } from "assert";
import axios, { AxiosError } from "axios";
import { request } from "http";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { signOut } from "../../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
      Authorization: `Bearer ${cookies["accessToken"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === "token_expired") {
          cookies = parseCookies(ctx);
          const { refreshToken } = cookies;
          //Essa variavel armazena a requisição e suas configurações
          const originalConfig = error.config;
          if (!isRefreshing) {
            isRefreshing = true;
            api
              .get("/token/refresh", {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              })
              .then((response) => {
                const { access_token: token } = response.data;

                setCookie(ctx, "accessToken", token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });
                setCookie(ctx, "refreshToken", response.data.refresh_token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });

                api.defaults.headers["Authorization"] = `Bearer ${token}`;

                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(token)
                );
                failedRequestsQueue = [];
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request) =>
                  request.onFailure(err)
                );
                failedRequestsQueue = [];
                /*Essa variavel indica se está rodando no lado doo browser ou no Servidor next
                Browser = true
                Next = false
              */
                if (process.browser) {
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;

                //Refaz a requisição que iria falhar com o novo token
                resolve(api(originalConfig));
              },
              onFailure: () => {},
            });
          });
        } else {
          if (process.browser) {
            signOut();
          } else {
            return Promise.reject(new AuthTokenError());
          }
        }
      }
      return Promise.reject(error);
    }
  );
  return api;
}
