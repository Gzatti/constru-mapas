import HeroView from "@/views/HeroView";
import ServicesView from "@/views/ServicesView";
import AboutView from "@/views/AboutView";
import ContactView from "@/views/ContactView";
import FooterView from "@/views/FooterView";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroView />
      <ServicesView />
      <AboutView />
      <ContactView />
      <FooterView />
    </div>
  );
};

export default Index;
