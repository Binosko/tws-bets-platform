import { useState } from "react";
import { BookOpen, Layers, Target, Settings, Copy, Check, HelpCircle } from "lucide-react";

interface FormulaPreset {
  name: string;
  tagline: string;
  anatomy: string;
  description: string;
  midjourneyCode: string;
}

const PRESETS: FormulaPreset[] = [
  {
    name: "The Billion-Dollar Fragrance Formula",
    tagline: "Inspired by Dior Sauvage & Chanel Bleu campaign visuals",
    anatomy: "[Brand Product] + Centered Symmetrical Column + Cinematic Chiaroscuro Window Beam + Floating Gold Leaf Flecks + Muted Gold & Champagne Color Grade + Phase One 80mm f/8 Lens + Deep Shadows",
    description: "Ideal for perfume, cologne, premium liquor, and luxury accessories. Focuses on deep shadow absorption (chiaroscuro), glowing gold highlights, and classical architecture to establish an elite history and heritage.",
    midjourneyCode: "Commercial luxury advertising photography of [PRODUCT] positioned centered on a Carrara marble column. A single, razor-sharp beam of light cuts through the darkness, illuminating only the product bottle and casting a long, crisp shadow. Floating gold leaf flecks in the air. Muted gold and champagne color grading. Captured on Phase One XF 150MP, 80mm lens, f/8, crisp details --iw 2.0 --ar 16:9"
  },
  {
    name: "The Apple-Grade Tech Formula",
    tagline: "Clean, ultra-minimalist, future-oriented design aesthetic",
    anatomy: "[Brand Product] + Matte-White Circular Platform + Diffused Multi-Directional Studio Softbox + Brushed Titanium Sheets + Clean High-Key Air + Titanium Silver & Pure White Color Grade + Hasselblad 120mm Macro Lens + Recessed Floor LED Lines",
    description: "Designed for smartphones, earbuds, modern watches, and high-end skincare. Highlights clean lines, high-key white backgrounds, diffuse reflections, and brushed metals for an innovative, clinical, and precise feel.",
    midjourneyCode: "Commercial luxury product advertising in a futuristic heaven-tech style. The [PRODUCT] is suspended weightlessly in the center of an ultra-minimalist white laboratory chamber. Perfect curved white walls are accented by recessed warm LED strips that glow softly. Bathed in soft, multi-directional studio lights, creating clean metallic highlights. Graded in titanium silver and pure white. Hasselblad H6D-100c, 120mm macro, f/8 --iw 2.0 --ar 16:9"
  },
  {
    name: "The Vogue Fashion Editorial Formula",
    tagline: "High-fashion sensuality, soft drapery, and romantic grace",
    anatomy: "[Brand Product] + Heavy Silk Satin Fabric Folds + Low-Angle Golden Hour Sun + Floating White Feathers + Soft Pastel Rose & Lavender Color Grade + f/2.2 Shallow Depth of Field Lens + Organic Fluid Shadows",
    description: "Best for skincare creams, cosmetics, jewelry, and high-fashion accessories. Focuses on fabric textures, soft sunset backlight, and pastel gradient color grading to invoke sensory obsession, beauty, and touch.",
    midjourneyCode: "Commercial luxury advertising photography of [PRODUCT] nestled inside towering folds of structured, heavy silk satin fabric in a pale champagne-blush tone. Low-angle golden hour sun rays strike the product from behind, casting warm rim highlights. Delicate white feathers floating down. Graded in lavender and pale rose. Vogue editorial 90mm lens, f/2.2, shallow depth of field --iw 2.0 --ar 16:9"
  },
  {
    name: "The Divine Water Temple Spa Formula",
    tagline: "Tranquil wellness, deep hydration, and pure restoration",
    anatomy: "[Brand Product] + Semi-Submerged White Jade Step + Submerged Water Caustics + Concentric Ripples + Mediterranean Teal & Sapphire Color Grade + Phase One 90mm Macro Lens + Morning Mist Haze",
    description: "Perfect for serums, face oils, marine ingredients, and premium spas. Emphasizes clean water reflections, ripple caustics, and cool blue/teal tones to represent pure hydration, health, and natural peace.",
    midjourneyCode: "Commercial luxury advertising photography. The [PRODUCT] is resting on a semi-submerged white jade step inside an ancient, reflective water temple. Crystal clear water ripples outwards from the product base, creating beautiful, concentric rings. Columns rise from the water in the background. Twilight sky reflected. Graded in teal and sapphire. Phase One 150MP, 90mm lens, f/8 --iw 2.0 --ar 16:9"
  }
];

