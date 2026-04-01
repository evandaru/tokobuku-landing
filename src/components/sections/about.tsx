"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section
      className="py-16 bg-[url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      id="about"
    >
      <Container>
        <section className="py-16">
          <Container className="flex flex-col">
            <SectionHeader
              title="Mengapa Memilih buku kami?"
              align="center"
              description="penerbit buku yang berbasis di Surakarta, fokus menyediakan buku anak berkualitas tinggi, Islami, dan edukatif dengan harga terjangkau."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="row-span-1 bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Berkualitas Tinggi
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Kami memastikan setiap buku dicetak dengan material terbaik
                </p>
              </div>

              <div className="row-span-1 bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Islami & Edukatif
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Konten dirancang khusus untuk menanamkan nilai-nilai keislaman
                  dan akhlakul Karimah.
                </p>
              </div>

              <div className="row-span-1 bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Harga Terjangkau
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Menyediakan bacaan berkualitas dan mencerdaskan untuk keluarga
                  tanpa harus menguras kantong.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </section>
  );
}
