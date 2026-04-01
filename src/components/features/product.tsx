"use client";
import Image from "next/image";
import { Product } from "@/types/product";
import Button from "../ui/button";
import { ShoppingBag } from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const hasDiskon = parseInt(product.diskon) > 0;
  const isHabis = product.sisastok === 0;

  return (
    <div className="relative rounded-xl border border-gray-100 bg-white p-3 flex flex-col h-full">
      {hasDiskon && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
          -{product.diskon}%
        </span>
      )}

      {isHabis && (
        <span className="absolute top-2 right-2 bg-gray-400 text-white text-xs px-2 py-0.5 rounded-full z-10">
          Habis
        </span>
      )}

      {product.preorder && (
        <span className="absolute top-2 right-2 bg-amber-400 text-white text-xs px-2 py-0.5 rounded-full z-10">
          Pre-order
        </span>
      )}

      <div className="relative w-full aspect-4/3 mb-3 overflow-hidden rounded-lg shrink-0">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
          className="object-cover object-center"
        />
      </div>

      {/* 3. Bungkus area konten bawah dengan flex-col dan flex-1 */}
      <div className="flex flex-col flex-1">
        {/* Nama */}
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
          {product.name}
        </h2>

        {/* 4. Bungkus Harga & Button dengan div baru, beri mt-auto untuk mendorongnya ke paling bawah */}
        <div className="mt-auto">
          {/* Harga */}
          {hasDiskon ? (
            <div>
              <p className="text-xs text-gray-400 line-through">
                {product.price_formatted}
              </p>
              <p className="text-sm font-bold text-emerald-600">
                {product.final_price_formatted}
              </p>
            </div>
          ) : (
            <p className="text-sm font-bold text-gray-900">
              {product.final_price_formatted}
            </p>
          )}

          <Button className="mt-4 gap-1 w-full" variant="primary" size="sm">
            <ShoppingBag />
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}
