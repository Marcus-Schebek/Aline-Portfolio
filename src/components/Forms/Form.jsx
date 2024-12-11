import { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";

export default function Forms() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o redirecionamento padrão do formulário

    const formData = new FormData(event.target);
    try {
      const response = await fetch("https://formsubmit.co/aline.contactart@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-white text-center text-xl font-bold mb-4">
          Entre em Contato
        </h2>

        {/* Campo oculto para impedir redirecionamento */}
        <input type="hidden" name="_next" value="none" />

        <div className="space-y-4">
          <Input
            label="Nome"
            type="text"
            name="name"
            required
            className="text-white"
            aria-label="Nome"
          />
          <Input
            label="Celular"
            type="text"
            name="phone"
            required
            className="text-white"
            aria-label="Celular"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            required
            className="text-white"
            aria-label="Email"
          />
          <Textarea
            label="Mensagem"
            name="message"
            required
            className="text-white"
            placeholder="Sobre o que você quer falar?"
            aria-label="Mensagem"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white mt-4 w-full py-2 rounded hover:bg-pink-600 transition-colors"
        >
          Enviar
        </button>

        {status === "success" && (
          <p className="text-green-500 text-center mt-4">Mensagem enviada com sucesso!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mt-4">Ocorreu um erro. Tente novamente.</p>
        )}
      </form>
    </div>
  );
}
