import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColibirdHome from "./pages/ColibirdHome";
import ClickToPay from "./pages/ClickToPay";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Desarrolladores from "./pages/Desarrolladores";
import Echeq from "./pages/Echeq";
import Radian from "./pages/Radian";
import Scf from "./pages/Scf";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ColibirdHome />} />
          <Route path="/click-to-pay" element={<ClickToPay />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/desarrolladores" element={<Desarrolladores />} />
          <Route path="/echeq" element={<Echeq />} />
          <Route path="/radian" element={<Radian />} />
          <Route path="/scf" element={<Scf />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
