import Navbar from "./navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  
}

export default function Layout({ children }: LayoutProps) {
   
  return (
    <div className="relative">
      <Navbar  />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
