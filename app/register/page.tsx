"use client";
import Button from "@/components/button/button";
import AuthContainer from "@/components/containers/auth/auth-container";
import Input from "@/components/input/input";
import CustomLink from "@/components/link/custom-link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
          passwordRepeat: formData.get("passwordRepeat"),
        }),
      });
      if (response.ok) {
        router.push("/login");
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
        <h1 className="text-3xl font-semibold mb-5">Crea tu cuenta</h1>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => handleSubmitForm(e)}
        >
          <label htmlFor="email">Email</label>
          <Input minLength={4} required name="email" />
          <label htmlFor="password">Contraseña</label>
          <Input minLength={8} required name="password" type="password" />
          <label htmlFor="passwordRepeat">Confirmar Contraseña</label>
          <Input minLength={8} required name="passwordRepeat" type="password" />
          <Button className="w-full">Registrarme</Button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
        <p className="text-xs mt-10">
          ¿Ya tienes una cuenta?{" "}
          <CustomLink href="/login">Inicia sesión</CustomLink>
        </p>
      </AuthContainer>
    </>
  );
}
