import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Building2, Car, Ship, Wrench, Zap, Home } from "lucide-react";

const applications = [
];

const Application = () => (
  <>
    <PageBanner title="Application" subtitle="Industry Solutions" />


    {/* Specifications Covered */}
    <section className="section-padding bg-muted/40">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title">Specifications Covered</h2>
          <p className="section-subtitle">
            Our stainless steel tubes and pipes are manufactured in compliance with international standards to ensure superior quality and performance.
          </p>
        </ScrollFadeIn>

        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          <p><strong>ASTM A 213 / A213M (2010):</strong> Seamless ferritic and austenitic alloy-steel tubes for boilers, superheaters, and heat exchangers.</p>
          <p><strong>ASTM A 249 / A249M (2010):</strong> Seamless and welded ferritic tubes for heat exchangers, condensers, and superheaters.</p>
          <p><strong>ASTM A 268 / A268M (2010):</strong> Seamless and welded ferritic and martensitic stainless steel tubing for general service.</p>
          <p><strong>ASTM A 269 (2010):</strong> Austenitic stainless steel tubing for general applications.</p>
          <p><strong>ASTM A 270 / A270M (2010):</strong> Sanitary stainless steel tubing (seamless and welded).</p>
          <p><strong>ASTM A 312 / A312M (2009):</strong> Seamless, welded, and cold-worked austenitic stainless steel pipes.</p>
          <p><strong>ASTM A 409 (2009):</strong> Welded large diameter pipes for corrosive and high-temperature environments.</p>
          <p><strong>ASTM A 778 (2001):</strong> Welded, unannealed austenitic stainless steel tubular products.</p>
          <p><strong>DIN EN 10217-7 (2005):</strong> Stainless steel tubes for pressure purposes.</p>
          <p><strong>DIN EN 10296-2 (2006):</strong> Stainless steel tubes for mechanical and engineering purposes.</p>
          <p><strong>DIN EN 10312 (2005):</strong> Tubes for water and liquid conveyance systems.</p>
        </div>
      </div>
    </section>
  </>
);

export default Application;