export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-end z-30"
      style={{ backgroundImage: "url('/hero.jpg')" }} // Add your image in /public/
    >
      <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
      <div className="relative z-10 w-full md:px-15 mx-auto pb-20 md:pb-10">
        <h1 className="text-center md:text-left text-7xl sm:text-6xl md:text-[96px] lg:text-[128px] xl:text-[160px] 2xl:text-[192px] font-bold text-white drop-shadow-lg">
          Fast. Fresh.<br/>Wok’n Delicious.
        </h1>
      </div>
    </section>
  );
}
