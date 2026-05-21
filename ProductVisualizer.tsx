import React, { useState } from "react";
import { Sparkles, Sliders, Eye, EyeOff, RotateCcw } from "lucide-react";

interface ProductPreset {
  id: string;
  name: string;
  category: string;
  description: string;
  campaignTitle: string;
  categoryName: string;
  promptApplied: string;
}

const PRODUCTS: ProductPreset[] = [
  {
    id: "fragrance",
    name: "AURA Eau de Parfum",
    category: "Fragrance / Cosmetics",
    description: "A clean glass bottle transformed into a divine celestial sunrise campaign.",
    campaignTitle: "Celestial Heaven Campaign",
    categoryName: "Golden Hour Cloud Sanctuary",
    promptApplied: "Commercial luxury advertising photography of the AURA bottle positioned centered on a polished white onyx pedestal. The pedestal floats within an endless ocean of soft, voluminous clouds at sunrise. Divine beams of golden light pierce through a grand classical archway in the background. The atmosphere is filled with a soft golden mist and microscopic floating gold dust. Captured on a Phase One XF 150MP, 80mm lens, f/8, crisp details, soft shadows."
  },
  {
    id: "watch",
    name: "CHRONOS Tourbillon",
    category: "Luxury Watches",
    description: "A flat mechanical watch transformed into a refractive crystal chamber.",
    campaignTitle: "Floating Crystal Worlds",
    categoryName: "The Prism Sanctuary",
    promptApplied: "Commercial luxury advertising photography. The CHRONOS watch is suspended weightlessly inside a floating, perfectly transparent glass cube. The cube is surrounded by massive, raw quartz crystal pillars that float in a dark, reflective space. Multi-faceted light refraction creates rainbow light leaks across the product, while preserving its exact colors and details. Photographed on a Hasselblad H6D-100c, 120mm macro lens, f/8, crisp edge-to-edge focus."
  },
  {
    id: "skincare",
    name: "LUMIÈRE Hydra-Serum",
    category: "Skincare / Serum",
    description: "A simple dropper bottle transformed into a reflective water temple sanctuary.",
    campaignTitle: "Divine Water Temple",
    categoryName: "Sacred Water Sanctuary",
    promptApplied: "Commercial luxury advertising photography. The LUMIÈRE bottle is resting on a semi-submerged white jade step inside an ancient, reflective water temple. Crystal clear water ripples outwards from the product base, creating beautiful, concentric rings. In the background, elegant classical columns rise from the water, silhouetted against a soft pastel-lavender sunset sky. Shot on Phase One 150MP, 90mm lens, f/8, sharp reflection of the product in the water."
  },
  {
    id: "tech",
    name: "NEBULA Pro Earbuds",
    category: "High-End Technology",
    description: "A simple wireless case transformed into a futuristic heaven-tech sanctuary.",
    campaignTitle: "Futuristic Heaven-Tech",
    categoryName: "The White Room Sanctuary",
    promptApplied: "Commercial luxury product advertising in a futuristic heaven-tech style. The NEBULA case is suspended weightlessly in the center of an ultra-minimalist white laboratory chamber. Perfect curved white walls are accented by recessed warm LED strips that glow softly. In the background, a large circular window reveals a sea of golden clouds at sunrise. The product is lit by soft, multi-directional studio lights, creating clean metallic highlights."
  }
];

