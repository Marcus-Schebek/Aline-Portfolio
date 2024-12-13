import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link
} from "@nextui-org/react";
import { FaInstagram, FaBehance } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Nav({ activeSection, setActiveSection }) {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Sobre Mim" },
    { name: "Trabalhos" },
    { name: "Entre em Contato" }
  ];

  // Função para alternar o estado do menu mobile
  const toggleMenu = () => setMenuOpen(!menuOpen);


  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <Navbar
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#1f2937'
      }}
      disableAnimation
      isBordered
    >
      <NavbarContent justify="start">
        {isMobile && (
          <NavbarMenuToggle onClick={toggleMenu} style={{ background: 'none' }} />
        )}
        <NavbarBrand>
          <span style={{ fontWeight: "bold", fontSize: "1.5rem", color: 'var(--tw-text-softWhite)' }}>
            Aline Cali
          </span>
        </NavbarBrand>
      </NavbarContent>

      {!isMobile && (
        <NavbarContent className="sm:flex gap-4" justify="center" >
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                onClick={() => handleSectionChange(item.name)}
                className={activeSection === item.name ? "text-softRed" : "text-softWhite hover:text-softRed"}
                href="#"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}

      <NavbarContent justify="end" >
        <NavbarItem>
          <Link href="https://www.instagram.com/artofalinecali" target="_blank" className="text-softWhite hover:text-softRed flex items-center">
            <FaInstagram size={24} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="https://www.behance.net/alinecaliart" target="_blank" className="text-softWhite hover:text-softRed flex items-center">
            <FaBehance size={24} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {isMobile && (
        <NavbarMenu isOpen={menuOpen} 
         className="Nav-menu bg-[#111827]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                onClick={() => handleSectionChange(item.name)}
                className="w-full"
                style={{
                  color: activeSection === item.name ? 'var(--tw-text-softRed)' : 'var(--tw-text-softWhite)'
                }}
                href="#"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
