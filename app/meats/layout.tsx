import Footer from "@/components/Shared/Footer";
import { Navbar } from "@/components/Shared/navbar";

export default function MeatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl pt-16 px-6">{children}</div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}
