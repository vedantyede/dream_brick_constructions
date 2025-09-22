import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewHero from "@/components/NewHero";
import Support from "@/components/Support";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Hero /> */}\
      <NewHero />
      <WhyChooseUs />
      <About />
      <FAQ />
      <Support />
      <Contact />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}
