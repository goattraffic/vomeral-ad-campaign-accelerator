import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundsPolicy from "./pages/RefundsPolicy";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CMPBanner from "./components/CMPBanner";

// UTM Tracker Component
const UTMTracker = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    
    utmParams.forEach(param => {
      const value = params.get(param);
      if (value) {
        sessionStorage.setItem(param, value);
      }
    });
  }, []);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <UTMTracker />
        <Header />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/uslugi" element={<Services />} />
            <Route path="/uslugi/:slug" element={<ServiceDetail />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/polityka-cookies" element={<CookiePolicy />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="/regulamin" element={<Terms />} />
            <Route path="/polityka-zwrotow" element={<RefundsPolicy />} />
            <Route path="/dziekujemy" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CMPBanner />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
