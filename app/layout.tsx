import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "सफल मौरी पालन उद्योग | Safal Mauri Palan Udhyog",
  description: "Pure, natural honey straight from the hive. Artisanal honey products by Madhav Raj Paudel.",
  keywords: ["honey", "मह", "मौरी", "artisanal", "organic", "Nepal"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ne">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&family=Noto+Serif+Devanagari:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Lato', 'Palatino Linotype', serif" }}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
