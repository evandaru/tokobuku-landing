"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-16" id="faq">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeader
            title="FAQ"
            align="center"
            description="Pertanyaan yang sering ditanyakan"
          />
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {/* ITEM 1 */}
          <div className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(1)}
              className="w-full text-left p-4 font-medium text-gray-800"
            >
              Apakah buku yang dijual original?
            </button>
            {open === 1 && (
              <p className="px-4 pb-4 text-sm text-gray-600">
                Ya, semua buku yang kami jual adalah original dan berkualitas.
              </p>
            )}
          </div>

          {/* ITEM 2 */}
          <div className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(2)}
              className="w-full text-left p-4 font-medium text-gray-800"
            >
              Berapa lama pengiriman?
            </button>
            {open === 2 && (
              <p className="px-4 pb-4 text-sm text-gray-600">
                Pengiriman biasanya memakan waktu 2–5 hari kerja tergantung
                lokasi.
              </p>
            )}
          </div>

          {/* ITEM 3 */}
          <div className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(3)}
              className="w-full text-left p-4 font-medium text-gray-800"
            >
              Apakah bisa COD?
            </button>
            {open === 3 && (
              <p className="px-4 pb-4 text-sm text-gray-600">
                Saat ini kami hanya melayani pembayaran via transfer dan
                e-wallet.
              </p>
            )}
          </div>

          {/* ITEM 4 */}
          <div className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(4)}
              className="w-full text-left p-4 font-medium text-gray-800"
            >
              Bagaimana jika buku rusak?
            </button>
            {open === 4 && (
              <p className="px-4 pb-4 text-sm text-gray-600">
                Kamu bisa menghubungi kami untuk proses penggantian atau refund.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
