import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Enquiry = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", requirement: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your enquiry. We will get back to you shortly.",
    });
    setForm({ name: "", email: "", requirement: "" });
  };

  return (
    <>
      <PageBanner title="Enquiry" subtitle="Get in Touch With Us" />

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollFadeIn>
            <h2 className="section-title">Send Your Enquiry</h2>
            <p className="section-subtitle">
              Fill out the form below and our team will respond to your enquiry within 24 hours.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8 shadow-sm">
              <div>
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <Input required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email ID *</label>
                <Input required type="email" placeholder="your.email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Requirement *</label>
                <Textarea required rows={5} placeholder="Describe your requirement in detail..." value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} />
              </div>
              <Button type="submit" size="lg" className="w-full font-heading tracking-wider">
                Submit Enquiry <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
};

export default Enquiry;
