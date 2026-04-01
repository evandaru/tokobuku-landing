"use client";

import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import { User } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-16 " id="testimoni">
      <Container>
        <Container className="flex flex-col ">
          <SectionHeader
            title="Apa Kata Mereka?"
            align="center"
            description=" Testimoni dari pelanggan kami"
          />
        </Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-row items-start gap-6">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center text-2xl font-bold">
              <User />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-1">Fulan Abdillah</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bukunya lengkap dan pengiriman cepat banget. Recommended!
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-row items-start gap-6">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center text-2xl font-bold">
              <User />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-1">Zainal Abdillah</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pelayanan ramah, packing rapi. Pasti beli lagi di sini.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-row items-start gap-6">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center text-2xl font-bold">
              <User />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-1">Lia Zahrah</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Harga lebih murah dari tempat lain, kualitas juga bagus.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
