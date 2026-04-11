import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import machineryImg from "@/assets/machinery.jpg";
import productsImg from "@/assets/products-steel.jpg";
import qualityImg from "@/assets/quality-control.jpg";

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

const Infrastructure = () => (
  <>
    <PageBanner title="Infrastructure" subtitle="Machinery & Testing Facilities" />

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-3xl md:text-5xl font-heading mb-8 uppercase text-center">
            Machineries and Testing Facilities
          </h2>
          <h3 className="text-2xl font-heading text-primary mb-10 text-center uppercase tracking-widest">Testing Facilities</h3>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testingFacilities.map((f, i) => (
            <ScrollFadeIn key={f} delay={i * 50}>
              <div className="bg-muted p-6 rounded-lg border border-border flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{f}</h3>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>


      </div>
    </section>
  </>
);

export default Infrastructure;
