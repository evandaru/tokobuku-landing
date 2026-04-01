"use client";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  ThreadsLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

export default function MediaSocial() {
  return (
    <section className="py-16 bg-green-50" id="media-social">
      <Container>
        <Container className="flex flex-col ">
          <SectionHeader
            title="Media Social"
            align="center"
            description="Ikuti Kami di Media Sosial"
          />
        </Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex  items-center justify-center text-2xl font-bold">
              <InstagramLogoIcon />
            </div>
            <div>Instagram</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex  items-center justify-center text-2xl font-bold">
              <FacebookLogoIcon />
            </div>
            <div>Facebook</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-gray-50 text-gray-500 rounded-full flex  items-center justify-center text-2xl font-bold">
              <TiktokLogoIcon />
            </div>
            <div>Tiktok</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex  items-center justify-center text-2xl font-bold">
              <YoutubeLogoIcon />
            </div>
            <div>Youtube</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-gray-50 text-gray-500 rounded-full flex  items-center justify-center text-2xl font-bold">
              <ThreadsLogoIcon />
            </div>
            <div>Thread</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
