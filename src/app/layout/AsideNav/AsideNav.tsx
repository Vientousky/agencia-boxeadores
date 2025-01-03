"use client";

import { useState } from "react";
import {
  BsHouse,
  BsCardChecklist,
  BsJournals,
  BsPeople,
  BsArrowDown,
} from "react-icons/bs";
import "./asidebar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const AsideNav: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu((prev) => (prev === submenu ? null : submenu));
  };

  const pathname = usePathname();

  const isSubmenuActive = (submenu: { href: string }[]) =>
    submenu.some((sublink) => pathname === sublink.href);

  const Links = [
    {
      name: "Home",
      href: "/",
      icon: BsHouse,
    },
    {
      name: "Boxeadores",
      href: "/boxeadores",
      icon: BsPeople,
    },
    {
      name: "Reglamento",
      icon: BsCardChecklist,
      iconOpen: BsArrowDown,
      submenu: [
        { name: "Descargar", href: "/reglamento/descargar" },
        { name: "Listar de Reglas", href: "/reglamento/lista" },
      ],
    },
    {
      name: "Trámites",
      icon: BsJournals,
      iconOpen: BsArrowDown,
      submenu: [
        { name: "Tarjeta", href: "/tramites/tarjeta" },
        { name: "Certificado", href: "/tramites/certificado" },
      ],
    },
  ];

  return (
    <nav className="asideNav">
      <ul>
        {Links.map((link, index) => (
          <li
            key={index}
            className={
              pathname === link.href ||
              (link.submenu && isSubmenuActive(link.submenu))
                ? ""
                : ""
            }
          >
            {link.href ? (
              <Link href={link.href}>
                <link.icon />
                <span>{link.name}</span>
              </Link>
            ) : (
              <>
                <button
                  className="asideNavButton"
                  onClick={() => toggleSubmenu(link.name)}
                >
                  <link.icon />
                  <span>{link.name}</span>
                  {link.iconOpen && <link.iconOpen />}
                </button>
                {link.submenu && (
                  <ul
                    className={`submenu ${
                      openSubmenu === link.name ? "open" : ""
                    }`}
                  >
                    {link.submenu.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <Link href={sublink.href}>{sublink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AsideNav;
