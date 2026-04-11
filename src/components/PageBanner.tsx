import heroImg from "@/assets/hero-steel.jpg";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => (
  <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 hero-gradient" />
    <div className="relative text-center px-4">
      <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-primary-foreground/80 text-lg">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageBanner;
