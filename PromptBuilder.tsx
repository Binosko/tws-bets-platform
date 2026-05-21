import { useState, useEffect } from "react";
import { Copy, RefreshCw, Check, Heart, Flame } from "lucide-react";
import { CAMPAIGN_CATEGORIES, SYSTEM_FORMULAS, NEGATIVE_PROMPTS } from "../data/promptsData";
import type { AccessTier } from "../utils/auth";

interface PromptBuilderProps {
  onAddToFavorites: (prompt: string, title: string, category: string) => void;
  accessTier?: AccessTier;
}

export default function PromptBuilder({ onAddToFavorites }: PromptBuilderProps) {
  const [productType, setProductType] = useState<string>("Fragrance Bottle");
  const [selectedCategory, setSelectedCategory] = useState<string>(CAMPAIGN_CATEGORIES[0].id);
  const [selectedLighting, setSelectedLighting] = useState<string>(SYSTEM_FORMULAS.lighting[0].id);
  const [selectedComposition, setSelectedComposition] = useState<string>(SYSTEM_FORMULAS.composition[0].id);
  const [selectedPedestal, setSelectedPedestal] = useState<string>(SYSTEM_FORMULAS.pedestal[0].id);
  const [selectedAtmosphere, setSelectedAtmosphere] = useState<string>(SYSTEM_FORMULAS.atmosphere[0].id);
  const [selectedColorGrading, setSelectedColorGrading] = useState<string>(SYSTEM_FORMULAS.color_grading[0].id);
  const [selectedCamera, setSelectedCamera] = useState<string>(SYSTEM_FORMULAS.camera[0].id);
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>(SYSTEM_FORMULAS.environmental[0].id);
  const [negativeIndex, setNegativeIndex] = useState<number>(0);
  const [customText, setCustomText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Get active templates
  const categoryObj = CAMPAIGN_CATEGORIES.find(c => c.id === selectedCategory) || CAMPAIGN_CATEGORIES[0];
  const baseCategoryText = categoryObj.prompts[0]?.prompt || "";

  const lightingObj = SYSTEM_FORMULAS.lighting.find(l => l.id === selectedLighting) || SYSTEM_FORMULAS.lighting[0];
  const compositionObj = SYSTEM_FORMULAS.composition.find(c => c.id === selectedComposition) || SYSTEM_FORMULAS.composition[0];
  const pedestalObj = SYSTEM_FORMULAS.pedestal.find(p => p.id === selectedPedestal) || SYSTEM_FORMULAS.pedestal[0];
  const atmosphereObj = SYSTEM_FORMULAS.atmosphere.find(a => a.id === selectedAtmosphere) || SYSTEM_FORMULAS.atmosphere[0];
  const colorGradingObj = SYSTEM_FORMULAS.color_grading.find(cg => cg.id === selectedColorGrading) || SYSTEM_FORMULAS.color_grading[0];
  const cameraObj = SYSTEM_FORMULAS.camera.find(cam => cam.id === selectedCamera) || SYSTEM_FORMULAS.camera[0];
  const environmentObj = SYSTEM_FORMULAS.environmental.find(env => env.id === selectedEnvironment) || SYSTEM_FORMULAS.environmental[0];

  // Rebuild the prompt string whenever selections change
  useEffect(() => {
    // We clean up baseCategoryText by replacing "[PRODUCT]" placeholder with the chosen productType
    const cleanBaseText = baseCategoryText.replace(/\[PRODUCT\]/g, `premium ${productType}`);
    
    // Assembling the master art-direction system prompt
    const fullPrompt = `${cleanBaseText} The product is ${pedestalObj.formula} and integrated into a ${environmentObj.formula} environment. ${lightingObj.formula} The scene features a ${compositionObj.formula} setup. Graded in a ${colorGradingObj.formula} style. ${atmosphereObj.formula} ${cameraObj.formula} --no ${NEGATIVE_PROMPTS[negativeIndex]}`;
    
    setCustomText(fullPrompt);
    setIsSaved(false);
  }, [
    productType,
    selectedCategory,
    selectedLighting,
    selectedComposition,
    selectedPedestal,
    selectedAtmosphere,
    selectedColorGrading,
    selectedCamera,
    selectedEnvironment,
    negativeIndex,
    baseCategoryText
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText(customText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    const title = `Custom ${productType} Campaign (${categoryObj.name})`;
    onAddToFavorites(customText, title, categoryObj.name);
    setIsSaved(true);
  };

  const randomizeAll = () => {
    const rand = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)].id;
    
    setSelectedCategory(CAMPAIGN_CATEGORIES[Math.floor(Math.random() * CAMPAIGN_CATEGORIES.length)].id);
    setSelectedLighting(rand(SYSTEM_FORMULAS.lighting));
    setSelectedComposition(rand(SYSTEM_FORMULAS.composition));
    setSelectedPedestal(rand(SYSTEM_FORMULAS.pedestal));
    setSelectedAtmosphere(rand(SYSTEM_FORMULAS.atmosphere));
    setSelectedColorGrading(rand(SYSTEM_FORMULAS.color_grading));
    setSelectedCamera(rand(SYSTEM_FORMULAS.camera));
    setSelectedEnvironment(rand(SYSTEM_FORMULAS.environmental));
    setNegativeIndex(Math.floor(Math.random() * NEGATIVE_PROMPTS.length));
    
    const products = ["Fragrance Bottle", "Luxury Watch", "Skincare Jar", "Diamond Ring", "Wireless Earbuds", "Leather Handbag", "Premium Champagne Bottle"];
    setProductType(products[Math.floor(Math.random() * products.length)]);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Header and Randomize */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-4">
        <div>
          <span className="text-[10px] tracking-widest text-amber-500 font-mono uppercase block">
            AETHERIS STUDIO ENGINE
          </span>
          <h2 className="text-xl font-serif text-zinc-100 flex items-center gap-2">
            Luxury Campaign Prompt Builder
          </h2>
          <p className="text-xs text-zinc-400">
            Select high-end commercial art-direction parameters to assemble an impossible campaign visual.
          </p>
        </div>
        <button
          onClick={randomizeAll}
          className="px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-zinc-700 transition-all cursor-pointer self-stretch sm:self-auto justify-center"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Randomize Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Selection Columns */}
        <div className="lg:col-span-8 space-y-5">
          {/* Row 1: Product & Base Campaign */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                1. Target Product Type
              </label>
              <input
                type="text"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all"
                placeholder="e.g. Fragrance Bottle, Premium Watch..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                2. Base Campaign Concept
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {CAMPAIGN_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Environment & Pedestal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                3. Environmental Formula
              </label>
              <select
                value={selectedEnvironment}
                onChange={(e) => setSelectedEnvironment(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {SYSTEM_FORMULAS.environmental.map((env) => (
                  <option key={env.id} value={env.id}>
                    {env.name}
                  </option>
                ))}
              </select>
              <span className="text-[10px] text-zinc-500 block leading-tight">
                {environmentObj.description}
              </span>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                4. Pedestal & Base Material
              </label>
              <select
                value={selectedPedestal}
                onChange={(e) => setSelectedPedestal(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {SYSTEM_FORMULAS.pedestal.map((ped) => (
                  <option key={ped.id} value={ped.id}>
                    {ped.name}
                  </option>
                ))}
              </select>
              <span className="text-[10px] text-zinc-500 block leading-tight">
                {pedestalObj.description}
              </span>
            </div>
          </div>

          {/* Row 3: Lighting & Composition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                5. Lighting System
              </label>
              <select
                value={selectedLighting}
                onChange={(e) => setSelectedLighting(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {SYSTEM_FORMULAS.lighting.map((light) => (
                  <option key={light.id} value={light.id}>
                    {light.name}
                  </option>
                ))}
              </select>
              <span className="text-[10px] text-zinc-500 block leading-tight">
                {lightingObj.description}
              </span>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                6. Composition Geometry
              </label>
              <select
                value={selectedComposition}
                onChange={(e) => setSelectedComposition(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {SYSTEM_FORMULAS.composition.map((comp) => (
                  <option key={comp.id} value={comp.id}>
                    {comp.name}
                  </option>
                ))}
              </select>
              <span className="text-[10px] text-zinc-500 block leading-tight">
                {compositionObj.description}
              </span>
            </div>
          </div>

          {/* Row 4: Color Grading & Atmosphere */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                7. Luxury Color Palette
              </label>
              <select
                value={selectedColorGrading}
                onChange={(e) => setSelectedColorGrading(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {SYSTEM_FORMULAS.color_grading.map((cg) => (
                  <option key={cg.id} value={cg.id}>
                    {cg.name}
                  </option>
                ))}
              </select>
              <span className="text-[10px] text-zinc-500 block leading-tight">
                {colorGradingObj.description}
              </span>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                8. Premium Atmosphere
              </label>
              <select
                value={selectedAtmosphere}
                onChange={(e) => setSelectedAtmosphere(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {SYSTEM_FORMULAS.atmosphere.map((atm) => (
                  <option key={atm.id} value={atm.id}>
                    {atm.name}
                  </option>
                ))}
              </select>
              <span className="text-[10px] text-zinc-500 block leading-tight">
                {atmosphereObj.description}
              </span>
            </div>
          </div>

          {/* Row 5: Camera Gear & Negative Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                9. Professional Camera & Lens
              </label>
              <select
                value={selectedCamera}
                onChange={(e) => setSelectedCamera(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {SYSTEM_FORMULAS.camera.map((cam) => (
                  <option key={cam.id} value={cam.id}>
                    {cam.name}
                  </option>
                ))}
              </select>
              <span className="text-[10px] text-zinc-500 block leading-tight">
                {cameraObj.description}
              </span>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block flex justify-between">
                <span>10. Universal Negative Block</span>
                <span className="text-amber-500/70 font-sans font-normal text-[9px]">25 Preset Shields</span>
              </label>
              <select
                value={negativeIndex}
                onChange={(e) => setNegativeIndex(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none transition-all"
              >
                {NEGATIVE_PROMPTS.map((neg, idx) => (
                  <option key={idx} value={idx}>
                    Preset Shield {idx + 1}: {neg.substring(0, 45)}...
                  </option>
                ))}
              </select>
              <span className="text-[9px] text-zinc-500 block leading-tight italic truncate">
                Defends against: &ldquo;{NEGATIVE_PROMPTS[negativeIndex]}&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="lg:col-span-4 bg-zinc-950 p-5 rounded-xl border border-zinc-800 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono tracking-widest text-amber-500 uppercase flex items-center gap-1">
                <Flame className="w-3 h-3" /> Live Prompt Compilation
              </span>
              <span className="text-[9px] text-zinc-500 font-mono">
                {customText.length} Chars
              </span>
            </div>
            
            <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/80 max-h-[300px] overflow-y-auto">
              <p className="text-[11px] text-zinc-300 leading-relaxed font-mono whitespace-pre-wrap select-all">
                {customText}
              </p>
            </div>

            <div className="bg-zinc-900/30 p-2.5 rounded border border-zinc-800/40 space-y-1">
              <div className="flex justify-between text-[9px] text-zinc-500">
                <span>ESTIMATED TOKENS:</span>
                <span className="font-mono text-zinc-400">~{Math.round(customText.length / 4.1)}</span>
              </div>
              <div className="flex justify-between text-[9px] text-zinc-500">
                <span>MIDJOURNEY IW SUITE:</span>
                <span className="font-mono text-amber-500">--iw 2.0 (Recommended)</span>
              </div>
              <div className="flex justify-between text-[9px] text-zinc-500">
                <span>FLUX STRENGTH VALUE:</span>
                <span className="font-mono text-cyan-400">0.3 - 0.45 strength</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-zinc-900">
            <button
              onClick={handleCopy}
              className="w-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-zinc-950 text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy Compiled Prompt
                </>
              )}
            </button>

            <button
              onClick={handleSave}
              className={`w-full text-xs font-semibold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isSaved
                  ? "bg-zinc-800 text-amber-400 border border-amber-500/20"
                  : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800"
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-amber-400 text-amber-400" : ""}`} />
              {isSaved ? "Saved to Campaign Bible" : "Save to Campaign Bible"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
