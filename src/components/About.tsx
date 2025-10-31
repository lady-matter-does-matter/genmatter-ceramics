import { useState, useEffect } from 'react';
import { getAboutText, saveAboutText } from '../utils/storage';

function About() {
  const [text, setText] = useState(getAboutText());
  const [saveStatus, setSaveStatus] = useState('Save');

  useEffect(() => {
    setText(getAboutText());
  }, []);

  const handleSave = () => {
    saveAboutText(text);
    setSaveStatus('Saved!');
    setTimeout(() => {
      setSaveStatus('Save');
    }, 1100);
  };

  return (
    <section id="about-section">
      <h2>About My Practice</h2>
      <textarea
        id="about-text"
        placeholder="Write about your process and philosophy here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="save-about" onClick={handleSave}>
        {saveStatus}
      </button>
    </section>
  );
}

export default About;

