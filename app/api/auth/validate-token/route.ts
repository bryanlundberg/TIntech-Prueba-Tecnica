import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { config } from "@/config/config";

export async function POST(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value as string;

  try {
    jwt.verify(token, config.JWT_SECRET_KEY as string);
  } catch (error) {
    console.error("Error al verificar token:", error);

    return NextResponse.json(
      { message: "Token inválido o expirado." },
      { status: 401 }
    );
  }

  type UserPayload = {
    id: string;
    email: string;
  };

  const decoded = jwt.decode(token) as UserPayload | null;

  if (!decoded || !decoded.id || !decoded.email) {
    return NextResponse.json(
      { message: "El token no contiene la información esperada." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    accessToken: token,
    session: { id: decoded.id, email: decoded.email },
  });
}
