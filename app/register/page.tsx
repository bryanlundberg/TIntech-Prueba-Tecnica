"use client";
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
      <div className="flex flex-col p-10 max-w-96 mx-auto">
        <h1 className="text-3xl font-semibold mb-5">Crea tu cuenta</h1>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => handleSubmitForm(e)}
        >
          <label htmlFor="email">Email</label>
          <input
            minLength={4}
            required
            className="border focus:outline-none p-2"
            name="email"
          />
          <label htmlFor="password">Contraseña</label>
          <input
            minLength={8}
            required
            className="border focus:outline-none p-2"
            name="password"
            type="password"
          />
          <label htmlFor="passwordRepeat">Confirmar Contraseña</label>
          <input
            minLength={8}
            required
            className="border focus:outline-none p-2"
            name="passwordRepeat"
            type="password"
          />
          <button className="p-3 bg-red-600 hover:opacity-80 text-white rounded-sm">
            Registrarme
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </>
  );
}
