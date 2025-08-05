'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('brand-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="gradient-bg text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl font-semibold mb-6">
            🌈 Create Beautiful Brand Specs in Minutes
          </h1>
          <p className="text-xl mb-8 text-purple-100">
            Generate consistent brand guidelines that developers actually use. 
            Export to Markdown, Tailwind, or Figma tokens.
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium text-lg hover-scale shadow-ambient"
          >
            Let&apos;s Do This! 🚀
          </Button>
        </div>
      </div>
    </div>
  );
} 