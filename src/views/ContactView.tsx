import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useContact } from "@/controllers/useContact";
const ContactView = () => {
  const contact = useContact();
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solicite um orçamento sem compromisso e tire suas dúvidas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center space-y-6">
              <div className="inline-flex p-6 rounded-full bg-primary/10">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-muted-foreground uppercase tracking-wide">
                  Telefone
                </h3>
                <p className="font-bold text-foreground whitespace-pre-line text-center text-xl">
                  {contact.phone}
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex p-6 rounded-full bg-secondary/10">
                <Mail className="h-10 w-10 text-secondary" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-muted-foreground uppercase tracking-wide">
                  Email
                </h3>
                <p className="text-xl font-bold text-foreground break-all pt-[10px] py-[12px]">
                  {contact.email}
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex p-6 rounded-full bg-accent/10">
                <MapPin className="h-10 w-10 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-muted-foreground uppercase tracking-wide">
                  Localização
                </h3>
                <p className="text-xl font-bold text-foreground pt-[23px] py-[12px]">
                  {contact.location}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=construmapastopo@gmail.com&su=Or%C3%A7amento&body=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20servi%C3%A7os%20da%20Construmapas%2C%20quero%20fazer%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                const to = "construmapastopo@gmail.com";
                const subject = "Orçamento";
                const body =
                  "Olá, gostaria de contratar os serviços da Construmapas, quero fazer um orçamento.";

                const encodedTo = encodeURIComponent(to);
                const encodedSubject = encodeURIComponent(subject);
                const encodedBody = encodeURIComponent(body);

                const isAndroid = /Android/i.test(navigator.userAgent);
                const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

                if (isAndroid) {
                  e.preventDefault();
                  // Tenta abrir o app do Gmail diretamente (Android)
                  window.location.href = `intent://co?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}#Intent;scheme=googlegmail;package=com.google.android.gm;end`;
                }

                if (isIOS) {
                  e.preventDefault();
                  // Tenta abrir o app do Gmail diretamente (iOS)
                  window.location.href = `googlegmail://co?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
                }
              }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-12 py-6 text-lg"
              >
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactView;