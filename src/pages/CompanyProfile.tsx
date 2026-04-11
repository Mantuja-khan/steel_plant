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
            <h2 className="text-3xl font-heading mb-6 uppercase">Company Profile</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Established with a vision to change the Dynamics of the Stainless Steel Tube Industry in Ghaziabad U.P India, "JST INDUSTRIES" is managed by a team of technocrats with extensive experience in steel tube industry.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold italic">
                Our state-of-the-art plant & processes are ISO : 9001 : 2000 besides the mandatory quality certifications required to cater to such elite clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Machines, Primarily Imported from Italy and China are housed in a very modern premises spread over a total area of 5,000 Sq. Mtr. The tube mill is well equipped with latest on line tube finishing equipments as per international italian standards and industrial requirement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Jst industries Private Limited, manufacturing stainless steel tubes and pipes, are committed towards continual improvement in our environmental and health & safety performance.
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
