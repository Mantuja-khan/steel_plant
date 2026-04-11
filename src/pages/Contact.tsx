import PageBanner from "@/components/PageBanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Phone, Mail, MapPin, Clock, Globe, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Address", lines: ["Ghaziabad", "Uttar Pradesh, India"] },
  { icon: Phone, title: "Phone", lines: ["+91 98765 43210"] },
  { icon: Mail, title: "Email", lines: ["info@jindalsteeltube.com"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"] },
];

const Contact = () => (
  <>
    <PageBanner title="Contact Us" subtitle="We'd Love to Hear From You" />

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Reach out to us for any queries, quotations, or partnership opportunities.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((c, i) => (
            <ScrollFadeIn key={c.title} delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading mb-2">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm text-muted-foreground">{l}</p>
                ))}
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollFadeIn>
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="p-8 flex flex-col justify-center h-full">
              <h3 className="text-2xl font-heading mb-6">Our Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1 uppercase tracking-wide">Registered Office</p>
                    <p className="text-sm text-muted-foreground">Ghaziabad, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1 uppercase tracking-wide">Call Us</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1 uppercase tracking-wide">Email Us</p>
                    <p className="text-sm text-muted-foreground">info@jindalsteeltube.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1 uppercase tracking-wide">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground italic">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
