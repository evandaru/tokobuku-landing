"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { InstagramLogoIcon } from "@phosphor-icons/react";
import { User } from "lucide-react";

export default function MediaSocial() {
  return (
    <section className="py-16 bg-green-50" id="about">
      <Container>
        <Container className="flex flex-col ">
          <SectionHeader
            title="Media Social"
            align="center"
            description="Ikuti Kami di Media Sosial"
          />
        </Container>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex  items-center justify-center text-2xl font-bold">
              <InstagramLogoIcon />
            </div>
            <div>Instagram</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex  items-center justify-center text-2xl font-bold">
              <InstagramLogoIcon />
            </div>
            <div>Instagram</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex  items-center justify-center text-2xl font-bold">
              <InstagramLogoIcon />
            </div>
            <div>Instagram</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex  items-center justify-center text-2xl font-bold">
              <InstagramLogoIcon />
            </div>
            <div>Instagram</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex  items-center justify-center text-2xl font-bold">
              <InstagramLogoIcon />
            </div>
            <div>Instagram</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
