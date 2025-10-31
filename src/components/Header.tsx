import Navigation from './Navigation';
import type { Section } from '../types';

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

function Header({ activeSection, onSectionChange }: HeaderProps) {
  return (
    <header>
      <h1>GenMatter Ceramics & Art</h1>
      <Navigation activeSection={activeSection} onSectionChange={onSectionChange} />
    </header>
  );
}

export default Header;

