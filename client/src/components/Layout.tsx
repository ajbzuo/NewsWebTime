import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchOverlay from "./SearchOverlay";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <SearchOverlay />
    </div>
  );
}
