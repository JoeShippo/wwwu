"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="p-5 py-20 md:px-20 md:py-26 bg-[#f81a19] text-white scroll-mt-15">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* LEFT COLUMN — HEADING + TEXT */}
        <div className="flex flex-col justify-center md:max-w-7/8">
          <h2 className="text-5xl md:text-[75px] 2xl:text-[100px] font-bold text-white drop-shadow-lg">
            Fancy cooking up a storm?
          </h2>
          
          <p className="text-md sm:text-lg md:text-xl 2xl:text-2xl leading-relaxed mb-5 md:mb-15">
            Got a question? Want to book us for an event?  
            Or fancy having We Will Wok You at your festival, street food market, or private party?  
            Drop us a message and we’ll get right back to you.
          </p>
          <h3 className="text-2xl md:text-4xl 2xl:text-5xl font-bold text-white drop-shadow-lg mb-4">
          Wondering where<br className="hidden 2xl:block"/> we're heading next?
        </h3>
          <Link
            href="https://app.indilocal.co.uk/map?id=188" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit inline-block bg-white text-[#f81a19] font-semibold md:text-md 2xl:text-lg px-7 py-3 transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:scale-105"
          >
            Find us on Indi Local
          </Link>
        </div>

        {/* RIGHT COLUMN — FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-[#1a1a1a] p-6 md:p-8 rounded-3xl border border-white/10 mt-10 md:mt-0"
        >
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />

          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Name<span className="text-red-400"> *</span>
            </label>
            <input
              name="name"
              required
              type="text"
              className="rounded-xl px-4 py-3 bg-black/40 border border-white/15 
                         focus:outline-none focus:border-[#f81a19] focus:ring-1 focus:ring-[#f81a19]"
              placeholder="Your name"
            />
          </div>

          {/* EMAIL + PHONE INLINE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Email<span className="text-red-400"> *</span>
              </label>
              <input
                name="email"
                required
                type="email"
                className="rounded-xl px-4 py-3 bg-black/40 border border-white/15 
                           focus:outline-none focus:border-[#f81a19] focus:ring-1 focus:ring-[#f81a19]"
                placeholder="you@example.com"
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Phone<span className="text-red-400"> *</span>
              </label>
              <input
                name="phone"
                required
                type="tel"
                className="rounded-xl px-4 py-3 bg-black/40 border border-white/15 
                           focus:outline-none focus:border-[#f81a19] focus:ring-1 focus:ring-[#f81a19]"
                placeholder="Best number to reach you"
              />
            </div>
          </div>

          {/* ENQUIRY TYPE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Enquiry Type<span className="text-red-400"> *</span>
            </label>
            <select
              name="enquiry_type"
              required
              className="rounded-xl px-4 py-3 bg-black/40 border border-white/15 
                         focus:outline-none focus:border-[#f81a19] focus:ring-1 focus:ring-[#f81a19]"
              defaultValue=""
            >
              <option value="" disabled>
                Please choose an option
              </option>
              <option value="general">General Enquiry</option>
              <option value="event-booking">Event / Private Hire</option>
              <option value="street-food-market">Street Food Market</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Something Else</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Enquiry<span className="text-red-400"> *</span>
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className="rounded-xl px-4 py-3 bg-black/40 border border-white/15 
                         focus:outline-none focus:border-[#f81a19] focus:ring-1 focus:ring-[#f81a19] resize-none"
              placeholder="Tell us about your event, dates, numbers, and anything else we should know."
            ></textarea>
          </div>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-sm text-green-400">Thank you! We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong — try again.</p>
          )}

          {/* BUTTON */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#f81a19] text-white font-semibold 
                         tracking-wide hover:bg-[#ff3432] disabled:opacity-60 disabled:cursor-not-allowed 
                         transition-all duration-200 shadow-lg hover:shadow-[#f81a19]/40"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}