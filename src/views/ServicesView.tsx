import { Card } from "@/components/ui/card";
import { useServices } from "@/controllers/useServices";

const ServicesView = () => {
  const services = useServices();
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em topografia com profissionais especializados e equipamentos de última geração
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:scale-105 bg-card border-border/50 group"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-[var(--shadow-card)] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesView;
