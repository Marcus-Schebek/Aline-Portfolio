import { Input, Button, Textarea } from "@nextui-org/react";

export default function Forms() {
  return (
    <div style={{ backgroundColor: "#282828", padding: "2em", borderRadius: "8px"}} className="w-96 gap-4">
      <h2 style={{ color: "#fff", textAlign: "center" }}>Entre em Contato</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <Input
      variant="underlined"
      type="text"
      label="Nome"
      className="max-w-xs"
      color="#fff"
    />
    <Input
     variant="underlined"
      type="text"
      label="Celular"
      className="max-w-x"
      color="#fff"
    />
    <Input
     variant="underlined"
      type="email"
      label="Email"
      className="max-w-xs"
      color="#fff"
    />
    <Textarea
      variant="underlined"
      placeholder="Sobre o que você quer falar ?"
      className="max-w-xs"
    />
      </div>

      <Button  style={{ backgroundColor: "#db5375", color:"#fff", marginTop: "1em", width: "100%" }}>
        Enviar
      </Button>
    </div>
  );
}
