import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { CheckCircle } from "lucide-react";
import qualityImg from "@/assets/newquality.jpg";


const QualityControl = () => (
  <>
    <PageBanner title="Quality Control" subtitle="Our Commitment to Excellence" />

    <section className="section-padding">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollFadeIn>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase">Quality Assurance</h2>

            <p className="text-xl font-semibold italic text-primary border-l-4 border-primary pl-4">
              "Our quality mission is to successfully deliver to customers high quality, cost effective products and services on time, every time."
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <strong>Jindal Steel Tube</strong> is committed to deliver superior quality products and service to our clients at all times. We believe in a process of continuous improvement and strive to meet or exceed our client expectations.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We have established and implemented the quality management system not only to secure third party approvals but to use the systems efficiently to remove any flaws in our business process while working closely with our clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our internal staff and vendors are motivated to focus on 100% client satisfaction through the proper understanding of the client’s project requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our robust Quality, Environmental, Health and Safety systems which we believe will positively impact on our client’s business processes.
            </p>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={200}>
          <img src={qualityImg} alt="Quality control testing" loading="lazy" width={640} height={400} className="rounded-lg w-full h-[500px] object-contain bg-white shadow-lg" />
        </ScrollFadeIn>
      </div>
    </section>
  </>
);

export default QualityControl;
