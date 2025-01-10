import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { ContactForm } from './components/sections/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <ContactForm />
    </div>
  );
}

export default App;