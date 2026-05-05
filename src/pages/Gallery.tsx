import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { allProducts } from "./Products";
import { ArrowRight, X, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<{ img: string; title: string } | null>(null);

  const galleryImages = allProducts.flatMap((product, pIdx) =>
    (product.gallery || [product.image]).map((img, iIdx) => ({
      img,
      productTitle: product.title,
      productSlug: product.slug,
      id: `${pIdx}-${iIdx}`
    }))
  );

  return (
    <>
      <PageBanner title="Our Gallery" subtitle="A visual showcase of our steel excellence" />
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <ScrollFadeIn key={item.id} delay={(index % 4) * 100}>
                <div
                  className="group relative overflow-hidden rounded-xl aspect-square bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-border cursor-pointer"
                  onClick={() => setSelectedImg({ img: item.img, title: item.productTitle })}
                >
                  <img
                    src={item.img}
                    alt={`${item.productTitle} showcase`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-primary-foreground/60 text-[10px] uppercase tracking-widest mb-1">Product Showcase</span>
                    <h3 className="text-white font-heading font-bold text-base uppercase tracking-wider">{item.productTitle}</h3>
                    <Link
                      to={`/products/${item.productSlug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-primary text-xs mt-3 flex items-center font-black uppercase italic group/link w-fit"
                    >
                      <span className="border-b border-primary/0 group-hover/link:border-primary transition-all">View Details</span>
                      <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.img}
                alt={selectedImg.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white font-heading text-xl md:text-2xl uppercase tracking-tighter italic font-black italic">
                  {selectedImg.title}
                </h3>
                <div className="w-12 h-1 bg-primary mx-auto mt-2"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
