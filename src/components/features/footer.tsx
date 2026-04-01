import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Kolom Info */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex flex-row gap-2">
              <BookOpen />
              Toko Buku
            </h2>
            <p className="text-gray-600 text-sm">
              Tempat terbaik untuk menemukan buku favoritmu.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3 capitalize">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  +62812345678
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  tokobuku@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Jl. Samudra Inggris No. 99, Jakarta 12345
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3 capitalize">
              Bantuan
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 Toko Buku. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
