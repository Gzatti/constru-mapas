import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Thermometer, Building, AlertTriangle, BarChart3, CheckCircle, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const EngenhariaInspecao = () => {
  const services = [
    {
      icon: Thermometer,
      title: "Termografia com Drones",
      description: "Inspeção térmica aérea para identificação de anomalias em painéis solares, sistemas elétricos e isolamentos térmicos. Detecção precoce de falhas e manutenção preventiva."
    },
    {
      icon: Building,
      title: "Inspeção de Fachadas",
      description: "Análise detalhada de fachadas de edificações utilizando drones e câmeras de alta resolução. Identificação de trincas, infiltrações e desplacamentos sem necessidade de andaimes."
    },
    {
      icon: AlertTriangle,
      title: "Patologias Estruturais",
      description: "Diagnóstico de problemas estruturais como fissuras, corrosão de armaduras e deformações. Laudos técnicos completos para tomada de decisão em reparos e reforços."
    },
    {
      icon: BarChart3,
      title: "Determinação de Volumes",
      description: "Cálculo preciso de volumes de corte e aterro, pilhas de materiais e reservatórios. Ideal para mineração, construção civil e controle de estoques."
    }
  ];

  const benefits = [
    "Tecnologia de drones de última geração",
    "Inspeções seguras sem exposição de trabalhadores",
    "Relatórios com imagens em alta resolução",
    "Análise termográfica certificada",
    "Modelos 3D e nuvem de pontos",
    "Suporte técnico especializado"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div className="max-w-3xl mx-auto flex items-center gap-4 text-center">
            <Compass className="h-12 w-12 flex-shrink-0 -ml-2" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Engenharia, Inspeção e Volumetria
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Técnicas e tecnologias para medições precisas, análises técnicas e controle de áreas, estruturas e obras.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nossos Serviços de Inspeção
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Por que escolher a ConstruMapas?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Precisa de inspeção técnica ou volumetria?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para solicitar um orçamento personalizado para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/554591356655?text=Ol%C3%A1%20Fernando,%20gostaria%20de%20um%20or%C3%A7amento%20para%20inspe%C3%A7%C3%A3o%20t%C3%A9cnica!" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-sidebar-ring hover:bg-sidebar-ring/90 text-white">
                Falar com Fernando
              </Button>
            </a>
            <a href="https://wa.me/5545988155411?text=Ol%C3%A1%20Gabriel,%20gostaria%20de%20um%20or%C3%A7amento%20para%20inspe%C3%A7%C3%A3o%20t%C3%A9cnica!" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white">
                Falar com Gabriel
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <div className="py-8 text-center border-t border-border">
        <Link to="/" className="text-primary hover:underline">
          ← Voltar para página inicial
        </Link>
      </div>
    </div>
  );
};

export default EngenhariaInspecao;