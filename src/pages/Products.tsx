import { useParams, Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsImg from "@/assets/products-steel.jpg";
import machineryImg from "@/assets/machinery.jpg";
import qualityImg from "@/assets/quality-control.jpg";
import applicationImg from "@/assets/application-steel.jpg";

const allProducts = [
  {
    slug: "hot-rolled-steel",
    title: "Hot Rolled Steel",
    shortDesc: "High-quality HR coils and sheets for structural applications.",
    image: productsImg,
    description:
      "Hot Rolled Steel is produced at high temperatures (above 1700°F) making it easier to form and resulting in products that are easier to work with. Our HR steel products include coils, sheets, plates, and structural sections suitable for construction, shipbuilding, and heavy engineering applications.",
    specs: [
      "Thickness: 1.2mm – 25mm",
      "Width: 900mm – 2000mm",
      "Grade: IS 2062, ASTM A36, SS400, Q235",
      "Surface: Pickled & Oiled / Mill Finish",
    ],
    applications: ["Structural steel fabrication", "Pipe & tube manufacturing", "Automotive chassis", "Heavy machinery parts"],
  },
  {
    slug: "cold-rolled-steel",
    title: "Cold Rolled Steel",
    shortDesc: "Precision CR steel with superior surface finish.",
    image: machineryImg,
    description:
      "Cold Rolled Steel is processed at room temperature, resulting in a product with tighter tolerances, better surface finish, and increased strength compared to hot rolled steel. Ideal for applications where precision and appearance matter.",
    specs: [
      "Thickness: 0.15mm – 3.0mm",
      "Width: 600mm – 1500mm",
      "Grade: SPCC, DC01, DC03, DC04",
      "Surface: Bright Annealed / Skin Pass",
    ],
    applications: ["Automotive body panels", "Home appliances", "Furniture", "Electrical enclosures"],
  },
  {
    slug: "galvanized-steel",
    title: "Galvanized Steel",
    shortDesc: "Corrosion-resistant GI sheets and coils.",
    image: qualityImg,
    description:
      "Galvanized steel is coated with a layer of zinc to protect against corrosion, making it ideal for outdoor and humid environments. We supply both hot-dip galvanized and electro-galvanized steel in various forms.",
    specs: [
      "Thickness: 0.12mm – 4.0mm",
      "Width: 600mm – 1500mm",
      "Zinc Coating: 60 – 275 g/m²",
      "Grade: DX51D, SGCC, SGH340",
    ],
    applications: ["Roofing & cladding", "HVAC ducting", "Guard rails", "Agricultural equipment"],
  },
  {
    slug: "coated-steel",
    title: "Coated Steel",
    shortDesc: "Color coated and pre-painted steel products.",
    image: applicationImg,
    description:
      "Coated steel products include pre-painted galvanized steel (PPGI) and pre-painted galvalume steel (PPGL). These products combine the structural strength of steel with aesthetic appeal and enhanced corrosion resistance.",
    specs: [
      "Thickness: 0.14mm – 1.2mm",
      "Width: 600mm – 1250mm",
      "Coating: Polyester, SMP, PVDF, HDP",
      "Colors: RAL standard & custom colors",
    ],
    applications: ["Roofing & wall panels", "Sandwich panels", "Signage & displays", "Interior decoration"],
  },
];

const ProductsList = () => (
  <>
    <PageBanner title="Our Products" subtitle="Premium Steel Solutions" />
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Product Range</h2>
        <p className="section-subtitle">
          Explore our comprehensive range of iron and steel products designed to meet diverse industrial needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((p) => (
            <div key={p.slug} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
              <img src={p.image} alt={p.title} loading="lazy" width={400} height={250} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <h3 className="text-lg font-heading mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.shortDesc}</p>
                <Link to={`/products/${p.slug}`} className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-xs font-bold pb-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const ProductDetail = () => {
  const { slug } = useParams();
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h2 className="section-title">Product Not Found</h2>
        <Link to="/products" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-1 mt-4">
          <span>← Back to Products</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageBanner title={product.title} subtitle="Product Details" />
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <img src={product.image} alt={product.title} className="rounded-lg w-full h-80 object-cover shadow-lg" />
            <div>
              <h2 className="text-3xl font-heading mb-4">{product.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
              <Link to="/enquiry" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-1 mt-4">
                <span>Send Enquiry</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-heading mb-4">Specifications</h3>
              <ul className="space-y-3">
                {product.specs.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-heading mb-4">Applications</h3>
              <ul className="space-y-3">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-1">
              <span>← Back to All Products</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export { allProducts };
export { ProductsList, ProductDetail };
