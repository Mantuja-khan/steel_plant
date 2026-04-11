import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Target, Eye, Award, Users } from "lucide-react";
import companyImg from "@/assets/company-building.jpg";

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
            <h2 className="text-3xl font-heading mb-6 uppercase">The O.P. Jindal Legacy</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The O. P. Jindal Group is one of India’s most respected and diversified industrial groups, known for its strong presence in steel, power, mining, infrastructure, and manufacturing. Founded by visionary industrialist Om Prakash Jindal, the group has played a significant role in India’s industrial growth and infrastructure development for several decades.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From its humble beginnings, the Jindal Group has grown into a global business powerhouse with operations across multiple countries and industries. The group’s companies are recognized for their commitment to innovation, quality manufacturing, and sustainable business practices.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-primary mt-8">
                <h3 className="text-xl font-heading mb-4 text-primary uppercase font-bold">Leading Companies</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="font-bold text-primary min-w-[100px]">JSW Group</span>
                    <span className="text-sm text-muted-foreground">A major player in steel, energy, cement, and infrastructure.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-bold text-primary min-w-[100px]">JSPL</span>
                    <span className="text-sm text-muted-foreground">Known for large-scale steel production and power generation.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-bold text-primary min-w-[100px]">Stainless</span>
                    <span className="text-sm text-muted-foreground">One of the largest stainless steel producers in India.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-bold text-primary min-w-[100px]">Jindal SAW</span>
                    <span className="text-sm text-muted-foreground">Global manufacturer of pipes and tubular products for energy and water transportation.</span>
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed italic border-t pt-6">
                Guided by the core values of integrity, innovation, and excellence, the Jindal Group continues to contribute to nation-building through advanced manufacturing, infrastructure development, and employment generation.
              </p>
            </div>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={200}>
          <img src={companyImg} alt="Company headquarters" loading="lazy" width={640} height={400} className="rounded-lg w-full h-80 object-cover shadow-lg" />
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
