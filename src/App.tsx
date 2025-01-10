import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { BlogSection } from './components/sections/Blog';
import { ContactForm } from './components/sections/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <BlogSection />
      <ContactForm />
    </div>
  );
}

export default App;