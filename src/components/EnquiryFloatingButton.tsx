import { Link } from "react-router-dom";

const EnquiryFloatingButton = () => (
  <Link
    to="/enquiry"
    className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm px-3 py-6 rounded-l-lg shadow-xl animate-blink-glow hover:bg-secondary transition-colors"
    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
  >
    Enquiry
  </Link>
);

export default EnquiryFloatingButton;
