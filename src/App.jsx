import { useState } from "react";
import Nav from "./components/Nav/Nav";
import AboutMe from "./components/AboutMe/AboutMe";
import Gallery from "./components/Gallery/Gallery";
import ContactForm from "./components/Forms/Form";

function App() {
  const [activeSection, setActiveSection] = useState("Trabalhos");

  const renderSection = () => {
    switch (activeSection) {
      case "Sobre Mim":
        return <AboutMe />;
      case "Trabalhos":
        return <Gallery />;
      case "Entre em Contato":
        return <ContactForm />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="flex justify-center items-start min-h-screen w-screen pt-[64px] overflow-hidden">
        <div className="p-4 w-full max-w-7xl">{renderSection()}</div>
      </div>

      <footer className="text-center p-4 bg-gray-800 text-white w-full bottom-0">
        <p>Criado por Marcus Schebek© - 2025</p>
      </footer>
    </>
  );
}

export default App;
