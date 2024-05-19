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
      <section className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </section>
      <Footer />
    </>
  );
}
