"use client";
import Image from "next/image";
import Link from "next/link";

export default function Instagram() {

  return (
    <section className="relative flex items-center bg-neutral-100 text-gray-900 overflow-hidden">
      <div className="w-full mx-auto p-5 py-10 pb-20 md:p-20 relative z-20">
        <Link
            href="https://instagram.com/wewillwokyoumk"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-[30px] md:bottom-[calc(50%-20px)] md:-rotate-12"
          >
            <span
              className="text-[#f81a19] md:text-white hover:text-[#f81a19] transition-all text-3xl md:text-6xl font-heading drop-shadow-lg tracking-wide"
              style={{ fontFamily: "var(--font-luckiest-guy)" }}
            >
              @wewillwokyoumk
            </span>
          </Link>

        <div className="flex flex-row md:flex-row justify-center items-center gap-2 md:gap-6 md:pl-[300px]">
        {/* 🥢 Image 1 with overlay */}
        <div className="aspect-square w-full md:w-1/3 overflow-hidden rounded-2xl">
          <Image
            src="/wwwu-3.jpg"
            alt="We Will Wok You Instagram 1"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🥢 Image 2 */}
        <div className="aspect-square w-full md:w-1/3 overflow-hidden rounded-2xl">
          <Image
            src="/wwwu-4.jpg"
            alt="We Will Wok You Instagram 2"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🥢 Image 3 */}
        <div className="aspect-square w-full md:w-1/3 overflow-hidden rounded-2xl">
          <Image
            src="/wwwu-5.jpg"
            alt="We Will Wok You Instagram 3"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