interface FormulaSystemHubProps {
  accessTier?: "basic" | "premium";
}

export default function FormulaSystemHub(_props: FormulaSystemHubProps) {
  const [activePreset, setActivePreset] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"pillars" | "presets" | "i2i">("pillars");

  const handleCopyPreset = (idx: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Intro Cover */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500/10 via-zinc-950 to-zinc-950 border border-amber-500/20 p-6">
        <div className="space-y-2 max-w-2xl">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase font-mono inline-block">
            Elite Masterclass Syllabus
          </span>
          <h2 className="text-2xl font-serif text-zinc-100">
            THE ULTIMATE LUXURY AD FORMULA SYSTEM
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Unlock the engineering structure behind billion-dollar campaigns. Learn how to arrange lighting, composition, architecture, and materials around any real product image without mutating its branding or geometry.
          </p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-zinc-800 gap-2 pb-1 overflow-x-auto scrollbar-thin">
        <button
          onClick={() => setActiveTab("pillars")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === "pillars"
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
              : "text-zinc-400 hover:text-zinc-200 border border-transparent"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" /> The 9 Pillars of Divine Art Direction
        </button>

        <button
          onClick={() => setActiveTab("presets")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === "presets"
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
              : "text-zinc-400 hover:text-zinc-200 border border-transparent"
          }`}
        >
          <Layers className="w-3.5 h-3.5" /> Campaign Blueprint Presets
        </button>

        <button
          onClick={() => setActiveTab("i2i")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === "i2i"
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
              : "text-zinc-400 hover:text-zinc-200 border border-transparent"
          }`}
        >
          <Settings className="w-3.5 h-3.5" /> Image-to-Image Settings Guide
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "pillars" && (
        <div className="space-y-6">
          {/* Prompt Blueprint Diagram */}
          <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-900">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-amber-400" /> The Luxury Prompt Anatomy Blueprint
            </h3>
            
            {/* Visual Node Diagram */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg">
                <div className="text-[9px] text-zinc-500 font-mono">1. PRODUCT BASE</div>
                <div className="text-[11px] font-bold text-zinc-300 mt-0.5">Real Product Photo</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg flex items-center justify-center font-mono text-zinc-600 text-lg">
                +
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg">
                <div className="text-[9px] text-zinc-500 font-mono">2. PEDESTAL / BASE</div>
                <div className="text-[11px] font-bold text-amber-400 mt-0.5">e.g. Carrara Column</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg flex items-center justify-center font-mono text-zinc-600 text-lg">
                +
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg">
                <div className="text-[9px] text-zinc-500 font-mono">3. ENVIRONMENT</div>
                <div className="text-[11px] font-bold text-cyan-400 mt-0.5">e.g. Golden Clouds</div>
              </div>
              
              <div className="col-span-2 md:col-span-5 py-1 text-zinc-600 font-mono text-xs text-center">&darr;</div>

              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg">
                <div className="text-[9px] text-zinc-500 font-mono">4. LIGHTING</div>
                <div className="text-[11px] font-bold text-zinc-300 mt-0.5">Chiaroscuro Beam</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg">
                <div className="text-[9px] text-zinc-500 font-mono">5. ATMOSPHERE</div>
                <div className="text-[11px] font-bold text-zinc-300 mt-0.5">Floating Gold Flecks</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg">
                <div className="text-[9px] text-zinc-500 font-mono">6. COMPOSITION</div>
                <div className="text-[11px] font-bold text-zinc-300 mt-0.5">Centered Symmetry</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg">
                <div className="text-[9px] text-zinc-500 font-mono">7. LENS TYPE</div>
                <div className="text-[11px] font-bold text-zinc-300 mt-0.5">Phase One 80mm</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg">
                <div className="text-[9px] text-zinc-500 font-mono">8. COLOR GRADE</div>
                <div className="text-[11px] font-bold text-zinc-300 mt-0.5">Muted Champagne</div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-zinc-900/60 rounded-lg border border-zinc-800/80 text-[10px] text-zinc-400 font-mono leading-relaxed text-center">
              <span className="text-amber-500 font-bold">Rule of Thumb:</span> Place the product at the center of the prompt block, describe the physical geometry next, then add atmospheric layers, and finish with photographic lens specs and a negative shield.
            </div>
          </div>

          {/* Explanation of the 9 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                name: "Cinematic Lighting",
                desc: "Never use AI buzzwords like 'photorealistic'. Use professional studio terms: 'chiaroscuro window beam', 'overhead softbox', 'rim silhouette', 'submerged caustics'. This communicates lighting paths and shadow ratios to the AI."
              },
              {
                num: "02",
                name: "Atmosphere & Dynamics",
                desc: "Introduce secondary movement or micro-textures to add value: 'floating gold leaf flecks', 'water vapor mist', 'bioluminescent spores'. These act as bokeh points and keep the environment organic and alive."
              },
              {
                num: "03",
                name: "Classical Architecture",
                desc: "Incorporate noble architectural textures: 'fluted marble column capitals', 'brutalist concrete arches', 'travertine platforms'. Architecture gives products weight, historic gravity, and structural grandeur."
              },
              {
                num: "04",
                name: "High-End Materials",
                desc: "Use textures that reflect luxury cost: 'polished black obsidian', 'Carrara marble', 'brushed titanium', 'heavy silk satin'. Specular metallic highlights and satin folds are signs of high-end creative direction."
              },
              {
                num: "05",
                name: "Premium Environments",
                desc: "Transport the product to impossible but beautiful worlds: 'high-altitude cloud canyons', 'submerged water temples', 'lunar craters', 'mystic forest pools'. This isolates the product into its own campaign world."
              },
              {
                num: "06",
                name: "Cinematic Composition",
                desc: "Define the layout grid: 'centered symmetry', 'rule of thirds horizontal split', 'low-angle look-up'. Imposing symmetry is used by fragrances; clean whitespace is preferred by technology."
              },
              {
                num: "07",
                name: "Professional Lenses",
                desc: "Define high-end medium format digital cameras: 'Phase One XF 150MP', 'Hasselblad H6D-100c', paired with '80mm lens' or '120mm macro'. Paired with 'f/8 aperture' or 'f/2.2 shallow focus'."
              },
              {
                num: "08",
                name: "Luxury Colour Grading",
                desc: "Specify exact colorways: 'muted gold and champagne', 'obsidian and deep charcoal', 'teal and sapphire', 'lavender and pale rose'. This dictates the campaign season, tone, and brand identity."
              },
              {
                num: "09",
                name: "Luxury Symbolism",
                desc: "Employ mythological objects to elevate status: 'solid gold apples', 'gold laurel wreaths', 'white lilies'. These objects trigger luxury associations of victory, beauty, and absolute prestige."
              }
            ].map((pillar) => (
              <div key={pillar.num} className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-2 hover:border-zinc-700 transition-all">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-amber-500 font-bold">{pillar.num}</span>
                  <span className="text-[9px] font-mono text-zinc-600">PILLAR</span>
                </div>
                <h4 className="text-sm font-serif font-bold text-zinc-200">{pillar.name}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "presets" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Preset Selector List */}
          <div className="lg:col-span-4 space-y-2">
            {PRESETS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setActivePreset(idx)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex flex-col gap-1 cursor-pointer ${
                  activePreset === idx
                    ? "bg-zinc-800 border-amber-500/40 shadow-lg text-zinc-100"
                    : "bg-zinc-950 border-zinc-850 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span className="text-xs font-serif font-bold">{preset.name}</span>
                <span className="text-[10px] text-zinc-500 line-clamp-1">{preset.tagline}</span>
              </button>
            ))}
          </div>

          {/* Active Preset Details */}
          <div className="lg:col-span-8 bg-zinc-950 p-5 rounded-xl border border-zinc-800 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-serif font-bold text-amber-400">
                  {PRESETS[activePreset].name}
                </h3>
                <span className="text-[10px] text-zinc-400 italic block mt-0.5">
                  {PRESETS[activePreset].tagline}
                </span>
              </div>

              <div className="bg-zinc-900/60 p-3.5 rounded border border-zinc-800 text-xs">
                <span className="text-[9px] font-mono text-zinc-500 block mb-1 uppercase tracking-wider">
                  Art Direction Anatomy Map:
                </span>
                <p className="font-mono text-zinc-300 leading-relaxed">
                  {PRESETS[activePreset].anatomy}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-zinc-500 font-mono block uppercase">
                  Description & Use Cases:
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {PRESETS[activePreset].description}
                </p>
              </div>

              <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-850">
                <span className="text-[10px] font-mono text-amber-500/80 block mb-1">
                  COMPILED TEMPLATE CODE:
                </span>
                <p className="text-[11px] text-zinc-300 font-mono italic leading-relaxed select-all">
                  {PRESETS[activePreset].midjourneyCode}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleCopyPreset(activePreset, PRESETS[activePreset].midjourneyCode)}
              className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold py-2 px-4 rounded text-xs transition-colors self-start flex items-center gap-1.5 cursor-pointer"
            >
              {copiedIndex === activePreset ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied Formula!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Master Formula Code
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {activeTab === "i2i" && (
        <div className="space-y-6">
          <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-4">
            <h3 className="text-sm font-serif font-bold text-zinc-200 flex items-center gap-2">
              <Settings className="w-4.5 h-4.5 text-amber-500" /> How to Preserve the Real Product Image
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              When working with image-to-image AI tools, the biggest risk is that the AI will redesign your product, warp your logo text, or create a fantasy object. Follow these settings for Midjourney, Stable Diffusion, and FLUX to ensure the product remains commercially believable while the environment transforms around it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Midjourney column */}
            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-3">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider border-b border-zinc-800 pb-2">
                1. Midjourney v6 Setup
              </h4>
              <ul className="space-y-3 text-xs text-zinc-400">
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">Image Weight (IW):</strong>
                  Set <code className="text-amber-300">--iw 2.0</code>. This is the absolute maximum weight. It forces Midjourney to follow your uploaded reference product photo strictly.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">Aspect Ratio (AR):</strong>
                  Ensure you specify your desired ratio, e.g., <code className="text-amber-300">--ar 16:9</code> for banners or <code className="text-amber-300">--ar 4:5</code> for Instagram.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">Stylize (S):</strong>
                  Keep stylize moderate, e.g., <code className="text-amber-300">--s 150</code> to <code className="text-amber-300">--s 250</code>. Too high will cause AI to alter packaging shape.
                </li>
              </ul>
            </div>

            {/* Stable Diffusion column */}
            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-3">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-zinc-800 pb-2">
                2. Stable Diffusion / ControlNet
              </h4>
              <ul className="space-y-3 text-xs text-zinc-400">
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">ControlNet Tile model:</strong>
                  Use the Tile / Resample ControlNet model at weight <code className="text-cyan-300">1.0</code>. It preserves details of the original product perfectly.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">IP-Adapter Product:</strong>
                  Load the product image into IP-Adapter with a high attention weight of <code className="text-cyan-300">0.8</code> to <code className="text-cyan-300">1.0</code>.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">Denoising Strength:</strong>
                  If doing direct image-to-image without ControlNet, keep denoising strength low, around <code className="text-cyan-300">0.35</code> to <code className="text-cyan-300">0.45</code>.
                </li>
              </ul>
            </div>

            {/* FLUX column */}
            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-3">
              <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider border-b border-zinc-800 pb-2">
                3. FLUX.1 Dev / Schnell
              </h4>
              <ul className="space-y-3 text-xs text-zinc-400">
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">Denoise Scale:</strong>
                  Run image-to-image with a denoise value of <code className="text-purple-300">0.30</code> to <code className="text-purple-300">0.45</code>. A higher value will morph logo text.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">FLUX ControlNet Canny:</strong>
                  Apply a Canny edge ControlNet at weight <code className="text-purple-300">0.75</code> to keep the exact silhouette outline of the bottle/object.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-zinc-300 block mb-0.5">Text Preservation:</strong>
                  FLUX is excellent at text, but maintaining a low denoise is still vital to prevent font weight shifts.
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Warning / Help Tip */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900 flex items-start gap-3 text-xs text-zinc-500 font-mono">
            <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-zinc-400">Important Advice for E-commerce:</strong> If the generated visual looks perfect but the product label text has a minor typo, do not re-generate the image. Simply open Photoshop, place the original raw product shot on a top layer, mask it, and blend the original sharp packaging/logo back onto the AI-generated luxury background. This takes 2 minutes and guarantees commercial perfection.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
