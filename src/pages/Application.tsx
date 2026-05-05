import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { CheckCircle2, Home, Building2, Factory, Tractor, ShieldCheck } from "lucide-react";

const Application = () => (
  <>
    <PageBanner title="Application" subtitle="Where Our Products Excel" />

    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Roofing Sheets Applications */}
        <div className="mb-20">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-heading mb-6 uppercase text-primary border-b-2 border-primary/10 pb-4">
              Profile Roofing Sheets Applications
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Profile Roofing Sheets are suitable for a wide range of uses, including:
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollFadeIn delay={100}>
              <div className="bg-slate-50 p-6 rounded-xl border border-border h-full hover:shadow-md transition-shadow">
                <Factory className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 uppercase">Industrial Use</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Factories and manufacturing units</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Warehouses and storage facilities</li>
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={200}>
              <div className="bg-slate-50 p-6 rounded-xl border border-border h-full hover:shadow-md transition-shadow">
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 uppercase">Commercial Use</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Shopping complexes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Office buildings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Showrooms</li>
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={300}>
              <div className="bg-slate-50 p-6 rounded-xl border border-border h-full hover:shadow-md transition-shadow">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 uppercase">Residential Use</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> House roofing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Car parking sheds</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Balconies and extensions</li>
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={400}>
              <div className="bg-slate-50 p-6 rounded-xl border border-border h-full hover:shadow-md transition-shadow">
                <Tractor className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 uppercase">Agricultural Use</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Poultry farms</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Dairy sheds</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Storage barns</li>
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={500}>
              <div className="bg-slate-50 p-6 rounded-xl border border-border h-full hover:shadow-md transition-shadow">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 uppercase">Other Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Temporary structures</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Site offices</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Sheds and shelters</li>
                </ul>
              </div>
            </ScrollFadeIn>
          </div>
        </div>

        {/* Door Frame Applications */}
        <div>
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-heading mb-6 uppercase text-primary border-b-2 border-primary/10 pb-4">
              Steel Door Frames (Chaukath) Applications
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Our precision-engineered door frames are essential for modern construction across various sectors:
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollFadeIn delay={100}>
              <div className="flex gap-4 p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">Residential</h3>
                  <p className="text-muted-foreground">Used in main doors, bedrooms, bathrooms, and balconies for stability and long-lasting daily use.</p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={200}>
              <div className="flex gap-4 p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">Commercial</h3>
                  <p className="text-muted-foreground">Installed in offices, shops, and hotels to handle high traffic and support heavy-duty doors.</p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={300}>
              <div className="flex gap-4 p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">Industrial</h3>
                  <p className="text-muted-foreground">Perfectly suitable for factories and warehouses where high-strength and durable frames are mandatory.</p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={400}>
              <div className="flex gap-4 p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">Institutional</h3>
                  <p className="text-muted-foreground">Used in schools, hospitals, and public buildings for enhanced safety and low-maintenance long-term use.</p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={500} className="md:col-span-2">
              <div className="flex gap-4 p-6 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-white/20 p-3 rounded-lg h-fit">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">Security & Fire Safety</h3>
                  <p className="text-white/80">Supports reinforced and fire-rated doors for maximum protection and emergency control in critical infrastructures.</p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Application;