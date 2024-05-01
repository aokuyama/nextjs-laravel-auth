import { Session } from "next-auth";
import { NextRequest } from "next/server";
import { check } from "../laravel/api/check";

export const authorized = async (
  auth: Session | null,
  request: NextRequest
) => {
  return await check();
};
