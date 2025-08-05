export interface BrandSpec {
  projectName: string;
  brandFeel: string;
  description: string;
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
  };
  geometry: {
    borderRadius: string;
    shadowStyle: string;
    buttonStyle: string;
  };
  voice: {
    ctaExample: string;
    errorTone: string;
  };
}

export interface ColorConfig {
  name: string;
  value: string;
  description?: string;
}

export interface TypographyConfig {
  headings: string;
  body: string;
  scale: string[];
}

export interface GeometryConfig {
  borderRadius: string;
  shadow: string;
  spacing: number[];
  buttonStyle: string;
}

export type ExportFormat = 'markdown' | 'tailwind' | 'css' | 'figma'; 