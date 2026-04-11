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

const heroImages = [heroImg, machineryImg, qualityImg, applicationImg];

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
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt="Steel manufacturing"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-accent font-heading text-lg tracking-widest mb-2 uppercase">Welcome to</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading text-primary-foreground leading-tight uppercase font-bold">
              Jindal Steel Tube
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-lg">
              We are the premier manufacturers of high-quality stainless steel tubes and pipes, serving industries worldwide.
            </p>
            <Link to="/company-profile" className="inline-flex items-center group relative text-accent font-heading tracking-wider uppercase text-sm font-bold mt-6 pb-1">
              <span>Explore More</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentImage ? "bg-accent w-8" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
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
                About JST INDUSTRIES
              </h2>
              <p className="text-accent-foreground/80 leading-relaxed mb-6">
                Established with a vision to change the Dynamics of the Stainless Steel Tube Industry in Ghaziabad U.P India, "JST INDUSTRIES" is managed by a team of technocrats with extensive experience in steel tube industry.
              </p>
              <p className="text-accent-foreground/80 leading-relaxed mb-6 italic">
                Our state-of-the-art plant & processes are <strong>ISO : 9001 : 2000</strong> besides the mandatory quality certifications required to cater to such elite clients.
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
