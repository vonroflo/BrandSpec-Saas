import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Generate complete brand specs in under 5 minutes. No more endless design meetings.'
  },
  {
    icon: '🛠️',
    title: 'Developer-First',
    description: 'Export to Tailwind config, CSS variables, or copy-paste markdown. Built for modern workflows.'
  },
  {
    icon: '🎨',
    title: 'Design Consistency',
    description: 'Ensure your brand looks cohesive across all touchpoints with structured guidelines.'
  }
];

export function FeaturesGrid() {
  return (
    <div className="py-16 bg-surface">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl text-center mb-12">
          Why Developers Love BrandSpec
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-scale transition-all duration-200 shadow-ambient">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl mb-3">{feature.title}</h3>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 