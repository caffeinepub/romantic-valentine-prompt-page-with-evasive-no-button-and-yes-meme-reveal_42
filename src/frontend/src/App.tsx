import { useState } from 'react';
import ValentinePrompt from './components/ValentinePrompt';
import ValentineSuccess from './components/ValentineSuccess';

function App() {
  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        {!hasAccepted ? (
          <ValentinePrompt onAccept={() => setHasAccepted(true)} />
        ) : (
          <ValentineSuccess />
        )}
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>
          © 2026. Built with <span className="text-romantic-accent">♥</span> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
