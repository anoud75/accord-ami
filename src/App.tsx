import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/retrofly/ErrorBoundary";
import HomePage from "./pages/HomePage";
import FieldPage from "./pages/FieldPage";
import NotFound from "./pages/NotFound";

// Handles "/#section" anchor links from other routes
const HashScroller = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location]);
  return null;
};

const App = () => (
  <TooltipProvider>
    <ErrorBoundary>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <HashScroller />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<FieldPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </TooltipProvider>
);

export default App;
