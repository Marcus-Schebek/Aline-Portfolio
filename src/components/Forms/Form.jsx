import { Input, Textarea } from "@nextui-org/react";

export default function Forms() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <form
        action="https://formsubmit.co/aline.contactart@gmail.com" // Seu email
        method="POST"
        style={{
          backgroundColor: "#282828",
          padding: "2em",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        className="w-96 gap-4"
      >
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "1em" }}>
          Entre em Contato
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Input
            variant="underlined"
            type="text"
            label="Nome"
            name="name"
            required
            color="#fff"
          />
          <Input
            variant="underlined"
            type="text"
            label="Celular"
            name="phone"
            required
            color="#fff"
          />
          <Input
            variant="underlined"
            type="email"
            label="Email"
            name="email"
            required
            color="#fff"
          />
          <Textarea
            variant="underlined"
            placeholder="Sobre o que você quer falar?"
            name="message"
            required
            className="max-w-xs"
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#db5375",
            color: "#fff",
            marginTop: "1em",
            width: "100%",
            padding: "0.75em",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
