import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Instagram from "./components/InstagramPlug";
import IndiLocal from "./components/IndiLocal";
import IntroAndMenu from "./components/IntroMenuCombined-v2";
import Ventures from "./components/Ventures";
import Footer from "./components/Footer";
import ContactSection from "./components/Contact";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntroAndMenu />
      <IndiLocal />
      {/* <Instagram /> */}
      <ContactSection />
      {/* <Ventures /> */}
      <Footer />
      {/* <Video /> */}
    </main>
  );
}
