import { Award, Users, Clock, Target, LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Award,
    title: "Qualidade Certificada",
    description: "Profissionais qualificados e equipamentos calibrados"
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Engenheiros e topógrafos experientes"
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Prazos cumpridos com eficiência"
  },
  {
    icon: Target,
    title: "Precisão",
    description: "Resultados confiáveis e exatos"
  }
];
