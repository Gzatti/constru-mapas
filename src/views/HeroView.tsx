import { Button } from "@/components/ui/button";
import { Phone, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-topography.jpg";
import logoBranca from "@/assets/logo-branca.png";

const HeroView = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Topographic Survey" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/80" />
      </div>
      
      {/* Topographic Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img src={logoBranca} alt="ConstruMapas Logo" className="h-32 w-32 md:h-56 md:w-56 mx-auto" />
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">ConstruMapas</h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light">Topografia com tecnologia de ponta</p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Precisão e qualidade em levantamentos topográficos, georreferenciamento e regularização de propriedades.
          </p>
          
          {/* Consultores */}
          <div className="flex flex-col sm:flex-row justify-center items-center pt-6 gap-[32px] pb-4">
            <a href="https://wa.me/554591356655?text=Ol%C3%A1%20Fernando,%20gostaria%20de%20um%20or%C3%A7amento%20da%20ConstruMapas!%20" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-[200px] sm:w-auto text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center bg-sidebar-ring">
                <Phone className="mr-2 h-5 w-5" />
                Consultor Fernando  
              </Button>
            </a>
            <a href="https://wa.me/5545988155411?text=Ol%C3%A1%20Gabriel,%20gostaria%20de%20um%20or%C3%A7amento%20da%20ConstruMapas!%20" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-[200px] sm:w-auto backdrop-blur-sm border-white/30 text-white hover:bg-secondary-hover hover:text-white transition-all duration-300 hover:scale-105 bg-secondary">
                <Phone className="mr-2 h-5 w-5" />
                Consultor Gabriel 
              </Button>
            </a>
          </div>
          
          {/* Redes Sociais */}
          <div className="flex flex-wrap justify-center items-center gap-4 pb-8 sm:pb-0">
            <a href="https://www.instagram.com/construmapas/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-[140px] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-[#1B4D6B] hover:from-[#E1306C] hover:to-[#F77737] hover:bg-gradient-to-r">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
            </a>
            <a href="https://www.facebook.com/construmapas" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-[140px] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-[#2A6B5A] hover:from-[#1877F2] hover:to-[#4267B2] hover:bg-gradient-to-r">
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </Button>
            </a>
            <a href="https://www.youtube.com/@construmapas" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-[140px] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-[#3A8A4A] hover:from-[#FF0000] hover:to-[#CC0000] hover:bg-gradient-to-r">
                <Youtube className="mr-2 h-5 w-5" />
                Youtube
              </Button>
            </a>
            <a href="https://www.linkedin.com/company/construmapas" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-[140px] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-[#4AA83A] hover:from-[#0A66C2] hover:to-[#004182] hover:bg-gradient-to-r">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-white/50" />
        </div>
      </div>
    </section>;
};
export default HeroView;