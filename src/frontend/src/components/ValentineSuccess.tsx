import { Heart, Sparkles } from 'lucide-react';

export default function ValentineSuccess() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center space-y-8 p-8 animate-fade-in">
      {/* Celebration header */}
      <div className="space-y-4">
        <div className="flex justify-center gap-3">
          <Sparkles className="w-10 h-10 text-romantic-accent animate-pulse" />
          <Heart className="w-12 h-12 text-romantic-primary animate-bounce" fill="currentColor" />
          <Sparkles className="w-10 h-10 text-romantic-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-romantic-primary">
          Yay! 🎉
        </h1>
        
        <p className="text-2xl text-romantic-secondary font-medium">
          You made my day! ❤️
        </p>
      </div>

      {/* Meme image */}
      <div className="relative rounded-3xl overflow-hidden shadow-romantic-lg max-w-3xl mx-auto bg-white">
        <img 
          src="/assets/generated/valentine-meme.dim_1200x800.png" 
          alt="Romantic meme"
          className="w-full h-auto"
        />
      </div>

      {/* Message */}
      <div className="space-y-4 pt-4">
        <p className="text-3xl md:text-4xl font-bold text-romantic-primary leading-relaxed">
          No pen, no paper but you still draw my attention
        </p>
        
        <div className="flex justify-center gap-2 pt-4">
          <Heart className="w-6 h-6 text-romantic-accent animate-pulse" fill="currentColor" />
          <Heart className="w-6 h-6 text-romantic-primary animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-6 h-6 text-romantic-accent animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}
