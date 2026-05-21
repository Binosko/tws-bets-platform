import { X, Crown, Check, Lock, Sparkles, Layers, BookOpen } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
}

export default function UpgradeModal({ isOpen, onClose, featureName = "Premium Content" }: UpgradeModalProps) {
  if (!isOpen) return null;

  const handleCopyPassword = () => {
    navigator.clipboard.writeText("AETHER-PRO-1947");
    alert("Premium access key copied! Use it to unlock the full vault.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative w-full max-w-lg glass-gold rounded-2xl shadow-2xl overflow-hidden animate-fadeInScale border-glow-gold">
        {/* Top gradient accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/40 animate-goldGlow">
              <Crown className="w-7 h-7 text-amber-400" />
            </div>
            <h2 className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Upgrade to Premium Access
            </h2>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto">
              Unlock <span className="text-amber-400 font-semibold">{featureName}</span> and access the complete luxury campaign vault.
            </p>
          </div>

          {/* Feature comparison */}
          <div className="grid grid-cols-2 gap-4">
            {/* Basic tier */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                <Lock className="w-4 h-4 text-zinc-500" />
                <span className="text-xs font-bold text-zinc-400">Current: Basic</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                  <span>85 Campaign Prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                  <span>Limited Formulas</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-red-500/60 shrink-0 mt-0.5" />
                  <span className="line-through">Custom Builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-red-500/60 shrink-0 mt-0.5" />
                  <span className="line-through">Formula Masterclass</span>
                </li>
              </ul>
            </div>

            {/* Premium tier */}
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/40 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-500/20">
                <Crown className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">Premium</span>
              </div>
              <ul className="space-y-2 text-xs text-amber-200/90">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>All 225 Prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>All 200 Formulas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Custom Builder Tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Formula Masterclass</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800">
            <div className="text-center space-y-1">
              <Sparkles className="w-5 h-5 text-amber-400 mx-auto" />
              <span className="text-[10px] text-zinc-400 block">Cinematic Prompts</span>
            </div>
            <div className="text-center space-y-1">
              <Layers className="w-5 h-5 text-amber-400 mx-auto" />
              <span className="text-[10px] text-zinc-400 block">Advanced Formulas</span>
            </div>
            <div className="text-center space-y-1">
              <BookOpen className="w-5 h-5 text-amber-400 mx-auto" />
              <span className="text-[10px] text-zinc-400 block">Masterclass Access</span>
            </div>
          </div>

          {/* Sample premium password */}
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Sample Premium Access Key
              </span>
              <button
                onClick={handleCopyPassword}
                className="text-[10px] font-mono text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                Copy
              </button>
            </div>
            <p className="font-mono text-sm text-amber-400 select-all bg-zinc-900 p-2 rounded border border-zinc-800">
              AETHER-PRO-1947
            </p>
            <p className="text-[10px] text-zinc-600 text-center">
              Use this key to unlock full premium access
            </p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-2">
            <p className="text-[10px] text-zinc-500">
              Enter your premium access key on the login screen to unlock all features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
