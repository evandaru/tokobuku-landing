"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

export default function Payment() {
  return (
    <section className="py-16 bg-gray-100" id="payment">
      <Container>
        <section className="py-16">
          <Container className="flex flex-col">
            <SectionHeader
              title="Belanja Mudah dan Aman"
              align="center"
              description="Transaksi lebih nyaman dengan berbagai pilihan pembayaran dan pengiriman:"
            />

            <div className="grid gap-4">
              <div className="p-6 rounded-xl flex flex-col items-center gap-6">
                <div className="flex flex-wrap justify-center items-center gap-5">
                  <Image
                    src="/payment/BCA.svg"
                    alt="BCA Logo"
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                  <Image
                    src="/payment/Mandiri.svg"
                    alt="Mandiri Logo"
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                  <Image
                    src="/payment/bni.svg"
                    alt="BNI Logo"
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                  <Image
                    src="/payment/bsi.svg"
                    alt="BSI Logo"
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                  <Image
                    src="/payment/j&t.svg"
                    alt="j&t Logo"
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                  <Image
                    src="/payment/sicepat.svg"
                    alt="sicepat Logo"
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                </div>

                {/* Tambahan Teks Persuasi Sebelum Tombol */}
                <div className="mt-8 text-center">
                  <p className="text-gray-500 text-sm mb-4">
                    Punya pertanyaan soal proses pemesanan?{" "}
                  </p>

                  <div className="grid gap-3 justify-center">
                    <Button variant="outline">
                      <Link
                        className="flex flex-row justify-center gap-2 items-center"
                        href="#catalog"
                      >
                        <WhatsappLogoIcon />
                        Hubungi Kami!
                      </Link>
                    </Button>
                    <Button>
                      <Link href="#catalog">Mulai Belanja Sekarang</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </section>
  );
}
