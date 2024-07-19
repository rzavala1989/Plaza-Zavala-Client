import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
    return (
        <div className="bg-white">
            <Navbar/>
            <HeroSection/>
            <FeaturesSection/>
            <CTASection/>
            <Footer/>
        </div>
    );
}
