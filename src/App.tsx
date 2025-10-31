import { useState } from 'react';
import Header from './components/Header';
import Catalogue from './components/Catalogue';
import About from './components/About';
import Contact from './components/Contact';
import type { Section } from './types';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('catalogue');

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {activeSection === 'catalogue' && <Catalogue />}
        {activeSection === 'about' && <About />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </>
  );
}

export default App;

