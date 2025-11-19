"use client";
import Image from "next/image";

export default function Video() {


  return (
    <section id="about" className="relative text-white overflow-hidden">
      {/* 🔴 INTRO SECTION */}
      <div className="min-h-screen flex items-center bg-[#f81a19]">
        <div className="max-w-[90vw] w-full mx-auto h-200 bg-white rounded-4xl">

        </div>
      </div>

      {/* 🌶️ Decorative Elements */}
      <Image
        src="/black-pepper.png"
        alt="Pepper illustration"
        width={400}
        height={400}
        className="absolute left-[-100px] -top-[100px] z-0 drop-shadow-2xl rotate-[100deg] w-[200px] sm:w-[200px] md:w-[250px] lg:w-[350px] 2xl:w-[400px]"
        
      />
      <Image
        src="/chilli.png"
        alt="Pepper illustration"
        width={500}
        height={500}
        className="absolute left-[50px] bottom-[calc(50%-100px)] z-20 drop-shadow-2xl rotate-[40deg] scale-x-[-1] w-[200px] sm:w-[200px] md:w-[250px] lg:w-[350px] 2xl:w-[400px]"
      />
      <Image
        src="/chopsticks.png"
        alt="Pepper illustration"
        width={800}
        height={800}
        className="absolute -right-[300px] top-[30%] z-20 drop-shadow-2xl -rotate-[20deg] scale-x-[-1] w-[200px] sm:w-[200px] md:w-[450px] lg:w-[650px] 2xl:w-[800px]"
      />
            <Image
        src="/pepper.png"
        alt="Pepper illustration"
        width={500}
        height={500}
        className="
    absolute -right-10 top-[30px] drop-shadow-2xl rotate-[-25deg] opacity-90
    w-[200px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[500px]
  "
      />


      <Image
        src="/onion.png"
        alt="Pepper illustration"
        width={400}
        height={400}
        className="absolute -left-20 -bottom-20 z-10 drop-shadow-2xl rotate-[20deg] opacity-90 w-[200px] sm:w-[200px] md:w-[250px] lg:w-[350px] 2xl:w-[400px]"
      />
    </section>
  );
}
