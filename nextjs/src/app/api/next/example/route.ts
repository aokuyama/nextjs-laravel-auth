import { NextRequest } from "next/server";

export const GET = async (req: NextRequest): Promise<Response> => {
  return Response.json({ message: "ok" });
};
