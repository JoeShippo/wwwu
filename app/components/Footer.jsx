"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white px-10 md:px-20 pb-10 pt-10 md:pt-0 border-t-2 md:border-t-0">
      <div className="mx-auto flex flex-col gap-10 pt-15">

        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* NEW LEFT COLUMN */}
          <div className="flex flex-col gap-3 max-w-md">
            <h3
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-luckiest-guy)" }}
            >
              Fresh, Fast & Full of Flavour
            </h3>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              Cooking up street-food-style noodles with big flavours and bigger personality.
              Find us across Milton Keynes serving the dishes you crave.
            </p>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col md:flex-row gap-7 md:gap-30">
            
            <div
              className="flex flex-col gap-3 tracking-wide text-xl md:text-2xl"
              style={{ fontFamily: "var(--font-luckiest-guy)" }}
            >
              
              <a
                href="https://app.indilocal.co.uk/map?id=188"
                className="hover:text-[#f81a19] transition"
              >
                Indi Local
              </a>
              {/* <a href="#" className="hover:text-[#f81a19] transition">
                Order Online
              </a> */}
              <div className="flex items-center gap-4 text-2xl md:text-4xl mb-3">
                <a
                  href="https://www.instagram.com/wewillwokyoumk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f81a19] transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/wewillwokyoumk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f81a19] transition"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="flex flex-col gap-3 md:text-right tracking-wide text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-luckiest-guy)" }}
          >
            <Image
              src="/fhrs-badge-5.svg" 
              width={80}
              height={80}
              alt="Footer Icon"
              className="md:ml-auto md:mr-0"
            />

            <p>07849 309400</p>
            <p><a href="mail:hello@wewillwokyou.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-[#f81a19] transition">hello@wewillwokyou.co.uk</a></p>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <p>
              © {new Date().getFullYear()} We Will Wok You. All rights reserved.
            </p>
            <a href="/privacy-policy" className="hover:text-[#f81a19] transition">
              Privacy Policy
            </a>
          </div>

          <p className="text-white/70">
            Delivered by{" "}
            <a
              href="https://shipped-studio.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f81a19] transition font-semibold"
            >
              Shipped Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}