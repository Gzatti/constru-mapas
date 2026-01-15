import { useFeatures } from "@/controllers/useFeatures";
import topoPattern from "@/assets/topo-pattern.jpg";
const AboutView = () => {
  const features = useFeatures();
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-15">
        <img src={topoPattern} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Por Que Escolher a Construmapas?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiência e tecnologia para entregar resultados precisos em seus projetos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <div key={index} className="text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 group">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-white shadow-[var(--shadow-card)] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default AboutView;