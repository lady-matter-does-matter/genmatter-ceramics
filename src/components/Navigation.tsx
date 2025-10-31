import type { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections: { id: Section; label: string }[] = [
    { id: 'catalogue', label: 'Catalogue' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav>
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                onSectionChange(id);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

