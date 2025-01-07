"use client";
import AuthContainer from "@/components/containers/auth/auth-container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      if (response.ok) {
        router.push("/");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <AuthContainer>
        <h1 className="text-3xl font-semibold mb-5">Inicia sesión</h1>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => handleSubmitForm(e)}
        >
          <label htmlFor="email">Email</label>
          <input
            required
            className="border focus:outline-none p-2"
            name="email"
          />
          <label htmlFor="password">Contraseña</label>
          <input
            required
            className="border focus:outline-none p-2"
            name="password"
            type="password"
          />
          <div className="flex items-center gap-3">
            <button className="p-3 bg-red-600 hover:opacity-80 text-white rounded-sm w-fit text-sm">
              Dejame entrar!
            </button>
            <p className="text-xs text-blue-500 hover:text-blue-700 hover:cursor-pointer hover:underline">
              ¿Olvidaste tu contraseña?
            </p>
          </div>

          {error && <p className="text-red-600">{error}</p>}
        </form>

        <p className="text-xs mt-10">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/register"
            className="text-blue-500 hover:text-blue-700 hover:cursor-pointer hover:underline"
          >
            Regístrate gratis
          </Link>
        </p>
      </AuthContainer>
    </>
  );
}
