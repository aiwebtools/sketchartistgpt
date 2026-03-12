
import React from 'react';
import { Pencil } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-cyber-purple to-cyber-pink p-0.5 overflow-hidden shadow-neon-purple">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-pink opacity-30 animate-rotate-slow"></div>
        <div className="relative z-10 flex items-center justify-center h-full w-full bg-cyber-black rounded-full">
          <Pencil className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
      </div>
      <div className="flex flex-col text-left">
        <h1 className="text-xl font-bold text-white leading-none tracking-wide">
          <span className="cyber-gradient-text">Sketch Artist GPT</span>
        </h1>
        <span className="text-xs text-white/60">
          AI Web Tools by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-cyber-purple hover:text-cyber-pink transition-colors" title="AI Web Tools - Best AI Tools Platform">AiWebTools.Ai</a>
        </span>
      </div>
    </div>
  );
};

export default Logo;
