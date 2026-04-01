"use client";
import { BookOpenTextIcon, ListIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Katalog", href: "#catalog" },
    { name: "Tentang", href: "#about" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-screen z-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BookOpenTextIcon className="text-4xl" />
            <span className="font-bold text-lg text-gray-800">Toko Buku</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <ListIcon size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {menu.map((item) => (
            <a key={item.name} href={item.href} className="block text-gray-700">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
