import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Workshops from "@/components/Workshops";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ContentProvider } from "@/contexts/ContentContext";

const Index = () => {
  return (
    <ContentProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Workshops />
        <FAQ />
        <Booking />
        <Contact />
        <Footer />
      </div>
    </ContentProvider>
  );
};

export default Index;
