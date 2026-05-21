import { useState, useMemo } from "react";
import { Search, Copy, Check, Heart, Sparkles, Filter, ShieldAlert, Cpu, Layers, Lock, Crown } from "lucide-react";
import { CAMPAIGN_CATEGORIES, UNIVERSAL_PROMPTS, NEGATIVE_PROMPTS, SYSTEM_FORMULAS } from "../data/promptsData";
import { isCategoryAccessible, isFormulaAccessible, BASIC_UNIVERSAL_PROMPT_COUNT, BASIC_NEGATIVE_PROMPT_COUNT } from "../data/tierContent";
import type { AccessTier } from "../utils/auth";

interface PromptCatalogProps {
  onAddToFavorites: (prompt: string, title: string, category: string) => void;
  favorites: Array<{ prompt: string; title: string; category: string }>;
  accessTier: AccessTier;
  onUpgradeClick: () => void;
}

export default function PromptCatalog({ onAddToFavorites, favorites, accessTier, onUpgradeClick }: PromptCatalogProps) {
  const [activeTab, setActiveTab] = useState<"campaigns" | "universal" | "formulas" | "negatives">("campaigns");
  
  // Category Selection
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CAMPAIGN_CATEGORIES[0].id);
  
  // Formula Selection Sub-Tab
  const [activeFormulaType, setActiveFormulaType] = useState<string>("lighting");

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");

  // Copy state tracker
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isFavorite = (promptText: string) => {
    return favorites.some((f) => f.prompt === promptText);
  };

  // List of unique emotions for filters
  const emotionsList = useMemo(() => {
    const list = new Set<string>();
    CAMPAIGN_CATEGORIES.forEach((cat) => {
      cat.prompts.forEach((p) => {
        if (p.emotion) list.add(p.emotion);
      });
    });
    return Array.from(list);
  }, []);

  // Filtered campaign prompts (respects tier)
  const filteredCampaigns = useMemo(() => {
    const cat = CAMPAIGN_CATEGORIES.find((c) => c.id === selectedCategoryId);
    if (!cat) return [];

    // Block content if category is locked
    if (accessTier && !isCategoryAccessible(selectedCategoryId, accessTier)) return [];

    return cat.prompts.filter((p) => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.prompt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesEmotion = selectedEmotion ? p.emotion === selectedEmotion : true;
      
      return matchesSearch && matchesEmotion;
    });
  }, [selectedCategoryId, searchQuery, selectedEmotion, accessTier]);

  // Filtered universal prompts (limited for basic)
  const filteredUniversals = useMemo(() => {
    const limit = accessTier === "premium" ? UNIVERSAL_PROMPTS.length : BASIC_UNIVERSAL_PROMPT_COUNT;
    return UNIVERSAL_PROMPTS.slice(0, limit).map((p, idx) => ({
      id: `universal-${idx}`,
      title: `Universal Transform #${idx + 1}`,
      prompt: p,
      category: "Universal Library"
    })).filter((p) => 
      p.prompt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, accessTier]);

  // Filtered formulas (respects tier)
  const filteredFormulas = useMemo(() => {
    if (accessTier && !isFormulaAccessible(activeFormulaType, accessTier)) return [];
    const formulas = SYSTEM_FORMULAS[activeFormulaType] || [];
    return formulas.filter((f) => 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.formula.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeFormulaType, searchQuery, accessTier]);

  // Filtered negatives (limited for basic)
  const filteredNegatives = useMemo(() => {
    const limit = accessTier === "premium" ? NEGATIVE_PROMPTS.length : BASIC_NEGATIVE_PROMPT_COUNT;
    return NEGATIVE_PROMPTS.slice(0, limit).map((p, idx) => ({
      id: `neg-${idx}`,
      title: `Negative Shield #${idx + 1}`,
      prompt: p,
      category: "Negative Shields"
    })).filter((p) => 
      p.prompt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, accessTier]);

  // Count locked categories
  const lockedCategoryCount = accessTier === "basic" 
    ? CAMPAIGN_CATEGORIES.filter(c => !isCategoryAccessible(c.id, "basic")).length
    : 0;

  return (
    <div className="space-y-6">
      {/* Top Controls - Search / Tabs */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search prompts by keyword (e.g. 'gold', 'reflection', 'marble', 'mist')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-xl py-2.5 pl-10 pr-4 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none transition-all"
            />
          </div>

          {/* Emotion filter (only for Campaigns tab) */}
          {activeTab === "campaigns" && (
            <div className="relative min-w-[200px] flex items-center gap-2">
              <Filter className="w-4 h-4 text-zinc-500 shrink-0" />
              <select
                value={selectedEmotion}
                onChange={(e) => setSelectedEmotion(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-xl py-2.5 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                <option value="">Filter by Vibe/Emotion</option>
                {emotionsList.map((emotion, idx) => (
                  <option key={idx} value={emotion}>
                    {emotion}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Primary Tabs */}
        <div className="flex border-b border-zinc-800 overflow-x-auto gap-2 pb-1 scrollbar-thin">
          <button
            onClick={() => { setActiveTab("campaigns"); setSearchQuery(""); }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === "campaigns"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                : "text-zinc-400 hover:text-zinc-200 border border-transparent"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Campaign Art Directions (225)
          </button>
          
          <button
            onClick={() => { setActiveTab("universal"); setSearchQuery(""); }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === "universal"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                : "text-zinc-400 hover:text-zinc-200 border border-transparent"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" /> Universal Library (50)
          </button>
          
          <button
            onClick={() => { setActiveTab("formulas"); setSearchQuery(""); }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === "formulas"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                : "text-zinc-400 hover:text-zinc-200 border border-transparent"
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Creative System Formulas (200)
          </button>

          <button
            onClick={() => { setActiveTab("negatives"); setSearchQuery(""); }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === "negatives"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                : "text-zinc-400 hover:text-zinc-200 border border-transparent"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> Negative Shields (25)
          </button>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Sub-navigation Bar for Campaigns and Formulas */}
        {activeTab === "campaigns" && (
          <div className="lg:col-span-3 space-y-2 lg:max-h-[700px] lg:overflow-y-auto pr-1 scrollbar-thin">
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-1">
              Campaign Worlds
            </span>
            {CAMPAIGN_CATEGORIES.map((cat) => {
              const isLocked = accessTier === "basic" && !isCategoryAccessible(cat.id, "basic");
              return (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategoryId(cat.id); setSelectedEmotion(""); }}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-all flex flex-col gap-0.5 border relative ${
                    selectedCategoryId === cat.id
                      ? isLocked
                        ? "bg-amber-500/5 text-amber-400 border-amber-500/20 shadow-md"
                        : "bg-zinc-800 text-zinc-100 border-zinc-700 shadow-md"
                      : isLocked
                        ? "text-zinc-500 hover:text-amber-400 hover:bg-amber-500/5 border-zinc-900"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate">{cat.name}</span>
                    {isLocked && <Lock className="w-3 h-3 text-amber-500/70 shrink-0" />}
                  </div>
                  <span className="text-[9px] text-zinc-500 font-normal truncate">
                    {cat.description}
                  </span>
                </button>
              );
            })}
            
            {/* Premium upsell at bottom of category list */}
            {accessTier === "basic" && lockedCategoryCount > 0 && (
              <div className="mt-4 bg-gradient-to-br from-amber-500/10 to-zinc-900 border border-amber-500/20 rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-bold text-amber-300 uppercase">
                    {lockedCategoryCount} Premium Categories
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400 leading-relaxed">
                  Upgrade to Premium to unlock all 225 campaign prompts across 15 worlds.
                </p>
                <button
                  onClick={onUpgradeClick}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 text-[10px] font-bold py-1.5 px-3 rounded-lg cursor-pointer hover:from-amber-600 hover:to-amber-700 transition-all"
                >
                  Upgrade to Premium
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "formulas" && (
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-1">
              Formula Categories
            </span>
            {[
              { id: "lighting", name: "1. Cinematic Lighting (25)" },
              { id: "composition", name: "2. Luxury Composition (25)" },
              { id: "color_grading", name: "3. Creative Color Grade (25)" },
              { id: "atmosphere", name: "4. Premium Atmosphere (25)" },
              { id: "materials", name: "5. Material Formulas (25)" },
              { id: "camera", name: "6. Camera Angle/Lenses (25)" },
              { id: "pedestal", name: "7. Product Pedestals (25)" },
              { id: "environmental", name: "8. Premium Environments (25)" }
            ].map((type) => {
              const isLocked = accessTier === "basic" && !isFormulaAccessible(type.id, "basic");
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveFormulaType(type.id)}
                  className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-lg transition-all border flex items-center justify-between gap-2 ${
                    activeFormulaType === type.id
                      ? isLocked
                        ? "bg-amber-500/5 text-amber-400 border-amber-500/20 shadow-md"
                        : "bg-zinc-800 text-zinc-100 border-zinc-700 shadow-md"
                      : isLocked
                        ? "text-zinc-500 hover:text-amber-400 hover:bg-amber-500/5 border-zinc-900"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border-transparent"
                  }`}
                >
                  <span>{type.name}</span>
                  {isLocked && <Lock className="w-3 h-3 text-amber-500/70 shrink-0" />}
                </button>
              );
            })}

            {accessTier === "basic" && (
              <div className="mt-4 bg-gradient-to-br from-amber-500/10 to-zinc-900 border border-amber-500/20 rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-bold text-amber-300 uppercase">5 Premium Formula Sets</span>
                </div>
                <p className="text-[10px] text-zinc-400 leading-relaxed">
                  Unlock Atmosphere, Materials, Camera, Pedestals, and Environments formula systems.
                </p>
                <button
                  onClick={onUpgradeClick}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 text-[10px] font-bold py-1.5 px-3 rounded-lg cursor-pointer hover:from-amber-600 hover:to-amber-700 transition-all"
                >
                  Upgrade to Premium
                </button>
              </div>
            )}
          </div>
        )}

        {/* Prompts Cards Area */}
        <div className={`${(activeTab === "campaigns" || activeTab === "formulas") ? "lg:col-span-9" : "lg:col-span-12"} space-y-4`}>
          {/* Header/Info */}
          <div className="flex justify-between items-center bg-zinc-950 p-3 rounded-xl border border-zinc-900">
            <div className="text-xs text-zinc-400 font-medium">
              {activeTab === "campaigns" && (
                <>
                  Category: <span className="text-amber-400 font-serif text-sm ml-1">{CAMPAIGN_CATEGORIES.find(c => c.id === selectedCategoryId)?.name}</span>
                </>
              )}
              {activeTab === "universal" && "Universal Transformation Library"}
              {activeTab === "formulas" && (
                <>
                  Formula Set: <span className="text-amber-400 font-serif text-sm ml-1">{activeFormulaType.replace("_", " ").toUpperCase()}</span>
                </>
              )}
              {activeTab === "negatives" && "Universal Negative Presets"}
            </div>
            <span className="text-[10px] font-mono text-zinc-500">
              {activeTab === "campaigns" && `${filteredCampaigns.length} Prompts Found`}
              {activeTab === "universal" && `${filteredUniversals.length} Prompts Found`}
              {activeTab === "formulas" && `${filteredFormulas.length} Formulas Found`}
              {activeTab === "negatives" && `${filteredNegatives.length} Shields Found`}
            </span>
          </div>

          {/* Cards List */}
          {activeTab === "campaigns" && (
            <>
              {/* Locked state preview for basic users */}
              {accessTier === "basic" && !isCategoryAccessible(selectedCategoryId, "basic") ? (
                <div className="relative bg-zinc-950 border border-amber-500/20 rounded-2xl p-6 overflow-hidden">
                  {/* Blurred teaser content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 locked-blur opacity-40">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
                        <div className="h-4 bg-zinc-800 rounded w-3/4" />
                        <div className="h-2 bg-zinc-800/70 rounded w-full" />
                        <div className="h-2 bg-zinc-800/70 rounded w-5/6" />
                        <div className="h-2 bg-zinc-800/70 rounded w-2/3" />
                      </div>
                    ))}
                  </div>

                  {/* Lock overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/70 backdrop-blur-sm">
                    <div className="text-center space-y-4 p-6 max-w-md">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/40 animate-goldGlow">
                        <Lock className="w-8 h-8 text-amber-400 animate-pulseLock" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-bold text-zinc-100">
                          Premium Content Locked
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          The <span className="text-amber-400 font-semibold">{CAMPAIGN_CATEGORIES.find(c => c.id === selectedCategoryId)?.name}</span> contains 15 premium campaign prompts. Upgrade to unlock this cinematic world and 8 additional categories.
                        </p>
                      </div>
                      <button
                        onClick={onUpgradeClick}
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 font-bold py-2.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/30 mx-auto"
                      >
                        <Crown className="w-4 h-4" />
                        Unlock Premium
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredCampaigns.length > 0 ? (
                filteredCampaigns.map((p) => (
                  <div key={p.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 shadow-lg group">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-serif font-bold text-zinc-200 group-hover:text-amber-400 transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-[9px] font-mono text-amber-500/70 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                          {p.emotion}
                        </span>
                      </div>
                      
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-mono">
                        {p.prompt}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                      {/* Secondary specifications */}
                      <div className="space-y-1 text-[9px] font-mono text-zinc-500">
                        <div>
                          <span className="text-zinc-600">LIGHTING:</span> {p.lighting}
                        </div>
                        <div>
                          <span className="text-zinc-600">COMPOSITION:</span> {p.composition}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleCopy(p.id, p.prompt)}
                          className="flex-1 bg-zinc-950 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[10px] font-semibold py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer text-zinc-300"
                        >
                          {copiedId === p.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" /> Copy Prompt
                            </>
                          )}
                        </button>
                        
                        <button
                          onClick={() => {
                            onAddToFavorites(p.prompt, p.title, "Campaign");
                            alert("Added to Campaign Bible!");
                          }}
                          className={`px-3 py-1.5 border rounded-md transition-all flex items-center justify-center cursor-pointer ${
                            isFavorite(p.prompt)
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                              : "bg-zinc-950 hover:bg-zinc-800 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFavorite(p.prompt) ? "fill-amber-400 text-amber-400" : ""}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-zinc-500 bg-zinc-950/20 border border-zinc-900 rounded-xl font-mono text-xs">
                  No matching campaign prompts found. Try a different search term.
                </div>
              )}
            </div>
              )}
            </>
          )}

          {activeTab === "universal" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredUniversals.length > 0 ? (
                filteredUniversals.map((p) => (
                  <div key={p.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 shadow-lg group">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-serif font-bold text-zinc-200 group-hover:text-amber-400 transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-[9px] font-mono text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">
                          Universal
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-mono">
                        {p.prompt}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-3 border-t border-zinc-800/80">
                      <button
                        onClick={() => handleCopy(p.id, p.prompt)}
                        className="flex-1 bg-zinc-950 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[10px] font-semibold py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer text-zinc-300"
                      >
                        {copiedId === p.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copy Prompt
                          </>
                        )}
                      </button>
                      
                      <button
                        onClick={() => {
                          onAddToFavorites(p.prompt, p.title, "Universal");
                          alert("Added to Campaign Bible!");
                        }}
                        className={`px-3 py-1.5 border rounded-md transition-all flex items-center justify-center cursor-pointer ${
                          isFavorite(p.prompt)
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                            : "bg-zinc-950 hover:bg-zinc-800 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFavorite(p.prompt) ? "fill-amber-400 text-amber-400" : ""}`} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-zinc-500 bg-zinc-950/20 border border-zinc-900 rounded-xl font-mono text-xs">
                  No matching universal prompts found.
                </div>
              )}
            </div>
          )}

          {activeTab === "formulas" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFormulas.length > 0 ? (
                filteredFormulas.map((f) => (
                  <div key={f.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 shadow-lg group">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-serif font-bold text-zinc-200 group-hover:text-amber-400 transition-colors">
                          {f.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-mono">
                        {f.formula}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-zinc-800/80">
                      <div className="text-[9px] text-zinc-500 font-sans italic">
                        Vibe: {f.description}
                      </div>
                      
                      <button
                        onClick={() => handleCopy(f.id, f.formula)}
                        className="w-full bg-zinc-950 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[10px] font-semibold py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer text-zinc-300"
                      >
                        {copiedId === f.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copy Formula Tag
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-zinc-500 bg-zinc-950/20 border border-zinc-900 rounded-xl font-mono text-xs">
                  No matching formulas found.
                </div>
              )}
            </div>
          )}

          {activeTab === "negatives" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredNegatives.length > 0 ? (
                filteredNegatives.map((p) => (
                  <div key={p.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 shadow-lg group">
                    <div className="space-y-2">
                      <h4 className="text-xs font-serif font-bold text-zinc-200 group-hover:text-red-400 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-[11px] text-red-300/80 leading-relaxed font-mono bg-red-950/10 p-2.5 rounded border border-red-500/10">
                        {p.prompt}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(p.id, p.prompt)}
                      className="w-full bg-zinc-950 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[10px] font-semibold py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer text-zinc-300"
                    >
                      {copiedId === p.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> Copy Negative Shield
                        </>
                      )}
                    </button>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-zinc-500 bg-zinc-950/20 border border-zinc-900 rounded-xl font-mono text-xs">
                  No matching negative shield presets found.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
