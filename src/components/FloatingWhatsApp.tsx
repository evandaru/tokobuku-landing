"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Link
            href="https://wa.me/6281234567890?text=Halo Kak, saya mau konsultasi tentang layanan Toko buku"
            target="_blank"
            className={`
                fixed bottom-8 right-8 z-50 flex items-center justify-center
                w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30
                transition-all duration-500 hover:scale-110 hover:-translate-y-2
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
            `}
            aria-label="Chat via WhatsApp"
        >
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
            <WhatsappLogo weight="fill" className="w-8 h-8 relative z-10" />
        </Link>
    );
}
