import { config } from "@/config/config";
import { connectDB } from "@/lib/db";
import user from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password, passwordRepeat } = await request.json();

    if (!email || !password || !passwordRepeat) {
      throw new Error("Faltan campos requeridos.");
    }

    await connectDB();

    const isEmailOk = async () => {
      const alreadyExist = await user.findOne({ email: email.trim() });
      return alreadyExist ? true : false;
    };

    const repeatedEmail = await isEmailOk();

    if (repeatedEmail) {
      throw new Error("El email ya esta en uso.");
    }

    const equalPassword = password.trim() === passwordRepeat.trim();

    if (!equalPassword) {
      throw new Error("Las contraseñas no coinciden.");
    }

    const hashPassword = await bcrypt.hash(
      password.trim(),
      config.BCRYPT_SALT_ROUNDS
    );

    const createdUser = await user.create({
      email: email,
      password: hashPassword,
    });

    return Response.json(createdUser);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json(
        {
          message: err.message || "Un error ocurrió",
        },
        {
          status: 400,
        }
      );
    } else {
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
}
