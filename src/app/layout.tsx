import type { Metadata } from "next";
import Asidebar from "./layout/Asidebar";
import Footer from "./layout/Footer";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Boxeo Provincial",
  description:
    "Todo lo que busque de trámites de boxeo o boxeadores lo encuentra aquí.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Asidebar />

        <div >

          {children}

          <Footer />
          
        </div>
      </body>
    </html>
  );
}
