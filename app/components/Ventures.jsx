"use client";
import Image from "next/image";
import Link from "next/link";

export default function Ventures() {

    return (
        <section className="items-center bg-[#0d0d0d]  text-gray-900 overflow-hidden p-5 py-20 md:p-20 md:py-24">
            <div className="w-full mx-auto pb-10 relative z-20">
                <h2 className="text-5xl md:text-[75px] 2xl:text-[100px] font-bold text-white drop-shadow-lg">
                    Thought we were done?
                </h2>
                <h3 className="text-3xl 2xl:text-6xl font-bold text-white drop-shadow-lg">
                    The flavours don't stop there, we're more than noodles
                </h3>
            </div>

            <div className="w-full mx-auto relative z-20">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                    {/* 🥢 Image 1 with overlay */}
                    <div className="group w-full md:w-1/3 rounded-3xl border-[5px] border-[#f81a19] overflow-hidden bg-[#1b0b0b] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                        {/* Image */}
                        <div className="hidden md:block aspect-square overflow-hidden">
                            <Image
                                src="/placeholders/ventures/mexican.jpg"
                                alt="We Will Wok You Instagram 1"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* Text block */}
                        <div className="p-5 bg-[#f81a19]">
                            <span className="text-sm 2xl:text-md uppercase font-bold text-white">Bold, Vibrant, Full of Fire</span>
                            <h4 className="text-xl md:text-3xl font-bold text-white mt-2">
                                Mexican
                            </h4>
                            <p className="text-sm 2xl:text-base text-white/90 leading-relaxed">
                                From sizzling fajitas to loaded tacos, our dishes bring the heat. Expect smoky spices, fresh toppings, and flavours that hit harder than a mariachi band at full volume.
                            </p>
                        </div>
                    </div>

                    <div className="group w-full md:w-1/3 rounded-3xl border-[5px] border-[#f81a19] overflow-hidden bg-[#1b0b0b] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                        {/* Image */}
                        <div className=" hidden md:block aspect-square overflow-hidden">
                            <Image
                                src="/placeholders/ventures/roast.jpg"
                                alt="We Will Wok You Instagram 1"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* Text block */}
                        <div className="p-5 bg-[#f81a19]">
                            <span className="text-sm 2xl:text-md uppercase font-bold text-white">A Proper Sunday Feast</span>
                            <h4 className="text-xl md:text-3xl font-bold text-white mt-2">
                                Sunday Roast
                            </h4>
                            <p className="text-sm 2xl:text-base text-white/90 leading-relaxed">
                                Crispy roasties, tender meats, rich gravy, and all the trimmings, we're making Sundays feel like Sundays. Slow-cooked, hearty, and always worth gathering around the table for.
                            </p>
                        </div>
                    </div>


                    <div className="group w-full md:w-1/3 rounded-3xl border-[5px] border-[#f81a19] overflow-hidden bg-[#1b0b0b] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                        {/* Image */}
                        <div className="hidden md:block aspect-square overflow-hidden">
                            <Image
                                src="/placeholders/ventures/brunch.jpg"
                                alt="We Will Wok You Instagram 1"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out  group-hover:scale-105"
                            />
                        </div>

                        {/* Text block */}
                        <div className="p-5 bg-[#f81a19]">
                            <span className="text-sm 2xl:text-md uppercase font-bold text-white">Full English: The Right Way</span>
                            <h4 className="text-xl md:text-3xl font-bold text-white mt-2">
                                Brunch
                            </h4>
                            <p className="text-sm 2xl:text-base text-white/90 leading-relaxed">
                                Crispy bacon, sizzling sausages, soft baps, runny eggs, and all the breakfast bits that make mornings worth getting up for. No fuss — just proper, hearty brunch done right.
                            </p>
                        </div>
                    </div>

                    <div className="group w-full md:w-1/3 rounded-3xl border-[5px] border-[#f81a19] overflow-hidden bg-[#1b0b0b] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                        {/* Image */}
                        <div className="hidden md:block aspect-square overflow-hidden">
                            <Image
                                src="/placeholders/ventures/home.jpg"
                                alt="We Will Wok You Instagram 1"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out  group-hover:scale-105"
                            />
                        </div>

                        {/* Text block */}
                        <div className="p-5 bg-[#f81a19]">
                            <span className="text-sm 2xl:text-md uppercase font-bold text-white">Home on a plate</span>
                            <h4 className="text-xl md:text-3xl font-bold text-white mt-2">
                                Home Comforts
                            </h4>
                            <p className="text-sm 2xl:text-base text-white/90 leading-relaxed">
                                Think fluffy jacket potatoes, rich shepherd’s pie, and cheesy lasagne — the kind of warm, homely food that always hits the spot. Simple, satisfying, and cooked with love.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
