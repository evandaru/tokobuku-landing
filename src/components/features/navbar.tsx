"use client";
import { BookOpenTextIcon, ListIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
            <Link href="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link
              href="#catalog"
              className="text-gray-700 hover:text-green-600"
            >
              Katalog
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600">
              Tentang
            </Link>
            <Link
              href="#testimoni"
              className="text-gray-700 hover:text-green-600"
            >
              Testimoni
            </Link>

            <Link
              href="#login"
              className="text-gray-700 font-bold hover:text-green-600"
            >
              Login
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <ListIcon size={32} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700">
            Home
          </Link>
          <Link href="#catalog" className="block text-gray-700 hover:text-green-600">
            Katalog
          </Link>
          <Link href="#about" className="block text-gray-700 hover:text-green-600">
            Tentang
          </Link>
          <Link href="#testimoni" className="block text-gray-700 hover:text-green-600">
            Testimoni
          </Link>
          <Link href="#" className="block font-bold text-gray-700 hover:text-green-600">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