export default function ProductVisualizer() {
  const [selectedProduct, setSelectedProduct] = useState<string>("fragrance");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [showPrompt, setShowPrompt] = useState<boolean>(true);

  const product = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(product.promptApplied);
    alert("Campaign Prompt copied to clipboard!");
  };

  // SVGs for the "Before" (Raw Studio Shot) and "After" (Campaign Transformation)
  const renderProductSVGs = () => {
    switch (product.id) {
      case "fragrance":
        return (
          <>
            {/* BACKGROUND BEFORE: Plain studio light-gray */}
            <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-radial from-neutral-100 to-neutral-200 opacity-60 absolute" />
              <span className="absolute bottom-6 left-6 text-xs tracking-wider text-neutral-400 font-mono uppercase bg-neutral-300/40 px-2 py-1 rounded">
                Raw Product Upload
              </span>
            </div>

            {/* BACKGROUND AFTER: Celestial Heaven (Clouds, Sunrise, Arches, Pillars) */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
              }}
            >
              {/* Sky Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-amber-900/60 to-amber-900" />
              
              {/* Sun Light Rays */}
              <svg className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen" viewBox="0 0 500 400">
                <defs>
                  <radialGradient id="sun-glow" cx="50%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                    <stop offset="20%" stopColor="#fcd34d" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="250" cy="120" r="220" fill="url(#sun-glow)" />
                {/* Light Ray paths */}
                <path d="M 250 120 L 0 400 L 80 400 Z" fill="#fef08a" opacity="0.15" />
                <path d="M 250 120 L 150 400 L 230 400 Z" fill="#fef08a" opacity="0.2" />
                <path d="M 250 120 L 320 400 L 400 400 Z" fill="#fef08a" opacity="0.2" />
                <path d="M 250 120 L 450 400 L 500 400 Z" fill="#fef08a" opacity="0.15" />
              </svg>

              {/* Classical Columns & Archway (After Background) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay">
                <svg className="w-full h-full" viewBox="0 0 500 400" fill="none">
                  <path d="M 120 400 L 120 180 A 130 130 0 0 1 380 180 L 380 400" stroke="#fcd34d" strokeWidth="8" />
                  <line x1="80" y1="400" x2="80" y2="150" stroke="#fff" strokeWidth="12" />
                  <line x1="420" y1="400" x2="420" y2="150" stroke="#fff" strokeWidth="12" />
                </svg>
              </div>

              {/* Infinite Sea of Clouds (After Background Bottom) */}
              <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-amber-950 via-amber-900 to-transparent">
                <svg className="absolute bottom-0 w-full h-28 text-amber-100/20" viewBox="0 0 500 100" preserveAspectRatio="none" fill="currentColor">
                  <path d="M0,50 C100,20 150,80 250,50 C350,20 400,80 500,50 L500,100 L0,100 Z" />
                  <path d="M0,70 C80,50 180,90 280,70 C380,50 420,90 500,70 L500,100 L0,100 Z" opacity="0.5" />
                </svg>
              </div>

              {/* Polished White Onyx Pedestal (After) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-32 flex flex-col items-center">
                <div className="w-40 h-8 bg-gradient-to-r from-amber-50 via-white to-amber-100 rounded-t-xl shadow-lg border border-amber-200/40 relative z-10 flex items-center justify-center">
                  {/* Pedestal Top Gloss reflection */}
                  <div className="absolute inset-x-2 top-0.5 h-1 bg-white opacity-80 rounded-full" />
                </div>
                <div className="w-36 h-24 bg-gradient-to-b from-amber-100 via-amber-50 to-amber-200/80 shadow-2xl relative">
                  {/* Fluting columns details */}
                  <div className="absolute inset-y-0 left-4 w-1 bg-white/40" />
                  <div className="absolute inset-y-0 left-8 w-1 bg-white/40" />
                  <div className="absolute inset-y-0 right-8 w-1 bg-white/40" />
                  <div className="absolute inset-y-0 right-4 w-1 bg-white/40" />
                </div>
              </div>

              {/* Sparkles / Gold Dust */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping" />
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
                <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-bounce" style={{ animationDuration: '4s' }} />
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full opacity-70 animate-pulse" />
              </div>

              <span className="absolute bottom-6 right-6 text-xs tracking-wider text-amber-200 font-mono uppercase bg-amber-950/80 border border-amber-500/20 px-2 py-1 rounded">
                AI Luxury Transformation Applied
              </span>
            </div>

            {/* THE PRODUCT BOTTLE OVERLAY */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-56 h-72 drop-shadow-2xl overflow-visible" viewBox="0 0 200 300">
                <defs>
                  {/* Liquid Gradient Before (Dull White/Water) */}
                  <linearGradient id="fragrance-liquid-before" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#e5e7eb" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.3" />
                  </linearGradient>
                  
                  {/* Liquid Gradient After (Rich Golden Honey) */}
                  <linearGradient id="fragrance-liquid-after" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="0.75" />
                    <stop offset="40%" stopColor="#fbbf24" stopOpacity="0.85" />
                    <stop offset="85%" stopColor="#d97706" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#78350f" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* BOTTLE CAP */}
                {/* Cap Before (Flat black plastic) */}
                <rect x="75" y="20" width="50" height="35" rx="3" fill="#1f2937" stroke="#111827" strokeWidth="1" />
                <line x1="85" y1="20" x2="85" y2="55" stroke="#374151" />
                <line x1="100" y1="20" x2="100" y2="55" stroke="#374151" />
                <line x1="115" y1="20" x2="115" y2="55" stroke="#374151" />

                {/* Cap After (Golden Reflective Cap, only visible on the right of the slider) */}
                <g style={{ clipPath: `polygon(${sliderPosition * 200 / 100}% -50px, 300px -50px, 300px 400px, ${sliderPosition * 200 / 100}% 400px)` }}>
                  <rect x="75" y="20" width="50" height="35" rx="3" fill="url(#liquid-after-cap)" />
                  {/* Metallic reflections */}
                  <linearGradient id="liquid-after-cap" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#78350f" />
                    <stop offset="25%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#fef08a" />
                    <stop offset="75%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>
                  <rect x="75" y="20" width="50" height="35" rx="3" fill="url(#liquid-after-cap)" stroke="#fbbf24" strokeWidth="0.5" />
                  {/* Star flare glint */}
                  <path d="M 115 25 L 115 35 M 110 30 L 120 30" stroke="#fff" strokeWidth="1.5" opacity="0.9" />
                  <circle cx="115" cy="30" r="1.5" fill="#fff" />
                </g>

                {/* BOTTLE NECK */}
                <rect x="88" y="55" width="24" height="15" fill="#d1d5db" opacity="0.8" />

                {/* BOTTLE BODY GLASS */}
                {/* Before Glass Body */}
                <rect x="35" y="70" width="130" height="180" rx="16" fill="url(#fragrance-liquid-before)" stroke="#9ca3af" strokeWidth="2.5" />
                
                {/* Before Label */}
                <rect x="55" y="110" width="90" height="85" rx="4" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                <text x="100" y="145" fontFamily="serif" fontSize="16" fontWeight="bold" fill="#111827" textAnchor="middle" letterSpacing="2">AURA</text>
                <text x="100" y="165" fontFamily="sans-serif" fontSize="6" fontWeight="semibold" fill="#4b5563" textAnchor="middle" letterSpacing="3">EAU DE PARFUM</text>
                <line x1="75" y1="175" x2="125" y2="175" stroke="#9ca3af" strokeWidth="0.5" />

                {/* After Glass Body (Clipping mapped to slider position) */}
                <g style={{ clipPath: `polygon(${sliderPosition * 200 / 100}% -50px, 300px -50px, 300px 400px, ${sliderPosition * 200 / 100}% 400px)` }}>
                  {/* Glass bottle with rich golden liquid */}
                  <rect x="35" y="70" width="130" height="180" rx="16" fill="url(#fragrance-liquid-after)" stroke="#f59e0b" strokeWidth="3" />
                  
                  {/* Internal bottle reflections */}
                  <rect x="42" y="77" width="116" height="166" rx="10" fill="none" stroke="#fff" strokeWidth="1" opacity="0.35" />
                  
                  {/* Glass refraction curves */}
                  <path d="M 40 85 Q 90 75 160 85" stroke="#fff" strokeWidth="2" fill="none" opacity="0.25" />
                  <path d="M 40 230 Q 100 245 160 230" stroke="#fff" strokeWidth="2.5" fill="none" opacity="0.2" />

                  {/* Refined Label (Glowing Gold Borders) */}
                  <rect x="55" y="110" width="90" height="85" rx="4" fill="#000000" stroke="#fbbf24" strokeWidth="1.5" shadow-lg="true" />
                  <text x="100" y="145" fontFamily="serif" fontSize="17" fontWeight="bold" fill="#fcd34d" textAnchor="middle" letterSpacing="3">AURA</text>
                  <text x="100" y="165" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#fef08a" textAnchor="middle" letterSpacing="4.5">EAU DE PARFUM</text>
                  <line x1="70" y1="178" x2="130" y2="178" stroke="#d97706" strokeWidth="0.75" />
                  <text x="100" y="187" fontFamily="sans-serif" fontSize="5" fill="#a1a1aa" textAnchor="middle">PARIS &bull; NEW YORK</text>
                </g>
              </svg>
            </div>
          </>
        );

      case "watch":
        return (
          <>
            {/* BACKGROUND BEFORE: Plain white studio */}
            <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
              <div className="w-full h-full bg-radial from-white to-neutral-200 absolute opacity-50" />
              <span className="absolute bottom-6 left-6 text-xs tracking-wider text-neutral-400 font-mono uppercase bg-neutral-300/40 px-2 py-1 rounded">
                Raw Product Upload
              </span>
            </div>

            {/* BACKGROUND AFTER: Dark Crystal World (Obsidian, Prism, Blue Laser Lines) */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
              }}
            >
              {/* Dark Space Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-slate-950 to-zinc-900" />
              
              {/* Blue Laser Grid Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 500 400">
                <defs>
                  <linearGradient id="laser-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#020617" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 350 L 500 350 M 0 300 L 500 300 M 0 250 L 500 250 M 0 200 L 500 200" stroke="#0891b2" strokeWidth="0.5" opacity="0.3" />
                <path d="M 50 400 L 250 200 M 150 400 L 250 200 M 250 400 L 250 200 M 350 400 L 250 200 M 450 400 L 250 200" stroke="#06b6d4" strokeWidth="0.5" opacity="0.2" />
                
                {/* Horizontal glowing scan line */}
                <line x1="0" y1="260" x2="500" y2="260" stroke="#22d3ee" strokeWidth="1" opacity="0.8" />
              </svg>

              {/* Floating Quartz Pillar Silhouettes */}
              <div className="absolute inset-0 flex items-center justify-between px-6 opacity-20 pointer-events-none">
                <svg className="w-24 h-64 text-slate-700" viewBox="0 0 100 300" fill="currentColor">
                  <polygon points="50,0 90,40 90,260 50,300 10,260 10,40" />
                  <polyline points="50,0 50,300" stroke="#fff" strokeWidth="0.5" />
                </svg>
                <svg className="w-24 h-64 text-slate-700" viewBox="0 0 100 300" fill="currentColor">
                  <polygon points="50,0 90,40 90,260 50,300 10,260 10,40" />
                  <polyline points="50,0 50,300" stroke="#fff" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Polished Obsidian Mirror Pedestal */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 h-28 flex flex-col items-center">
                <polygon points="10,0 210,0 190,40 30,40" fill="#090d16" stroke="#0891b2" strokeWidth="1" className="w-52 h-10 shadow-2xl relative z-10" />
                <div className="w-44 h-20 bg-gradient-to-b from-slate-950 to-zinc-900 border-x border-b border-slate-800 shadow-inner" />
              </div>

              {/* Suspending Glass Polyhedron (Prism structure) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-72 h-72 opacity-65 overflow-visible" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="prism-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                      <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.1" />
                      <stop offset="70%" stopColor="#c084fc" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {/* Geometric Lines of Glass Cube */}
                  <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="url(#prism-glass)" stroke="#e2e8f0" strokeWidth="0.75" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#e2e8f0" strokeWidth="0.5" />
                  <line x1="30" y1="60" x2="100" y2="100" stroke="#e2e8f0" strokeWidth="0.5" />
                  <line x1="170" y1="60" x2="100" y2="100" stroke="#e2e8f0" strokeWidth="0.5" />
                  <line x1="30" y1="140" x2="100" y2="100" stroke="#e2e8f0" strokeWidth="0.5" />
                  <line x1="170" y1="140" x2="100" y2="100" stroke="#e2e8f0" strokeWidth="0.5" />
                </svg>
              </div>

              <span className="absolute bottom-6 right-6 text-xs tracking-wider text-cyan-200 font-mono uppercase bg-slate-950/80 border border-cyan-500/20 px-2 py-1 rounded">
                AI Luxury Transformation Applied
              </span>
            </div>

            {/* THE WATCH OVERLAY */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-56 h-56 drop-shadow-2xl overflow-visible" viewBox="0 0 200 200">
                {/* STRAP */}
                <rect x="80" y="20" width="40" height="160" rx="4" fill="#1f2937" stroke="#111827" strokeWidth="1" />
                <path d="M 80 40 H 120 M 80 60 H 120 M 80 140 H 120 M 80 160 H 120" stroke="#374151" strokeWidth="0.5" />

                {/* Strap After (Metallic steel details, only right of slider) */}
                <g style={{ clipPath: `polygon(${sliderPosition * 200 / 100}% -50px, 300px -50px, 300px 400px, ${sliderPosition * 200 / 100}% 400px)` }}>
                  <rect x="80" y="20" width="40" height="160" rx="4" fill="#374151" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M 80 40 H 120 M 80 60 H 120 M 80 80 H 120 M 80 120 H 120 M 80 140 H 120 M 80 160 H 120" stroke="#6b7280" strokeWidth="1.5" />
                  <rect x="92" y="20" width="16" height="160" fill="#4b5563" opacity="0.3" />
                </g>

                {/* DIAL BEZEL */}
                <circle cx="100" cy="100" r="50" fill="#111827" stroke="#4b5563" strokeWidth="5" />
                
                {/* Watch face ticks */}
                <circle cx="100" cy="100" r="42" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3 7" />

                {/* Dial Center Hands Before */}
                <circle cx="100" cy="100" r="4" fill="#f3f4f6" />
                {/* Hour / Minute / Second hand */}
                <line x1="100" y1="100" x2="100" y2="70" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="100" y1="100" x2="125" y2="100" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <line x1="100" y1="100" x2="80" y2="120" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" />

                {/* Dial Bezel and Tourbillon After (Clipping mapped to slider position) */}
                <g style={{ clipPath: `polygon(${sliderPosition * 200 / 100}% -50px, 300px -50px, 300px 400px, ${sliderPosition * 200 / 100}% 400px)` }}>
                  {/* Deep metallic bezel */}
                  <circle cx="100" cy="100" r="50" fill="#030712" stroke="url(#metallic-chrome)" strokeWidth="5" />
                  <linearGradient id="metallic-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9ca3af" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#374151" />
                  </linearGradient>
                  
                  {/* Glowing inner bezel ring */}
                  <circle cx="100" cy="100" r="45" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.6" />

                  {/* Tourbillon Mechanism Detail */}
                  <g transform="translate(100, 125)">
                    <circle cx="0" cy="0" r="14" fill="#1f2937" stroke="#e2e8f0" strokeWidth="1" />
                    {/* Gear teeth */}
                    <circle cx="0" cy="0" r="11" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="2 2.5" />
                    {/* Balance wheel line */}
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="#e2e8f0" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="3" fill="#ef4444" />
                  </g>

                  {/* Chrono Subdials */}
                  <circle cx="75" cy="90" r="10" fill="none" stroke="#4b5563" strokeWidth="1" />
                  <line x1="75" y1="90" x2="78" y2="82" stroke="#22d3ee" strokeWidth="1" />

                  <circle cx="125" cy="90" r="10" fill="none" stroke="#4b5563" strokeWidth="1" />
                  <line x1="125" y1="90" x2="120" y2="95" stroke="#22d3ee" strokeWidth="1" />

                  {/* Glowing Premium Hands */}
                  <circle cx="100" cy="100" r="5" fill="#22d3ee" />
                  <line x1="100" y1="100" x2="100" y2="68" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  {/* Luminous paint tip */}
                  <line x1="100" y1="72" x2="100" y2="69" stroke="#22d3ee" strokeWidth="2" />
                  
                  <line x1="100" y1="100" x2="128" y2="95" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="122" y1="97" x2="127" y2="96" stroke="#22d3ee" strokeWidth="1.5" />
                  
                  {/* Cyan sweeps hand */}
                  <line x1="100" y1="100" x2="75" y2="125" stroke="#22d3ee" strokeWidth="1" />
                  
                  {/* Sapphire Glass reflection sweep */}
                  <path d="M 58 75 Q 110 50 142 75" stroke="#fff" strokeWidth="3.5" fill="none" opacity="0.3" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </>
        );

      case "skincare":
        return (
          <>
            {/* BACKGROUND BEFORE: Plain green studio */}
            <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-emerald-100/50 to-neutral-200 absolute" />
              <span className="absolute bottom-6 left-6 text-xs tracking-wider text-neutral-400 font-mono uppercase bg-neutral-300/40 px-2 py-1 rounded">
                Raw Product Upload
              </span>
            </div>

            {/* BACKGROUND AFTER: Reflective Water Temple (Marble Pool, Columns, Lavender Sunset) */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
              }}
            >
              {/* Sunset Twilight Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-pink-900/40 to-slate-900" />
              
              {/* Temple columns rising out of water */}
              <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 500 400" fill="none">
                {/* Columns on left and right */}
                <rect x="25" y="0" width="30" height="280" fill="url(#col-grad)" />
                <rect x="75" y="0" width="20" height="280" fill="url(#col-grad)" opacity="0.6" />
                <rect x="400" y="0" width="20" height="280" fill="url(#col-grad)" opacity="0.6" />
                <rect x="445" y="0" width="30" height="280" fill="url(#col-grad)" />
                <linearGradient id="col-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#f3f4f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.3" />
                </linearGradient>
                {/* Column details */}
                <line x1="35" y1="0" x2="35" y2="280" stroke="#9ca3af" strokeWidth="0.5" />
                <line x1="45" y1="0" x2="45" y2="280" stroke="#9ca3af" strokeWidth="0.5" />
                <line x1="455" y1="0" x2="455" y2="280" stroke="#9ca3af" strokeWidth="0.5" />
              </svg>

              {/* Water Caustics Shimmer */}
              <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-slate-950/80 via-purple-950/40 to-transparent mix-blend-color-dodge">
                <svg className="w-full h-full opacity-40" viewBox="0 0 500 200">
                  <path d="M0,80 Q100,50 200,90 T400,70 T500,80 L500,200 L0,200 Z" fill="#c084fc" />
                  <path d="M0,100 Q150,70 250,110 T480,90 T500,100 L500,200 L0,200 Z" fill="#fb7185" opacity="0.6" />
                </svg>
              </div>

              {/* Wet Jade Stone Pedestal Step */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-52 h-20 flex flex-col items-center">
                {/* Jade block top */}
                <polygon points="15,0 195,0 185,25 25,25" fill="#14532d" stroke="#4ade80" strokeWidth="0.5" className="shadow-lg relative z-10" />
                {/* Jade block base */}
                <rect x="25" y="24" width="160" height="20" fill="#0f2f1d" />
                
                {/* Ripple concentric rings (Water ripple effect around the pedestal) */}
                <div className="absolute top-2 w-64 h-8 border border-emerald-400/30 rounded-full animate-ping opacity-70" style={{ animationDuration: '3s' }} />
                <div className="absolute top-2 w-48 h-6 border border-emerald-400/20 rounded-full animate-pulse opacity-50" />
              </div>

              {/* Soft Haze & Glowing Petals */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-pink-300 rounded-full blur-xs opacity-50 animate-pulse" />
              <div className="absolute top-1/3 right-1/3 w-2.5 h-2 bg-pink-200 rounded-full blur-xs opacity-60 animate-bounce" style={{ animationDuration: '5s' }} />

              <span className="absolute bottom-6 right-6 text-xs tracking-wider text-emerald-200 font-mono uppercase bg-emerald-950/80 border border-emerald-500/20 px-2 py-1 rounded">
                AI Luxury Transformation Applied
              </span>
            </div>

            {/* THE SKINCARE BOTTLE OVERLAY */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-48 h-64 drop-shadow-2xl overflow-visible" viewBox="0 0 200 300">
                <defs>
                  {/* Bottle liquid Before (Plain milk-white) */}
                  <linearGradient id="dropper-liquid-before" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f9fafb" />
                    <stop offset="50%" stopColor="#f3f4f6" />
                    <stop offset="100%" stopColor="#e5e7eb" />
                  </linearGradient>

                  {/* Bottle liquid After (Glowing Pearlescent Rose Jade) */}
                  <linearGradient id="dropper-liquid-after" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fb7185" stopOpacity="0.8" />
                    <stop offset="35%" stopColor="#fbcfe8" stopOpacity="0.9" />
                    <stop offset="65%" stopColor="#fff1f2" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#f472b6" stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {/* DROPPER CAP */}
                {/* Cap Before */}
                <rect x="75" y="10" width="50" height="40" rx="2" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" />
                <rect x="85" y="50" width="30" height="20" fill="#9ca3af" />

                {/* Cap After (Chrome Metallic Cap) */}
                <g style={{ clipPath: `polygon(${sliderPosition * 200 / 100}% -50px, 300px -50px, 300px 400px, ${sliderPosition * 200 / 100}% 400px)` }}>
                  <rect x="75" y="10" width="50" height="40" rx="2" fill="url(#silver-metallic)" stroke="#e2e8f0" strokeWidth="0.5" />
                  <rect x="85" y="50" width="30" height="20" fill="url(#silver-metallic)" />
                  <linearGradient id="silver-metallic" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4b5563" />
                    <stop offset="30%" stopColor="#d1d5db" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="70%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#374151" />
                  </linearGradient>
                  {/* Cap gloss reflection line */}
                  <rect x="90" y="10" width="4" height="40" fill="#fff" opacity="0.6" />
                </g>

                {/* BOTTLE BODY */}
                {/* Bottle Before */}
                <rect x="50" y="70" width="100" height="170" rx="20" fill="url(#dropper-liquid-before)" stroke="#9ca3af" strokeWidth="1.5" />
                <rect x="62" y="110" width="76" height="80" fill="#fff" stroke="#e5e7eb" strokeWidth="0.5" />
                <text x="100" y="140" fontFamily="serif" fontSize="13" fontWeight="bold" fill="#374151" textAnchor="middle" letterSpacing="1">LUMIÈRE</text>
                <text x="100" y="155" fontFamily="sans-serif" fontSize="5" fontWeight="semibold" fill="#6b7280" textAnchor="middle" letterSpacing="2">HYDRA-SERUM</text>
                <text x="100" y="170" fontFamily="sans-serif" fontSize="4.5" fill="#9ca3af" textAnchor="middle">1.0 FL. OZ. / 30ml</text>

                {/* Bottle After (Clipping mapped to slider position) */}
                <g style={{ clipPath: `polygon(${sliderPosition * 200 / 100}% -50px, 300px -50px, 300px 400px, ${sliderPosition * 200 / 100}% 400px)` }}>
                  {/* Glowing glass bottle */}
                  <rect x="50" y="70" width="100" height="170" rx="20" fill="url(#dropper-liquid-after)" stroke="#fbcfe8" strokeWidth="2.5" />
                  
                  {/* Glass refraction edges */}
                  <rect x="55" y="75" width="90" height="160" rx="15" fill="none" stroke="#fff" strokeWidth="1" opacity="0.4" />
                  
                  {/* Premium black luxury label */}
                  <rect x="62" y="110" width="76" height="80" rx="2" fill="#18181b" stroke="#fbcfe8" strokeWidth="1" />
                  <text x="100" y="142" fontFamily="serif" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle" letterSpacing="1.5">LUMIÈRE</text>
                  <text x="100" y="156" fontFamily="sans-serif" fontSize="5.5" fontWeight="bold" fill="#fbcfe8" textAnchor="middle" letterSpacing="2.5">HYDRA-SERUM</text>
                  <line x1="75" y1="166" x2="125" y2="166" stroke="#db2777" strokeWidth="0.5" />
                  <text x="100" y="176" fontFamily="sans-serif" fontSize="4" fill="#a1a1aa" textAnchor="middle">CLINICAL SKIN THERAPY</text>
                  
                  {/* Glass tube dropper visible inside bottle */}
                  <rect x="97" y="70" width="6" height="130" fill="#fff" opacity="0.3" rx="2" />
                  <circle cx="100" cy="200" r="4" fill="#fff" opacity="0.35" />

                  {/* Water Droplet on glass surface */}
                  <path d="M 65 95 Q 67 92 70 95 Q 67 101 65 95" fill="#fff" opacity="0.7" />
                  <circle cx="68" cy="97" r="1" fill="#fff" opacity="0.5" />
                  <path d="M 135 210 Q 137 207 140 210 Q 137 216 135 210" fill="#fff" opacity="0.7" />
                </g>
              </svg>
            </div>
          </>
        );

      case "tech":
        return (
          <>
            {/* BACKGROUND BEFORE: Plain gray desk */}
            <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-radial from-neutral-200 to-neutral-300 opacity-70 absolute" />
              <span className="absolute bottom-6 left-6 text-xs tracking-wider text-neutral-400 font-mono uppercase bg-neutral-400/40 px-2 py-1 rounded">
                Raw Product Upload
              </span>
            </div>

            {/* BACKGROUND AFTER: Futuristic Heaven-Tech (White Laboratory, Recessed LEDs, Sunrise clouds) */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
              }}
            >
              {/* Futuristic White Room Base */}
              <div className="absolute inset-0 bg-neutral-50" />
              
              {/* Curved Architectural lines */}
              <svg className="absolute inset-0 w-full h-full stroke-neutral-200 fill-none" viewBox="0 0 500 400">
                <path d="M 50 0 C 150 150 350 150 450 0" strokeWidth="2.5" />
                <path d="M 50 400 C 150 250 350 250 450 400" strokeWidth="2.5" />
                
                {/* Recessed Warm LED Lines */}
                <path d="M 0 100 H 500" stroke="#fdba74" strokeWidth="3" opacity="0.5" />
                <path d="M 0 102 H 500" stroke="#f97316" strokeWidth="1" opacity="0.7" />
              </svg>

              {/* Circular Portal Window showing Clouds */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-b from-orange-400 to-amber-200/50 flex items-center justify-center">
                {/* Cloud vectors inside circle */}
                <svg className="w-full h-full text-white/40" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M10,80 Q25,50 45,70 T85,60 T100,80 L100,100 L0,100 Z" />
                  <circle cx="50" cy="30" r="10" fill="#fff" opacity="0.6" />
                </svg>
              </div>

              {/* Floating Metallic Chrome Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-80 h-80 overflow-visible opacity-85" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="ring-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4b5563" />
                      <stop offset="30%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#9ca3af" />
                      <stop offset="70%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#1f2937" />
                    </linearGradient>
                  </defs>
                  {/* Elliptical ring surrounding product */}
                  <ellipse cx="100" cy="100" rx="75" ry="30" fill="none" stroke="url(#ring-chrome)" strokeWidth="6" transform="rotate(-15, 100, 100)" />
                  {/* Golden laser coordinate markings */}
                  <ellipse cx="100" cy="100" rx="77" ry="32" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="4 8" transform="rotate(-15, 100, 100)" />
                </svg>
              </div>

              {/* Floating White Circular Platform */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-20 flex flex-col items-center">
                <ellipse cx="96" cy="10" rx="75" ry="12" fill="#fff" stroke="#e5e7eb" strokeWidth="1" className="shadow-xl" />
                <ellipse cx="96" cy="10" rx="73" ry="11" fill="none" stroke="#f97316" strokeWidth="0.5" strokeDasharray="3 3" />
              </div>

              <span className="absolute bottom-6 right-6 text-xs tracking-wider text-orange-400 font-mono uppercase bg-neutral-900/90 border border-neutral-700/50 px-2 py-1 rounded">
                AI Luxury Transformation Applied
              </span>
            </div>

            {/* THE EARBUDS OVERLAY */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-48 h-48 drop-shadow-2xl overflow-visible" viewBox="0 0 200 200">
                {/* CASE BODY */}
                {/* Case Before (Plain flat white plastic) */}
                <rect x="55" y="60" width="90" height="80" rx="25" fill="#f9fafb" stroke="#d1d5db" strokeWidth="2.5" />
                {/* Lid crease line */}
                <line x1="55" y1="85" x2="145" y2="85" stroke="#d1d5db" strokeWidth="1.5" />
                {/* Indicator light */}
                <circle cx="100" cy="110" r="2.5" fill="#9ca3af" />

                {/* Case After (Polished futuristic titanium/gloss casing, visible right of slider) */}
                <g style={{ clipPath: `polygon(${sliderPosition * 200 / 100}% -50px, 300px -50px, 300px 400px, ${sliderPosition * 200 / 100}% 400px)` }}>
                  {/* Glossy ceramic white case with chamfered silver frame */}
                  <rect x="55" y="60" width="90" height="80" rx="25" fill="url(#case-ceramic)" stroke="url(#case-silver)" strokeWidth="3" />
                  
                  <linearGradient id="case-ceramic" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="60%" stopColor="#f3f4f6" />
                    <stop offset="100%" stopColor="#e5e7eb" />
                  </linearGradient>
                  
                  <linearGradient id="case-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="40%" stopColor="#9ca3af" />
                    <stop offset="70%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#4b5563" />
                  </linearGradient>

                  {/* Lid seam line with metallic inner lip */}
                  <line x1="55" y1="85" x2="145" y2="85" stroke="#9ca3af" strokeWidth="1.5" />
                  
                  {/* Glowing indicator light (cyan link state) */}
                  <circle cx="100" cy="110" r="3" fill="#22d3ee" className="animate-pulse" />
                  <circle cx="100" cy="110" r="5" fill="#22d3ee" opacity="0.3" className="animate-ping" />

                  {/* Laser-engraved logo reflection */}
                  <text x="100" y="76" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#9ca3af" textAnchor="middle" letterSpacing="4">NEBULA</text>

                  {/* Soft highlight curve on case side */}
                  <path d="M 62 70 Q 100 62 138 70" stroke="#fff" strokeWidth="2.5" fill="none" opacity="0.6" />
                </g>
              </svg>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Product Selection Tab Bar */}
      <div className="flex border-b border-zinc-800 overflow-x-auto bg-zinc-950 p-2 gap-2 scrollbar-thin">
        {PRODUCTS.map((prod) => (
          <button
            key={prod.id}
            onClick={() => setSelectedProduct(prod.id)}
            className={`flex-1 min-w-[130px] px-4 py-2 text-xs font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1.5 ${
              selectedProduct === prod.id
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {prod.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Comparison Visualizer Panel */}
        <div className="lg:col-span-7 p-6 flex flex-col justify-between border-r border-zinc-800">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] tracking-widest text-amber-500 font-mono uppercase">
                Interactive Campaign Simulation
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">
                Slider Position: {sliderPosition}%
              </span>
            </div>
            <h3 className="text-lg font-serif text-zinc-100 flex items-center gap-2">
              {product.campaignTitle}
              <span className="text-xs font-sans text-zinc-400 font-normal">
                ({product.categoryName})
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1 mb-4">{product.description}</p>
          </div>

          {/* Interactive Slider Area */}
          <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-inner group">
            {/* The SVG Container */}
            <div className="absolute inset-0 select-none">
              {renderProductSVGs()}
            </div>

            {/* Slider bar overlay */}
            <div
              className="absolute inset-y-0 w-0.5 bg-amber-400/90 z-20 pointer-events-none shadow-[0_0_10px_rgba(245,158,11,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-900 border-2 border-amber-400 flex items-center justify-center shadow-lg text-amber-400">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Actual Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          {/* Quick instructions */}
          <div className="flex justify-between items-center mt-3 text-[10px] text-zinc-500 font-mono">
            <span className="flex items-center gap-1">
              <EyeOff className="w-3.5 h-3.5" /> Drag left for RAW IMAGE
            </span>
            <button
              onClick={() => setSliderPosition(50)}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset (50/50)
            </button>
            <span className="flex items-center gap-1">
              Drag right for CAMPAIGN <Eye className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Art Direction Prompt Applied Panel */}
        <div className="lg:col-span-5 p-6 bg-zinc-950/50 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Art Direction Formula Applied
              </h4>
              <button
                onClick={() => setShowPrompt(!showPrompt)}
                className="text-[10px] text-zinc-500 hover:text-zinc-300 font-mono"
              >
                {showPrompt ? "Hide Details" : "Show Details"}
              </button>
            </div>

            {showPrompt && (
              <div className="space-y-3">
                <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                  <div className="text-[10px] font-mono text-amber-500/80 mb-1">IMAGE-TO-IMAGE PROMPT:</div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans italic">
                    &ldquo;{product.promptApplied}&rdquo;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-400">
                  <div className="bg-zinc-900/40 p-2.5 rounded border border-zinc-800/60">
                    <span className="text-zinc-500 block mb-0.5">TARGET EMOTION:</span>
                    <span className="text-zinc-300">Divine Transcendence</span>
                  </div>
                  <div className="bg-zinc-900/40 p-2.5 rounded border border-zinc-800/60">
                    <span className="text-zinc-500 block mb-0.5">CAMERA / LENS:</span>
                    <span className="text-zinc-300">Phase One 150MP / f/8</span>
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/40 text-[11px]">
                  <span className="text-[10px] font-mono text-zinc-500 block mb-1">MIDJOURNEY PARAMETERS RECOMMENDATION:</span>
                  <p className="font-mono text-zinc-400 bg-zinc-950 p-1.5 rounded text-[10px] border border-zinc-900 select-all">
                    /imagine [uploaded_image_url] {product.promptApplied.substring(0, 80)}... --iw 2.0 --ar 16:9 --stylize 250 --v 6.0
                  </p>
                  <span className="text-[9px] text-zinc-500 mt-1 block">
                    * Using <code className="text-amber-400">--iw 2.0</code> instructs the AI to preserve the exact uploaded product geometry.
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-zinc-800 mt-6 lg:mt-0">
            <button
              onClick={handleCopyPrompt}
              className="w-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-zinc-950 text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              Copy Art-Direction Prompt
            </button>
            <p className="text-[9px] text-zinc-500 text-center mt-2 font-mono">
              Apply this in Midjourney, Stable Diffusion, or FLUX Image-to-Image
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
