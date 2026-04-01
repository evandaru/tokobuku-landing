import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { GridPatternBackground } from "@/components/ui/GridPattern";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Ziyad - Toko Buku Islam",
  description:
    "ZiyadBook memberikan beberapa katalog buku yang dapat membantu keluarga untuk belajar agama islam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth data-scroll-behavior">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-white text-brand-black selection:bg-brand-lime selection:text-brand-black`}
      >
        <Navbar />
        <GridPatternBackground />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
