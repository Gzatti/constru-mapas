import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileCheck, Maximize, Grid3X3, Scissors, CheckCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Georreferenciamento = () => {
  const services = [
    {
      icon: Maximize,
      title: "Retificação de Área",
      description: "Correção de medidas e confrontações de imóveis junto ao Cartório de Registro de Imóveis. Essencial quando há divergência entre a área real e a registrada."
    },
    {
      icon: Grid3X3,
      title: "Unificação de Lotes",
      description: "Fusão de dois ou mais lotes contíguos em uma única matrícula. Procedimento necessário para viabilizar projetos maiores ou regularizar ocupações."
    },
    {
      icon: Scissors,
      title: "Desmembramento",
      description: "Divisão de um imóvel em lotes menores, cada um com matrícula própria. Ideal para loteamentos, heranças ou comercialização de partes do terreno."
    },
    {
      icon: FileCheck,
      title: "Averbação",
      description: "Registro de alterações na matrícula do imóvel como construções, demolições ou mudança de uso. Garante a atualização documental junto ao cartório."
    }
  ];

  const benefits = [
    "Profissionais habilitados pelo INCRA",
    "Documentação completa para cartório",
    "Acompanhamento de todo processo",
    "Memorial descritivo técnico",
    "Plantas e mapas georreferenciados",
    "Conformidade com Lei 10.267/2001"
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
          <div className="max-w-3xl flex items-center gap-4">
            <Scale className="h-12 w-12 flex-shrink-0" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Georreferenciamento e Regularização
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Assessoria completa para regularização de propriedades, garantindo conformidade legal e documental do seu imóvel.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nossos Serviços de Regularização
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
            Precisa regularizar seu imóvel?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para solicitar um orçamento personalizado para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/554591356655?text=Ol%C3%A1%20Fernando,%20gostaria%20de%20um%20or%C3%A7amento%20para%20georreferenciamento!" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                Falar com Fernando
              </Button>
            </a>
            <a href="https://wa.me/5545988155411?text=Ol%C3%A1%20Gabriel,%20gostaria%20de%20um%20or%C3%A7amento%20para%20georreferenciamento!" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
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

export default Georreferenciamento;