import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookiesStore = await cookies();
  cookiesStore.delete("jwt");

  return Response.json({ ok: "ok" });
}
