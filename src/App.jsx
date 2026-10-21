
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Hero from "./pages/Hero.jsx";
import Innovations from "./pages/Innovations";
import About from "./pages/About";
import Products from "./pages/Products";
import WhyChoose from "./pages/WhyChoose";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";


export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      
      <Navbar />
      <Hero />
      <Innovations />
      <About/>
      <Products/>
      <WhyChoose/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
