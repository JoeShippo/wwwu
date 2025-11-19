import Link from "next/link";

export default function IndiLocal() {
  return (
    <section
      className="relative bg-cover bg-center flex z-30 scroll-mt-10"
      id="find"
      style={{ backgroundImage: "url('/wwwu-1.jpg')" }} 
    >
      <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
      <div className="relative z-10 w-full max-w-[90vw] mx-auto py-20 md:py-30 2xl:py-50">
        <h2 className="text-5xl md:text-[100px] font-bold text-white drop-shadow-lg">
          Mouth Watering?
        </h2>
        <h3 className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg mb-2">
          Here’s Where To Find&nbsp;Us
        </h3>
        <p className="text-lg sm:text-lg md:text-xl 2xl:text-2xl leading-relaxed mb-10 text-white w-2/3">
          We're always on the move across Milton Keynes - from Newport Pagnell and Wolverton to Bletchley, Olney, and the surrounding North Bucks areas. Check out our live locations on Indi&nbsp;Local to see where the wok's firing up next.
        </p>
        <Link
            href="https://app.indilocal.co.uk/map?id=188" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#f81a19] font-semibold text-lg md:text-xl px-8 py-4 transition-all duration-300 hover:bg-[#f81a19] hover:text-white hover:scale-105"
          >
            Find us on Indi Local
          </Link>
      </div>
    </section>
  );
}


