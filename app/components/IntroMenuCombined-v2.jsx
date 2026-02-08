"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

export default function IntroAndMenu() {
  // const items = [
  //   { id: 1, category: "Wok Fried Noodles", title: "Keep it Simple - Veggie", description: "Veggies tossed with just soy sauce & garlic - simple, good tasting noodles", image: "/menu/hero.jpg" },
  //   { id: 2, category: "Wok Fried Noodles", title: "Keep it Simple - Chicken", description: "Chicken tossed with just soy sauce & garlic - simple, good tasting noodles", image: "/menu/hero.jpg" },
  //   { id: 3, category: "Wok Fried Noodles", title: "Signature Chicken", description: "Our best seller, chicken with our own blend of black bean and chilli", image: "/menu/hero.jpg" },
  //   { id: 4, category: "Wok Fried Noodles", title: "Chicken Teriyaki", description: "A classic street food dish made with the We Will Wok You passion", image: "/menu/hero.jpg" },
  //   { id: 5, category: "Wok Fried Noodles", title: "Spicy Singapore", description: "Chicken, ham and king prawns cooked in a madras seasoning", image: "/menu/hero.jpg" },
  //   { id: 6, category: "Loaded Rice or Noodle Pots", title: "Asian BBQ Pork", description: "Pork cooked in a mildly spiced, BBQ inspired Asian sauce", image: "/menu/hero.jpg" },
  //   { id: 7, category: "Loaded Rice or Noodle Pots", title: "Malaysian  Curry", description: "Slow cooked chicken in a creamy, fragrant coconut based curry", image: "/menu/hero.jpg" },
  //   { id: 8, category: "Loaded Rice or Noodle Pots", title: "Sweet & Sour Chicken", description: "Our take on the classic, our sweet and tangy sauce with peppers", image: "/menu/hero.jpg" },
  //   { id: 89, category: "Sides", title: "Veggie Spring Rolls", description: "A staple on any Asian based menu, freshly cooked & dangerously moreish", image: "/menu/hero.jpg" },
  // ];

  return (
    <section id="about" className="relative text-white overflow-hidden scroll-mt-15">

      {/* 🔴 INTRO SECTION */}
      <div className="min-h-screen flex items-center bg-[#f81a19]">
        <div className="max-w-[90vw] w-full mx-auto px-6 md:px-12 lg:px-16 py-24">
          <h2 className="text-5xl sm:text-7xl md:text-[96px] lg:text-[128px] xl:text-[156px] 2xl:text-[172px] font-bold drop-shadow-lg leading-[1.1] mb-12">
            Big Flavour. <br className="hidden md:block" />
            No Fuss.
          </h2>

          <div className="ml-auto md:max-w-[60vw] text-left space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl leading-relaxed">
              We believe great food should bring people together — and nothing does it better than a sizzling wok and fresh, vibrant flavours.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl leading-relaxed">
              At <span className="font-bold">We Will Wok You</span>, we're a Milton Keynes-based street food truck serving Asian-inspired noodles cooked fresh to order, packed with bold sauces, crisp veg, and all your favourite toppings. Every dish is fast, flavour-filled, and cooked right in front of you.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl leading-relaxed">
              You'll find us popping up across Milton Keynes at local pubs, clubs, breweries, festivals, and community events - as well as catering weddings, private parties, and corporate events. Wherever we go, we bring big flavour, good vibes, and proper street food energy.
            </p>
          </div>
        </div>
      </div>

      {/* 🌶️ Decorative elements */}
      <Image src="/black-pepper.png" alt="Decorative Pepper" width={400} height={400}
        className="absolute left-[-100px] -top-[50px] md:-top-[100px] z-0 drop-shadow-2xl rotate-[100deg] w-[200px] sm:w-[200px] md:w-[250px] lg:w-[350px] 2xl:w-[400px]"
      />

      <Image src="/chilli.png" alt="Decorative Chilli" width={500} height={500}
        className="absolute md:left-[50px] bottom-[calc(28%-0px)] md:bottom-[calc(50%-100px)] z-20 drop-shadow-2xl rotate-[40deg] scale-x-[-1] w-[150px] sm:w-[200px] md:w-[250px] lg:w-[350px] 2xl:w-[400px]"
      />

      <Image src="/chopsticks.png" alt="Decorative Chopsticks" width={800} height={800}
        className="absolute -right-[120px] md:-right-[300px] top-[51%] md:top-[44%] 2xl:top-[28%] z-20 drop-shadow-2xl -rotate-[20deg] scale-x-[-1] w-[330px] sm:w-[300px] md:w-[450px] lg:w-[650px] 2xl:w-[800px]"
      />

      <Image src="/pepper.png" alt="Decorative Bell Pepper" width={500} height={500}
        className="absolute -right-20 md:-right-10 top-[130px] md:top-[30px] drop-shadow-2xl rotate-[-25deg] opacity-90 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[500px]"
      />

      <Image src="/onion.png" alt="Decorative Onion" width={400} height={400}
        className="hidden md:block absolute md:-left-[100px] -bottom-20 md:-bottom-10 z-20 drop-shadow-2xl rotate-[20deg] scale-x-[-1]  lg:w-[300px] 2xl:w-[350px]"
      />

      {/* 🥢 MENU SECTION */}
      <div className="relative z-10 bg-neutral-50 text-gray-900 scroll-mt-15" id="menu">
        <div className="max-w-[90vw] w-full mx-auto py-18 md:py-24">
          <h2 className="text-4xl sm:text-6xl md:text-[72px] lg:text-[88px] xl:text-[100px] text-center font-bold leading-[1.1] mb-10 md:mb-16">
            Fresh from the&nbsp;Wok
          </h2>
          <div className="md:py-10 pb-20 relative z-20">
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
        </div>
      </div>

      
    </section>
  );
}