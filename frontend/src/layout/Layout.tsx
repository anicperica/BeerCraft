import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
  pageBg?: string;
}

export default function Layout({ children, pageBg }: LayoutProps) {
   
  return (
    <div className={`realtive ${pageBg ?? ""}`}>
      <Navbar  />
      <main className="flex-grow ">{children}</main>
      <Footer/>
    </div>
  );
}
