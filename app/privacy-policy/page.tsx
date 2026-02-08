"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {

      const router = useRouter();

  return (
    <main className="bg-white text-[#1a1a1a]">
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
                <button
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#f81a19] transition cursor-pointer"
        >
          <span className="text-xl leading-none">←</span>
          Back
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last updated: February 2026
        </p>

        <div className="space-y-8 leading-relaxed text-base md:text-lg">
          <p>
            At <strong>We Will Wok You</strong>, we respect your privacy and are
            committed to protecting any personal data you share with us.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              What data we collect
            </h2>
            <p>
              We only collect personal information that you choose to provide
              via our contact form. This may include:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Details about your enquiry</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How we collect your data
            </h2>
            <p>
              Data is collected when you submit our contact form. Form
              submissions are securely sent via <strong>Resend</strong>, an
              email delivery service, so we can receive and respond to your
              enquiry.
            </p>
            <p className="mt-3">
              We do <strong>not</strong> use cookies, tracking tools, or
              analytics on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How we use your data
            </h2>
            <p>
              We use your personal information solely to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Respond to enquiries</li>
              <li>
                Communicate with you about bookings, events, or requests you
                have made
              </li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your data with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How long we keep your data
            </h2>
            <p>
              We only retain personal data for as long as necessary to respond
              to your enquiry or manage any follow-up communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Social media links
            </h2>
            <p>
              Our website includes links to our social media profiles on{" "}
              <strong>Facebook</strong> and <strong>Instagram</strong>. If you
              click these links, you will be taken to third-party platforms
              which operate under their own privacy policies. We are not
              responsible for how those platforms handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Your rights
            </h2>
            <p>
              Under UK data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Ask for your data to be corrected or deleted</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact us
            </h2>
            <p>
              If you have any questions about this privacy policy or how your
              data is handled, please contact us at:
            </p>
            <p className="mt-3 font-medium">
              Email:{" "}
              <a
                href="mailto:web@wewillwokyou.co.uk"
                className="text-[#f81a19] underline hover:no-underline"
              >
                web@wewillwokyou.co.uk
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
