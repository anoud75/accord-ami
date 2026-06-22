import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/retrofly/ErrorBoundary";
import HomePage from "./pages/HomePage";
import HealthcarePage from "./pages/HealthcarePage";
import FintechPage from "./pages/FintechPage";
import EnvironmentPage from "./pages/EnvironmentPage";
import AIInclusionPage from "./pages/AIInclusionPage";
import BrandPage from "./pages/BrandPage";
import HowIThinkPage from "./pages/HowIThinkPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <ErrorBoundary>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/healthcare" element={<HealthcarePage />} />
          <Route path="/fintech" element={<FintechPage />} />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="/ai-inclusion" element={<AIInclusionPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/how-i-think" element={<HowIThinkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </TooltipProvider>
);

export default App;
