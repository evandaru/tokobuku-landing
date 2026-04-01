import { fetcher } from "@/lib/api";
import { ApiResponse } from "@/types/product";
import ProductCard from "@/components/features/product";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Link from "next/link";

export default async function Catalog() {
  const res = await fetcher<ApiResponse>(
    `/ecommerce/auth/products/all/category?limit=4`,
  );

  const { data } = res.data;

  return (
    <Container className="flex flex-col py-16">
      <SectionHeader
        title="Koleksi Buku"
        align="center"
        description="Pilihan terbaik minggu ini"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link
        className="flex mt-6 gap-1 justify-center items-center text-brand-green hover:text-brand-dark-green"
        href={"/products"}
      >
        Lihat Semua Katalog →
      </Link>
    </Container>
  );
}
