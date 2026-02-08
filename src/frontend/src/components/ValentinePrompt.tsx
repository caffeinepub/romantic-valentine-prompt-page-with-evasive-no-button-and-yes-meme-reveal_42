import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface ValentinePromptProps {
  onAccept: () => void;
}

export default function ValentinePrompt({ onAccept }: ValentinePromptProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe boundaries (keep button fully visible)
    const maxX = container.width - button.width - 32; // 32px padding
    const maxY = container.height - button.height - 32;
    const minX = 32;
    const minY = 32;

    // Generate random position within safe boundaries
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setNoButtonPosition({ x: newX, y: newY });
    setIsNoButtonMoved(true);
  };

  const handleNoHover = () => {
    moveNoButton();
  };

  const handleNoPointerDown = (e: React.PointerEvent) => {
    // Prevent the click from registering
    e.preventDefault();
    moveNoButton();
  };

  // Prevent accidental clicks on the No button
  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto"
      style={{ minHeight: '500px' }}
    >
      <div className="text-center space-y-8 p-8">
        {/* Animated hearts decoration */}
        <div className="flex justify-center gap-4 mb-6">
          <Heart className="w-8 h-8 text-romantic-primary animate-pulse" fill="currentColor" />
          <Heart className="w-12 h-12 text-romantic-accent animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-8 h-8 text-romantic-primary animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Main question */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-romantic-primary leading-tight">
            Will you be my Valentine?
          </h1>
          <p className="text-xl text-romantic-secondary">
            I promise to make every moment special ✨
          </p>
        </div>

        {/* Buttons container */}
        <div className="relative pt-12" style={{ minHeight: '200px' }}>
          {/* Yes button - always centered */}
          <div className="flex justify-center">
            <button
              onClick={onAccept}
              className="bg-romantic-primary hover:bg-romantic-primary-hover text-white font-bold text-2xl px-16 py-6 rounded-full shadow-romantic transition-all duration-300 hover:scale-110 hover:shadow-romantic-lg active:scale-105"
            >
              Yes! 💕
            </button>
          </div>

          {/* No button - moves away on interaction */}
          <button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onPointerDown={handleNoPointerDown}
            onClick={handleNoClick}
            className="absolute bg-romantic-muted hover:bg-romantic-muted-hover text-romantic-muted-foreground font-bold text-xl px-12 py-4 rounded-full shadow-md transition-all duration-200"
            style={{
              left: isNoButtonMoved ? `${noButtonPosition.x}px` : '50%',
              top: isNoButtonMoved ? `${noButtonPosition.y}px` : '120px',
              transform: isNoButtonMoved ? 'none' : 'translateX(-50%)',
              touchAction: 'none',
              userSelect: 'none',
            }}
          >
            No
          </button>
        </div>

        {/* Hint text */}
        <p className="text-sm text-romantic-secondary italic pt-8">
          Choose wisely... 💖
        </p>
      </div>
    </div>
  );
}
