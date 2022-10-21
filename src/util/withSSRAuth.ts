import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { destroyCookie, parseCookies } from "nookies";
import decode from "jwt-decode";
import { AuthTokenError } from "../services/axios/errors/AuthTokenError";
import { validateuserPermissions } from "./validateUserPermissions";

type withSSRAuthOptions = {
  permissions?: string[];
  roles?: string[];
};

export function withSSRAuth<P>(
  fn: GetServerSideProps<P>,
  options?: withSSRAuthOptions
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies["accessToken"];
    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    if (options) {
      const user = decode<{ permissions: string[]; roles: string[] }>(token);
      const { permissions, roles } = options;

      const userHasValidPermissions = validateuserPermissions({
        user,
        permissions,
        roles,
      });

      if(!userHasValidPermissions){
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false
          }
        }
      }
      console.log(user);
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "accessToken");
        destroyCookie(ctx, "refreshToken");

        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      } else {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }
    }
  };
}
