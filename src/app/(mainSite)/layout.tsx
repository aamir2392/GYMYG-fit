import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div suppressHydrationWarning>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
