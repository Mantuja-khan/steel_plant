import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Target, Eye, Award, Users } from "lucide-react";
import AboutSlider from "@/components/AboutSlider";

const values = [
  { icon: Target, title: "Our Mission", desc: "To manufacture and deliver superior quality stainless steel tubes with focus on environmental and health & safety performance." },
  { icon: Eye, title: "Our Vision", desc: "To change the dynamics of the Stainless Steel Tube Industry through technical excellence and continuous improvement." },
  { icon: Award, title: "Our Quality", desc: "Our plant & processes are ISO : 9001 : 2000 certified, ensuring international standards for elite clients." },
  { icon: Users, title: "Our Technocrats", desc: "Managed by a team of experienced technocrats with extensive expertise in the steel tube industry." },
];

const CompanyProfile = () => (
  <>
    <PageBanner title="Company Profile" subtitle="About Our Company" />

    <section className="section-padding">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollFadeIn>
          <div>
            <h2 className="text-3xl font-heading mb-6 uppercase">The D.S. Jindal Legacy</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                With a legacy spanning over 50 years, Group DS JINDAL is dedicated to driving innovation and advancing the Indian economy. Founded by Late Padam Shri Debi Sahai Jindal, the visionary behind the renowned JINDAL Group, our commitment to excellence ensures that every product exceeds industry standards.

                We specialize in a range of sectors, including innovative plumbing solutions with products like MLC Pipes and Silent PP Pipes, traditional plastic plumbing with PVC Pipes, GFRP rebars for construction, education to foster knowledge and growth, and steel tubes for industrial applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At DS JINDAL Group, quality is our top priority. We ensure that all our products meet the highest standards, providing reliable, durable, and innovative solutions. As a leader in the industry, we continue to build on our legacy, offering trusted solutions for businesses across India and beyond.Jindal Tubes, part of the DS Jindal Group, is a leader in India’s plumbing pipe industry. Built on innovation and reliability, we introduced Multi-Layer Composite Pipes to the market and are now expanding with Silent PP Drainage Pipes, setting new benchmarks in quality and performance.

                More than products, our strength lies in engineering excellence and long-term partnerships. With strong foundations and a clear vision, Jindal Tubes is shaping the future of plumbing solutions for India’s growth.
              </p>


            </div>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={200}>
          <AboutSlider />
        </ScrollFadeIn>
      </div>
    </section>

    <section className="bg-muted section-padding">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title">Our Core Values</h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {values.map((v, i) => (
            <ScrollFadeIn key={v.title} delay={i * 100}>
              <div className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-heading mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CompanyProfile;
