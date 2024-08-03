import { Metadata } from "next";
import DashboardNav from "@/components/dashboard/dashboard-nav";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: LayoutProps) {
  return (
    <section className="mx-auto flex h-screen w-full max-w-[1440px] flex-col">
      <DashboardNav></DashboardNav>
      {children}
    </section>
  );
}
