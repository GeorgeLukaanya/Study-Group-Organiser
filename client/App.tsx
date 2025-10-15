import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContributionDashboardPage from "./pages/ContributionDashboard";
import DashboardPage from "./pages/Dashboard";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResourceCommentsPage from "./pages/ResourceComments";
import ResourceHubPage from "./pages/ResourceHub";
import ScheduleConfirmationPage from "./pages/ScheduleConfirmation";
import SmartSchedulerPage from "./pages/SmartScheduler";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/scheduler" element={<SmartSchedulerPage />} />
          <Route path="/group/:groupId" element={<ContributionDashboardPage />} />
          <Route path="/group/:groupId/resources" element={<ResourceHubPage />} />
          <Route
            path="/group/:groupId/resources/:resourceId"
            element={<ResourceCommentsPage />}
          />
          <Route
            path="/schedule/confirmation"
            element={<ScheduleConfirmationPage />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
