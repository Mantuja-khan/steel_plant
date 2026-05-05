import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AboutSlider from "@/components/AboutSlider";
import { allProducts } from "./Products";
import heroImg from "@/assets/hero-steel.jpg";
import machineryImg from "@/assets/machinery.jpg";
import qualityImg from "@/assets/newquality.jpg";
import applicationImg from "@/assets/application-steel.jpg";
import companyImg from "@/assets/company-building.jpg";
import home2 from "@/assets/roofing1.jpeg";
import thirdimg1 from "@/assets/3rdimg1.jpeg";
import thirdimg2 from "@/assets/3rdimg2.jpeg";
import chaukhat1 from "@/assets/chaukhat1.png";
import chaukhat2 from "@/assets/chaukhat2.png";
import chaukhat3 from "@/assets/chaukhat3.png";
import chaukhat4 from "@/assets/chaukhat4.png";
import roofing1 from "@/assets/roofing1.jpg";
import roofing2 from "@/assets/roofing2.png";
import roofing3 from "@/assets/roofing3.png";
import roofing4 from "@/assets/roofing4.png";
import roofing5 from "@/assets/roofing5.jpeg";

import slider from "@/assets/background.jpeg"

const heroImages = [slider];
const sliderImages = [
  thirdimg1,
  thirdimg2,
  chaukhat1,
  chaukhat2,
  chaukhat3,
  chaukhat4,
  roofing1,
  roofing2,
  roofing3,
  roofing4,
];
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
        <div className="container mx-auto px-4 py-12 relative z-10">
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
              <p className="text-secondary font-heading text-base sm:text-lg tracking-widest mb-4 uppercase font-bold">Welcome to</p>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading text-primary leading-tight uppercase font-black italic tracking-tighter mb-6">
                JINDAL <br /> <span className="text-secondary underline decoration-secondary/30 underline-offset-8">STEEL TUBE</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                Jindal Steel Tubes are made from high-grade materials, offering superior strength, corrosion resistance, and modern aesthetics for industrial excellence.
              </p>
              <Link to="/company-profile" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-xs sm:text-sm font-bold pb-2">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
            {[
              { title: "Rust-resistant", desc: "Premium PPGI coating" },
              { title: "Strong & Durable", desc: "High-grade steel construction" },
              { title: "Smooth Finish", desc: "Attractive & modern design" },
              { title: "Low Maintenance", desc: "Long-lasting & cost-effective" },
              { title: "Versatile Use", desc: "Ideal for doors and windows" },
            ].map((feature, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow h-full">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-heading font-bold mb-1 sm:mb-2 uppercase text-[10px] sm:text-xs">{feature.title}</h3>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground">{feature.desc}</p>
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
            <AboutSlider />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-accent-foreground mb-4 uppercase">
                About D.S. Jindal Group
              </h2>
              <p className="text-accent-foreground/80 text-sm sm:text-base leading-relaxed mb-6">
                With a legacy spanning over 50 years, Group DS JINDAL is dedicated to driving innovation and advancing the Indian economy. Founded by Late Padam Shri Debi Sahai Jindal, the visionary behind the renowned JINDAL Group, our commitment to excellence ensures that every product exceeds industry standards..
              </p>
              <p className="text-accent-foreground/80 text-sm sm:text-base leading-relaxed mb-6">
                We specialize in a range of sectors, including innovative plumbing solutions with products like MLC Pipes and Silent PP Pipes, traditional plastic plumbing with PVC Pipes, GFRP rebars for construction, education to foster knowledge and growth, and steel tubes for industrial applications.

                At DS JINDAL Group, quality is our top priority. We ensure that all our products meet the highest standards, providing reliable, durable, and innovative solutions. As a leader in the industry, we continue to build on our legacy, offering trusted solutions for businesses across India and beyond.
              </p>
              <Link to="/company-profile" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-xs sm:text-sm font-bold pb-1">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4 uppercase">Our Applications</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Our high-quality steel products, including Profile Roofing Sheets and Steel Door Frames (Chaukath), are engineered for versatility and durability across multiple sectors.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                From massive industrial warehouses and factories to modern residential homes and high-traffic commercial complexes, our solutions provide the strength and aesthetic appeal required for today's advanced infrastructure.
              </p>
              <Link to="/application" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-xs sm:text-sm font-bold pb-1">
                <span>View All Applications</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <img src={applicationImg} alt="Steel applications" loading="lazy" width={640} height={360} className="rounded-lg w-full h-[400px] md:h-[500px] object-contain bg-white shadow-lg mx-auto" />
          </ScrollFadeIn>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <ScrollFadeIn>
              <img src={machineryImg} alt="Machinery" loading="lazy" width={640} height={360} className="rounded-lg w-full h-96 object-cover shadow-lg" />
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading uppercase">
                    Machineries and Testing Facilities
                  </h2>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-heading text-primary mb-4 underline decoration-primary/30 underline-offset-8">Testing Facilities</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {testingFacilities.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/infrastructure" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-xs sm:text-sm font-bold pb-1">
                  <span>View Infrastructure</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Machinery Slider */}

          <div className="overflow-hidden relative py-8 border-y border-border/50">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ width: "max-content" }}
            >
              {[...sliderImages, ...sliderImages].map((img, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={img}
                    alt={`Steel Product ${index + 1}`}
                    className="h-24 sm:h-32 w-auto object-contain transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase">Our Product Gallery</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our wide range of premium steel products through our visual showcase.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allProducts.flatMap((product, pIdx) =>
              (product.gallery || [product.image]).map((img, iIdx) => (
                <ScrollFadeIn key={`${pIdx}-${iIdx}`} delay={(iIdx % 4) * 100}>
                  <div className="group relative overflow-hidden rounded-xl aspect-square bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                    <img
                      src={img}
                      alt={`${product.title} gallery ${iIdx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider">{product.title}</h3>
                      <Link to={`/products/${product.slug}`} className="text-primary text-xs mt-2 flex items-center font-bold uppercase">
                        View Product <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))
            ).slice(0, 12)} {/* Limiting to 12 images for the home page gallery */}
          </div>

          <ScrollFadeIn delay={400}>
            <div className="text-center mt-12">
              <Link to="/gallery">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  View Full Gallery
                </Button>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4 uppercase">Quality Assurance</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 font-semibold italic">
                "Our quality mission is to successfully deliver to customers high quality, cost effective products and services on time, every time."
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Jindal Steel Tube is committed to deliver superior quality products and service to our clients at all times. We believe in a process of continuous improvement and strive to meet or exceed our client expectations.
              </p>
              <Link to="/quality-control" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-xs sm:text-sm font-bold pb-1">
                <span>Read More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <img src={qualityImg} alt="Quality control" loading="lazy" width={640} height={360} className="rounded-lg w-full h-64 md:h-80 object-contain bg-white shadow-lg mx-auto" />
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
};

export default Index;
