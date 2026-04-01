import Link from "next/link";

export default function Footer() {
  const menu = {
    toko: [
      { name: "Kategori", href: "#" },
      { name: "Buku Terbaru", href: "#" },
      { name: "Best Seller", href: "#" },
    ],
    bantuan: [
      { name: "Kontak", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Toko Buku</h2>
            <p className="text-gray-600 text-sm">
              Tempat terbaik untuk menemukan buku favoritmu.
            </p>
          </div>

          {Object.entries(menu).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold text-gray-800 mb-3 capitalize">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-indigo-600 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Toko Buku. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
