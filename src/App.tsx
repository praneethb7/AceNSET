import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudyMaterials from "./pages/StudyMaterials";
import ExamDates from "./pages/ExamDates";
import Cutoffs from "./pages/Cutoffs";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from './context/ThemeContext';

// Set the document title
document.title = "Ace NSET - One Stop Destination";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/study-materials" element={<StudyMaterials />} />
            <Route path="/exam-dates" element={<ExamDates />} />
            <Route path="/cutoffs" element={<Cutoffs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
    <Analytics />
  </QueryClientProvider>
);

export default App;
