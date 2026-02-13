import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <div className={`min-h-screen bg-[#0a0a0f] text-white ${className}`}>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
