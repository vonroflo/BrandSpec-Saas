import { HeroSection } from '@/components/hero-section';
import { FeaturesGrid } from '@/components/features-grid';
import { BrandForm } from '@/components/brand-form';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesGrid />
      <BrandForm />
      <footer className="bg-text text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">Made with ❤️ for indie hackers and developers</p>
          <p className="text-sm text-gray-300">
            BrandSpec - Generate beautiful brand specifications in minutes
          </p>
        </div>
      </footer>
    </main>
  );
}
