
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Partners from "./pages/Partners";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import AboutHeroSection from "./pages/AboutUspage/AboutHeroSection";
import AboutTimeLineSection from "./pages/AboutUspage/AboutTimeLineSection";
import ClientsSection from "./components/ClientsSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={
              <>
                <Header />
                <AboutHeroSection />
                <AboutTimeLineSection />
                <ClientsSection />
                <Footer />
              </>} />
            <Route path="/career" element={
              <>
                <Header />
                <Career />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/clients" element={
              <>
                <Header />
                <Clients />
                <Footer />
              </>
            } />
            <Route path="/partners" element={
              <>
                <Header />
                <Partners />
                <Footer />
              </>
            } />
            <Route path="/solutions" element={
              <>
                <Header />
                <Solutions />
                <Footer />
              </>
            } />
            <Route path="/products" element={
              <>
                <Header />
                <Products />
                <Footer />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Header />
                <Blog />
                <Footer />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
