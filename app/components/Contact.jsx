"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="p-5 py-20 md:px-20 md:py-26 bg-[#f81a19] text-white scroll-mt-15"
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center md:max-w-7/8">
          <h2 className="text-5xl md:text-[75px] 2xl:text-[100px] font-bold text-white drop-shadow-lg">
            Fancy cooking up a storm?
          </h2>
          
          <p className="text-md sm:text-lg md:text-xl 2xl:text-2xl leading-relaxed mb-5 md:mb-15">
            Got a question? Want to book us for an event?  
            Or fancy having We Will Wok You at your festival, street food market, or private party?  
            Drop us a message and we'll get right back to you.
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
               {/* Honeypot */}
<input
  type="text"
  name="fax"
  tabIndex="-1"
  autoComplete="off"
  aria-hidden="true"
  className="hidden"
/>

{/* NAME */}
<div className="flex flex-col gap-2">
  <label htmlFor="name" className="text-sm font-medium">
    Name<span className="text-red-400"> *</span>
  </label>
  <input
    id="name"
    name="name"
    required
    type="text"
    placeholder="Your name"
    className="rounded-xl px-4 py-3 bg-black/40 border border-white/15"
  />
</div>

{/* EMAIL */}
<div className="flex flex-col gap-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email<span className="text-red-400"> *</span>
  </label>
  <input
    id="email"
    name="email"
    required
    type="email"
    placeholder="you@example.com"
    className="rounded-xl px-4 py-3 bg-black/40 border border-white/15"
  />
</div>

{/* PHONE */}
<div className="flex flex-col gap-2">
  <label htmlFor="phone" className="text-sm font-medium">
    Phone<span className="text-red-400"> *</span>
  </label>
  <input
    id="phone"
    name="phone"
    required
    type="tel"
    placeholder="Best number to reach you"
    className="rounded-xl px-4 py-3 bg-black/40 border border-white/15"
  />
</div>

{/* ENQUIRY TYPE */}
<div className="flex flex-col gap-2">
  <label htmlFor="enquiry_type" className="text-sm font-medium">
    Enquiry Type<span className="text-red-400"> *</span>
  </label>
  <select
    id="enquiry_type"
    name="enquiry_type"
    required
    className="rounded-xl px-4 py-3 bg-black/40 border border-white/15"
  >
    <option value="">Select enquiry type</option>
    <option value="general">General Enquiry</option>
    <option value="event-booking">Event / Private Hire</option>
    <option value="street-food-market">Street Food Market</option>
    <option value="collaboration">Collaboration</option>
    <option value="other">Something Else</option>
  </select>
</div>

{/* MESSAGE */}
<div className="flex flex-col gap-2">
  <label htmlFor="message" className="text-sm font-medium">
    Message<span className="text-red-400"> *</span>
  </label>
  <textarea
    id="message"
    name="message"
    required
    rows="5"
    placeholder="Tell us about your event..."
    className="rounded-xl px-4 py-3 bg-black/40 border border-white/15 resize-none"
  />
</div>


          {/* STATUS MESSAGES */}
          {status === "success" && (
            <p className="text-green-400 text-sm">
              Thanks! Your message has been sent — we'll be in touch shortly.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ {errorMessage}
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 rounded-full bg-[#f81a19] font-semibold disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Send Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
