import { createContext, ReactNode, useState, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

import { api } from "../services/axios/apiClient";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  signOutCliente(): void;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, "accessToken");
  destroyCookie(undefined, "refreshToken");

  authChannel.postMessage("signOut");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  let isAuthenticated = !!user;

  useEffect(() => {
    // Se o usuario utilizar o signIn, enviará uma mensagem para todas as abas, assim deslogando-o em todas.
    authChannel = new BroadcastChannel("auth");
    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut();
          break;
        default:
          break;
      }
    };

    //Chama a rota de informações do usuario, também serve para verificar se está authenticado e usar renovar o token
    const { accessToken: token } = parseCookies();

    if (token) {
      api
        .get("/userInfo")
        .then((response) => {
          let { name: email, roles, permissions } = response.data;
          if (!permissions) setUser({ email, roles, permissions });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    var bodyFormData = new FormData();
    bodyFormData.append("username", email);
    bodyFormData.append("password", password);
    try {
      const response = await api.post("login", bodyFormData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const {
        roles,
        permissions,
        access_token: accessToken,
        refresh_token: refreshToken,
      } = response.data;

      setCookie(undefined, "accessToken", accessToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      setCookie(undefined, "refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({
        email,
        roles,
        permissions,
      });

      api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
      Router.push("/dashboard");
    } catch (e) {
      throw e;
    }
  }

  async function signOutCliente() {
    signOut();
    isAuthenticated = false;
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user, isAuthenticated, signOutCliente }}
    >
      {children}
    </AuthContext.Provider>
  );
}
