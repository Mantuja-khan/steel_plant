import { useParams, Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import { ArrowRight } from "lucide-react";
import chaukhat1 from "@/assets/chaukhat1.png";
import chaukhat2 from "@/assets/chaukhat2.png";
import chaukhat3 from "@/assets/chaukhat3.png";
import chaukhat4 from "@/assets/chaukhat4.png";
import roofingSheets from "@/assets/roofing-sheets.png";
import chaukathGalvanised from "@/assets/3rdimg1.jpeg";
import steelDetail from "@/assets/steel-detail.png";
import img3rd_2 from "@/assets/3rdimg2.jpeg";
import img3rd_4 from "@/assets/3rdimg4.jpeg";
import { useState, useEffect } from "react";
import roofing1 from "../assets/roofing1.jpg"
import roofing2 from "../assets/roofing2.png"
import roofing3 from "../assets/roofing3.png"
import roofing4 from "../assets/roofing4.png"
const allProducts = [
  {
    slug: "colour-coated-chaukath",
    title: "Colour Coated Chaukath",
    shortDesc: "Vibrant and durable pre-painted steel door frames.",
    image: chaukhat1,
    gallery: [chaukhat1, chaukhat2, chaukhat3, chaukhat4],
    description:
      "Our Colour Coated Chaukath segments are manufactured using high-grade pre-painted steel, providing an excellent aesthetic appeal along with superior protection against environmental elements. These frames are available in a variety of RAL shades to match your architectural vision.",
    specs: [
      "Material: PPGI / PPGL",
      "Coating Thickness: 20-25 Microns",
      "Colors: Multiple RAL Shades",
      "Base Metal: Cold Rolled / Galvanized",
    ],
    applications: ["Designer Homes", "Office Interiors", "Retail Outlets"],
  },
  {
    slug: "colour-coated-roofing-sheets",
    title: "Colour Coated Roofing Sheets",
    shortDesc: "High-strength, aesthetic roofing solutions.",
    image: roofing1,
    gallery: [roofing1, roofing2, roofing3, roofing4],
    description:
      "Premium Colour Coated Roofing Sheets designed for longevity and style. These sheets offer excellent thermal insulation and are treated with multiple layers of protective coatings to prevent chipping and fading even in extreme weather conditions.",
    specs: [
      "Thickness: 0.35mm - 0.80mm",
      "Profile: Corrugated / Trapezoidal",
      "Zinc Coating: 90 - 120 GSM",
      "Paint Type: Regular Modified Polyester (RMP)",
    ],
    applications: ["Industrial Sheds", "Residential Roofing", "Warehouses"],
  },
  {
    slug: "galvanised-plain-skin-pass-chaukath",
    title: "GALVANISED PLAIN SKIN PASS CHAUKAT",
    shortDesc: "Precision-engineered plain galvanized steel frames.",
    image: chaukathGalvanised,
    gallery: [chaukathGalvanised, img3rd_2, img3rd_4],
    description:
      "The Galvanised Plain Skin Pass Chaukath is known for its high precision and smooth surface finish. The skin pass process ensures improved flatness and superior paint adhesion, making it the ideal choice for high-end construction requirements where quality is paramount.",
    specs: [
      "Material: Galvanized Plain (GP)",
      "Process: Skin Pass Mill Finished",
      "Surface: Extra Smooth / Zero Spangle",
      "Durability: High Corrosion Resistance",
    ],
    applications: ["Luxury Housing", "Public Infrastructure", "Commercial Complexes"],
  },
];

const ProductsList = () => (
  <>
    <PageBanner title="Our Products" subtitle="Premium Steel Solutions" />
    <section className="section-padding">
      <div className="container mx-auto px-4">
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
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (!product || !product.gallery || product.gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % (product.gallery?.length || 1));
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [product]);

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

  const displayImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <>
      <PageBanner title={product.title} subtitle="Product Details" />
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center group relative text-primary font-heading tracking-wider uppercase text-sm font-bold pb-1">
              <span>← Back to All Products</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative md:h-[500px] flex items-center justify-center">
              <img
                src={displayImages[currentImgIndex]}
                alt={`${product.title} - view ${currentImgIndex + 1}`}
                className="max-w-full max-h-full object-contain transition-none" // just the image
              />
            </div>
            <div className="py-4">
              <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase text-primary font-black italic">{product.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{product.description}</p>

              <div className="mt-8">
                <h3 className="text-xl font-heading mb-4 text-primary uppercase font-bold border-b border-primary/20 pb-2">Specifications</h3>
                <ul className="grid grid-cols-1 gap-4">
                  {product.specs.map((s) => (
                    <li key={s} className="flex items-start gap-4 text-sm md:text-base">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="font-medium text-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export { allProducts };
export { ProductsList, ProductDetail };
