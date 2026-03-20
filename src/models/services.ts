import { Map, Compass, FileCheck, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Map,
    title: "Levantamentos Topográficos Fundamentais",
    description: "Mapeamento preciso do terreno com tecnologia de ponta, fornecendo dados essenciais para projetos de construção e desenvolvimento.",
    features: ["Planialtimetria", "Levantamento Cadastral", "Curvas de nível", "Locação de terrenos"]
  },
  {
    icon: Compass,
    title: "Termografia e Inspeção com Drones",
    description: "Técnicas e tecnologias para medições precisas, análises técnicas e controle de áreas, estruturas e obras, garantindo segurança, confiabilidade dos dados e suporte à tomada de decisão.",
    features: ["Termografia com drones", "Inspeção de fachada", "Patologias estruturais", "Determinação de volumes"]
  },
  {
    icon: FileCheck,
    title: "Georreferenciamento e Regularização de Imóveis",
    description: "Assessoria completa para regularização de propriedades, realização de georreferenciamento, garantindo conformidade legal e documental de seu imóvel.",
    features: ["Retificação de área", "Unificação de lotes", "Desmembramento", "Averbação"]
  }
];
