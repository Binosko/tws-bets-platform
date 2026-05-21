import { Lock, Crown } from "lucide-react";

interface LockOverlayProps {
  message?: string;
  showUpgradeButton?: boolean;
  onUpgradeClick?: () => void;
  className?: string;
}

export default function LockOverlay({
  message = "Premium content requires advanced access.",
  showUpgradeButton = true,
  onUpgradeClick,
  className = ""
}: LockOverlayProps) {
  return (
    <div className={`absolute inset-0 z-20 flex items-center justify-center ${className}`}>
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md" />

      {/* Lock content */}
      <div className="relative z-10 text-center space-y-4 p-6 max-w-sm animate-fadeInScale">
        {/* Lock icon with glow */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/40 animate-goldGlow">
          <Lock className="w-8 h-8 text-amber-400 animate-pulseLock" />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-serif font-bold text-zinc-100">
            Premium Content Locked
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {message}
          </p>
        </div>

        {/* Upgrade button */}
        {showUpgradeButton && onUpgradeClick && (
          <button
            onClick={onUpgradeClick}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 font-bold py-2.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/30 mx-auto"
          >
            <Crown className="w-4 h-4" />
            Upgrade to Premium
          </button>
        )}

        {/* Premium benefits teaser */}
        <div className="pt-4 border-t border-zinc-800 space-y-2">
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
            Premium unlocks:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-[10px]">
            <span className="bg-zinc-900/80 border border-zinc-800 px-2 py-1 rounded text-zinc-400">
              All 225 Prompts
            </span>
            <span className="bg-zinc-900/80 border border-zinc-800 px-2 py-1 rounded text-zinc-400">
              Custom Builder
            </span>
            <span className="bg-zinc-900/80 border border-zinc-800 px-2 py-1 rounded text-zinc-400">
              Formula Masterclass
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
