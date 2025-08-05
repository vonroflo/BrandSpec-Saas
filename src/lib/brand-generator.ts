import { BrandSpec } from './types';

export function generateMarkdown(spec: BrandSpec): string {
  return `# 🌈 BrandSpec — Project: ${spec.projectName}

## 🎨 Colors
- **Primary:** ${spec.colors.primary}
- **Accent:** ${spec.colors.accent}
- **Background:** ${spec.colors.background}
- **Surface:** ${spec.colors.surface}
- **Text:** ${spec.colors.text}

## 🔤 Typography
- **Headings:** ${spec.typography.headingFont}, 600
- **Body:** ${spec.typography.bodyFont}, 400
- **Scale:** xs, sm, base, lg, xl, 2xl, 3xl

## 🧱 UI Geometry
- **Border Radius:** ${spec.geometry.borderRadius}
- **Shadow:** ${spec.geometry.shadowStyle}
- **Button Style:** ${spec.geometry.buttonStyle}
- **Spacing:** 4, 8, 16, 24, 32, 48

## 🧠 Voice & Tone
- **Brand Feel:** ${spec.brandFeel}
- **CTA Example:** "${spec.voice.ctaExample}" instead of "Submit"
- **Error Copy:** ${spec.voice.errorTone}

## 📝 Project Description
${spec.description}

## 🧩 Component Guidelines
- **Buttons:** ${spec.geometry.buttonStyle} shape, hover scale effect
- **Cards:** Shadow on hover, soft edges
- **Inputs:** Rounded corners, soft focus ring
- **Navigation:** Clean, minimal structure

## 🚀 Implementation Notes
- Use consistent spacing scale
- Implement hover states for interactive elements
- Ensure accessibility with proper contrast ratios
- Consider mobile-first responsive design

---
*Generated with BrandSpec - Create beautiful brand specifications in minutes*`;
}

export function generateTailwindConfig(spec: BrandSpec): string {
  const borderRadiusMap: Record<string, string> = {
    'sm': '0.25rem',
    'md': '0.5rem',
    'lg': '0.75rem',
    'xl': '2rem',
    'full': '9999px'
  };

  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '${spec.colors.primary}',
        accent: '${spec.colors.accent}',
        background: '${spec.colors.background}',
        surface: '${spec.colors.surface}',
        text: '${spec.colors.text}',
      },
      fontFamily: {
        heading: [${spec.typography.headingFont.split(',').map(f => `'${f.trim()}'`).join(', ')}],
        body: [${spec.typography.bodyFont.split(',').map(f => `'${f.trim()}'`).join(', ')}],
      },
      borderRadius: {
        'brand': '${borderRadiusMap[spec.geometry.borderRadius] || '0.5rem'}',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem'
      },
      boxShadow: {
        'brand': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}`;
}

export function generateCSSVariables(spec: BrandSpec): string {
  return `:root {
  /* Colors */
  --color-primary: ${spec.colors.primary};
  --color-accent: ${spec.colors.accent};
  --color-background: ${spec.colors.background};
  --color-surface: ${spec.colors.surface};
  --color-text: ${spec.colors.text};
  
  /* Typography */
  --font-heading: ${spec.typography.headingFont};
  --font-body: ${spec.typography.bodyFont};
  
  /* Spacing */
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  --spacing-16: 4rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  --spacing-48: 12rem;
  
  /* Border Radius */
  --radius-brand: ${spec.geometry.borderRadius === 'xl' ? '2rem' : '0.5rem'};
  
  /* Shadows */
  --shadow-brand: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Utility Classes */
.text-primary { color: var(--color-primary); }
.text-accent { color: var(--color-accent); }
.bg-primary { background-color: var(--color-primary); }
.bg-accent { background-color: var(--color-accent); }
.bg-surface { background-color: var(--color-surface); }
.font-heading { font-family: var(--font-heading); }
.font-body { font-family: var(--font-body); }
.rounded-brand { border-radius: var(--radius-brand); }
.shadow-brand { box-shadow: var(--shadow-brand); }`;
}

export function generateFigmaTokens(spec: BrandSpec): string {
  return JSON.stringify({
    colors: {
      primary: { value: spec.colors.primary, type: "color" },
      accent: { value: spec.colors.accent, type: "color" },
      background: { value: spec.colors.background, type: "color" },
      surface: { value: spec.colors.surface, type: "color" },
      text: { value: spec.colors.text, type: "color" }
    },
    typography: {
      heading: {
        fontFamily: { value: spec.typography.headingFont, type: "fontFamilies" },
        fontWeight: { value: 600, type: "fontWeights" }
      },
      body: {
        fontFamily: { value: spec.typography.bodyFont, type: "fontFamilies" },
        fontWeight: { value: 400, type: "fontWeights" }
      }
    },
    spacing: {
      4: { value: "16px", type: "spacing" },
      8: { value: "32px", type: "spacing" },
      16: { value: "64px", type: "spacing" },
      24: { value: "96px", type: "spacing" },
      32: { value: "128px", type: "spacing" },
      48: { value: "192px", type: "spacing" }
    },
    borderRadius: {
      brand: { value: spec.geometry.borderRadius === 'xl' ? "32px" : "8px", type: "borderRadius" }
    }
  }, null, 2);
} 