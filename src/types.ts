export type CompatibilityItem = {
  title: string;
  url: string;
  icon?: string; // Solo algunos elementos tendrán icono
  image?: string; // Añade image para los elementos con imagen
};

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}
