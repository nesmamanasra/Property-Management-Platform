import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
// import StatsSection from "../components/landing/StatsSection";
import WhySection from "../components/landing/WhySection";
import FeatureCards from "../components/landing/FeatureCards";
import Footer from "../components/landing/Footer";
import ChatSection from "../components/landing/ChatSection";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <StatsSection /> */}
      <WhySection/>
      <ChatSection/>
      <FeatureCards/>
      <Footer/>
    </>
  );
}