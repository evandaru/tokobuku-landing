import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:pt-0 pt-26 md:text-5xl font-bold text-brand-green leading-tight mb-4">
              Temukan Inspirasi & Literasi Islami Terbaik
            </h1>

            <p className="text-gray-600 mb-6 max-w-md">
              Kami mengkurasi setiap halaman untuk memastikan hanya hikmah
              terbaik yang sampai ke genggaman Anda. Koleksi buku terpilih untuk
              perjalanan spiritual Anda.
            </p>

            <div className="flex gap-3">
              <Button href="#catalog" variant="primary">
                Jelajahi Katalog
              </Button>

              <Button href="#" variant="secondary">
                Tentang kami
              </Button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Buku"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
