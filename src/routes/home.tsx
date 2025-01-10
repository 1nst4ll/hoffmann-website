import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export const homeRoute = createFileRoute('/')({ 
  component: HomePage
});

function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
