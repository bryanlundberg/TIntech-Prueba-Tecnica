import { config } from "@/config/config";
import user from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      throw new Error("Faltan campos para validar el inicio de sesión");
    }

    if (!config.JWT_SECRET_KEY) {
      throw new Error("Falta definir la variable de entorno JWT_SECRET_KEY");
    }

    const account = await user.findOne({
      email: email,
    });

    if (!account) {
      throw new Error("El correo electrónico no existe");
    }

    const isEqualPassword = await bcrypt.compare(password, account.password);

    if (!isEqualPassword) {
      throw new Error("La contraseña es incorrecta");
    }

    const payload = { id: account._id.toString(), email: account.email };

    const token = jwt.sign(payload, config.JWT_SECRET_KEY, { expiresIn: "1h" });

    const cookieStore = await cookies();
    cookieStore.set("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 3600, // 1 hour
    });

    return Response.json({
      session: { id: account.id, email: account.email },
      access_token: token,
    });
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      return Response.json(
        {
          message: err.message,
        },
        {
          status: 401,
        }
      );
    }

    return Response.json(
      {
        message: "Un error ocurrió",
      },
      {
        status: 400,
      }
    );
  }
}
