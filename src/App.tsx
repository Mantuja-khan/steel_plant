import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import CompanyProfile from "./pages/CompanyProfile";
import Infrastructure from "./pages/Infrastructure";
import Application from "./pages/Application";
import QualityControl from "./pages/QualityControl";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/application" element={<Application />} />
            <Route path="/quality-control" element={<QualityControl />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />


          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
