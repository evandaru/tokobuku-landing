import { fetcher } from "@/lib/api";
import { ApiResponse } from "@/types/product";
import ProductCard from "@/components/features/product";
import Pagination from "@/components/ui/pagination";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page || "1";

  const title =
    page === "1"
      ? "Katalog Buku Islami"
      : `Katalog Buku Islami - Halaman ${page}`;

  return {
    title: title,
    description: `Jelajahi koleksi buku Islami terbaik untuk keluarga muslim di halaman ${page}.`,
    openGraph: {
      title: title,
    },
  };
}

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const pageParam = resolvedSearchParams.page;

  const page = Number(pageParam) || 1;

  const response = await fetcher<ApiResponse>(
    `/ecommerce/auth/products/all/category?page=${page}&limit=10`,
  );

  const products = response.data.data;
  const { total, current_page, last_page } = response.data;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pt-26">
      <div className="mb-6 flex flex-row  items-center gap-8">
        <Link href={"/"}>
          <ArrowLeft />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Katalog Buku</h1>
          <p className="text-sm text-gray-500 mt-1">{total} produk tersedia</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination currentPage={current_page} lastPage={last_page} />
    </main>
  );
}
