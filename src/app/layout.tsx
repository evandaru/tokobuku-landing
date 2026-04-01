import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import FloatingWhatsApp from "@/components/sections/floating-whatsapp";
import { GridPatternBackground } from "@/components/ui/grid-pattern";

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
  metadataBase: new URL("https://toko-buku-landing.vercel.app"),
  title: {
    default: "Toko buku - Toko Buku Islam",
    template: "%s | toko buku",
  },
  description:
    "Toko Buku memberikan beberapa katalog buku yang dapat membantu keluarga untuk belajar agama islam.",
  openGraph: {
    title: "Toko buku - Toko Buku Islam",
    description: "Koleksi buku Islami terbaik untuk keluarga.",
    url: "https://toko-buku-landing.vercel.app",
    siteName: "Toko buku",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko buku - Toko Buku Islam",
    description: "Koleksi buku Islami terbaik untuk keluarga.",
  },
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
