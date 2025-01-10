import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { BlogSection } from '@/components/sections/Blog';
import { ContactForm } from '@/components/sections/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <Services />
        <About />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;