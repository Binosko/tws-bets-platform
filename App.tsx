import { useState, useEffect } from "react";
import { Sparkles, Sliders, FolderHeart, BookOpen, Compass, LogOut, Crown, Lock } from "lucide-react";
import ProductVisualizer from "./components/ProductVisualizer";
import PromptCatalog from "./components/PromptCatalog";
import PromptBuilder from "./components/PromptBuilder";
import FormulaSystemHub from "./components/FormulaSystemHub";
import CampaignBible from "./components/CampaignBible";
import PasswordGate from "./components/PasswordGate";
import UpgradeModal from "./components/UpgradeModal";
import { clearAccessTier, type AccessTier } from "./utils/auth";
import { isSectionLocked } from "./data/tierContent";

interface FavoriteItem {
  prompt: string;
  title: string;
  category: string;
  notes?: string;
  campaign?: string;
}

export default function App() {
  const [accessTier, setAccessTier] = useState<AccessTier>(null);
  const [activeTab, setActiveTab] = useState<"visualizer" | "catalog" | "builder" | "hub" | "bible">("visualizer");
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [showUpgradeModal, setShowUpgradeModal] = useState<boolean>(false);
  const [lockedFeatureName, setLockedFeatureName] = useState<string>("Premium Content");

  // Check for existing access tier on mount
  useEffect(() => {
    const storedTier = localStorage.getItem("aetheris_access_tier") as AccessTier;
    if (storedTier === "basic" || storedTier === "premium") {
      setAccessTier(storedTier);
    }
  }, []);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("aetheris_favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading favorites", e);
      }
    }
  }, []);

  // Save favorites to localStorage
  const saveFavorites = (newFavorites: FavoriteItem[]) => {
    setFavorites(newFavorites);
    localStorage.setItem("aetheris_favorites", JSON.stringify(newFavorites));
  };

  const handleAddToFavorites = (promptText: string, title: string, category: string) => {
    if (favorites.some((f) => f.prompt === promptText)) {
      return;
    }
    const newItem: FavoriteItem = {
      prompt: promptText,
      title: title,
      category: category,
      notes: "",
      campaign: ""
    };
    saveFavorites([...favorites, newItem]);
  };

  const handleRemoveFromFavorites = (promptText: string) => {
    const filtered = favorites.filter((f) => f.prompt !== promptText);
    saveFavorites(filtered);
  };

  const handleUpdateNotes = (promptText: string, notes: string) => {
    const updated = favorites.map((f) => {
      if (f.prompt === promptText) {
        return { ...f, notes };
      }
      return f;
    });
    saveFavorites(updated);
  };

  const handleUpdateCampaign = (promptText: string, campaign: string) => {
    const updated = favorites.map((f) => {
      if (f.prompt === promptText) {
        return { ...f, campaign };
      }
      return f;
    });
    saveFavorites(updated);
  };

  const handleClearFavorites = () => {
    if (window.confirm("Are you sure you want to clear your entire Campaign Bible?")) {
      saveFavorites([]);
    }
  };

  // Access granted handler
  const handleAccessGranted = (tier: AccessTier) => {
    setAccessTier(tier);
  };

  // Logout handler
  const handleLogout = () => {
    if (window.confirm("Sign out and return to the access gate?")) {
      clearAccessTier();
      setAccessTier(null);
      setActiveTab("visualizer");
    }
  };

  // Handle navigation with tier detection
  const handleTabChange = (tab: "visualizer" | "catalog" | "builder" | "hub" | "bible") => {
    if (accessTier && isSectionLocked(tab, accessTier)) {
      const featureNames: Record<string, string> = {
        builder: "Aetheris Custom Builder",
        hub: "Luxury Formula Masterclass"
      };
      setLockedFeatureName(featureNames[tab] || "Premium Content");
      setShowUpgradeModal(true);
      return;
    }
    setActiveTab(tab);
  };

  const handleUpgradeFromLock = () => {
    setShowUpgradeModal(true);
  };

  // Show password gate if no access
  if (!accessTier) {
    return <PasswordGate onAccessGranted={handleAccessGranted} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Premium Editorial Top Header */}
      <header className="bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif font-bold tracking-widest bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                AETHERIS
              </span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase border border-zinc-800 px-1.5 py-0.5 rounded tracking-widest">
                Creative Studio
              </span>
              {/* Tier badge */}
              {accessTier === "premium" ? (
                <span className="text-[9px] font-mono font-bold uppercase border border-amber-500/30 bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded tracking-widest flex items-center gap-1">
                  <Crown className="w-2.5 h-2.5" /> Premium
                </span>
              ) : (
                <span className="text-[9px] font-mono font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded tracking-widest flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" /> Basic
                </span>
              )}
            </div>
            <p className="text-[10px] sm:text-xs text-zinc-400 tracking-wider font-serif uppercase">
              Elite Luxury Art Direction Vault &bull; 500+ AI Prompts
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Core App Statistics Bar */}
            <div className="hidden sm:flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono text-zinc-500">
              <div>
                <span className="text-amber-400 block font-bold">{accessTier === "premium" ? "225" : "85"}</span>
                <span>PROMPTS</span>
              </div>
              <div className="border-l border-zinc-900 pl-4">
                <span className="text-cyan-400 block font-bold">{accessTier === "premium" ? "200" : "75"}</span>
                <span>FORMULAS</span>
              </div>
              <div className="border-l border-zinc-900 pl-4 bg-zinc-900/40 px-2 py-1 rounded border border-zinc-800/80">
                <span className="text-amber-400 block font-bold">{favorites.length}</span>
                <span>SAVED</span>
              </div>
            </div>

            {/* Upgrade button (for basic tier) */}
            {accessTier === "basic" && (
              <button
                onClick={() => {
                  setLockedFeatureName("Full Premium Access");
                  setShowUpgradeModal(true);
                }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 text-[11px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/20 transition-all"
              >
                <Crown className="w-3 h-3" /> Upgrade
              </button>
            )}

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-[11px] font-semibold py-1.5 px-3 rounded-lg border border-zinc-800 flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <LogOut className="w-3 h-3" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        
        {/* Navigation Column */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-md space-y-1">
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-2">
              Studio Navigation
            </span>
            
            <button
              onClick={() => handleTabChange("visualizer")}
              className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2.5 border ${
                activeTab === "visualizer"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-inner"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border-transparent"
              }`}
            >
              <Sliders className="w-4 h-4 shrink-0" />
              <span>1. Campaign Simulator</span>
            </button>

            <button
              onClick={() => handleTabChange("catalog")}
              className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2.5 border ${
                activeTab === "catalog"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-inner"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border-transparent"
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              <span className="flex-1">2. Art Direction Vault</span>
              {accessTier === "basic" && (
                <span className="text-[8px] font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">LIMITED</span>
              )}
            </button>

            <button
              onClick={() => handleTabChange("builder")}
              className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2.5 border relative ${
                activeTab === "builder" && accessTier === "premium"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-inner"
                  : accessTier === "basic"
                    ? "text-zinc-500 hover:text-amber-400 hover:bg-amber-500/5 border-zinc-800/60 bg-zinc-950/40"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border-transparent"
              }`}
            >
              {accessTier === "basic" ? (
                <Lock className="w-4 h-4 shrink-0 text-amber-500/70" />
              ) : (
                <Sparkles className="w-4 h-4 shrink-0" />
              )}
              <span className="flex-1">3. Custom Builder</span>
              {accessTier === "basic" && (
                <span className="text-[8px] font-mono text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">PREMIUM</span>
              )}
            </button>

            <button
              onClick={() => handleTabChange("hub")}
              className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2.5 border relative ${
                activeTab === "hub" && accessTier === "premium"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-inner"
                  : accessTier === "basic"
                    ? "text-zinc-500 hover:text-amber-400 hover:bg-amber-500/5 border-zinc-800/60 bg-zinc-950/40"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border-transparent"
              }`}
            >
              {accessTier === "basic" ? (
                <Lock className="w-4 h-4 shrink-0 text-amber-500/70" />
              ) : (
                <BookOpen className="w-4 h-4 shrink-0" />
              )}
              <span className="flex-1">4. Formula Masterclass</span>
              {accessTier === "basic" && (
                <span className="text-[8px] font-mono text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">PREMIUM</span>
              )}
            </button>

            <button
              onClick={() => handleTabChange("bible")}
              className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2.5 border ${
                activeTab === "bible"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-inner"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border-transparent"
              }`}
            >
              <FolderHeart className="w-4 h-4 shrink-0" />
              <span className="flex-1">5. Saved Campaign Bible</span>
              {favorites.length > 0 && (
                <span className="bg-amber-500 text-zinc-950 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold leading-none">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>

          {/* Tier upgrade card (for basic users) */}
          {accessTier === "basic" && (
            <div className="bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-900 border border-amber-500/20 rounded-2xl p-4 space-y-3 animate-goldGlow">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" />
                <h4 className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                  Unlock Premium
                </h4>
              </div>
              <p className="text-[10px] text-zinc-400 leading-relaxed">
                Access all 225 campaign prompts, the custom builder, and the complete luxury formula masterclass.
              </p>
              <button
                onClick={() => {
                  setLockedFeatureName("Full Premium Access");
                  setShowUpgradeModal(true);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 text-[11px] font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/20 transition-all"
              >
                <Crown className="w-3 h-3" /> Upgrade to Premium
              </button>
            </div>
          )}

          {/* Quick-tips sidebar card */}
          <div className="bg-zinc-900/60 border border-zinc-900 rounded-2xl p-4 space-y-3">
            <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Campaign Tip of the Day
            </h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              When applying these prompts to watches or jewelry, choose the <strong className="text-zinc-400">Floating Crystal Worlds</strong> or <strong className="text-zinc-400">Luxury Cosmic</strong> styles. The refractive lighting and dark environments create dramatic reflections that emphasize diamonds, gold, and fine steel mechanics.
            </p>
          </div>
        </aside>

        {/* Core Tab View panel */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Simulated Visualizer tab */}
          {activeTab === "visualizer" && (
            <div className="space-y-6 animate-fadeIn">
              <ProductVisualizer />
            </div>
          )}

          {/* Catalog Explorer tab */}
          {activeTab === "catalog" && (
            <div className="space-y-6 animate-fadeIn">
              <PromptCatalog 
                onAddToFavorites={handleAddToFavorites} 
                favorites={favorites}
                accessTier={accessTier}
                onUpgradeClick={handleUpgradeFromLock}
              />
            </div>
          )}

          {/* Prompt builder tab - Locked for basic */}
          {activeTab === "builder" && accessTier === "premium" && (
            <div className="space-y-6 animate-fadeIn">
              <PromptBuilder onAddToFavorites={handleAddToFavorites} accessTier={accessTier} />
            </div>
          )}

          {/* Formula system hub tab - Locked for basic */}
          {activeTab === "hub" && accessTier === "premium" && (
            <div className="space-y-6 animate-fadeIn">
              <FormulaSystemHub accessTier={accessTier} />
            </div>
          )}

          {/* Saved Campaigns Tab */}
          {activeTab === "bible" && (
            <div className="space-y-6 animate-fadeIn">
              <CampaignBible
                favorites={favorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
                onUpdateNotes={handleUpdateNotes}
                onUpdateCampaign={handleUpdateCampaign}
                onClearFavorites={handleClearFavorites}
              />
            </div>
          )}
        </main>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        featureName={lockedFeatureName}
      />

      {/* Elegant Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 mt-12 py-8 text-center text-[11px] text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p className="tracking-wide">
            AETHERIS // HIGH-END COMMERCIAL ART DIRECTION SYSTEMS FOR AI PRODUCT ADVERTISING
          </p>
          <p className="text-zinc-600">
            For senior art directors, luxury brands, and AI prompt engineers. Designed for Midjourney v6, Stable Diffusion, and FLUX.
          </p>
          <div className="flex justify-center gap-4 text-zinc-600 pt-2 text-[10px]">
            <span>VOGUE LEVEL EDITORIALS</span>
            <span>&bull;</span>
            <span>APPLE GRADE PRESENTATION</span>
            <span>&bull;</span>
            <span>BILLION DOLLAR FRAGRANCE ADS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
