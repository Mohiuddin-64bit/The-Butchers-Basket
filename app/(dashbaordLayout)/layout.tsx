import Container from "@/components/Container";
import DashboardNav from "@/components/Shared/DashboardNav";
import DashboardSidebar from "@/components/Shared/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full">
        <DashboardNav />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-24 sm:w-32 md:w-40 lg:w-56 h-full overflow-hidden">
          <DashboardSidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
