import { useState } from "react";
import { Lock, Eye, EyeOff, Shield, Crown, AlertCircle, Sparkles } from "lucide-react";
import { validatePassword, saveAccessTier, type AccessTier } from "../utils/auth";

interface PasswordGateProps {
  onAccessGranted: (tier: AccessTier) => void;
}

export default function PasswordGate({ onAccessGranted }: PasswordGateProps) {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate a brief validation delay for premium feel
    await new Promise((resolve) => setTimeout(resolve, 600));

    const tier = validatePassword(password);
    if (tier) {
      saveAccessTier(tier);
      onAccessGranted(tier);
    } else {
      setError("Invalid access key. Please verify your credentials and try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden noise-overlay">
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />
      
      {/* Animated gold orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Luxury card */}
      <div className="relative z-10 w-full max-w-md glass-gold rounded-3xl shadow-2xl overflow-hidden animate-fadeInScale">
        {/* Top accent line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        <div className="p-8 sm:p-10 space-y-8">
          {/* Brand header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 animate-goldGlow">
              <Sparkles className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              AETHERIS
            </h1>
            <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
              Elite Creative Direction Vault
            </p>
          </div>

          {/* Access description */}
          <div className="space-y-2 text-center">
            <p className="text-sm text-zinc-300 font-serif">
              Welcome to the premium art direction platform.
            </p>
            <p className="text-xs text-zinc-500">
              Enter your access key to unlock the campaign library.
            </p>
          </div>

          {/* Password form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                Access Key
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your access key..."
                  className="w-full bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-xl py-3 px-4 pr-12 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-all font-mono"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="flex items-start gap-2 p-3 bg-red-950/20 border border-red-500/20 rounded-lg animate-fadeIn">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs text-red-300">{error}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading || !password.trim()}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 active:from-amber-700 active:to-amber-800 text-zinc-950 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                  Validating Access...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Access Vault
                </>
              )}
            </button>
          </form>

          {/* Tier comparison */}
          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider text-center">
              Access Tiers Available
            </p>

            <div className="grid grid-cols-2 gap-3">
              {/* Basic tier */}
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-bold text-zinc-300">Basic</span>
                </div>
                <ul className="space-y-1 text-[10px] text-zinc-500">
                  <li className="flex items-start gap-1">
                    <span className="text-zinc-600">•</span>
                    <span>85 Campaign Prompts</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-zinc-600">•</span>
                    <span>Limited Formulas</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-zinc-600">•</span>
                    <span>Basic Catalog Access</span>
                  </li>
                </ul>
              </div>

              {/* Premium tier */}
              <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-300">Premium</span>
                </div>
                <ul className="space-y-1 text-[10px] text-amber-200/80">
                  <li className="flex items-start gap-1">
                    <span className="text-amber-500">•</span>
                    <span>All 225 Prompts</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-amber-500">•</span>
                    <span>All Formula Systems</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-amber-500">•</span>
                    <span>Custom Builder Tool</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2 pt-4">
            <p className="text-[10px] text-zinc-600 font-mono">
              Secure client-side authentication
            </p>
            <p className="text-[9px] text-zinc-700">
              For senior art directors and luxury brands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
