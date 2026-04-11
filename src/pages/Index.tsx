import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import heroImg from "@/assets/hero-steel.jpg";
import machineryImg from "@/assets/machinery.jpg";
import qualityImg from "@/assets/quality-control.jpg";
import applicationImg from "@/assets/application-steel.jpg";
import companyImg from "@/assets/company-building.jpg";
import home1 from "../assets/home1.png"
import chaukhat1 from "../assets/chaukhat1.png"

const heroImages = [home1, chaukhat1, qualityImg];
const testingFacilities = [
  "Muffle Furnace",
  "Hydrotesting",
  "Tensile Testing",
  "Hardness Testing",
  "Flaring Test",
  "Flattening Test",
  "Reverse Bend Test",
  "Flange Test",
  "Intergranular Corrosion Test",
  "Microscopic Examination (Grain Structure Identification)",
  "Eddy current (Launching Soon)",
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right side: Animated Image Slider (on top for small screens) */}
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-2xl order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={heroImages[currentImage]}
                  alt="Steel manufacturing"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </AnimatePresence>

              {/* Slider Dots inside the image container */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentImage ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Left side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl order-2 lg:order-1"
            >
              <p className="text-secondary font-heading text-lg tracking-widest mb-4 uppercase font-bold">Welcome to</p>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading text-primary leading-tight uppercase font-black italic tracking-tighter mb-6">
                JINDAL <br /> <span className="text-secondary underline decoration-secondary/30 underline-offset-8">STEEL TUBE</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Jindal Steel Tubes are made from high-grade materials, offering superior strength, corrosion resistance, and modern aesthetics for industrial excellence.
              </p>
              <Link to="/company-profile" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-2">
                <span>Explore More</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Key Features */}
      <section className="bg-white py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase">Key Features</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: "Rust-resistant", desc: "Premium PPGI coating" },
              { title: "Strong & Durable", desc: "High-grade steel construction" },
              { title: "Smooth Finish", desc: "Attractive & modern design" },
              { title: "Low Maintenance", desc: "Long-lasting & cost-effective" },
              { title: "Versatile Use", desc: "Ideal for doors and windows" },
            ].map((feature, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold mb-2 uppercase text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="bg-accent">
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollFadeIn>
            <img src={companyImg} alt="Company building" loading="lazy" width={640} height={360} className="rounded-lg w-full h-72 object-cover shadow-lg" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-accent-foreground mb-4 uppercase">
                About O.P. JINDAL GROUP
              </h2>
              <p className="text-accent-foreground/80 leading-relaxed mb-6">
                The O. P. Jindal Group is one of India’s most respected and diversified industrial groups, known for its strong presence in steel, power, mining, infrastructure, and manufacturing. Founded by visionary industrialist Om Prakash Jindal, the group has played a significant role in India’s industrial growth and infrastructure development for several decades.
              </p>
              <p className="text-accent-foreground/80 leading-relaxed mb-6">
                From its humble beginnings, the Jindal Group has grown into a global business powerhouse with operations across multiple countries and industries, recognized for its commitment to innovation, quality manufacturing, and sustainable business practices.
              </p>
              <Link to="/company-profile" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-1">
                <span>Read More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Our Application */}
      <section className="section-padding">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollFadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase">Our Application</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                JST Industries Pvt. Ltd. is a trusted and recognized name in the stainless steel industry. We are acknowledged as one of the most reputed Stainless Steel Tubes & Pipes Coil exporters in the global market.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Technically advanced and brilliantly designed stainless tubes and pipes in various grades are tailored to meet the unique demands of every sector.
              </p>
              <Link to="/application" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-1">
                <span>Read More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <img src={applicationImg} alt="Steel applications" loading="lazy" width={640} height={360} className="rounded-lg w-full h-72 object-cover shadow-lg" />
          </ScrollFadeIn>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollFadeIn>
            <img src={machineryImg} alt="Machinery" loading="lazy" width={640} height={360} className="rounded-lg w-full h-96 object-cover shadow-lg" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase">
                Machineries and Testing Facilities
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-heading text-primary mb-4 underline decoration-primary/30 underline-offset-8">Testing Facilities</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {testingFacilities.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/infrastructure" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-1">
                <span>View Infrastructure</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Quality Assured */}
      <section className="section-padding">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollFadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase">Quality Assurance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-semibold italic">
                "Our quality mission is to successfully deliver to customers high quality, cost effective products and services on time, every time."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Jindal Steel Tube is committed to deliver superior quality products and service to our clients at all times. We believe in a process of continuous improvement and strive to meet or exceed our client expectations.
              </p>
              <Link to="/quality-control" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-1">
                <span>Read More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <img src={qualityImg} alt="Quality control" loading="lazy" width={640} height={360} className="rounded-lg w-full h-72 object-cover shadow-lg" />
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
};

export default Index;
