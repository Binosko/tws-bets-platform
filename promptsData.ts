// Luxury Campaign Prompt Database for Aetheris Creative Studio

export interface PromptItem {
  id: string;
  title: string;
  prompt: string;
  emotion: string;
  lighting: string;
  composition: string;
}

export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  prompts: PromptItem[];
}

export interface SystemFormula {
  id: string;
  name: string;
  formula: string;
  description: string;
}

export const CAMPAIGN_CATEGORIES: PromptCategory[] = [
  {
    id: "celestial-heaven",
    name: "Celestial Heaven Campaigns",
    description: "Products floating above cloud oceans at sunrise, divine golden light, heavenly architecture, cinematic atmosphere.",
    icon: "CloudSun",
    prompts: [
      {
        id: "celestial-1",
        title: "Golden Hour Cloud Sanctuary",
        prompt: "Commercial luxury advertising photography of the product positioned centered on a polished white onyx pedestal. The pedestal floats within an endless ocean of soft, voluminous clouds at sunrise. Divine beams of golden light pierce through a grand classical archway in the background. The atmosphere is filled with a soft golden mist and microscopic floating gold dust. Captured on a Phase One XF 150MP, 80mm lens, f/8, crisp details, soft shadows, divine commercial campaign style, pristine and expensive.",
        emotion: "Transcendence & Prestige",
        lighting: "Volumetric golden hour sun shafts from behind, soft gold key fill",
        composition: "Centered symmetrical layout, high-altitude horizon, hero presentation"
      },
      {
        id: "celestial-2",
        title: "Dawn of the Gods",
        prompt: "Premium luxury campaign render of the product hovering weightlessly over a reflective pool of liquid gold. Above, massive towering classical pillars dissolve into a brilliant white mist. The background features a serene pink and amber sky at dawn. Light rays illuminate the product, creating sharp metallic accents and soft ambient shadows. Photographed with a Hasselblad H6D-100c, 100mm f/2.2 lens, editorial luxury cosmetic style.",
        emotion: "Awe & Exclusivity",
        lighting: "Angled key lighting, dramatic backlight rim, golden amber radiance",
        composition: "Low angle look-up, imposing stature, centered product placement"
      },
      {
        id: "celestial-3",
        title: "Ethereal Ascent",
        prompt: "Art-directed commercial campaign visual. The product rests on a floating block of pure white travertine stone. Around it, gentle wisps of morning mist swirl gracefully. In the background, semi-translucent monumental columns stand against a bright, hazy sky. The scene is illuminated by soft, diffused daylight with subtle lens flares. Ultra-sharp product rendering, luxurious, high-end fashion magazine advertisement style.",
        emotion: "Divine Beauty & Purity",
        lighting: "High-key diffused sky light, soft fill, light lens flare",
        composition: "Three-quarters view, clean lines, minimalist space"
      },
      {
        id: "celestial-4",
        title: "Divine Cloud Canyons",
        prompt: "High-end product launch campaign visual. The product is suspended in the center of monumental, towering cloud canyons that glow with internal light. The sky is an elegant gradient of deep indigo and soft champagne gold. A single beam of divine light strikes the product packaging, highlighting its textures and typography in razor-sharp detail. Commercial photography, editorial grade, cinematic studio render.",
        emotion: "Obsession & Majesty",
        lighting: "Spotlight focus, dramatic dark-vs-light contrast, ambient glow",
        composition: "Vertical rule of thirds, suspended product, high contrast background"
      },
      {
        id: "celestial-5",
        title: "Sovereign Light Peak",
        prompt: "A billion-dollar fragrance style commercial campaign. The product is placed on a rough-hewn crystalline pedestal floating atop a mountain of clouds. High-altitude atmosphere, thin mist, sun rays casting long shadows. Polished, high-contrast, commercial finish. Sharp product silhouette against a bright sky, masterfully color-graded in muted gold and cream tones.",
        emotion: "Power & Exclusivity",
        lighting: "Strong rim light, natural backlight, soft white bounce cards",
        composition: "Extreme wide environment with central hero product, monumental scale"
      },
      {
        id: "celestial-6",
        title: "Gates of Elysium",
        prompt: "Premium product advertisement. The product floats inside a massive portal of golden light, surrounded by soft cloud formations and floating white feathers. Polished reflections on the product surface, crisp glass styling. High-end retouched commercial image. Phase One camera, 90mm lens, f/11, crisp edge-to-edge sharpness.",
        emotion: "Desire & Transcendence",
        lighting: "Backlit portal glow, soft wrapping light, silver reflector board fill",
        composition: "Centered framing, circular portal enclosing the product, clean symmetry"
      },
      {
        id: "celestial-7",
        title: "Angelic Light Pavilion",
        prompt: "Luxury product campaign. A minimal pavilion made of white marble and gold trim floating in a bright pastel cloudscape. The product sits on a marble block at the pavilion center. High-fidelity glass and metallic details, pristine textures, professional lighting setup with soft shadows. Vogue-level commercial design.",
        emotion: "Prestige & Divine Purity",
        lighting: "Soft ambient skylight, overhead octabox simulation, golden bounce",
        composition: "Architectural framing, clean grid alignment, centered focus"
      },
      {
        id: "celestial-8",
        title: "Sun-Drenched Cloud Palace",
        prompt: "An impossible luxury ad for a premium product. The product is centered on a polished glass platform reflecting a golden sunrise. Below the platform is a sea of cumulus clouds. In the distance, floating golden structures are silhouetted against the sun. Cinematic flare, crisp resolution, commercial retouching quality, high-contrast highlights.",
        emotion: "Awe & Luxury Desire",
        lighting: "Low sun angle, strong backlighting, gold fill on the product front",
        composition: "Wide angle, dramatic depth, product reflecting on floor"
      },
      {
        id: "celestial-9",
        title: "Ethereal Aura",
        prompt: "High-end jewelry/cosmetics campaign. The product is suspended inside a hollow ring of glowing golden light, floating in a white cloud atmosphere. Perfect product details, no distortion, professional studio grading. Shot on 120mm macro, f/8, ultra-detailed textures, pristine packaging.",
        emotion: "Obsession & Perfection",
        lighting: "Ring light projection, subtle halo effect, dark fill to maintain definition",
        composition: "Close-up macro, centered product, ring frame"
      },
      {
        id: "celestial-10",
        title: "Ascension of the Elite",
        prompt: "Cinematic commercial launch image. The product is perched on a sheer geometric block of raw calcite, floating high above a misty sea of clouds. Golden dawn light cuts across the product, revealing sharp textures. Minimalist, premium, clean aesthetic. Editorial art direction.",
        emotion: "Prestige & Exclusivity",
        lighting: "Chiaroscuro, high contrast side light, deep golden highlights",
        composition: "Diagonal composition, block intersecting the frame, product as focal point"
      },
      {
        id: "celestial-11",
        title: "Stairway to Heaven",
        prompt: "A luxury product campaign. A series of floating white marble steps leads up to a bright sky filled with warm clouds. The product sits on the top step, bathed in divine white light. Clean lines, pristine architectural textures, high-end retail advertisement style. Crisp product details.",
        emotion: "Divine Ascent & Desire",
        lighting: "Top-down celestial spotlight, soft white fill, high-key ambient",
        composition: "Perspective leading lines, looking up the steps, product at the apex"
      },
      {
        id: "celestial-12",
        title: "Nephology Horizon",
        prompt: "Billion-dollar brand campaign style. The product is nestled in a soft bedding of high-density mist, floating in the stratosphere. The sun is just rising over the curve of the Earth, creating a thin blue and gold atmosphere line. Highly cinematic, sharp packaging graphics, high-end commercial photo.",
        emotion: "Power & Transcendence",
        lighting: "Atmospheric lens flare, rim lighting from Earth's curve, cool fill",
        composition: "Wide horizontal landscape, product offset to the left, Earth curve right"
      },
      {
        id: "celestial-13",
        title: "Divine Halo Campaign",
        prompt: "Luxury editorial ad. The product is centered in front of a giant golden circle that glows softly, floating in a serene sky of white clouds. The product casting a faint shadow onto the cloud layer below. Perfect symmetry, high-end studio lighting, sharp text, crisp packaging details.",
        emotion: "Exclusivity & Divinity",
        lighting: "Backlit halo, soft forward beauty light, metallic gloss reflections",
        composition: "Symmetrical portrait framing, golden ratio placement"
      },
      {
        id: "celestial-14",
        title: "Seraphim Rest",
        prompt: "Art-directed luxury visual. The product is placed on a carved white jade block that rests on a cloud shelf. Subtle white lilies float in the air around the product. The lighting is soft and pearlescent, creating a dreamy, premium, high-fashion vibe. Hasselblad H6D quality.",
        emotion: "Purity & Premium Beauty",
        lighting: "Pearlescent diffused light, soft pink and gold ambient tones",
        composition: "Still life arrangement, organic flow, central subject"
      },
      {
        id: "celestial-15",
        title: "Celestial Zenith",
        prompt: "Luxury commercial campaign. The product is floating high at the zenith of a cloud valley. Golden light streams down from a single point directly above, illuminating the product package with crystal-clear legibility. Luxurious finish, sharp focus, highly detailed texture mapping, premium presentation.",
        emotion: "God-Tier Prestige",
        lighting: "Direct overhead spotlight, golden rim reflection, clean shadow control",
        composition: "Vertical symmetry, high-altitude, grand space"
      }
    ]
  },
  {
    id: "greek-god",
    name: "Greek God Luxury Campaigns",
    description: "Ancient Greek marble temples, Olympus-inspired architecture, flowing fabric, divine light beams, Roman columns.",
    icon: "Building",
    prompts: [
      {
        id: "greek-1",
        title: "Temple of Olympus",
        prompt: "Commercial luxury campaign. The product sits on a fluted Greek marble column capital inside a ruined ancient temple of Olympus. Sunbeams cut through the tall colonnade, illuminating the product with high-contrast cinematic shafts of light. Soft white silk fabric blows in the wind behind the column, wrapping the scene in movement. Phase One 150MP, 80mm lens, f/5.6. Crisp details on the product, beautiful soft focus on the ancient temple background. Ultra-premium, editorial art direction.",
        emotion: "Mythological Majesty",
        lighting: "High-contrast volumetric light shafts, dramatic sunbeams",
        composition: "Hero column presentation, vertical columns framing the product"
      },
      {
        id: "greek-2",
        title: "Apollo's Sanctuary",
        prompt: "Premium luxury product advertisement. The product is placed on a pedestal of solid white gold, inside a circular Greek temple overlooking a sparkling sapphire sea. Golden light pours from the sky, highlighting the crisp contours of the product. Flowing white drapery in the background. Crisp, commercial retouched visual.",
        emotion: "Power & Prestige",
        lighting: "Warm gold sun flare, reflective sea bounce, soft shadow fill",
        composition: "Centred rule of thirds, panoramic sea horizon, foreground column elements"
      },
      {
        id: "greek-3",
        title: "Athena's Wisdom",
        prompt: "Art-directed commercial campaign. The product sits on a stack of polished white marble blocks surrounded by olive branches with silver leaves. The environment is an open-air temple courtyard at noon, under a deep blue Mediterranean sky. High-contrast shadows, clean white textures, luxury branding style.",
        emotion: "Intelligence & Premium Exclusivity",
        lighting: "Bright Mediterranean sunlight, sharp shadows, silver fill",
        composition: "Still life arrangement, natural framing with olive branches, geometric base"
      },
      {
        id: "greek-4",
        title: "Aphrodite's Mirror",
        prompt: "Luxury fragrance/cosmetics campaign. The product rests on a carved marble basin filled with still, crystal-clear water, reflecting classical Greek arches and a pastel-pink sky. Floating pink rose petals on the water. High-end, premium, editorial fashion photography style. 90mm macro lens.",
        emotion: "Obsession & Divine Beauty",
        lighting: "Diffused twilight lighting, soft pink reflections, metallic highlight glints",
        composition: "High-angle view reflecting the columns, product offset in water"
      },
      {
        id: "greek-5",
        title: "Olympian Monolith",
        prompt: "A billion-dollar brand product launch. The product is placed on a massive raw marble monolith in a ruined Greek temple hall. The background is a dramatic dark sky with distant lightning flashes. A single, powerful beam of light from above strikes the product, creating a beacon-like effect. Ultra-sharp product rendering.",
        emotion: "Absolute Power & Authority",
        lighting: "High-key spotlight, extreme chiaroscuro, dark atmospheric background",
        composition: "Low angle, look-up perspective, epic monumental scale"
      },
      {
        id: "greek-6",
        title: "The Silk of Hermes",
        prompt: "Luxury advertising photography. The product is nestled in waves of flowing, wind-blown white silk fabric suspended in mid-air inside an ancient marble colonnade. Sunbeams trace the folds of the fabric and illuminate the product details with absolute clarity. Editorial commercial style, clean and modern.",
        emotion: "Grace & Prestige",
        lighting: "Backlit fabric glow, soft edge light on the product, wrap-around fill",
        composition: "Dynamic fluid lines, product suspended in silk waves"
      },
      {
        id: "greek-7",
        title: "Poseidon's Altar",
        prompt: "Premium product campaign. The product sits on a wet, dark marble pedestal inside a sea-facing Greek temple. Waves crash against the temple base, sending a fine mist into the air. The sun is setting, casting a deep amber glow over the columns. Crisp detail, commercial grade, cinematic atmosphere.",
        emotion: "Strength & Untamed Luxury",
        lighting: "Deep amber sunset backlight, wet surface reflections, dramatic rim light",
        composition: "Rule of thirds, product on left, crashing waves on right, framing columns"
      },
      {
        id: "greek-8",
        title: "Sacred Grove Temple",
        prompt: "Luxury product visual. The product is centered on an ancient marble offering table in a hidden sacred grove temple. Sun rays filter through towering Cypress trees, illuminating the product. Moss on stone, ancient and prestigious. Phase One, 100mm lens, f/8, sharp product, atmospheric depth.",
        emotion: "Heritage & Divine Nature",
        lighting: "Dappled sunlight, forest canopy ray tracing, soft green-gold bounce",
        composition: "Central product placement, forest framing, leading shadows"
      },
      {
        id: "greek-9",
        title: "Helios' Chariot Gold",
        prompt: "High-end jewelry/accessory ad. The product is positioned on a golden marble podium. In the background, massive statues of Greek horses are carved into a white stone wall. The entire scene is bathed in an intense, brilliant golden light, creating a shimmering reflection. Editorial art direction.",
        emotion: "Opulence & Success",
        lighting: "Brilliant gold key light, warm fill, metallic glare control",
        composition: "Symmetrical design, grand statues in soft focus background"
      },
      {
        id: "greek-10",
        title: "Oracle of Delphi",
        prompt: "Commercial luxury campaign. The product is resting on a bronze tripod stand inside a dark marble temple chamber. Whisps of glowing lavender incense smoke rise from the floor. A single vertical slit of light cuts through the darkness, illuminating the product packaging with sharp definition.",
        emotion: "Mystery & Exclusive Wisdom",
        lighting: "Slit-scan light beam, low ambient key, glowing smoke highlights",
        composition: "Minimalist composition, high contrast, product in narrow beam"
      },
      {
        id: "greek-11",
        title: "Mount Olympus Peak",
        prompt: "High-end product launch campaign. The product sits on a white marble ledge overlooking a mountain range peaks piercing through clouds. Clear blue-gold sky, divine light. Classical Greek pillars frame the left side. Sharp product graphics, commercial retouched look, pristine.",
        emotion: "Peak Achievement & Luxury",
        lighting: "Direct high-altitude sun, crisp blue fill light, bright highlights",
        composition: "Wide angle, dramatic mountain depth, corner column framing"
      },
      {
        id: "greek-12",
        title: "The Golden Fleece",
        prompt: "Luxury commercial campaign. The product sits on a pedestal wrapped in spun-gold fabric inside a white marble vault. Soft, glowing ambient light, with a single warm spotlight on the product. Clean lines, expensive materials, high-fashion art direction, ultra-crisp.",
        emotion: "Unrivaled Rarity & Desire",
        lighting: "Spotlight focused on product, warm golden glow from the fabric",
        composition: "Centered close-up, shallow depth of field, rich background textures"
      },
      {
        id: "greek-13",
        title: "Temple of the Muses",
        prompt: "Premium luxury ad. The product is centered on a Carrara marble desk, with ancient scrolls and a white marble bust in the soft-focus background. Light streams through a classical arched window. Highly detailed, clean aesthetic, elite editorial campaign style.",
        emotion: "Artistry & Intellectual Luxury",
        lighting: "Window key light, soft white diffuser fill, realistic shadows",
        composition: "Still life arrangement, diagonal layout, desk perspective"
      },
      {
        id: "greek-14",
        title: "Olympian White Court",
        prompt: "Luxury campaign visual. The product floats over a large, shallow white marble pool in a vast, open-air Greek courtyard. The sky above is crystal clear blue. Tall white columns reflect in the water. Minimalist, premium, clean design, crisp packaging details.",
        emotion: "Clarity & Purity",
        lighting: "Bright daylight, water reflection bounce, fill light under the product",
        composition: "Horizontal symmetry, reflection in water, minimalist layout"
      },
      {
        id: "greek-15",
        title: "Zeus' Throne Room",
        prompt: "Commercial luxury campaign. The product is centered on a dark marble stand inside a monumental throne room. In the background, giant white marble steps lead up to a throne area. Dramatic sky seen through a colossal open ceiling, light rays beaming down. High-end, premium quality.",
        emotion: "Sovereignty & Ultimate Power",
        lighting: "Top-down celestial rays, ambient dark fill, high-contrast highlights",
        composition: "Symmetrical wide angle, looking up the monumental steps"
      }
    ]
  },
  {
    id: "roman-imperial",
    name: "Roman Imperial Product Ads",
    description: "Imperial palace interiors, bronze textures, marble floors, cinematic firelight, emperor-level luxury aesthetics.",
    icon: "Shield",
    prompts: [
      {
        id: "roman-1",
        title: "Imperial Palace Hall",
        prompt: "Commercial luxury product advertising. The product is positioned on a red porphyry marble pedestal in the center of a grand Roman imperial palace hall. Massive polished bronze doors and Corinthian columns line the corridor. The floor is a polished marble mosaic reflecting the warm glow of torches and golden light shafts. Photographed on a Phase One 150MP, 50mm lens, f/8, rich textures, deep shadows, imperial luxury aesthetic, pristine detailing.",
        emotion: "Imperial Power & Opulence",
        lighting: "Warm golden light shafts, amber torchlight fill, specular bronze reflections",
        composition: "Symmetrical corridor perspective, leading lines pointing to the central product"
      },
      {
        id: "roman-2",
        title: "Senate Sanctuary",
        prompt: "Luxury product launch campaign. The product is centered on a polished white-and-gold marble desk inside the Roman Senate chamber. Rich mahogany wood and bronze statues decorate the background. Warm light streams from a high circular dome window, casting a single spotlight on the product. Editorial grade, commercial retouching.",
        emotion: "Authority & Prestige",
        lighting: "Chiaroscuro dome spotlight, soft ambient wood bounce",
        composition: "Eye-level perspective, medium close-up, rich textured background"
      },
      {
        id: "roman-3",
        title: "Augustan Gold Vault",
        prompt: "Premium luxury ad. The product is nestled among solid gold Roman coins and ornate bronze plates inside an imperial treasure vault. Warm candle firelight flickers, creating dancing reflections on the product surface. Deep, rich shadows, warm color grading. Professional commercial photography.",
        emotion: "Immense Wealth & Exclusivity",
        lighting: "Low-key candlelight, golden fill, high contrast rim highlights",
        composition: "Macro close-up, shallow depth of field, treasure-stacked background"
      },
      {
        id: "roman-4",
        title: "Caesar's Triumph",
        prompt: "Billion-dollar brand campaign. The product is placed on a triumphal marble arch ledge, decorated with relief carvings of laurel wreaths and eagles. In the background, a warm, hazy sky over ancient Rome at sunset. Epic scale, cinematic atmosphere, crisp product rendering.",
        emotion: "Victory & Absolute Success",
        lighting: "Warm sunset backlight, soft bronze front fill, dramatic lens flare",
        composition: "Low angle looking up, architectural monumentality, sky background"
      },
      {
        id: "roman-5",
        title: "Villa of Livia",
        prompt: "Luxury lifestyle commercial. The product sits on a marble table in an indoor atrium with a central garden. A wall painted with detailed classical frescoes of trees and fruit is in the background. Sunbeams filter through the open roof, creating soft shadows. Pristine product details.",
        emotion: "Heritage & Serene Luxury",
        lighting: "Soft open-air atrium daylight, green-tinged garden bounce",
        composition: "Centered product, symmetrical garden background, classical still life"
      },
      {
        id: "roman-6",
        title: "Bronze & Obsidian",
        prompt: "Commercial luxury campaign. The product is placed on a dark obsidian stone slab inside a room with textured bronze walls. Fire bowls cast flickering amber light on the metallic surfaces. High contrast, sharp edges, modern luxurious feel with ancient imperial weight. Hasselblad H6D quality.",
        emotion: "Power & Dark Sophistication",
        lighting: "Flickering amber side light, cool rim highlight, high contrast",
        composition: "Asymmetric composition, close-up, sharp metal reflections"
      },
      {
        id: "roman-7",
        title: "Imperial Bath Reflection",
        prompt: "Premium beauty campaign. The product is positioned on a polished marble shelf overlooking a large thermal bath inside an imperial palace. Still water reflects Roman arches and a soft golden ceiling. Vapor rises gently from the water surface. Crisp product rendering.",
        emotion: "Indulgence & Elite Spa",
        lighting: "Diffused warm ceiling light, soft mist scattering, water-reflected ripple light",
        composition: "Horizontal layout, shelf in foreground, grand bath in background"
      },
      {
        id: "roman-8",
        title: "The Laurel Wreath",
        prompt: "Luxury editorial ad. The product is resting inside a delicate, hand-crafted gold laurel wreath placed on a black marble table. The background is a dark, moody stone wall with classical reliefs in shadow. Sophisticated, minimalist, high-end jewelry style.",
        emotion: "Honor & Timeless Prestige",
        lighting: "Direct key spotlight, sharp shadow definition, gold sheen highlight",
        composition: "Top-down view, centered laurel circle enclosing the product"
      },
      {
        id: "roman-9",
        title: "Sovereign Crimson",
        prompt: "Luxury fashion campaign. The product is placed on a pedestal draped in rich Roman crimson velvet. A Corinthian column rises in the background, lit by a soft spotlight. The red fabric folds create luxurious shadows and deep color depth. Commercial retouching grade.",
        emotion: "Passion & Imperial Royalty",
        lighting: "Rich velvet key light, soft fill, column spot backlight",
        composition: "Three-quarters portrait framing, rich texture contrast"
      },
      {
        id: "roman-10",
        title: "Colosseum Dusk",
        prompt: "Elite product launch. The product is placed on a stone balcony overlooking the majestic ruins of the Colosseum at dusk. The sky is a deep purple and gold. Warm lighting illuminates the product packaging, making it pop against the dark architectural background. Cinematic look.",
        emotion: "Timeless Power & Legend",
        lighting: "Warm balcony accent light, twilight ambient sky glow, cool rim",
        composition: "Rule of thirds, product on right balcony, Colosseum iconic arches left background"
      },
      {
        id: "roman-11",
        title: "Domus Aurea (Golden House)",
        prompt: "Billion-dollar fragrance style campaign. The product sits on a marble stand inside a room entirely clad in gold leaf and ivory. A single window casts a beam of light on the product. Minimalist luxury, high-end retouched commercial image. Phase One camera, 90mm lens.",
        emotion: "Absolute Opulence & Exclusive Luxury",
        lighting: "Soft golden room reflection, crisp white window shaft",
        composition: "Clean minimalist frame, product in light beam, golden textures"
      },
      {
        id: "roman-12",
        title: "Praetorian Guard Vault",
        prompt: "Premium product campaign. The product is placed on a polished dark iron chest. In the background, ancient bronze shields and swords hang on a stone wall in shadow. A dramatic key light cuts across the scene, creating strong highlights and long shadows. Sharp focus on product.",
        emotion: "Protection & Power",
        lighting: "Hard side key light, metallic reflections, low ambient fill",
        composition: "Close-up, angled view of the chest, product as central hero"
      },
      {
        id: "roman-13",
        title: "Imperial Library",
        prompt: "Luxury lifestyle commercial. The product sits on a marble table inside an ancient Roman library, surrounded by leather scrolls and bronze bookends. Warm light illuminates the wood and stone textures. High-end, premium editorial campaign style.",
        emotion: "Intellect & Heritage",
        lighting: "Soft ambient library lighting, warm table bounce",
        composition: "Still life arrangement, perspective leading lines of books"
      },
      {
        id: "roman-14",
        title: "Vesta's Flame Temple",
        prompt: "Commercial luxury campaign. The product is positioned next to a small, stylized bronze brazier with a crackling warm flame. The background features dark stone walls and soft smoke. The fire light creates a warm glow on the product, highlighting its premium design. Ultra-sharp details.",
        emotion: "Eternal Radiance",
        lighting: "Dynamic firelight key, soft warm fill, flickering ambient light",
        composition: "Asymmetric layout, flame on left, product on right, close-up focus"
      },
      {
        id: "roman-15",
        title: "Basilica of Constantine",
        prompt: "Luxury product visual. The product is placed on a massive white travertine block. In the background, the colossal barrel vaults of the Basilica of Constantine are lit by soft morning light. Clean, expansive space, monumental architecture. High-fidelity commercial photography.",
        emotion: "Grandeur & Epic Heritage",
        lighting: "Soft morning sky light, architectural shadow play, clear fill",
        composition: "Wide angle, extreme depth of field, product centered in massive space"
      }
    ]
  },
  {
    id: "floating-crystal",
    name: "Floating Crystal & Glass Worlds",
    description: "Products suspended inside transparent glass cubes, floating crystal chambers, refractive surfaces.",
    icon: "Gem",
    prompts: [
      {
        id: "crystal-1",
        title: "The Prism Sanctuary",
        prompt: "Commercial luxury advertising photography. The product is suspended weightlessly inside a floating, perfectly transparent glass cube. The cube is surrounded by massive, raw quartz crystal pillars that float in a dark, reflective space. Multi-faceted light refraction creates rainbow light leaks across the product, while preserving its exact colors and details. Photographed on a Hasselblad H6D-100c, 120mm macro lens, f/8, crisp edge-to-edge focus, high-end editorial product campaign.",
        emotion: "Refinement & Rare Beauty",
        lighting: "Highly refractive spot light, back-lit crystal glow, rainbow prism light leaks",
        composition: "Macro product center, surrounding crystals framing the glass box"
      },
      {
        id: "crystal-2",
        title: "Refractive Labyrinth",
        prompt: "Premium luxury product advertisement. The product is positioned behind a series of overlapping glass sheets that bend the light. The background is a clean, minimal white space with sharp light beams. The packaging and bottle are rendered with absolute clarity, with beautiful glass distortion at the edges. Vogue-level cosmetic styling.",
        emotion: "Clarity & Perfection",
        lighting: "Split-beam studio lighting, bright backlighting, crisp shadows",
        composition: "Layered glass planes, high depth of field, geometric alignment"
      },
      {
        id: "crystal-3",
        title: "Floating Quartz Citadel",
        prompt: "Art-directed commercial campaign visual. The product floats over a bed of raw amethyst crystals in a dark, glossy space. Hovering around the product are floating glass shards that reflect a soft lavender and cyan light. Cinematic atmosphere, sharp product detailing, luxury packaging design.",
        emotion: "Divine Obsession & Power",
        lighting: "Under-lit crystal glow, lavender and cyan neon rim lights",
        composition: "Close-up macro, floating elements, dark background contrast"
      },
      {
        id: "crystal-4",
        title: "The Glass Monolith",
        prompt: "A billion-dollar brand product launch. The product is encased inside a 10-foot tall glass box resting on a polished marble floor. The background is a vast, empty gallery space with architectural concrete walls. A dramatic spotlight shines through the glass, highlighting the product inside. Pure minimalist luxury.",
        emotion: "Prestige & Absolute Sophistication",
        lighting: "Hard overhead key spotlight, sharp glass reflections, soft concrete bounce",
        composition: "Extreme wide shot, minimalist architecture, product as a museum relic"
      },
      {
        id: "crystal-5",
        title: "Prismatic Sunrise",
        prompt: "High-end product campaign. The product is placed on a glass ledge overlooking a hazy desert landscape at sunrise. Hovering crystals float around it, bending the morning light into soft rainbow spectrums on the product bottle. Crisp packaging details, high-end editorial art direction.",
        emotion: "New Era & Luxury Dawn",
        lighting: "Warm low-angle sun, refracted rainbow lens flares, soft golden fill",
        composition: "Three-quarters view, horizon line in bottom third, floating crystals in air"
      },
      {
        id: "crystal-6",
        title: "Crystalline Sea Chamber",
        prompt: "Premium luxury ad. The product is suspended inside a hollow crystal dome submerged in a deep teal water environment. Beams of light filter through the water, refracting off the crystal dome to create shifting caustics on the product. Clean, professional commercial grade.",
        emotion: "Purity & Mystery",
        lighting: "Submerged water caustics, crystal refraction key, deep teal fill",
        composition: "Centered product inside dome, macro details, fluid environment"
      },
      {
        id: "crystal-7",
        title: "Obsidian & Emerald Glass",
        prompt: "Luxury commercial campaign. The product is resting on a black obsidian mirror block, surrounded by floating shards of emerald-green glass. The background is a dark velvet texture in shadow. The product details are sharp and clear, catching bright highlights on metallic elements. High contrast.",
        emotion: "Envy & Masterful Design",
        lighting: "Side key light, emerald bounce light, sharp specular highlights",
        composition: "High-contrast close-up, sharp angles, reflecting surface"
      },
      {
        id: "crystal-8",
        title: "The Floating Cube Lab",
        prompt: "High-end tech/skincare campaign. The product floats in the center of an array of interlocking, transparent glass cubes suspended in a clean, minimalist lavender studio space. Extremely sharp product typography and texture mapping. Apple-style clean commercial photo.",
        emotion: "Innovation & Luxury Tech",
        lighting: "Soft multi-directional studio lights, glass edge highlights, crisp fill",
        composition: "Perfect symmetry, grid pattern cubes, floating product"
      },
      {
        id: "crystal-9",
        title: "Diamond Dust Storm",
        prompt: "Billion-dollar brand visual. The product is suspended in mid-air, with thousands of microscopic, glittering diamond dust particles swirling around it. The background is a clean gradient of charcoal gray. Sharp focus on the product, particles in soft-focus bokeh. Cinematic rendering.",
        emotion: "Dazzling Opulence",
        lighting: "Backlight illuminating the dust particles, key light on product logo",
        composition: "Macro center focus, swirling particle lines, minimal background"
      },
      {
        id: "crystal-10",
        title: "Refractive Column Forest",
        prompt: "Art-directed luxury ad. The product stands on a glass block surrounded by a forest of towering, hexagonal glass columns. The columns refract light in complex geometric patterns. Professional studio lighting setup, crisp details on packaging, high-fashion campaign style.",
        emotion: "Complexity & High-End Prestige",
        lighting: "Structured geometric light beams, glass reflection mapping",
        composition: "Looking through glass columns, product framed by vertical lines"
      },
      {
        id: "crystal-11",
        title: "Liquid Glass Wave",
        prompt: "Luxury product visual. The product is emerging from a wave of molten, transparent glass that has frozen in mid-air. The scene is set in a neutral-toned luxury studio space. Crisp highlights, pristine glass curves, professional camera lens look.",
        emotion: "Fluid Perfection",
        lighting: "Overhead light softbox, sharp silver reflector highlights",
        composition: "Dynamic fluid curve intersecting with a static product, side view"
      },
      {
        id: "crystal-12",
        title: "The Crystal Monoliths",
        prompt: "High-end product launch. The product sits on a polished marble platform, surrounded by three towering, monolithic quartz crystals that glow with internal light. The background is a dark, moody room. Crisp, clean commercial photography, Phase One quality.",
        emotion: "Power & Rare Origin",
        lighting: "Internal crystal glow, overhead key spotlight, ambient dark fill",
        composition: "Centered product, towering vertical shapes, high contrast"
      },
      {
        id: "crystal-13",
        title: "Refraction Halo",
        prompt: "Commercial luxury campaign. The product is placed behind a large, circular glass prism that creates a beautiful, circular rainbow halo around the packaging. The background is a minimal off-white tone. Crisp logo and bottle details, modern editorial art direction.",
        emotion: "Innovation & Beauty Halo",
        lighting: "Direct hard light through prism, soft diffused ambient fill",
        composition: "Macro centered, circular frame from the refraction"
      },
      {
        id: "crystal-14",
        title: "Glass Prism Cathedral",
        prompt: "Luxury product campaign. The product is placed on a glass altar inside an impossible cathedral made entirely of massive, interlocking prisms. Rainbow light beams crisscross the space, illuminating the product packaging. High-fidelity commercial render, Vogue style.",
        emotion: "Sacred Luxury & Design",
        lighting: "Complex rainbow refraction paths, key spotlight on product",
        composition: "Symmetrical perspective, high-altitude interior, centered hero"
      },
      {
        id: "crystal-15",
        title: "Ice & Glass Fusion",
        prompt: "Premium luxury ad. The product is frozen inside a clear block of ice that is melting, surrounded by polished glass shards. Droplets of water run down the surface, catching light. Crisp product rendering, deep blues and silver tones. Creative direction by a luxury agency.",
        emotion: "Pristine Purity & Cool Power",
        lighting: "Cool blue backlight, sharp white key highlight, ice internal bounce",
        composition: "Close-up macro, organic water droplet textures, high contrast"
      }
    ]
  },
  {
    id: "water-temple",
    name: "Divine Water Temple Campaigns",
    description: "Sacred pools, reflective water temples, floating lotus petals, impossible luxury spa environments.",
    icon: "Droplets",
    prompts: [
      {
        id: "water-1",
        title: "Sacred Water Sanctuary",
        prompt: "Commercial luxury advertising photography. The product is resting on a semi-submerged white jade step inside an ancient, reflective water temple. Crystal clear water ripples outwards from the product base, creating beautiful, concentric rings. In the background, elegant classical columns rise from the water, silhouetted against a soft pastel-lavender sunset sky. Shot on Phase One 150MP, 90mm lens, f/8, sharp reflection of the product in the water, pristine editorial spa campaign style.",
        emotion: "Serenity & Divine Indulgence",
        lighting: "Soft ambient twilight sky, subtle water caustic reflections on pillars",
        composition: "Low-angle reflection shot, horizon line centered, clean horizontal layers"
      },
      {
        id: "water-2",
        title: "Reflections of Aphrodite",
        prompt: "Premium luxury product advertisement. The product is placed on a floating marble leaf in a sacred, indoor pool. The room is built from polished pink travertine marble with massive arches. Soft ripples disturb the water surface, creating shimmering light patterns on the product. Editorial grade.",
        emotion: "Obsession & Divine Beauty",
        lighting: "Diffused sunlight through a glass dome, shimmering water caustics",
        composition: "High angle look-down, organic floating path, soft pink background"
      },
      {
        id: "water-3",
        title: "Lotus Temple Dawn",
        prompt: "Art-directed commercial campaign. The product is centered on a white stone pedestal in the middle of a lotus pond inside a temple courtyard. Dawn mist floats over the water, and pink lotus flowers surround the base. Sharp product packaging, premium cosmetics campaign aesthetic.",
        emotion: "Purity & Natural Heritage",
        lighting: "Soft morning mist light, cool blue sky key with warm pink horizon bounce",
        composition: "Centered product, concentric framing with lotus flowers"
      },
      {
        id: "water-4",
        title: "The Obsidian Pool",
        prompt: "A billion-dollar brand product launch. The product sits on a dark obsidian slab submerged just below the water surface in a minimalist black marble temple. The water is perfectly still like a mirror, reflecting a single golden column and the product. Epic, high-contrast luxury campaign.",
        emotion: "Power & Dark Elegance",
        lighting: "High-contrast golden spotlight, black room absorption, mirror reflection",
        composition: "Perfect vertical symmetry, split above/below water line, clean lines"
      },
      {
        id: "water-5",
        title: "Emerald Cavern Spa",
        prompt: "Premium product campaign. The product is placed on a wet stone shelf inside a natural emerald-green water cavern. Water falls in delicate, thin streams in the background. The sun cuts through a hole in the cave ceiling, lighting the product with a warm beam. Highly detailed.",
        emotion: "Rejuvenation & Sacred Origin",
        lighting: "Volumetric cavern sunbeam, water droplet glints, emerald ambient glow",
        composition: "Rule of thirds, waterfall on left, product on right shelf, deep space"
      },
      {
        id: "water-6",
        title: "The Floating Pavilion",
        prompt: "Luxury product visual. A minimalist white concrete pavilion floating in an endless sea of calm, light blue water under a hazy white sky. The product sits on a concrete block at the pavilion edge. Clean, high-end retail campaign visual, pristine details, Hasselblad quality.",
        emotion: "Clarity & Infinite Luxury",
        lighting: "Bright high-key overcast skylight, soft water reflection bounce",
        composition: "Wide horizontal shot, minimalist architectural framing, clean sky"
      },
      {
        id: "water-7",
        title: "Sunset Ripple Campaign",
        prompt: "Commercial product photography. The product is resting on a glass platform submerged in water. The sunset sky of rich magenta and gold is reflected perfectly in the water ripples. Golden caustics dance on the product bottle. Editorial art direction, ultra-crisp print quality.",
        emotion: "Awe & Sunset Desire",
        lighting: "Rich sunset backlighting, golden caustics, soft fill on the logo",
        composition: "Close-up, low camera angle, water ripples stretching to horizon"
      },
      {
        id: "water-8",
        title: "The Jade Steps",
        prompt: "High-end luxury campaign. The product is positioned on steps of green jade stone that disappear into a quiet, warm pool. Pink petals float on the water. Classical architecture in soft focus in the background. Crisp product textures, professional studio finish.",
        emotion: "Tradition & Premium Care",
        lighting: "Diffused warm key light, soft green jade glow, realistic water shadows",
        composition: "Diagonal step perspective, close-up on product, shallow depth of field"
      },
      {
        id: "water-9",
        title: "Poseidon's Inner Sanctum",
        prompt: "Billion-dollar fragrance style campaign. The product is placed on a white marble pedestal rising out of a churning, deep blue ocean pool inside a cavernous temple. Dramatic sky through stone arches. Highly detailed, high-contrast, commercial campaign grade.",
        emotion: "Untamed Majesty & Class",
        lighting: "Dramatic cool blue key, warm sunset horizon glow, splashing water highlight",
        composition: "Low angle looking up, dramatic architecture framing the stormy pool"
      },
      {
        id: "water-10",
        title: "Pure Mist Haven",
        prompt: "Art-directed luxury ad. The product is hovering over a gentle water fountain in a white marble courtyard. A fine mist fills the air, catching soft rainbow colors from the light. Pristine product details, clean branding, high-end fashion magazine look.",
        emotion: "Purity & Advanced Skincare",
        lighting: "Soft beauty studio lighting, mist-refracted light, clean white highlights",
        composition: "Centered product, soft focus mist, architectural grid background"
      },
      {
        id: "water-11",
        title: "Golden Fountain Ritual",
        prompt: "Luxury commercial campaign. Liquid gold flows from a classical wall fountain in the background. The product sits on a wet marble basin in the foreground, with droplets of gold water on its surface. Editorial quality, rich colors, pristine bottle detailing.",
        emotion: "Opulence & Rejuvenation",
        lighting: "Golden liquid reflections, warm key light, metallic highlight accents",
        composition: "Close-up macro, fountain stream in background, product in sharp focus"
      },
      {
        id: "water-12",
        title: "The Sapphire Colonnade",
        prompt: "High-end product launch. The product is placed on a stone step in a temple built from sapphire-blue stone. The floor is covered in 2 inches of crystal-clear water, reflecting the columns and the product. Crisp packaging graphics, professional lighting setup.",
        emotion: "Elite Status & Mystery",
        lighting: "Cool blue ambient, sharp white column backlight, water caustic fill",
        composition: "Centered symmetry, reflective horizontal split, wide perspective"
      },
      {
        id: "water-13",
        title: "Water Lily Zen",
        prompt: "Premium product campaign. The product sits on a dark, wet volcanic rock in a serene Zen water garden. Giant water lily pads (Victoria amazonica) float around the rock. The lighting is soft and natural, emphasizing the product texture. Phase One 90mm macro.",
        emotion: "Serenity & Balanced Luxury",
        lighting: "Dappled soft sunlight, leaf-reflected green light, water bounce",
        composition: "Still life arrangement, organic leaf patterns, circular shapes"
      },
      {
        id: "water-14",
        title: "The Glass Pool Bridge",
        prompt: "Luxury editorial ad. The product is placed on a transparent glass bridge spanning a quiet, deep-blue water pool inside a modern temple. The walls are smooth, minimalist white concrete. Crisp reflections, modern luxury, Apple-grade visual.",
        emotion: "Sophistication & Innovation",
        lighting: "Linear LED glow in walls, soft daylight from above, water reflection fill",
        composition: "Minimalist perspective, leading bridge lines, centered product"
      },
      {
        id: "water-15",
        title: "Temple of the Oceans",
        prompt: "Commercial luxury campaign. The product is positioned on a marble altar inside a massive underwater temple hall. Giant glass windows show a school of fish and deep blue sea. Light beams filter through the ocean, illuminating the product. Ultra-sharp product rendering.",
        emotion: "Awe & Deep Exclusivity",
        lighting: "Submerged volumetric light beams, deep ocean blue ambient, bright spotlight",
        composition: "Wide cinematic angle, high depth of field, fish swimming in background"
      }
    ]
  },
  {
    id: "dreamlike-sky",
    name: "Dreamlike Sky Campaigns",
    description: "Products floating among giant clouds, celestial skies, impossible sunsets, floating islands.",
    icon: "Cloud",
    prompts: [
      {
        id: "sky-1",
        title: "The Cloud Catcher",
        prompt: "Commercial luxury advertising photography. The product is floating weightlessly in an impossible dreamscape of soft pastel-pink and gold clouds. Delicate, thin rings of solid white marble float around the product, intersecting elegantly. The sky behind is a soft gradient of lavender, peach, and champagne gold. Bathed in soft, wrap-around beauty light with gentle rim highlights. Captured on Phase One XF 150MP, 80mm lens, f/8, crystal clear product packaging, expensive luxury fashion editorial style.",
        emotion: "Obsession & Divine Dream",
        lighting: "Wrap-around beauty light, soft pastel ambient, pink rim light",
        composition: "Floating product, concentric marble rings, high-altitude sky"
      },
      {
        id: "sky-2",
        title: "Sunset Arch Horizon",
        prompt: "Premium luxury product advertisement. The product is placed on a raw travertine stone arch floating high in the sky. Below, a sea of white clouds stretches to the horizon where a giant sun is setting, casting red and gold light. Crisp product rendering with realistic sun flare. High-end commercial style.",
        emotion: "Prestige & Grand Horizon",
        lighting: "Strong warm backlight, dramatic sunset lens flare, soft stone fill",
        composition: "Wide angle, framing arch, sunset horizon centered"
      },
      {
        id: "sky-3",
        title: "Chiffon Skies",
        prompt: "Art-directed commercial campaign. The product is suspended in mid-air, surrounded by flowing, semi-translucent chiffon fabrics that float like clouds in a pale blue sky. The fabric catches the light, creating soft glowing folds. Pristine bottle texture, clean luxury cosmetic ad.",
        emotion: "Softness & Feminine Elegance",
        lighting: "Diffused high-key daylight, fabric-backlit glow, soft shadow mapping",
        composition: "Dynamic fabric curves, suspended product center, light background"
      },
      {
        id: "sky-4",
        title: "Floating Jade Isle",
        prompt: "A billion-dollar brand product launch. The product is centered on a small floating island of polished green jade stone. A single ancient bonsai pine tree grows next to it. The island floats above a high-altitude cloud cover under a deep blue starry sky with a glowing moon. Majestic, clean.",
        emotion: "Wisdom & Timeless Exclusivity",
        lighting: "Cool moonlight key, soft green jade glow, warm accent highlight",
        composition: "Asymmetric island composition, starry sky depth, product as central focus"
      },
      {
        id: "sky-5",
        title: "The Celestial Staircase",
        prompt: "High-end product campaign. A spiral staircase made of white clouds leads up into a bright, golden portal in the sky. The product sits on the bottom step, casting a soft shadow on the cloud structure. Crisp detail on product logo and packaging. Editorial art direction.",
        emotion: "Ascent & Ultimate Desire",
        lighting: "Overhead gold light from the portal, soft cloud reflection fill",
        composition: "Spiral leading lines, looking up perspective, product in foreground focus"
      },
      {
        id: "sky-6",
        title: "Lavender Sky Sanctuary",
        prompt: "Premium luxury ad. The product is resting on a minimal concrete shelf floating in a soft lavender sky. Gentle wisps of white clouds pass through the shelf. Elegant, clean, modern cosmetic campaign. Shot on Hasselblad H6D, 100mm lens, f/8, crisp print quality.",
        emotion: "Calm & Clean Sophistication",
        lighting: "Soft lavender sky ambient, cool white key, minimal shadow",
        composition: "Minimalist horizontal layout, concrete shelf line cutting across, product right"
      },
      {
        id: "sky-7",
        title: "The Golden Balloon",
        prompt: "Luxury commercial campaign. The product is suspended beneath a floating golden metallic sphere that reflects the surrounding sky of orange clouds. Crisp reflections on the metal, pristine packaging. Modern luxury creative direction, high fashion editorial.",
        emotion: "Opulence & Playful Luxury",
        lighting: "Strong sun key, gold sphere reflection, warm cloud ambient",
        composition: "Vertical composition, sphere and product aligned, sky depth"
      },
      {
        id: "sky-8",
        title: "Cumulus Monolith",
        prompt: "High-end product launch. The product is placed in a cutout of a massive, geometric cloud monolith that floats in a clear blue sky. The cloud edges glow with bright sunlight. Minimalist, premium, clean design. Phase One quality, crisp detail.",
        emotion: "Innovation & Structure",
        lighting: "Hard side sunlight, bright cloud rim glow, clear blue sky fill",
        composition: "Geometric alignment, cloud monolith framing product, negative space"
      },
      {
        id: "sky-9",
        title: "Sunset Feathers",
        prompt: "Billion-dollar fragrance style campaign. The product is resting on a bed of giant, floating white feathers in a sky of deep magenta and gold. The feathers are soft and detailed, catching the warm sunset light. Editorial art direction, ultra-crisp print quality.",
        emotion: "Sensuality & Luxury Comfort",
        lighting: "Warm sunset light filtering through feathers, soft pink-magenta fill",
        composition: "Close-up macro, feather texture overlay, product centered"
      },
      {
        id: "sky-10",
        title: "The Sky Mirror",
        prompt: "Art-directed luxury ad. The product stands on a giant circular mirror floating in the stratosphere. The mirror reflects the deep blue sky, stars, and nebula above. Clean, premium, futuristic cosmetic/tech aesthetic, sharp logo and details.",
        emotion: "Infinite Potential & Prestige",
        lighting: "Starlight key light, nebula colored rim lights, reflective surface bounce",
        composition: "Looking down angle, perfect circle mirror, cosmic sky depth"
      },
      {
        id: "sky-11",
        title: "Morning Mist Archway",
        prompt: "Luxury product visual. A classical stone archway floats in a soft, white morning mist sky. The product sits on a marble block within the arch. The sun is just rising, creating golden light beams. Editorial campaign quality, crisp and detailed.",
        emotion: "Hope & Divine Heritage",
        lighting: "Morning sunbeams, mist light scattering, soft stone bounce",
        composition: "Framed perspective, arch centering the product, mist background"
      },
      {
        id: "sky-12",
        title: "The Cloud Ring",
        prompt: "High-end product campaign. The product floats inside a perfect torus ring made of white cloud vapor. The sky behind is a soft champagne color. Extremely sharp product typography, pristine glass reflections. Vogue campaign style.",
        emotion: "Perfection & Wholeness",
        lighting: "Soft beauty light, warm champagne ambient, halo highlight",
        composition: "Symmetrical close-up, cloud torus framing the product"
      },
      {
        id: "sky-13",
        title: "Amber Sky Monolith",
        prompt: "Luxury commercial campaign. The product is placed on a tall, dark granite column floating in an amber sky. The sun is setting behind the column, creating a dramatic silhouette with a bright rim light on the product. Elite branding visual.",
        emotion: "Statuesque Power & Legacy",
        lighting: "Sunset silhouette backlight, warm amber rim light, subtle front fill",
        composition: "Low angle looking up, dramatic vertical column, amber sky"
      },
      {
        id: "sky-14",
        title: "Ethereal Wing Campaign",
        prompt: "Premium luxury ad. The product is framed by two giant, semi-translucent angel wings made of light and glass, floating in a white cloud atmosphere. The product packaging is rendered with absolute clarity and detail. High-end cosmetics style.",
        emotion: "Divine Grace & Prestige",
        lighting: "Backlit wings glowing, soft front key, clean white ambient",
        composition: "Symmetrical portrait, wings framing product, cloud base"
      },
      {
        id: "sky-15",
        title: "The Stratosphere Platform",
        prompt: "Commercial luxury campaign. The product sits on a clean chrome platform floating in the blackness of the upper atmosphere, with the curved blue line of the Earth below. Golden sun rays strike the product from the side. Epic scale, ultra-premium.",
        emotion: "Global Dominance & Elite Tech",
        lighting: "Hard side sunlight, Earth atmospheric blue bounce, chrome reflections",
        composition: "Wide angle, Earth curve in background, product on clean platform"
      }
    ]
  },
  {
    id: "heaven-tech",
    name: "Futuristic Heaven-Tech Ads",
    description: "Apple-style futuristic environments fused with celestial luxury aesthetics.",
    icon: "Cpu",
    prompts: [
      {
        id: "tech-1",
        title: "The White Room Sanctuary",
        prompt: "Commercial luxury product advertising in a futuristic heaven-tech style. The product is suspended weightlessly in the center of an ultra-minimalist white laboratory chamber. Perfect curved white walls are accented by recessed warm LED strips that glow softly. In the background, a large circular window reveals a sea of golden clouds at sunrise. The product is lit by soft, multi-directional studio lights, creating clean metallic highlights and realistic soft shadows. Shot on Hasselblad H6D-100c, 80mm lens, f/8, Apple-grade design, pristine commercial finish.",
        emotion: "Innovation & Pure Luxury",
        lighting: "Diffused multi-directional studio key, soft ambient warm LED glow",
        composition: "Perfect central symmetry, clean geometric leading lines, circular window frame"
      },
      {
        id: "tech-2",
        title: "Floating Chrome Ring",
        prompt: "Premium luxury product advertisement. The product floats inside a sleek, polished chrome ring that rotates in a high-altitude cloud sanctuary. The sky is an elegant gradient of deep lavender and pale champagne. Bathed in soft lavender light, with sharp white reflections on the chrome surface. Apple-style clean aesthetics.",
        emotion: "Advanced Sophistication & Design",
        lighting: "Lavender ambient key, chrome edge highlights, clean white fill",
        composition: "Concentric circle framing, floating product, deep sky background"
      },
      {
        id: "tech-3",
        title: "The Glass Pedestal Lab",
        prompt: "Art-directed commercial campaign. The product is placed on a glowing glass pedestal in an open-air futuristic balcony overlooking a sky filled with floating structures. The environment is clean, clinical, yet highly luxurious. High-contrast metallic surfaces, sharp typography, premium tech ad style.",
        emotion: "Futuristic Prestige & Wisdom",
        lighting: "Under-lit pedestal glow, crisp morning skylight, silver reflector fill",
        composition: "Diagonal balcony perspective, architectural grid, product focus"
      },
      {
        id: "tech-4",
        title: "Silicon & Silk",
        prompt: "A billion-dollar brand product launch. The product is nestled in a micro-structured silver mesh fabric that flows like water, floating in a clean white space. Holographic interface patterns project softly onto the background wall in a warm amber hue. Highly detailed, clean retail visual.",
        emotion: "Innovation & Fluid Luxury",
        lighting: "Soft high-key beauty light, amber holographic projection bounce",
        composition: "Macro product shot, surrounding mesh fabric waves, minimalist space"
      },
      {
        id: "tech-5",
        title: "The Cloud Processor",
        prompt: "High-end product campaign. The product is suspended above a floating, matte-white circular platform in the sky. Delicate gold laser lines project a coordinates grid onto the platform surface. Sun rays cut through a light haze, lighting the product package. Crisp, commercial finish.",
        emotion: "Precision & Elevated Status",
        lighting: "Dappled sun rays, gold laser glow, clean white key light",
        composition: "Centered product, circular platform below, sky background"
      },
      {
        id: "tech-6",
        title: "Titanium & Clouds",
        prompt: "Premium luxury ad. The product is positioned on a floating sheet of brushed titanium, suspended in a warm pink cloudscape. The titanium sheet reflects the pink sky and the product details with a soft, brushed texture. Elite creative direction, pristine quality.",
        emotion: "Durability & Premium Beauty",
        lighting: "Pink sunset sky ambient, soft key light on product logo, metallic rim",
        composition: "Three-quarters angle, titanium diagonal plane, product centered"
      },
      {
        id: "tech-7",
        title: "The Hangar Pavilion",
        prompt: "Luxury commercial campaign. The product sits on a white concrete pedestal inside a massive, open-concept hangar overlooking a cloud-filled canyon. Warm sunlight streams in, casting long, clean architectural shadows. High-end, premium tech visual, Phase One quality.",
        emotion: "Grandeur & Technical Mastery",
        lighting: "Low sun angle key, strong architectural shadow casting, soft bounce fill",
        composition: "Wide angle, dramatic depth, product centered on pedestal"
      },
      {
        id: "tech-8",
        title: "Holographic Lotus",
        prompt: "High-end product launch. The product is suspended inside a floating holographic outline of a lotus flower, glowing with blue and orange light. The scene is set in an ultra-clean, white-and-gray studio. Razor-sharp product text and packaging details.",
        emotion: "Purity & Advanced Engineering",
        lighting: "Holographic projection light, cool white studio key, soft gray fill",
        composition: "Centered portrait, holographic lines framing product, macro focus"
      },
      {
        id: "tech-9",
        title: "The Obsidian Interface",
        prompt: "Billion-dollar fragrance style campaign. The product is placed on a dark obsidian interface screen displaying glowing white geometry. The background is a dark, moody space with floating mist. The product packaging is rendered with absolute clarity, catching bright highlights. High-contrast.",
        emotion: "Power & Elite Performance",
        lighting: "Screen-emitted key light, high contrast rim highlights, dark room fill",
        composition: "High-angle view of the interface, product offset to the right"
      },
      {
        id: "tech-10",
        title: "The Sky Server Sanctuary",
        prompt: "Art-directed luxury ad. The product sits on a white marble server rack floating in a clear sky. Thin fiber-optic cables glowing with golden light run from the rack into the clouds. Sophisticated, clean, premium tech campaign. Hasselblad H6D quality.",
        emotion: "Connectivity & Premium Status",
        lighting: "Fiber-optic golden glow, crisp morning skylight, white server reflection",
        composition: "Linear perspective of the rack, product in sharp focus foreground"
      },
      {
        id: "tech-11",
        title: "The White Portal",
        prompt: "Luxury product visual. The product floats in front of a giant, glowing white circular portal set in a matte-white wall. The floor is polished concrete reflecting the portal light. Minimalist, premium, clean design. Apple campaign aesthetic.",
        emotion: "Future Vision & Clarity",
        lighting: "Backlit portal glow, soft floor bounce, wrap-around fill on product",
        composition: "Symmetrical centered composition, looking directly at portal"
      },
      {
        id: "tech-12",
        title: "The Cloud Ring Portal",
        prompt: "High-end product campaign. The product is placed on a chrome pedestal. Above it, a ring of floating white clouds rotates, guided by glowing blue lasers. Sky blue and silver color grading. Extremely sharp details, premium commercial retouched look.",
        emotion: "Innovation & Heavenly Power",
        lighting: "Laser blue key accents, chrome pedestal reflections, soft white key",
        composition: "Centered product, vertical column of clouds and light"
      },
      {
        id: "tech-13",
        title: "Titanium Pod Dawn",
        prompt: "Luxury commercial campaign. The product is housed inside an open titanium capsule floating in a golden-hour sky. The capsule shell is polished and reflects the sun. Pristine product details, high-end editorial art direction, elite commercial grade.",
        emotion: "Protection & Rare Luxury",
        lighting: "Golden-hour sun rim light, titanium internal reflections, soft sky fill",
        composition: "Close-up macro of the capsule interior, product centered"
      },
      {
        id: "tech-14",
        title: "The Glass Console Sanctuary",
        prompt: "Premium luxury ad. The product rests on a floating glass console table inside a high-altitude glass dome. The sky outside is filled with white clouds and soft blue light. Modern, minimalist, premium, clean design. Phase One quality.",
        emotion: "Sophistication & Clarity",
        lighting: "Soft diffused sky light, glass console refraction highlights, cool fill",
        composition: "Symmetrical wide view of the dome, console centered"
      },
      {
        id: "tech-15",
        title: "Laser Lotus Path",
        prompt: "Commercial luxury campaign. The product is placed on a white marble pedestal. A series of clean red laser lines project a pathway of light leading to the product, passing through a soft haze. Highly detailed, high-contrast, premium launch aesthetic.",
        emotion: "Exclusivity & Precision",
        lighting: "Laser light path reflection, overhead spotlight key, dark room absorption",
        composition: "Perspective leading lines, looking down the path to the product"
      }
    ]
  },
  {
    id: "monumental-pedestal",
    name: "Monumental Product Pedestal Campaigns",
    description: "Massive stone pedestals, giant architectural product presentation, cinematic scale and grandeur.",
    icon: "Layers",
    prompts: [
      {
        id: "pedestal-1",
        title: "The Travertine Monolith",
        prompt: "Commercial luxury product advertising on a monumental scale. The product is positioned centered on a massive, rough-textured travertine stone pedestal that towers 50 feet high in a vast desert landscape. In the background, modern concrete architectural monoliths rise against a deep indigo twilight sky. A single powerful spotlight beams from the floor, illuminating the product from below and casting an imposing shadow on the stone wall behind it. Photographed on a Phase One 150MP, 35mm wide-angle lens, f/8, sharp focus, cinematic prestige visual.",
        emotion: "Imposing Stature & Prestige",
        lighting: "Bottom-up powerful spotlight, dramatic low-key ambient sky light",
        composition: "Extreme low-angle look-up, monumental central pedestal, symmetrical architecture"
      },
      {
        id: "pedestal-2",
        title: "Carrara Staircase Summit",
        prompt: "Premium luxury product advertisement. The product is placed at the summit of a grand, cascading staircase made of polished Carrara marble. The staircase rises out of a black reflective floor. Soft white volumetric light pours from the top, casting long shadows. Highly detailed, high-contrast, commercial campaign grade.",
        emotion: "Peak Achievement & Power",
        lighting: "Top-down volumetric key light, marble reflection bounce",
        composition: "Looking up the staircase, leading lines pointing to the product at the top"
      },
      {
        id: "pedestal-3",
        title: "Obsidian & Gold Tier",
        prompt: "Art-directed commercial campaign. The product sits on a multi-tiered circular pedestal made of black obsidian stone and wrapped in brushed gold bands. The pedestal is centered in a minimal, dark gallery space. Dramatic rim lighting highlights the product's silhouette. Vogue-level editorial style.",
        emotion: "Exclusivity & Opulence",
        lighting: "High-contrast rim lighting, gold reflections, dark room absorption",
        composition: "Centred eye-level shot, symmetrical tiers, minimal background"
      },
      {
        id: "pedestal-4",
        title: "The Concrete Cathedral",
        prompt: "A billion-dollar brand product launch. The product is displayed on a giant, brutalist concrete block inside a cathedral-like modern concrete hall. Light streams through a narrow slit in the high ceiling, cutting through the atmospheric dust to illuminate the product. Extreme raw textures, clean product graphics.",
        emotion: "Timeless Authority & Modern Art",
        lighting: "Slit sunbeam key, volumetric haze, soft concrete bounce fill",
        composition: "Wide angle, monumental space, product as a tiny hero on giant block"
      },
      {
        id: "pedestal-5",
        title: "Raw Granite Peak",
        prompt: "High-end product campaign. The product is placed on a rough, split granite rock pedestal. The pedestal sits in a quiet, misty valley surrounded by high mountains. Sunset light strikes the granite peak and the product packaging with amber highlights. Cinematic photography.",
        emotion: "Natural Heritage & Strength",
        lighting: "Low-angle amber sunset key, mist light scattering, dark rock fill",
        composition: "Centered rock, wide mountain background, high contrast highlights"
      },
      {
        id: "pedestal-6",
        title: "Floating Basalt Column",
        prompt: "Premium luxury ad. The product is centered on a tall, hexagonal basalt column that rises out of a dark, still pool of water. In the background, similar basalt columns are arranged in geometric patterns in shadow. Pristine product details, professional camera lens look.",
        emotion: "Power & Structured Luxury",
        lighting: "Side key spotlight, water reflection fill, column rim accents",
        composition: "Vertical rule of thirds, product on central column, water reflections below"
      },
      {
        id: "pedestal-7",
        title: "The Alabaster Altar",
        prompt: "Luxury commercial campaign. The product is placed on a glowing white alabaster pedestal inside a clean, modern white pavilion. The pedestal is illuminated from within, casting a soft, warm light on the product. Clean lines, minimalist luxury, Apple-grade visual.",
        emotion: "Clarity & Pure Beauty",
        lighting: "Internal alabaster glow, soft beauty studio key, white room reflection",
        composition: "Centered product, clean white geometric lines framing the pedestal"
      },
      {
        id: "pedestal-8",
        title: "Sandstone Oasis Monolith",
        prompt: "High-end product launch. The product is positioned on a monumental red sandstone block in a desert canyon. The sun is high, casting sharp, graphic shadows of the canyon walls. The product packaging is rendered with absolute clarity, catching bright highlights. Editorial art direction.",
        emotion: "Rugged Elegance & Independence",
        lighting: "Direct hard sunlight, high-contrast canyon shadows, sand bounce fill",
        composition: "Wide horizontal shot, sandstone monument left, canyon depth right"
      },
      {
        id: "pedestal-9",
        title: "The Jade Throne",
        prompt: "Billion-dollar fragrance style campaign. The product sits on a carved green jade pedestal shaped like a lotus flower. The background is a dark wall of polished black marble reflecting the jade pedestal. Golden lighting highlights the intricate carvings. High-end, premium quality.",
        emotion: "Imperial Status & Luxury Heritage",
        lighting: "Warm gold spotlight, jade green translucent glow, black marble reflections",
        composition: "Centered macro shot, high detail on jade carvings, dark background"
      },
      {
        id: "pedestal-10",
        title: "Brutalist Bronze Pillar",
        prompt: "Art-directed luxury ad. The product is placed on a heavy, textured cast bronze pedestal with a brutalist design. The background is a textured plaster wall in dark gray. Cinematic side lighting reveals the rough metallic texture of the pedestal. Hasselblad H6D quality.",
        emotion: "Power & Dark Sophistication",
        lighting: "Chiaroscuro side key light, bronze highlight sheen, plaster shadow depth",
        composition: "Close-up portrait framing, pedestal intersecting diagonally"
      },
      {
        id: "pedestal-11",
        title: "The Glass Column Cluster",
        prompt: "Luxury product visual. The product stands on the highest of several clustered glass pillars of varying heights. The pillars glow with a soft blue light. The background is a dark, minimal space. Crisp product rendering, high-end retail campaign visual.",
        emotion: "Innovation & Elevated Status",
        lighting: "Internal glass pillar blue glow, overhead white key, dark background",
        composition: "Centered product, clustered glass pillars, vertical alignment"
      },
      {
        id: "pedestal-12",
        title: "Travertine Arch Sanctuary",
        prompt: "High-end product campaign. The product is centered on a travertine column under a grand travertine arch. In the background, a soft white sky. Clean, architectural, premium look. Crisp product details, professional lighting setup.",
        emotion: "Tradition & Monumental Calm",
        lighting: "Soft diffused daylight, arch shadow framing, stone bounce",
        composition: "Symmetrical architectural shot, arch framing the column, centered product"
      },
      {
        id: "pedestal-13",
        title: "The Gold Leaf Pedestal",
        prompt: "Luxury commercial campaign. The product is placed on a raw stone block covered in peeling gold leaf. The background is a warm, textured plaster wall. Soft, elegant lighting casts a realistic shadow of the product on the gold surface. Vogue campaign style.",
        emotion: "Artisanal Luxury & Opulence",
        lighting: "Soft side key light, gold leaf reflections, warm plaster fill",
        composition: "Close-up macro, rich textures, product centered"
      },
      {
        id: "pedestal-14",
        title: "The Volcanic Slate Pedestal",
        prompt: "Premium luxury ad. The product is positioned on a dark volcanic slate pedestal. In the background, glowing red lava flows are visible in the distance under a dark sky. The product remains in cool spotlight, creating a dramatic contrast. Crisp packaging.",
        emotion: "Power & Dangerous Desire",
        lighting: "Cool white key spotlight, warm volcanic red backlight, slate texture rim",
        composition: "Three-quarters view, lava flow background in soft focus, sharp product"
      },
      {
        id: "pedestal-15",
        title: "The White Onyx Tier",
        prompt: "Commercial luxury campaign. The product rests on a multi-tiered white onyx pedestal illuminated from within, floating in a clean, high-key studio. The soft light reveals the translucent green-and-white veins of the onyx. Modern, clean, and expensive.",
        emotion: "Clarity & Exquisite Detail",
        lighting: "Internal onyx glow, high-key soft studio ambient, white reflector bounce",
        composition: "Symmetrical centered composition, low camera angle looking up"
      }
    ]
  },
  {
    id: "nature-fusion",
    name: "Luxury Nature Fusion Campaigns",
    description: "Products integrated into impossible premium natural worlds: waterfalls, glowing forests, ice caverns, giant flowers.",
    icon: "Leaf",
    prompts: [
      {
        id: "nature-1",
        title: "The Orchid Sanctuary",
        prompt: "Commercial luxury advertising photography. The product is nested inside the heart of an impossible, giant translucent white orchid flower that grows out of a moss-covered wet stone. Warm, dappled sunbeams filter through a thick jungle canopy in the background, illuminating the orchid petals with a soft glow. Water droplets cling to the product surface and flower petals, catching bright highlights. Shot on Phase One 150MP, 90mm macro lens, f/8, crisp detail on packaging, botanical luxury skincare campaign style.",
        emotion: "Rejuvenation & Exotic Luxury",
        lighting: "Dappled jungle sunbeams, translucent petal backlight, soft green-gold bounce",
        composition: "Macro center focus, organic petal framing, shallow depth of field"
      },
      {
        id: "nature-2",
        title: "Ice Cavern Prism",
        prompt: "Premium luxury product advertisement. The product is placed on a shelf of pure glacial ice inside a deep blue ice cavern. Massive icicles hang from the ceiling, refracting sunlight into sharp blue-white needles of light. The product bottle reflects the cold blue ice and bright highlights. Editorial grade.",
        emotion: "Pristine Purity & Crisp Power",
        lighting: "Backlit ice glow, refracted winter sunbeams, cool blue ambient fill",
        composition: "Three-quarters close-up, ice framing, deep cavern perspective"
      },
      {
        id: "nature-3",
        title: "Volcanic Obsidian Peak",
        prompt: "Art-directed commercial campaign. The product stands on a jagged piece of dark basalt rock next to a glowing, cooling crack of orange lava. The background is a moody, dark smoke-filled volcanic landscape. The product is lit by a cool spotlight to preserve its brand colors. Highly dramatic.",
        emotion: "Power & Irresistible Heat",
        lighting: "Cool white key light, warm orange lava backlight, smoke light scattering",
        composition: "Low angle look-up, diagonal lava line, product as cool focus"
      },
      {
        id: "nature-4",
        title: "The Botanical Temple",
        prompt: "A billion-dollar brand product launch. The product is placed on an ancient, ivy-draped stone altar inside a ruined classical greenhouse. Towering glass arches overhead are partially covered in lush green vines. Sunbeams cut through the mist, lighting the product logo. Pristine quality.",
        emotion: "Heritage & Organic Elegance",
        lighting: "Volumetric greenhouse sunbeams, soft green foliage reflections",
        composition: "Centered product, leading lines of the glass arches, mossy foreground"
      },
      {
        id: "nature-5",
        title: "Glowing Forest Oasis",
        prompt: "High-end product campaign. The product sits on a mossy tree root next to a glowing bioluminescent pool in a dark, magical forest. Tiny glowing spores float in the air. The product is illuminated by a clean, white key light, popping against the magical green background.",
        emotion: "Mystery & Sacred Care",
        lighting: "Clean white key light, green bioluminescent glow, floating spore sparkles",
        composition: "Close-up macro, organic tree root framing, glowing water background"
      },
      {
        id: "nature-6",
        title: "Desert Rose Oasis",
        prompt: "Premium luxury ad. The product is positioned on a flat sand-swept stone, surrounded by delicate pink desert roses. In the background, soft sand dunes stretch under a warm, hazy sky. The lighting is warm and sunset-toned, casting soft shadows. Vogue style cosmetic ad.",
        emotion: "Sensuality & Natural Purity",
        lighting: "Soft warm sunset key, sand reflection bounce, pink rose petal fill",
        composition: "Still life arrangement, organic flow of rose petals, desert depth"
      },
      {
        id: "nature-7",
        title: "Waterfall Monolith",
        prompt: "Luxury commercial campaign. The product is placed on a wet stone shelf right next to a cascading wall of water from a forest waterfall. A fine mist fills the air, catching a soft rainbow. Crisp product rendering with water droplets on the bottle. Phase One quality.",
        emotion: "Freshness & Vitality",
        lighting: "High-contrast daylight key, water mist rainbow lens flare, cool fill",
        composition: "Asymmetric layout, waterfall on left, product on right stone shelf"
      },
      {
        id: "nature-8",
        title: "The Quartz Geode Cave",
        prompt: "High-end product launch. The product is nestled inside the open cavity of a giant amethyst geode cavern. The purple crystals surround the product, reflecting purple and silver light. The product details are sharp and clear, catching bright highlights. Editorial art direction.",
        emotion: "Unrivaled Rarity & Beauty",
        lighting: "Internal geode purple glow, crisp spotlight on product, silver fill",
        composition: "Macro close-up, geode ring framing the product, dark background"
      },
      {
        id: "nature-9",
        title: "Sacred Mountain Peak",
        prompt: "Billion-dollar fragrance style campaign. The product is placed on a raw slate ledge at the peak of a sacred mountain. Wisps of clouds pass below the peak. The sun is rising, casting a divine golden-pink light on the product. Elite branding visual, crisp packaging.",
        emotion: "Peak Achievement & Sovereignty",
        lighting: "Low-angle sunrise backlight, soft pink rim light, sky blue fill",
        composition: "Wide angle, extreme mountain depth, product left on slate ledge"
      },
      {
        id: "nature-10",
        title: "Dappled Bamboo Path",
        prompt: "Art-directed luxury ad. The product sits on a dark stone pedestal in a quiet bamboo forest. Sunbeams cut through the tall green stalks, creating a pattern of light and shadow on the floor. Crisp product details, clean branding, high-end retail campaign visual.",
        emotion: "Clarity & Natural Wisdom",
        lighting: "Dappled bamboo sunlight, green forest ambient bounce, soft key spotlight",
        composition: "Linear perspective of bamboo stalks, product centered on stone"
      },
      {
        id: "nature-11",
        title: "The Golden Wheat Field",
        prompt: "Luxury product visual. The product is centered on a polished wood table in the middle of a golden wheat field at sunset. The warm wind bows the wheat stalks. The sun is setting behind, creating a warm, nostalgic lens flare. Crisp product details, Vogue campaign style.",
        emotion: "Heritage & Natural Abundance",
        lighting: "Warm golden sunset backlight, wheat gold bounce, soft face fill",
        composition: "Wide horizontal shot, horizon line in upper third, table centered"
      },
      {
        id: "nature-12",
        title: "Lotus Blossom Reflections",
        prompt: "High-end product campaign. The product floats inside a white lotus blossom on a still, black water pond. The pond reflects a soft sky and weeping willow branches in the background. Highly detailed, high-contrast, premium cosmetics campaign grade.",
        emotion: "Serenity & Balanced Care",
        lighting: "Diffused morning daylight, soft water reflections, pink lotus glow",
        composition: "Centered macro, water reflection split, willow framing top"
      },
      {
        id: "nature-13",
        title: "Sandstone Wave Monument",
        prompt: "Luxury commercial campaign. The product is placed on a ledged section of a swirling red sandstone canyon wall (like Antelope Canyon). Light streams down from the canyon opening, illuminating the product packaging. Pristine product details, professional camera look.",
        emotion: "Artistic Elegance & Time",
        lighting: "Canyon opening spotlight, sandstone red-orange bounce, soft fill",
        composition: "Dynamic vertical lines of sandstone, product nestled in the curve"
      },
      {
        id: "nature-14",
        title: "Pristine Snow Peak",
        prompt: "Premium luxury ad. The product rests on a bed of fresh, untouched snow on a mountain ledge. High-altitude blue sky in the background. The sun catches the snow crystals, making them sparkle. Highly detailed product rendering, clean and crisp.",
        emotion: "Pure Cleanliness & Excellence",
        lighting: "Bright high-altitude sun, snow sparkle reflection, crisp blue sky fill",
        composition: "Close-up macro, snow texture foreground, mountain range background"
      },
      {
        id: "nature-15",
        title: "The Floating Ivy Ring",
        prompt: "Commercial luxury campaign. The product floats inside a circular wreath of green ivy leaves and white flowers, suspended in a bright, clean sky-lit studio. Perfect reflections on the product surface, crisp text. Modern natural branding visual.",
        emotion: "Organic Grace & Premium Quality",
        lighting: "Soft beauty studio light, leaf translucency backlight, silver reflector",
        composition: "Symmetrical portrait, ivy ring enclosing the product, clean background"
      }
    ]
  },
  {
    id: "glass-box",
    name: "Glass Box Showcase Campaigns",
    description: "Products inside giant transparent cubes, museum-grade luxury presentation, reflective floors.",
    icon: "Box",
    prompts: [
      {
        id: "glass-box-1",
        title: "The Museum Gallery Vault",
        prompt: "Commercial luxury product advertising. The product is presented inside a museum-grade, seamless glass display cube resting on a polished black concrete pedestal. The environment is a vast, empty gallery space with brutalist concrete walls and a glossy, reflective floor. A single sharp, architectural spotlight shines from the high ceiling directly down onto the product, casting a defined shadow and creating clean, linear reflections on the glass display box. Photographed on a Phase One XF 150MP, 80mm lens, f/11, crisp edge-to-edge focus, high-end editorial art direction.",
        emotion: "Preservation & Supreme Value",
        lighting: "Hard overhead key spotlight, sharp glass reflections, soft concrete bounce",
        composition: "Perfect central symmetry, museum pedestal framing, wide background"
      },
      {
        id: "glass-box-2",
        title: "Submerged Glass Vault",
        prompt: "Premium luxury product advertisement. The product is placed inside a sealed glass display case submerged in a still, turquoise pool. Caustics from the water surface project shifting light patterns onto the product and the concrete wall behind it. Crisp, commercial retouched visual.",
        emotion: "Isolation & Rare Purity",
        lighting: "Submerged water caustics, soft ambient blue-green fill, highlight sparkle",
        composition: "Centered look-down, underwater perspective, glass box framing"
      },
      {
        id: "glass-box-3",
        title: "The Glass Monolith Gallery",
        prompt: "Art-directed commercial campaign. The product sits inside a massive, 12-foot tall glass showcase box in an open-air pavilion. In the background, a soft pink sky at sunset is reflected on the glass surfaces. The product packaging is rendered with sharp, professional clarity.",
        emotion: "Prestige & Sunset Elegance",
        lighting: "Warm sunset backlight, glass surface reflections, soft marble bounce",
        composition: "Wide angle, architectural monumentality, glass case left, sunset right"
      },
      {
        id: "glass-box-4",
        title: "Floating Glass Cube Vault",
        prompt: "A billion-dollar brand product launch. The product is encased inside a floating glass cube that hovers over a black obsidian pool. The background features minimal dark walls with recessed golden lighting strips. High contrast, sharp metallic details, luxury campaign style.",
        emotion: "Innovation & Dark Opulence",
        lighting: "Recessed golden LED glow, hard white spotlight on product, obsidian reflection",
        composition: "Horizontal symmetry, floating element, reflection in the pool"
      },
      {
        id: "glass-box-5",
        title: "The White Gallery Arch",
        prompt: "High-end product campaign. The product is presented in a glass case at the center of a circular gallery space with white classical arches. Soft, diffused daylight pours from a skylight, creating clean, soft shadows. Editorial cosmetic ad aesthetic, crisp print quality.",
        emotion: "Clarity & Timeless Design",
        lighting: "Diffused skylight key, white arch reflections, soft gray fill",
        composition: "Symmetrical layout, looking through arches to the central glass case"
      },
      {
        id: "glass-box-6",
        title: "Obsidian & Gold Showcase",
        prompt: "Premium luxury ad. The product sits on a gold pedestal inside a dark, smoked-glass box. The background is a dark granite wall with high-end texture. Soft gold lighting illuminates the product, reflecting off the dark glass. Hasselblad H6D quality.",
        emotion: "Secrecy & Immense Wealth",
        lighting: "Internal gold spotlight, dark glass reflections, low-key ambient fill",
        composition: "Close-up macro of the display, product centered, gold accents"
      },
      {
        id: "glass-box-7",
        title: "The Rain Pavilion Showcase",
        prompt: "Luxury commercial campaign. The product is inside a glass showcase box in an outdoor concrete courtyard. Rainwater streams down the outer glass walls of the box, catching bright twilight highlights. The product inside remains dry and perfectly lit. Premium visual.",
        emotion: "Protection & Untouched Perfection",
        lighting: "Twilight blue ambient, rain droplet highlights, warm product spotlight",
        composition: "Close-up, looking through rain-streaked glass, product in sharp focus"
      },
      {
        id: "glass-box-8",
        title: "The Golden Mesh Showcase",
        prompt: "High-end product launch. The product is inside a glass box, resting on a bed of woven gold metallic mesh. The background is a clean white gallery space. The light catches the gold mesh, creating a brilliant, glowing base. Editorial art direction.",
        emotion: "Artisanal Value & Quality",
        lighting: "Bright overhead softbox, gold mesh reflections, clean studio fill",
        composition: "Three-quarters view, close-up on the base, glass reflections mapped"
      },
      {
        id: "glass-box-9",
        title: "The Glass Box Forest",
        prompt: "Billion-dollar fragrance style campaign. The product is inside a glass case in the middle of a dense pine forest. Sun rays cut through the trees, striking the glass case and creating long shadows. Crisp product packaging, organic meets artificial luxury.",
        emotion: "Heritage & Natural Purity",
        lighting: "Volumetric forest sun rays, glass edge glare, soft green fill",
        composition: "Wide shot, glass box centered, tall trees framing the frame"
      },
      {
        id: "glass-box-10",
        title: "Chrome & Glass Sanctuary",
        prompt: "Art-directed luxury ad. The product sits on a chrome pedestal inside a double-walled glass box. The background features metallic silver panels reflecting the scene. Modern tech or luxury cosmetic vibe, sharp logo, clean and expensive.",
        emotion: "High Tech Sophistication",
        lighting: "Cool white studio key, multi-layered glass reflections, chrome sheen",
        composition: "Symmetrical centered composition, grid line alignments"
      },
      {
        id: "glass-box-11",
        title: "The Sand Dunes Showcase",
        prompt: "Luxury product visual. A glass display box is partially buried in pristine orange sand dunes. The product inside is standing upright, bathed in warm desert sun. The sky is clear blue. High-contrast, commercial campaign grade.",
        emotion: "Timelessness & Rare Discovery",
        lighting: "Hard direct sunlight, sand reflection warm fill, blue sky contrast",
        composition: "Low angle, looking up at the glass case on a dune crest"
      },
      {
        id: "glass-box-12",
        title: "Alabaster Base Showcase",
        prompt: "High-end product campaign. The product is presented inside a glass box on a raw alabaster stone base. The background is a soft beige wall. Clean, minimal, editorial design, crisp product details, professional camera setup.",
        emotion: "Organic Modernism",
        lighting: "Diffused side window light, warm alabaster glow, soft shadows",
        composition: "Eye-level shot, clean geometric shapes, central subject focus"
      },
      {
        id: "glass-box-13",
        title: "The Red Velvet Showcase",
        prompt: "Luxury commercial campaign. The product is displayed on a royal crimson velvet cushion inside a glass dome. The background is dark and classical. Warm spotlights highlight the product and the rich texture of the velvet. Vogue style.",
        emotion: "Seduction & Royalty",
        lighting: "Warm spotlight key, crimson velvet bounce, deep shadow absorption",
        composition: "Close-up macro of the dome, product centered, rich colors"
      },
      {
        id: "glass-box-14",
        title: "The Floating Sky Showcase",
        prompt: "Premium luxury ad. The product is inside a glass showcase box floating in a sky filled with white clouds at sunrise. The glass reflects the golden clouds and the blue sky. Highly detailed product rendering, clean and crisp.",
        emotion: "Heavenly Prestige",
        lighting: "Sunrise golden hour key, sky blue fill, glass corner reflections",
        composition: "Wide angle, glass box floating center, cloudscape background"
      },
      {
        id: "glass-box-15",
        title: "The Neon Grid Showcase",
        prompt: "Commercial luxury campaign. The product is inside a glass box resting on a grid of white neon light bars in a dark room. The neon lines reflect in the glass and the product surface. Modern, high-concept, tech/fashion style.",
        emotion: "Edge & Future Design",
        lighting: "Neon tube key emission, dark ambient fill, specular chrome highlights",
        composition: "High angle look-down, grid line perspective, product centered"
      }
    ]
  },
  {
    id: "liquid-heaven",
    name: "Cinematic Liquid Heaven Campaigns",
    description: "Golden water, floating liquid ribbons, divine splash scenes, glowing translucent liquids.",
    icon: "Waves",
    prompts: [
      {
        id: "liquid-1",
        title: "The Golden Splash Sanctuary",
        prompt: "Commercial luxury advertising photography. The product is frozen in mid-air, surrounded by a dramatic, high-speed splash of molten golden liquid that wraps around the bottle like a silk ribbon. The background is a clean, dark charcoal gray studio wall. The liquid gold is highly reflective, catching bright highlights and casting warm glows onto the product surface, while the product details, logo, and colors remain perfectly sharp and legible. Captured on Phase One XF 150MP, 100mm macro lens, f/8, 1/8000s shutter speed, crisp droplets, editorial cosmetics campaign style.",
        emotion: "Supreme Opulence & Desire",
        lighting: "High-speed strobe key, liquid gold specular highlights, dark gray studio bounce",
        composition: "Symmetrical central product, organic liquid ribbon wrapping the bottle"
      },
      {
        id: "liquid-2",
        title: "Liquid Rose Petals",
        prompt: "Premium luxury product advertisement. The product floats in a pool of milky pink cosmetic liquid. Slow, thick ripples emanate from the product. Floating pink rose petals drift in the liquid. The lighting is soft and pearlescent, creating a luxurious spa campaign look. Editorial grade.",
        emotion: "Sensual Rejuvenation",
        lighting: "Diffused overhead softbox, pearlescent ambient glow, soft highlights",
        composition: "Flat-lay top-down view, ripples framing the product, soft pink colorway"
      },
      {
        id: "liquid-3",
        title: "The Mercury Flow",
        prompt: "Art-directed commercial campaign. The product is positioned on a black marble table, surrounded by waves of flowing liquid chrome (mercury-like) that curve around it. The background is a dark, moody stone wall. The product packaging is rendered with sharp, high-contrast clarity.",
        emotion: "Power & Dark Sophistication",
        lighting: "High-contrast rim lighting, liquid metal highlights, dark room fill",
        composition: "Close-up macro, flowing metallic curves, product as focal point"
      },
      {
        id: "liquid-4",
        title: "The Water Vortex",
        prompt: "A billion-dollar brand product launch. The product is suspended in the center of a swirling vortex of crystal-clear water. Droplets of water fly outward, frozen in motion. The background is a clean gradient of sky blue. Extremely sharp product typography, commercial grade.",
        emotion: "Vitality & Purity",
        lighting: "High-speed strobe lighting, back-lit water refraction, clean blue fill",
        composition: "Centered product, circular water vortex framing the packaging"
      },
      {
        id: "liquid-5",
        title: "Amber Nectar Pool",
        prompt: "High-end product campaign. The product is semi-submerged in a pool of rich amber honey or nectar. Slow, thick ripples surround the bottle. The lighting is warm and backlit, making the amber liquid glow from within. Crisp product details, luxury editorial style.",
        emotion: "Rich Indulgence & Wealth",
        lighting: "Strong backlight glowing through amber liquid, soft gold key fill",
        composition: "Low angle close-up, liquid level at bottom third, warm glow background"
      },
      {
        id: "liquid-6",
        title: "The Champagne Spray",
        prompt: "Premium luxury ad. The product is centered, with a dynamic spray of sparkling champagne bubbles bursting around it. The background is a clean champagne-gold gradient. Crisp packaging, glittering bubble details, high-end celebratory advertising look.",
        emotion: "Celebration & High Status",
        lighting: "Backlit champagne bubbles, bright specular rim lights, soft gold fill",
        composition: "Centered product, exploding bubbles framing the bottle, macro focus"
      },
      {
        id: "liquid-7",
        title: "Floating Liquid Gold Ribbons",
        prompt: "Luxury commercial campaign. The product floats in a white space, with ribbons of liquid gold floating weightlessly around it in loop shapes. Perfect reflections, clean and minimal cosmetic branding style. Phase One quality, crisp detail.",
        emotion: "Clarity & Fluid Value",
        lighting: "Soft high-key beauty lighting, gold ribbon reflections, clean white fill",
        composition: "Symmetrical centered layout, floating ribbon curves framing product"
      },
      {
        id: "liquid-8",
        title: "The Deep Ocean Drop",
        prompt: "High-end product launch. The product is plunging into a deep blue ocean, surrounded by a crown of air bubbles and splashing water. The water is deep sapphire blue. Sharp focus on the product, water bubbles in soft-focus bokeh. Editorial art direction.",
        emotion: "Deep Hydration & Power",
        lighting: "Submerged key light, bubbles reflecting light, deep blue ambient",
        composition: "Vertical layout, product in upper half plunging down, bubbles below"
      },
      {
        id: "liquid-9",
        title: "The Pearl Essence Splash",
        prompt: "Billion-dollar fragrance style campaign. The product is resting on a white stone, with a splash of pearlescent white serum liquid hitting the stone next to it. Droplets fly in the air. Clear product branding, high-end skincare aesthetic, pristine.",
        emotion: "Purity & Advanced Care",
        lighting: "Diffused beauty studio light, pearlescent splash highlights, soft gray fill",
        composition: "Close-up macro, splash on right, product on left, white stones"
      },
      {
        id: "liquid-10",
        title: "The Copper Flow",
        prompt: "Art-directed luxury ad. The product is placed on a dark copper sheet. Molten, glowing copper liquid flows around the base, creating a warm orange glow. The product details are sharp, popping against the dark metal. Hasselblad H6D quality.",
        emotion: "Raw Material & Strength",
        lighting: "Glowing copper backlight, dark key shadow control, metallic rim",
        composition: "High-angle view of copper flow, product as central anchor"
      },
      {
        id: "liquid-11",
        title: "The Crystal Water Drop",
        prompt: "Luxury product visual. A single, giant droplet of crystal-clear water is suspended directly above the product. The droplet reflects the product packaging. The background is a clean off-white. Modern, minimalist, Apple-grade visual.",
        emotion: "Focus & Pure Innovation",
        lighting: "Direct spotlight, droplet reflection mapping, soft white fill",
        composition: "Macro center focus, vertical alignment of droplet and product"
      },
      {
        id: "liquid-12",
        title: "Lavender Essence Pool",
        prompt: "High-end product campaign. The product sits in a shallow pool of translucent lavender oil. Lilac flowers float in the background. The lighting is soft and twilight-toned, creating a calming, premium visual. Crisp product details, professional camera look.",
        emotion: "Relaxation & Natural Luxury",
        lighting: "Soft lavender ambient, twilight window key light, oil ripple highlights",
        composition: "Still life arrangement, organic flow, lilac flowers framing"
      },
      {
        id: "liquid-13",
        title: "The Silver Splash Circle",
        prompt: "Luxury commercial campaign. The product is centered inside a perfect circular splash of silver liquid that rises from a black mirror surface. High-contrast, sharp metallic reflections, pristine bottle detailing. Vogue campaign style.",
        emotion: "Cutting Edge Design & Luxury",
        lighting: "High-contrast strobe key, silver splash specular highlights, black fill",
        composition: "Perfect symmetry, circular splash framing the product, reflection below"
      },
      {
        id: "liquid-14",
        title: "The Golden Dew Temple",
        prompt: "Premium luxury ad. The product is placed on a marble altar inside a temple where golden dew droplets fall from the ceiling. A soft mist fills the room. The product is covered in fine golden water droplets. Highly detailed product rendering.",
        emotion: "Divine Nourishment",
        lighting: "Volumetric light shafts, golden dewdrop sparkles, soft mist fill",
        composition: "Centered product, mist background, pillars in soft focus"
      },
      {
        id: "liquid-15",
        title: "The Ocean Wave Crest",
        prompt: "Commercial luxury campaign. The product is positioned on a wet volcanic rock, with a powerful ocean wave cresting and splashing around it at sunset. The sky is dark orange and blue. Crisp product packaging, high-contrast dramatic visual.",
        emotion: "Exhilaration & Eternal Power",
        lighting: "Warm sunset backlighting, splash water rim glow, cool blue fill",
        composition: "Rule of thirds, product on right rock, wave splash left, horizon background"
      }
    ]
  },
  {
    id: "luxury-cosmic",
    name: "Luxury Cosmic Campaigns",
    description: "Deep-space premium advertising aesthetics with elegant realism and luxury restraint.",
    icon: "Sparkles",
    prompts: [
      {
        id: "cosmic-1",
        title: "The Lunar Monolith",
        prompt: "Commercial luxury advertising photography. The product is positioned centered on a dark, reflective basalt block resting on the gray surface of the Moon. In the background, the giant blue planet Earth hangs in the pitch-black space, illuminated by the distant Sun. A crisp, directional sunlight strikes the product, casting a long, clean shadow and creating brilliant highlights on its metallic edges. The stars in the background are tiny, sharp points of light with no nebula dust, maintaining a clean and expensive commercial aesthetic. Shot on Phase One 150MP, 80mm lens, f/11, pristine detailing.",
        emotion: "Universal Dominance & Prestige",
        lighting: "Hard directional sun key light, blue Earth-shine fill, pitch-black shadow control",
        composition: "Symmetrical centered product, Earth in upper right background, moon horizon"
      },
      {
        id: "cosmic-2",
        title: "The Saturn Ring Corridor",
        prompt: "Premium luxury product advertisement. The product floats inside a minimalist white ring structure, with the massive golden rings of Saturn stretching across the deep space background. Soft sunbeams highlight the product logo and packaging. Clean, futuristic, high-end retail campaign visual.",
        emotion: "Pioneering Status & Excellence",
        lighting: "Side key sunlight, soft ring reflections, cosmic golden rim",
        composition: "Diagonal rings of Saturn cutting the frame, product suspended in circle"
      },
      {
        id: "cosmic-3",
        title: "The Solar Flare Altar",
        prompt: "Art-directed commercial campaign. The product sits on a white marble column floating in deep space, with a giant, glowing sun in the distant background emitting soft solar flares. The product packaging is rendered with sharp, high-contrast clarity against the bright sun. Vogue style.",
        emotion: "Eternal Energy & Majesty",
        lighting: "Intense backlight sun glow, solar flare lens flare, soft white key fill",
        composition: "Low angle looking up, product centered in front of the sun disk"
      },
      {
        id: "cosmic-4",
        title: "The Obsidian Crater",
        prompt: "A billion-dollar brand product launch. The product is placed inside a clean, circular crater lined with dark obsidian glass on an asteroid. The background is a dense field of distant, sparkling stars. A single spotlight from a satellite illuminates the product. Pure luxury.",
        emotion: "Rare Discovery & Power",
        lighting: "Satellite spotlight key, obsidian glass reflection, star cluster ambient",
        composition: "High angle looking down into the crater, product at the center"
      },
      {
        id: "cosmic-5",
        title: "The Eclipse Horizon",
        prompt: "High-end product campaign. The product is positioned on a floating black stone platform. In the background, a dark planet is eclipsing a bright star, creating a perfect glowing halo (diamond ring effect) behind the product. Crisp product text and packaging details.",
        emotion: "Timeless Mystery & Exclusivity",
        lighting: "Eclipse halo rim light, dark key shadow, subtle front blue fill",
        composition: "Centered product, eclipse halo framing the package, black background"
      },
      {
        id: "cosmic-6",
        title: "Nebula Glass Sanctuary",
        prompt: "Premium luxury ad. The product is suspended inside a transparent glass cylinder floating in deep space. In the background, a soft, muted champagne-pink nebula glows gently. Crisp reflections on the glass cylinder, pristine product details. Hasselblad quality.",
        emotion: "Deep Beauty & Infinite Value",
        lighting: "Nebula ambient glow, glass cylinder highlight lines, white studio key",
        composition: "Vertical layout, cylinder centered, nebula dust in background"
      },
      {
        id: "cosmic-7",
        title: "The Meteor Gold Altar",
        prompt: "Luxury commercial campaign. The product rests on a rough, metallic gold meteorite fragment floating in space. A distant blue star cluster illuminates the scene, casting cool highlights on the product bottle. Editorial art direction, ultra-crisp print quality.",
        emotion: "Opulence & Extraterrestrial Rarity",
        lighting: "Cool blue star key light, gold meteorite reflections, soft rim highlight",
        composition: "Close-up macro of the meteorite base, product centered"
      },
      {
        id: "cosmic-8",
        title: "The Martian Dawn",
        prompt: "High-end product launch. The product sits on a geometric copper pedestal on the red surface of Mars. In the distance, dust storms glow under a pale blue sun. Crisp product packaging, high-contrast, professional camera lens look.",
        emotion: "Future Vision & Raw Power",
        lighting: "Low-angle blue sun backlight, copper reflection warm fill, red ground bounce",
        composition: "Three-quarters view, horizon line in upper third, pedestal centered"
      },
      {
        id: "cosmic-9",
        title: "The Starlight Array",
        prompt: "Billion-dollar fragrance style campaign. The product floats in a clean dark space, surrounded by a perfect grid of tiny, suspended white laser stars that project delicate lines of light. Sharp product typography, modern cosmic tech branding visual.",
        emotion: "Innovation & Ultimate Precision",
        lighting: "Laser light grid highlights, crisp key spotlight, dark ambient fill",
        composition: "Symmetrical portrait, laser grid lines guiding eye to center"
      },
      {
        id: "cosmic-10",
        title: "The Space Station Gallery",
        prompt: "Art-directed luxury ad. The product is displayed on a white concrete pedestal next to a large observation window on a luxury space station. Through the window, the rotating Earth is visible. Clean, minimal, premium design, Phase One quality.",
        emotion: "Elite Status & Perspective",
        lighting: "Soft indoor gallery key, Earth-reflected blue window light",
        composition: "Wide angle, window framing left background, product pedestal right"
      },
      {
        id: "cosmic-11",
        title: "The Cosmic Ripple",
        prompt: "Luxury product visual. The product floats in deep space, creating rings of glowing silver gravitational waves that ripple outward. The background is a minimalist black space. Crisp product details, professional retail campaign style.",
        emotion: "Impact & Pure Influence",
        lighting: "Silver ripple emission key, high contrast rim highlights, black fill",
        composition: "Centered product, concentric silver rings, black background"
      },
      {
        id: "cosmic-12",
        title: "The Golden Comet Trail",
        prompt: "High-end product campaign. The product is suspended in mid-air, with a flowing stream of golden stardust sweeping past it like a brushstroke. The background is a clean charcoal gray. Extremely sharp product typography, Vogue campaign style.",
        emotion: "Dynamic Success & Luxury",
        lighting: "Stardust golden backlight, crisp white key light, charcoal bounce",
        composition: "Diagonal dust trail, product centered, minimalist space"
      },
      {
        id: "cosmic-13",
        title: "The Obsidian Planetoid",
        prompt: "Luxury commercial campaign. The product is placed on a tiny, perfect sphere of polished black obsidian that floats in space. The sphere reflects the stars and a distant blue nebula. Crisp product rendering, high-end editorial art direction.",
        emotion: "Exquisite Design & Mystery",
        lighting: "Starry key light, obsidian sphere reflection, blue nebula rim light",
        composition: "Close-up macro of the sphere, product centered, cosmic depth"
      },
      {
        id: "cosmic-14",
        title: "The Aurora Horizon",
        prompt: "Premium luxury ad. The product sits on a marble ledge overlooking a green aurora borealis dancing across the sky. The sky is dark and filled with stars. The green light reflects softly on the product surface. Phase One 90mm lens.",
        emotion: "Serene Power & Magic",
        lighting: "Green aurora ambient glow, soft key light on product logo, marble bounce",
        composition: "Rule of thirds, product on right ledge, aurora sky filling left"
      },
      {
        id: "cosmic-15",
        title: "The Infinity Portal",
        prompt: "Commercial luxury campaign. The product floats in the center of a black hole accretion disk, surrounded by a perfect circle of glowing orange light. The product packaging remains in cool, sharp detail, not distorted. Epic, premium visual.",
        emotion: "Ultimate Gravitational Attraction",
        lighting: "Accretion disk orange rim light, cool white spotlight key, dark fill",
        composition: "Symmetrical centered, glowing circle framing the product, dark background"
      }
    ]
  },
  {
    id: "fashion-god",
    name: "Fashion God Campaigns",
    description: "Products presented like sacred fashion relics inside impossible couture-inspired architecture.",
    icon: "Sparkles",
    prompts: [
      {
        id: "fashion-1",
        title: "Couture Silk Canyons",
        prompt: "Commercial luxury advertising photography. The product is nestled inside towering folds of structured, heavy silk satin fabric in a pale champagne-blush tone. The fabric folds mimic the architecture of a canyon, draped elegantly in sweeping lines. Soft, directional studio light plays across the satin sheen, casting deep, soft shadows and highlighting the crisp textures of the product packaging. Shot on a Hasselblad H6D-100c, 100mm f/2.2 lens, f/8, ultra-sharp detail, high-fashion editorial magazine style, Vogue campaign aesthetic.",
        emotion: "Sensuality & Haute Couture Prestige",
        lighting: "Directional studio key light, satin sheen specular reflections, soft shadow fill",
        composition: "Canyon-style fabric drapery framing the centered hero product"
      },
      {
        id: "fashion-2",
        title: "The White Pleat Gallery",
        prompt: "Premium luxury product advertisement. The product stands on a white marble block, backed by a massive wall of pleated white linen fabric arranged in perfect geometric lines. The lighting is bright and clean, casting sharp shadows along the pleats. Minimalist, premium fashion brand style.",
        emotion: "Clarity & High Design",
        lighting: "High-contrast side key light, clean linen texture fill, white reflector bounce",
        composition: "Symmetrical alignment, pleated lines pointing down to product"
      },
      {
        id: "fashion-3",
        title: "Gold Thread Sanctuary",
        prompt: "Art-directed commercial campaign. The product is suspended weightlessly inside a cage of thousands of taut, glowing gold threads that stretch from floor to ceiling. The environment is a dark marble hall. Light catches the threads, creating a shimmering golden halo around the product. Vogue style.",
        emotion: "Artisanal Obsession & Wealth",
        lighting: "Backlit gold threads, key spotlight on product front, dark room absorption",
        composition: "Vertical golden thread lines, product centered in the cage structure"
      },
      {
        id: "fashion-4",
        title: "The Leather Monolith",
        prompt: "A billion-dollar brand product launch. The product is placed on a pedestal wrapped in rich, dark-brown full-grain leather. In the background, heavy leather sheets hang from metal rods in shadow. Warm, moody lighting highlights the leather texture and the product package. High contrast.",
        emotion: "Heritage & Rugged Sophistication",
        lighting: "Warm side key light, leather texture rim highlights, low-key fill",
        composition: "Close-up macro of the pedestal, product offset to the left, leather background"
      },
      {
        id: "fashion-5",
        title: "The Crimson Velvet Vault",
        prompt: "High-end product campaign. The product is centered on a pedestal draped in heavy crimson velvet. The background is a dark, arched corridor in a French chateau. A soft spotlight illuminates the velvet folds and the product. Crisp product rendering, luxury fragrance ad aesthetic.",
        emotion: "Seduction & Royal Prestige",
        lighting: "Rich velvet key light, soft rim light, corridor shadow depth",
        composition: "Centered product, portrait framing, classical chateau perspective"
      },
      {
        id: "fashion-6",
        title: "Organza Sky Pavilion",
        prompt: "Premium luxury ad. The product floats inside a pavilion made of floating sheets of white organza fabric that blow in the wind. The sky outside is light blue. Bathed in soft daylight, creating a light, airy, cosmetic campaign look. Phase One quality, clean and expensive.",
        emotion: "Lightness & Pure Rejuvenation",
        lighting: "Diffused high-key daylight, organza translucency backlight, soft fill",
        composition: "Dynamic fluid fabric lines wrapping the product, clean sky background"
      },
      {
        id: "fashion-7",
        title: "The Black Lace Sanctuary",
        prompt: "Luxury commercial campaign. The product sits on a black onyx mirror block, surrounded by layers of intricate black lace fabric. The background is dark. The light catches the gold and metallic details of the product, popping against the dark textures. Editorial art direction.",
        emotion: "Intrigue & Dark Luxury",
        lighting: "High-contrast key, black lace backlit glow, onyx mirror reflections",
        composition: "Close-up macro, lace texture overlay, product centered"
      },
      {
        id: "fashion-8",
        title: "The Glass Bead Curtain",
        prompt: "High-end product launch. The product is viewed through a curtain of thousands of hanging glass beads that catch and refract the light. The background is a minimal off-white space. The product packaging is in sharp focus behind the beads, creating depth. Editorial grade.",
        emotion: "Mystery & Dazzling Elegance",
        lighting: "Prism light reflections from beads, soft face key light, clean fill",
        composition: "Shallow depth of field, beads in soft focus foreground, product sharp middle"
      },
      {
        id: "fashion-9",
        title: "Tweed & Concrete",
        prompt: "Billion-dollar brand style campaign. The product rests on a concrete bench draped with a rich, textured gray tweed fabric. The background is a brutalist concrete wall. Soft daylight highlights the fabric weave and the product design. Clean, high-end retail visual.",
        emotion: "Modernism & Structured Luxury",
        lighting: "Soft window key light, concrete reflection fill, fabric texture highlights",
        composition: "Three-quarters view, concrete bench diagonal line, product left focus"
      },
      {
        id: "fashion-10",
        title: "The Satin Ribbon Vortex",
        prompt: "Art-directed luxury ad. The product is suspended, with a wide, flowing black satin ribbon winding around it in a dynamic spiral. The background is a clean white studio space. Sharp product details, crisp satin reflections. Vogue campaign style.",
        emotion: "Grace & Dynamic Design",
        lighting: "Overhead studio softbox, satin ribbon specular highlights, clean white bounce",
        composition: "Vertical spiral composition, ribbon framing product, centered focus"
      },
      {
        id: "fashion-11",
        title: "The Alabaster Bust Altar",
        prompt: "Luxury product visual. The product sits on a marble stand next to an antique alabaster fashion bust. In the background, drapery of cream silk fabric. The lighting is soft and warm. Editorial campaign quality, crisp product packaging, Phase One camera.",
        emotion: "Heritage & Artistic Beauty",
        lighting: "Soft warm key light, silk bounce, realistic shadows",
        composition: "Still life arrangement, bust on left, product on right, silk background"
      },
      {
        id: "fashion-12",
        title: "The Silver Foil Runway",
        prompt: "High-end product campaign. The product is placed on a runway made of crushed silver foil. The background is a dark gray wall. A hard spotlight strikes the runway, creating shimmering metallic reflections. Crisp product rendering, high-fashion campaign style.",
        emotion: "Edge & Silver Opulence",
        lighting: "Hard key spotlight, silver foil specular highlights, dark room fill",
        composition: "Low angle looking down the runway, product centered in light"
      },
      {
        id: "fashion-13",
        title: "The Puffer Fabric Cocoon",
        prompt: "Luxury commercial campaign. The product is nested inside a glossy black puffer fabric structure, mimicking a high-fashion winter coat. The background is a clean light gray. High-contrast reflections on the glossy puffer fabric. Apple-style clean visual.",
        emotion: "Protection & Technical Luxury",
        lighting: "Bright overhead key, glossy fabric specular highlights, clean fill",
        composition: "Close-up macro of fabric pocket, product centered, geometric folds"
      },
      {
        id: "fashion-14",
        title: "The Gold Chain Arch",
        prompt: "Premium luxury ad. The product is framed by an arch made of interlocking heavy gold jewelry chains. The background is a dark velvet texture in shadow. The light catches the gold chains and the product logo, creating a glowing frame. Vogue style.",
        emotion: "Bold Power & Jewelry Value",
        lighting: "High-contrast key, gold chain specular highlights, dark velvet absorption",
        composition: "Centered product, gold chain arch framing, close-up macro"
      },
      {
        id: "fashion-15",
        title: "The Chiffon Mist Campaign",
        prompt: "Commercial luxury campaign. The product is suspended in mid-air, with layers of peach and lavender chiffon fabric swirling around it like clouds. Bathed in soft, wrap-around beauty light. Crisp product rendering, premium cosmetics aesthetic.",
        emotion: "Ethereal Dream & Beauty",
        lighting: "Wrap-around beauty softbox, fabric-backlit glow, soft peach ambient",
        composition: "Floating product, dynamic fabric lines wrapping, centered hero focus"
      }
    ]
  },
  {
    id: "mythic-editorial",
    name: "Mythic Editorial Campaigns",
    description: "Editorial compositions inspired by luxury magazines and mythological symbolism.",
    icon: "Compass",
    prompts: [
      {
        id: "mythic-1",
        title: "The Alchemist's Altar",
        prompt: "Commercial luxury advertising photography. The product is positioned on a worn, dark slate table inside an alchemist's high-arched stone chamber. In the background, ancient bronze astronomical instruments and glass flasks filled with clear liquids sit in soft focus. A single dramatic beam of light (chiaroscuro) cuts through the dusty air from a high window, illuminating the product packaging with razor-sharp clarity and casting a long shadow. Captured on a Phase One 150MP, 80mm lens, f/8, premium heritage campaign style.",
        emotion: "Mystery & Scientific Heritage",
        lighting: "Chiaroscuro window light shaft, volumetric dust rendering, warm stone bounce",
        composition: "Still life arrangement, diagonal table line, product centered in light beam"
      },
      {
        id: "mythic-2",
        title: "Judgment of Paris",
        prompt: "Premium luxury product advertisement. The product sits on a marble stand next to a single, solid gold apple. The background is a classical garden with white columns and cypress trees under a golden sky. The lighting is warm and sunset-toned. Editorial grade.",
        emotion: "Exclusivity & Ultimate Choice",
        lighting: "Warm sunset backlight, golden apple reflection bounce, soft fill",
        composition: "Symmetrical still life, product left, golden apple right, column backdrop"
      },
      {
        id: "mythic-3",
        title: "The Labyrinth Path",
        prompt: "Art-directed commercial campaign. The product is placed on a stone step in a maze of clean, white travertine walls. The sky above is deep blue. Sharp shadow patterns from the walls intersect on the floor. Crisp product packaging, minimalist editorial style.",
        emotion: "Discovery & High Design",
        lighting: "Hard overhead sunlight, sharp shadow patterns, white wall bounce",
        composition: "High angle looking down the labyrinth path, product at intersection"
      },
      {
        id: "mythic-4",
        title: "Hermes' Winged Altar",
        prompt: "A billion-dollar brand product launch. The product is placed on a dark stone pedestal. On either side of the pedestal, stylized bronze wings rise, catching golden highlights. The background is a moody, dark gray cloud sky. Cinematic, sharp product rendering.",
        emotion: "Speed & Divine Messenger",
        lighting: "Side key light, bronze wing specular highlights, dark cloud ambient fill",
        composition: "Centered product, symmetrical bronze wings framing, low angle look-up"
      },
      {
        id: "mythic-5",
        title: "The Golden Hour Obelisk",
        prompt: "High-end product campaign. The product sits on a black granite obelisk in a quiet field of tall, dark grass. In the background, a giant golden sun is setting on the horizon. The sun is aligned directly behind the product, creating a halo effect. Crisp detail.",
        emotion: "Legacy & Solar Power",
        lighting: "Sunset halo backlight, sun flare, dark grass reflection fill",
        composition: "Centered obelisk, sunset centered behind product, wide landscape"
      },
      {
        id: "mythic-6",
        title: "Pandora's White Box",
        prompt: "Premium luxury ad. The product is emerging from a clean white lacquer box that has opened on a black marble table. Soft white light glows from inside the box, illuminating the product packaging. High contrast, sharp details. Hasselblad quality.",
        emotion: "Curiosity & Exquisite Secret",
        lighting: "Internal box glow key, soft overhead fill, black marble reflections",
        composition: "Close-up macro of the open box, product rising out, black background"
      },
      {
        id: "mythic-7",
        title: "The Thread of Ariadne",
        prompt: "Luxury commercial campaign. The product rests on a travertine block. A single, glowing red neon thread winds through the scene, wrapping around the product and leading into a dark background corridor. Crisp product details, modern mythic ad.",
        emotion: "Guidance & Innovation",
        lighting: "Glowing red thread emission, low-key ambient key, stone texture fill",
        composition: "Perspective corridor view, thread leading eye, product centered"
      },
      {
        id: "mythic-8",
        title: "The Phoenix Ashes",
        prompt: "High-end product launch. The product stands on a bed of dark, glowing charcoal embers and white ash. Tiny orange sparks rise into the air. The product is lit by a cool key light to maintain its brand colors. Highly dramatic, premium visual.",
        emotion: "Rebirth & Eternal Youth",
        lighting: "Glowing coal backlight, floating spark details, cool white key spotlight",
        composition: "Close-up macro, coal texture foreground, dark background"
      },
      {
        id: "mythic-9",
        title: "The Olive Branch Peace",
        prompt: "Billion-dollar fragrance style campaign. The product is centered on a white marble table, surrounded by a delicate wreath of silver-leaf olive branches. The background is a clean white plaster wall with soft window shadows. Editorial art direction.",
        emotion: "Serenity & Classical Grace",
        lighting: "Diffused window daylight, soft plaster wall reflections, silver leaf bounce",
        composition: "Symmetrical still life, olive wreath enclosing product, centered focus"
      },
      {
        id: "mythic-10",
        title: "Pegasus Cloud Plateau",
        prompt: "Art-directed luxury ad. The product is positioned on a floating white marble plateau. In the background, a silhouette of a winged horse is visible in the clouds. Bathed in soft, morning light. Crisp product rendering, high-end retail campaign visual.",
        emotion: "Freedom & Divine Awe",
        lighting: "Soft morning sun backlight, cloud reflection fill, clean white highlights",
        composition: "Wide angle, marble plateau centered, horse silhouette background"
      },
      {
        id: "mythic-11",
        title: "The Narcissus Mirror",
        prompt: "Luxury product visual. The product sits on the edge of a black marble pool, looking at its own perfect reflection in the water. The background is a dark stone wall in shadow. Highly detailed, high-contrast, premium cosmetics campaign grade.",
        emotion: "Self-Love & Perfect Reflection",
        lighting: "Direct key spotlight, water reflection bounce, deep shadow absorption",
        composition: "Split composition, product above water, reflection below, close-up"
      },
      {
        id: "mythic-12",
        title: "The Oracle Hearth",
        prompt: "High-end product campaign. The product sits on a stone shelf next to a small, glowing fire pit inside a temple cave. Warm smoke rises gently, catching the light. Crisp product packaging, mysterious and historic look. Phase One 90mm.",
        emotion: "Exclusive Insight & Heritage",
        lighting: "Warm firelight key, smoke light scattering, cave wall shadow play",
        composition: "Rule of thirds, fire on left, product on right shelf, cave depth"
      },
      {
        id: "mythic-13",
        title: "The Scales of Themis",
        prompt: "Luxury commercial campaign. The product sits on one side of a minimalist brass balance scale, balancing a raw crystal quartz block on the other. The background is a clean gray wall. Elegant, modern editorial art direction. Vogue style.",
        emotion: "Balance & Absolute Value",
        lighting: "Soft studio key light, brass scale specular highlights, gray wall bounce",
        composition: "Symmetrical balance scale centered, product left, crystal right"
      },
      {
        id: "mythic-14",
        title: "The Golden Bough",
        prompt: "Premium luxury ad. The product is resting on a marble altar, framed by a single golden tree branch with metallic gold leaves. The background is a dark green forest wall in shadow. High contrast, sharp highlights, luxury cosmetic style.",
        emotion: "Discovery & Rare Fortune",
        lighting: "Spotlight on product and golden branch, dark green forest fill",
        composition: "Centered product, diagonal golden branch framing, close-up focus"
      },
      {
        id: "mythic-15",
        title: "The Temple of the Sun",
        prompt: "Commercial luxury campaign. The product is placed on a gold-inlaid stone pedestal inside a temple room built of massive stone blocks. Sunbeams stream from a high circular window, illuminating the product logo with razor-sharp clarity. Pristine.",
        emotion: "Absolute Sovereignty",
        lighting: "Volumetric sunbeam spotlight, gold inlay reflections, stone wall fill",
        composition: "Looking up, monumental stone blocks, product centered in sunbeam"
      }
    ]
  },
  {
    id: "sacred-light",
    name: "Sacred Light Campaigns",
    description: "Products illuminated by impossible divine lighting setups with cinematic realism.",
    icon: "Sun",
    prompts: [
      {
        id: "light-1",
        title: "The Chiaroscuro Archway",
        prompt: "Commercial luxury advertising photography. The product is positioned on a dark slate table. A single, razor-sharp beam of light cuts through the darkness from a high arched window, illuminating only the product bottle and casting a long, crisp shadow onto the table surface. The background is a dark, textured charcoal plaster wall in deep shadow. Dust motes float in the beam of light, rendering as delicate points of light. Captured on Phase One XF 150MP, 80mm lens, f/8, high-contrast luxury campaign style.",
        emotion: "Mystery & Supreme Quality",
        lighting: "Razor-sharp chiaroscuro window beam, dark room light absorption, dust speculars",
        composition: "Off-center layout, light beam diagonal, product positioned at the focal point"
      },
      {
        id: "light-2",
        title: "The Prism Rainbow Halo",
        prompt: "Premium luxury product advertisement. The product stands on a white marble table. A large glass prism is placed off-camera, projecting a beautiful, vibrant rainbow light leak across the product packaging. The background is a clean off-white wall. Vogue cosmetic ad aesthetic.",
        emotion: "Beauty & Pure Innovation",
        lighting: "Direct hard light through prism, rainbow light leaks, soft ambient fill",
        composition: "Close-up macro, rainbow band cutting across product, centered focus"
      },
      {
        id: "light-3",
        title: "The Double Rim Silhouette",
        prompt: "Art-directed commercial campaign. The product is positioned in a dark studio. Two powerful rim lights on the left and right highlight the product's outer silhouette in bright silver light. The front label is softly lit by a grid light, maintaining perfect legibility. High-end.",
        emotion: "Sleek Sophistication & Design",
        lighting: "Dual high-contrast rim lights, soft front grid fill, black background",
        composition: "Centered product, perfect vertical symmetry, high-contrast dark space"
      },
      {
        id: "light-4",
        title: "The Golden Ring Halo",
        prompt: "A billion-dollar brand product launch. The product floats in front of a giant ring of warm LED light that glows softly. The floor is a dark obsidian mirror reflecting the ring light and the product. Crisp product text and packaging details, clean and expensive.",
        emotion: "Infinite Prestige & Success",
        lighting: "Backlit LED ring halo, soft front beauty light, obsidian reflections",
        composition: "Symmetrical portrait, ring halo framing product, reflection below"
      },
      {
        id: "light-5",
        title: "The Slit-Scan Laser",
        prompt: "High-end product campaign. The product is placed on a black glass table in a dark room. A thin, horizontal sheet of red laser light cuts through a light haze, striking the product bottle and creating a glowing red line. Crisp, modern tech branding visual.",
        emotion: "Precision & Cutting Edge Design",
        lighting: "Horizontal laser sheet, dark room absorption, red metallic highlights",
        composition: "Eye-level shot, laser line cutting across product, dark background"
      },
      {
        id: "light-6",
        title: "The Stained Glass Cathedral",
        prompt: "Premium luxury ad. The product is placed on a stone altar inside a cathedral. Sunlight pours through a massive stained glass window, casting red, blue, and gold light patterns onto the product and the stone floor. Hasselblad quality, crisp detail.",
        emotion: "Artisanal Heritage & Wonder",
        lighting: "Stained glass color projected light, volumetric shafts, stone bounce",
        composition: "Looking down at the altar, color patterns framing the product"
      },
      {
        id: "light-7",
        title: "The Studio Softbox Dream",
        prompt: "Luxury commercial campaign. The product stands on a white plexiglass surface. A massive, overhead softbox light illuminates the scene, creating soft, gradient shadows. The background is a clean light gray. Modern minimalist Apple campaign aesthetic.",
        emotion: "Clarity & Perfection",
        lighting: "Overhead softbox key, clean white bounce floor, soft gray fill",
        composition: "Centered product, high-key lighting, minimalist negative space"
      },
      {
        id: "light-8",
        title: "The Forest Canopy Ray",
        prompt: "High-end product launch. The product sits on a wet stone pedestal in a forest. Sunbeams cut through the tree canopy, creating a pattern of light spots on the ground. A single sunbeam strikes the product packaging. Editorial art direction.",
        emotion: "Natural Rejuvenation",
        lighting: "Dappled canopy sunbeams, green forest ambient bounce, soft key spotlight",
        composition: "Rule of thirds, product on right pedestal, forest depth left"
      },
      {
        id: "light-9",
        title: "The Fireplace Amber Glow",
        prompt: "Billion-dollar fragrance style campaign. The product sits on a dark oak shelf next to a flickering fireplace. The warm, amber flame light casts long shadows and creates a cozy, rich glow on the product bottle. Crisp packaging, premium lifestyle campaign.",
        emotion: "Warmth & High Comfort",
        lighting: "Flickering amber firelight key, warm shadow play, low ambient fill",
        composition: "Close-up macro of the shelf, product centered, fire glow background"
      },
      {
        id: "light-10",
        title: "The Neon Wave Ring",
        prompt: "Art-directed luxury ad. The product floats inside a wave of light ribbons of magenta and blue neon. The background is dark gray. The neon lines reflect in the product surface, highlighting its curves. Highly detailed, high-contrast, premium launch.",
        emotion: "Future Trend & Impact",
        lighting: "Neon ribbon glow key, specular chrome highlights, dark room fill",
        composition: "Dynamic fluid lines wrapping product, centered hero focus"
      },
      {
        id: "light-11",
        title: "The Sunset Edge",
        prompt: "Luxury product visual. The product sits on a concrete ledge. The sun is setting behind it, creating a bright golden rim light on the product's edges. The front label is lit by a soft bounce card. Clean and modern editorial. Phase One 90mm.",
        emotion: "Dawn of Success & Luxury",
        lighting: "Sunset rim light, soft bounce front fill, warm sky ambient",
        composition: "Three-quarters view, concrete horizon line, product offset left"
      },
      {
        id: "light-12",
        title: "The Fiber Optic Glow",
        prompt: "High-end product campaign. The product is placed on a glass table in a dark room. Thousands of tiny fiber optic cables glowing with white light surround the base of the product. Crisp product details, modern tech/skincare branding visual.",
        emotion: "Data Precision & Excellence",
        lighting: "Fiber optic point key light, dark room absorption, white speculars",
        composition: "Close-up macro, glowing points framing product, dark background"
      },
      {
        id: "light-13",
        title: "The Moonlight Reflection",
        prompt: "Luxury commercial campaign. The product is positioned on a marble ledge overlooking a calm lake at night. The full moon is reflected in the water, and moonlight illuminates the product packaging. High-end, premium quality, Vogue campaign style.",
        emotion: "Poetry & Calm Exclusivity",
        lighting: "Cool moonlight key light, lake reflection bounce, soft fill",
        composition: "Wide angle, moon in sky, reflection in lake, product on right ledge"
      },
      {
        id: "light-14",
        title: "The Gold Bounce Studio",
        prompt: "Premium luxury ad. The product is lit in a studio using a gold reflector board, casting a warm, rich gold glow onto the side of the bottle. The background is a neutral warm beige. Clean, minimalist luxury, high-end retail campaign visual.",
        emotion: "Craftsmanship & Soft Gold Wealth",
        lighting: "Gold reflector bounce key, warm studio softbox fill, realistic shadows",
        composition: "Close-up, angled view of product, warm beige background"
      },
      {
        id: "light-15",
        title: "The Sun Shaft Portal",
        prompt: "Commercial luxury campaign. The product floats inside a classical stone arch. A single, powerful beam of sun shaft (crepuscular ray) streams through the arch, lighting the product with high-contrast cinematic brightness. Pristine details.",
        emotion: "Divine Discovery & Awe",
        lighting: "Volumetric sun shaft spotlight, arch shadow framing, soft stone fill",
        composition: "Symmetrical architectural shot, arch framing the product, centered"
      }
    ]
  }
];

// Generate synthetic sub-categories to reach the remaining ones dynamically in code to avoid massive repetitive blocks,
// but let's write out the structures beautifully so the user can browse them in the catalog.
// Wait, the user specifically requested 15 prompts for EACH category, and listed these categories:
// 1. Celestial Heaven Campaigns
// 2. Greek God Luxury Campaigns
// 3. Roman Imperial Product Ads
// 4. Floating Crystal & Glass Worlds
// 5. Divine Water Temple Campaigns
// 6. Dreamlike Sky Campaigns
// 7. Futuristic Heaven-Tech Ads
// 8. Monumental Product Pedestal Campaigns
// 9. Luxury Nature Fusion Campaigns
// 10. Glass Box Showcase Campaigns
// 11. Cinematic Liquid Heaven Campaigns
// 12. Luxury Cosmic Campaigns
// 13. Fashion God Campaigns
// 14. Mythic Editorial Campaigns
// 15. Sacred Light Campaigns
// Look! In CAMPAIGN_CATEGORIES we have written exactly 9 major categories * 15 prompts each = 135 prompts.
// Let's add the other 6 categories below in code so that we have all 15 categories, with 15 prompts each!
// The remaining categories to add:
// - Glass Box Showcase Campaigns (We have it as ID 'glass-box'!)
// - Cinematic Liquid Heaven Campaigns (We have it as ID 'liquid-heaven'!)
// - Luxury Cosmic Campaigns (We have it as ID 'luxury-cosmic'!)
// - Fashion God Campaigns (We have it as ID 'fashion-god'!)
// - Mythic Editorial Campaigns (We have it as ID 'mythic-editorial'!)
// - Sacred Light Campaigns (We have it as ID 'sacred-light'!)
// Wait, that's exactly the 15 categories! Let's count them:
// 1. celestial-heaven (15)
// 2. greek-god (15)
// 3. roman-imperial (15)
// 4. floating-crystal (15)
// 5. water-temple (15)
// 6. dreamlike-sky (15)
// 7. heaven-tech (15)
// 8. monumental-pedestal (15)
// 9. nature-fusion (15)
// 10. glass-box (15)
// 11. liquid-heaven (15)
// 12. luxury-cosmic (15)
// 13. fashion-god (15)
// 14. mythic-editorial (15)
// 15. sacred-light (15)
// That's exactly 15 categories * 15 prompts = 225 prompts!
// Let's verify: Yes, all 15 categories are already written out inside CAMPAIGN_CATEGORIES!
// Wait! Let me double check if there are 15 in the array.
// 1. celestial-heaven
// 2. greek-god
// 3. roman-imperial
// 4. floating-crystal
// 5. water-temple
// 6. dreamlike-sky
// 7. heaven-tech
// 8. monumental-pedestal
// 9. nature-fusion
// 10. glass-box
// 11. liquid-heaven
// 12. luxury-cosmic
// 13. fashion-god
// 14. mythic-editorial
// 15. sacred-light
// Wow! Yes, all 15 are in the CAMPAIGN_CATEGORIES array. Let's make sure I didn't miss any category or prompt.
// Yes, there are exactly 15 elements in CAMPAIGN_CATEGORIES, and each has 15 detailed prompts.
// This is exactly 225 highly detailed campaign prompts.

// Let's now add the 50 Universal Transformation Prompts:
export const UNIVERSAL_PROMPTS: string[] = [
  "Transform the environment into a high-end commercial photo studio with a neutral taupe background, using soft rim lighting and a sharp product focus, preserving the product's exact labels, details, and shape.",
  "Ethereal studio render. Place the product on a polished white Carrara marble slab. The background is a clean white plaster wall with a soft window light shadow. Phase One XF 150MP, 80mm lens, f/8, crisp print quality.",
  "Luxury watch and jewelry campaign style. The product rests on a bed of dark volcanic sand. A single spotlight from above illuminates the product label. The background is a moody, dark charcoal tone in shadow.",
  "Vogue-level fashion editorial. The product is centered on a polished brass plate, surrounded by soft white silk fabric draped in elegant waves. Diffused softbox key light, realistic reflections.",
  "Premium skincare ad look. The product is placed on a wet travertine stone. Water droplets cling to the surface. A soft mist floats in the background, lit by a soft lavender sky. Clear, crisp textures.",
  "Apple-grade minimalist tech presentation. Place the product on a matte-white circular platform. The background is a curved light gray studio wall. Sharp directional LED light casts a clean shadow.",
  "Fragrance ad style. The product is positioned on a floating black obsidian mirror block. The background is a clean gradient of champagne-gold. The product is lit with high-contrast rim lighting, popping the silhouette.",
  "Natural botanical campaign. The product sits on a wet stone surrounded by dark green monstera leaves and white jasmine flowers. Sunlight filters through the leaves, creating a pattern of light and shadow.",
  "High-end liquor campaign look. The product sits on a dark oak wood table next to a crystal glass in soft focus. The background is a cozy, warm-toned wood wall lit by a fireplace glow. High contrast.",
  "Cosmetics campaign style. The product is centered on a gold-inlaid white jade pedestal. The background is a soft pink-and-peach sunset sky. The lighting is warm and pearlescent, highlight reflection.",
  "Modern architectural campaign. The product sits on a concrete step in a minimalist concrete courtyard. A blue sky is reflected on the polished concrete floor. Linear grid composition, clean lines.",
  "Imperial luxury style. The product is placed on a red velvet stand inside a room with Corinthian marble columns. A warm spotlight shines down, casting realistic shadows on the fabric.",
  "Under-lit glow campaign. The product is placed on a frosted glass surface that is illuminated from below with a soft white light. The background is a dark, clean gradient. Crisp logo and labels.",
  "Desert oasis campaign. The product rests on a red sandstone block. In the background, soft sand dunes are bathed in warm sunset light. A gentle sun flare strikes the product from the upper right.",
  "Glacial ice campaign. The product is frozen inside a block of crystal-clear ice. Drops of water run down the surface, catching light. The background is a cool gradient of blue and silver.",
  "Sacred temple style. The product is placed on a stone altar inside an ancient ruined temple courtyard. Sunbeams cut through the stone arches, casting a volumetric light beam on the product.",
  "Bioluminescent forest style. The product is nestled in dark green moss under a tree root. Tiny glowing mushrooms in the background cast a soft green light. The product is lit by a cool spotlight.",
  "Molten liquid gold campaign. The product is suspended, with ribbons of liquid gold floating weightlessly around it in spirals. Clean white background, crisp highlights on metal, premium finish.",
  "The museum display case. The product is presented inside a glass display cube on a dark concrete block. A single overhead spotlight reflects on the glass. The background is a vast gallery space.",
  "Floating feather sanctuary. The product is resting on a cloud of floating white feathers in a pastel-pink sky. The lighting is soft and diffused, creating a dreamlike, premium cosmetic campaign look.",
  "High-altitude peak campaign. The product is placed on a jagged slate ledge overlooking a sea of clouds at sunrise. The sky is a gradient of gold and blue. Crisp rim light on the product package.",
  "The black mirror showcase. The product sits on a black reflective glass table. The background is a dark room with a single horizontal line of white neon light that reflects in the glass. Modern, sleek.",
  "The copper forge style. The product rests on a dark copper plate. Glowing copper liquid flows in geometric channels around it, casting a warm orange glow. Crisp packaging, industrial luxury.",
  "Emerald caustics campaign. The product is submerged in a deep teal water pool. Light beams filter through the water, creating shifting green-blue caustics on the product surface. Highly detailed.",
  "The gold laurel wreath. The product is centered inside a delicate gold laurel wreath resting on a dark marble table. The background is a textured plaster wall in shadow. Classical luxury style.",
  "Futuristic laboratory style. The product is suspended inside a glass cylinder with glowing blue interface lines projecting onto it. Clean white and silver studio walls. Crisp details, Apple-grade.",
  "The silk ribbon vortex. The product is suspended, with a wide, flowing white silk ribbon winding around it in a dynamic spiral. The background is a clean light gray. Modern fashion editorial.",
  "The obsidian crater. The product sits on a dark obsidian block in a crater on the Moon. In the background, the blue Earth hangs in pitch-black space. Hard sunlight key, crisp blue fill.",
  "Lotus pond reflection. The product sits on a marble leaf in a pond of white lotus flowers. The water is still, reflecting a pale blue sky. Diffused morning light, soft cosmetics campaign look.",
  "The stained glass cathedral. The product rests on a stone pedestal. Light pours through a stained glass window, casting colorful red and gold patterns onto the product. High contrast, sharp detail.",
  "The minimal chrome stand. The product is placed on a polished chrome sphere. The background is a clean white studio space. The sphere reflects the clean studio and the product base. Apple-grade.",
  "The sandstone wave. The product is nestled in a curved slot of a red sandstone canyon wall. Sunbeams stream from the canyon opening, lighting the product packaging with sharp definition.",
  "The midnight neon ring. The product sits on a dark glass table, backed by a circular ring of glowing blue neon. The neon ring reflects in the glass and the product surface. Sleek, high-concept.",
  "The gold leaf monolith. The product is placed on a rough stone column covered in gold leaf. The background is a warm, textured plaster wall. Soft side light highlights the gold textures.",
  "The pristine snow peak. The product sits on fresh snow on a mountain ledge. High-altitude blue sky background. Sun catches the snow crystals, making them sparkle. Highly detailed, crisp packaging.",
  "The quartz geode chamber. The product is nestled inside the open cavity of a giant amethyst geode. Purple crystals surround it, reflecting light. The product logo is sharp and clear. Premium.",
  "The fiber optic array. The product sits on a glass table in a dark room. Thousands of tiny white fiber optic points of light surround the base of the product. Modern tech/skincare look.",
  "The marble staircase peak. The product is centered at the top of a grand Carrara marble staircase. Volumetric white light pours from above, casting long shadows. Power and status visual.",
  "The wheat field sunset. The product is placed on a wood table in a wheat field. The sun is setting behind, creating a warm, nostalgic lens flare. Gold and amber color grading, Vogue style.",
  "The concrete archway. The product sits on a concrete column inside a brutalist arch. The background is a clean white sky. Sharp shadow cast by the arch, modern minimalist retail campaign.",
  "The liquid mercury flow. The product is surrounded by waves of flowing liquid chrome that curve around it on a black marble surface. High-contrast highlights, dark room fill, sleek design.",
  "The rose gold sanctuary. The product is positioned on a rose gold pedestal. The background is a wall of vertical rose gold pipes reflecting the light. Soft beauty studio lighting, pristine.",
  "The bamboo path garden. The product sits on a stone block in a bamboo forest. Dappled sunlight filters through the stalks, creating shadow patterns. Natural wellness/skincare look.",
  "The glass bubble cloud. The product is suspended among hundreds of floating glass bubbles of varying sizes in a clean white space. Light refracts through the bubbles, highlighting the product.",
  "The dark velvet vault. The product sits on a red velvet stand inside a dark room. A single spotlight from above illuminates the product, casting soft shadows on the velvet folds. Classical luxury.",
  "The holographic matrix. The product is suspended inside a floating holographic outline of a cube, glowing with cyan and amber light. Clean white studio. Advanced tech/fashion look.",
  "The spring orchid mist. The product is nested inside a large orchid flower. A fine mist fills the air, catching soft light. The product is covered in fine water droplets. Skincare editorial.",
  "The bronze shield wall. The product rests on a dark iron chest. In the background, ancient bronze shields hang on a stone wall. Hard key light cuts across, creating metallic highlights.",
  "The polar aurora ledge. The product sits on a marble ledge overlooking a green aurora dancing across a starry night sky. The green light reflects softly on the product surface. Cinematic.",
  "The infinity portal pool. The product floats over a pool reflecting a circular portal of golden light. Symmetrical composition, luxury fragrance launch style, crisp details, premium."
];

// 25 Negative Prompts
export const NEGATIVE_PROMPTS: string[] = [
  "Mutated product shape, deformed packaging, altered logo text, low-resolution texture, blurry graphics, cartoon styling, 3D render look, low quality, cheap packaging, warped bottle, missing label.",
  "Fantasy creature, cartoon character, human hand, holding product, ugly shadows, overexposed highlights, plastic look, low-budget, bad anatomy, deformed elements, noisy background.",
  "Low resolution, pixelated, jpeg artifacts, compression noise, generic AI art style, oversaturated colors, neon fantasy, cheap sci-fi, chaotic composition, cluttered background, messy text.",
  "Deformed logo, misspelled brand name, double logos, asymmetrical packaging, melted plastic, low-fidelity glass, low-quality water splash, fake lens flare, drawings, sketch, illustration.",
  "Redesigned product, altered color scheme, weird proportions, fantasy weapon, magical sparkles, cheesy glows, low-end advertising, bad reflection, dark muddy colors, soft blurry edges.",
  "Altered packaging material, cardboard look on glass, fake labels, distorted typography, low contrast, washed out colors, amateur photography, basic phone camera look, bad studio lighting.",
  "Fantasy objects, dragons, fairies, glowing magic dust, cartoon clouds, childish drawings, low-end e-commerce, messy shadows, noisy textures, out of focus product, bad framing.",
  "Distorted product label, warped text, double text, low resolution product logo, cheap render, flat shading, basic gradient background, cartoonish rendering, rough edges, pixel noise.",
  "Mutated bottle caps, altered nozzle, low-quality metal, plastic texture on marble, unrealistic shadows, floating without shadow, missing reflection on floor, low-end advertising campaign.",
  "Overly saturated fantasy sky, high-saturation magenta clouds, cheap game graphics, low-poly 3D models, amateur product shot, watermark, text overlay, bad crop, cut off product.",
  "Melted product parts, skewed graphics, double cap, altered design, low quality glass refraction, dark mud, neon laser grids, cheap club lighting, low-end branding visual.",
  "Mutated watch dials, deformed perfume sprayer, altered cream jar cap, low quality wood texture, plastic look on stone, messy background clutter, bad highlights, blown out white.",
  "Low-grade CGI, amateurish lighting, flat colors, blurry details, deformed product label text, low resolution packaging print, cheap cardboard texture, out of focus packaging.",
  "Over-saturated sunset, cartoonish sky gradient, cheap fantasy art, generic digital painting, line art, sketches, watermark, low quality, blurry product logo, warped text, bad shadow.",
  "Altered brand identity, cheap logo redesign, blurry graphic design, low quality product rendering, fake water droplets, pixelated water splash, bad glass refraction, out of focus.",
  "Distorted packaging shape, low resolution bottle, warped cream jar, pixelated metal parts, cartoon reflections, cheap studio background, low contrast shadows, blurry print text.",
  "Unnatural product bend, warped container, low-fidelity rendering, flat ambient occlusion, low-quality concrete texture, bad light reflection, blurry brand graphics, pixelated image.",
  "Fantasy floating islands with waterfalls, cheap game concept art, cartoon clouds, low-poly mountains, messy background, out of focus product logo, blurry text, low contrast.",
  "Mutated product cap, warped bottle neck, low quality glass material, flat shadows, bad reflection maps, low resolution texture, pixelated label, cheap advertising look.",
  "Low-end commercial look, phone photo, amateur setup, bad white balance, yellow tint, messy shadows, out of focus product, blurry text, pixel noise, generic gradient.",
  "Altered product typography, double label, warped packaging design, low quality gold leaf, fake reflections, cartoonish water caustics, bad shadow alignment, blurry details.",
  "Distorted watch hands, deformed dial numbers, low resolution watch face, cheap plastic band, pixelated metal, amateur studio photography, out of focus product logo, bad lighting.",
  "Melted jar, altered cream texture, low quality skin care jar, blurry packaging print, cheap background gradient, flat shadows, pixelated water droplets, out of focus.",
  "Warped bottle shape, mutated cap, low resolution luxury product, cheap render look, flat ambient light, messy background elements, blurry brand logo, pixelated text.",
  "Generic AI art fantasy landscape, oversaturated colors, cartoon sky, low-poly rocks, blurry product graphics, warped label text, bad shadows, low resolution, cheap campaign."
];

// Creative Systems (8 categories of 25 formulas each = 200 formulas)
export const SYSTEM_FORMULAS: Record<string, SystemFormula[]> = {
  lighting: [
    { id: "light-f1", name: "Chiaroscuro Window Beam", formula: "A single, razor-sharp beam of light cuts through the darkness from a high window, illuminating the product packaging with dramatic contrast.", description: "Creates mystery and high-end artistic drama." },
    { id: "light-f2", name: "Overhead Studio Softbox", formula: "Bathed in soft, diffused light from a massive overhead softbox, creating clean gradient shadows and a modern minimalist aesthetic.", description: "Standard for clean, premium, Apple-style clarity." },
    { id: "light-f3", name: "Double Rim Silhouette", formula: "Two powerful rim lights highlight the product's outer silhouette in bright silver light, while a soft front grid light keeps the label clear.", description: "Emphasizes sleek design, contours, and structure." },
    { id: "light-f4", name: "Prism Rainbow Refraction", formula: "Light projects through a glass prism, casting a vibrant, multi-faceted rainbow light leak across the product packaging.", description: "Adds organic color, luxury innovation, and beauty." },
    { id: "light-f5", name: "Bioluminescent Accent Glow", formula: "Low ambient light with soft, colored bioluminescent glows from the environment casting subtle hues on the product's edges.", description: "Creates a magical, rare, and exotic atmosphere." },
    { id: "light-f6", name: "Low-Angle Golden Hour sun", formula: "Sun rays strike the product from a low angle, casting long, warm shadows and creating brilliant golden rim highlights.", description: "Brings nostalgia, warmth, and prestige." },
    { id: "light-f7", name: "Submerged Water Caustics", formula: "Beams of light filter through water, projecting moving ripple-like caustics onto the product surface and background.", description: "Perfect for hydration, purity, and spa campaigns." },
    { id: "light-f8", name: "Flickering Firelight Amber", formula: "Warm, amber firelight flickers on the metallic surfaces of the product, creating deep, cozy shadows and high contrast.", description: "Conveys heritage, rich comfort, and natural power." },
    { id: "light-f9", name: "Fiber Optic Dot Grid", formula: "Bathed in the cool white points of light emitted from thousands of tiny fiber optic cables surrounding the product base.", description: "Highlights data precision, future tech, and design." },
    { id: "light-f10", name: "Backlit LED Halo Ring", formula: "The product is positioned in front of a glowing ring of light, creating a clean halo effect and casting a soft glow forward.", description: "Signifies infinite prestige, wholeness, and innovation." },
    { id: "light-f11", name: "Slit-Scan Laser Sheet", formula: "A thin, horizontal sheet of colored laser light cuts through haze, creating a glowing line across the product packaging.", description: "Conveys cutting-edge precision and advanced tech." },
    { id: "light-f12", name: "Stained Glass Color Projection", formula: "Light filters through stained glass, casting intricate colored patterns of red, blue, and gold onto the product.", description: "Adds craftsmanship, history, and artistic value." },
    { id: "light-f13", name: "Starlight Key & Nebula Rim", formula: "Illuminated by sharp starlight key lighting and soft colored rim highlights from a distant cosmic nebula.", description: "Creates an epic, deep space, high-prestige feel." },
    { id: "light-f14", name: "Gold Reflector Studio Bounce", formula: "A studio softbox key light bounces off a gold reflector board, casting a warm, rich gold glow on the product's side.", description: "Gives a wealthy, polished, and expensive finish." },
    { id: "light-f15", name: "Volumetric Morning Sun Shafts", formula: "Sunbeams cut through morning mist, casting defined shafts of light that illuminate the product with clean brightness.", description: "Brings hope, purity, and a divine campaign feel." },
    { id: "light-f16", name: "Soft Twilight Window Ambient", formula: "Diffused, cool twilight skylight enters through a window, casting soft shadows and creating a peaceful ambient tone.", description: "Ideal for calming wellness and evening luxury." },
    { id: "light-f17", name: "High-Speed Strobe Key", formula: "Frozen in time by high-speed studio strobes, capturing water droplets and splashes in razor-sharp, crisp detail.", description: "Conveys freshness, dynamic action, and purity." },
    { id: "light-f18", name: "Dappled Canopy Sunlight", formula: "Sunlight filters through a forest canopy, casting a shifting pattern of light spots and soft shadows on the product.", description: "Creates an organic, natural, and botanical vibe." },
    { id: "light-f19", name: "Recessed Floor LED Strip", formula: "Linear LED lights recessed in the floor project a cool white light upward, highlighting the product's bottom contours.", description: "Gives a clean, architectural, and modern tech feel." },
    { id: "light-f20", name: "Moonlight Lake Reflection Bounce", formula: "Cool, silvery moonlight bounces off a quiet water surface, illuminating the product with a soft, natural radiance.", description: "Adds poetry, calm, and exclusive nightly beauty." },
    { id: "light-f21", name: "Warm Candlelight Chiaroscuro", formula: "Flickering candlelight casts warm golden highlights and deep, soft shadows, creating an intimate, historic atmosphere.", description: "Evokes heritage, secret luxury, and hand-craft." },
    { id: "light-f22", name: "Holographic Projection light", formula: "The product is lit by the glow of a floating holographic interface, casting soft blue and amber lights on its front label.", description: "Represents future vision, high-tech, and innovation." },
    { id: "light-f23", name: "Polarized Studio Ring light", formula: "A polarized ring light eliminates harsh reflections, creating smooth, matte highlights on the product's surfaces.", description: "Maintains absolute packaging clarity and logo legibility." },
    { id: "light-f24", name: "High-Altitude Stark Sun", formula: "Direct, unfiltered sunlight at high altitude casts crisp, high-contrast shadows and creates brilliant highlights.", description: "Evokes peak achievement, raw power, and dominance." },
    { id: "light-f25", name: "Liquid gold Specular Glint", formula: "Light reflects off surrounding liquid gold, casting warm, shimmery glints onto the product's metallic details.", description: "Adds extreme opulence, luxury wealth, and shine." }
  ],
  composition: [
    { id: "comp-f1", name: "Centered Symmetry", formula: "Perfect centered symmetry, with the product positioned in the absolute middle of the frame, creating an imposing look.", description: "Signifies balance, majesty, and absolute authority." },
    { id: "comp-f2", name: "Rule of Thirds Horizon", formula: "The product is offset to the left vertical grid line, while a clean horizon line stretches across the lower third.", description: "Creates dynamic depth and environmental storytelling." },
    { id: "comp-f3", name: "Low-Angle Look-Up", formula: "Shot from a low camera angle looking up at the product, making it appear monumental, imposing, and heroic.", description: "Evokes power, awe, and supreme status." },
    { id: "comp-f4", name: "Diagonal Leading Lines", formula: "Architectural elements or shadows run diagonally across the frame, pointing directly to the product's logo.", description: "Guides the viewer's eye and creates dynamic movement." },
    { id: "comp-f5", name: "Concentric Circles Framing", formula: "Circular elements in the background (arches, halos, rings) enclose the product, framing it as a central relic.", description: "Draws focus, representing perfection and divinity." },
    { id: "comp-f6", name: "Macro Close-Up Focus", formula: "An extreme close-up focusing on the product's typography and texture, with the background in soft focus.", description: "Highlights fine craftsmanship, quality, and details." },
    { id: "comp-f7", name: "High-Angle Look-Down", formula: "Shot from a high camera angle looking down, reflecting the product on a polished surface below it.", description: "Conveys sophisticated layout, design clarity, and reflection." },
    { id: "comp-f8", name: "Architectural Corridor Perspective", formula: "Positioned at the end of a grand corridor of columns or walls, using perspective lines to frame the product.", description: "Adds immense depth, heritage, and luxury scale." },
    { id: "comp-f9", name: "Layered Glass Planes Depth", formula: "Viewed through multiple overlapping sheets of glass, creating complex visual layers and soft edge distortions.", description: "Adds sophistication, geometric complexity, and modern art." },
    { id: "comp-f10", name: "Suspended Weightless Float", formula: "The product is suspended in mid-air, with elements floating around it, creating a sense of weightlessness.", description: "Conveys dreamlike fantasy, lightness, and innovation." },
    { id: "comp-f11", name: "Split Above/Below Water", formula: "A split-shot composition showing the product on a stone block, half above and half reflected in perfectly still water.", description: "Represents clarity, self-reflection, and dual nature." },
    { id: "comp-f12", name: "Natural Foliage Framing", formula: "Leaves or flowers in the soft-focus foreground frame the sides of the image, nesting the product in nature.", description: "Gives a botanical, organic, and gentle feel." },
    { id: "comp-f13", name: "Still Life Triad", formula: "The product stands as the tallest element in a triad arrangement, flanked by a raw crystal and a marble sphere.", description: "A classic luxury editorial composition." },
    { id: "comp-f14", name: "Asymmetric Dune Diagonal", formula: "The product is placed on a dune crest that cuts diagonally, with the sky filling the opposite side of the frame.", description: "Creates a vast, clean, and organic layout." },
    { id: "comp-f15", name: "Minimalist Negative Space", formula: "The product is small in the frame, surrounded by vast, clean negative space in a light-toned gallery room.", description: "Signifies elite restraint, Apple-style design, and focus." },
    { id: "comp-f16", name: "Looking Through Archway", formula: "The camera is positioned behind a stone archway, looking through it to see the product lit in the courtyard.", description: "Creates discovery, depth, and monumental framing." },
    { id: "comp-f17", name: "Exploding Splash Border", formula: "The product is centered, with a dynamic water or gold splash wrapping around its edges, forming a border.", description: "Conveys energy, freshness, and organic movement." },
    { id: "comp-f18", name: "The Golden Ratio Spiral", formula: "The elements in the scene (fabric, mist, steps) are arranged in a spiral pattern that leads to the product.", description: "Creates natural visual harmony and aesthetic balance." },
    { id: "comp-f19", name: "Vertical Column Alignment", formula: "The product sits on a thin pedestal, aligned with a single towering column in the background.", description: "Highlights structure, height, and imperial stature." },
    { id: "comp-f20", name: "Flat-Lay Graphic Grid", formula: "A top-down flat-lay photo, with the product arranged on a marble surface aligned to a clean grid layout.", description: "Perfect for cosmetics, skincare, and modern layout." },
    { id: "comp-f21", name: "Landscape Wide Depth", formula: "A wide landscape shot, with the product in the foreground and a vast mountain range or ocean in the background.", description: "Conveys global scale, natural heritage, and epic vision." },
    { id: "comp-f22", name: "Overlapping Fabric Waves", formula: "Flowing sheets of silk wrap around the sides of the product, leaving only the front label and bottle clear.", description: "Emphasizes sensuality, fabric texture, and mystery." },
    { id: "comp-f23", name: "The Eclipse Target", formula: "The product is centered directly in front of a circular background light, mimicking an eclipse.", description: "Creates an iconic, unforgettable, and powerful silhouette." },
    { id: "comp-f24", name: "Double reflection Split", formula: "Placed between two parallel mirror walls, creating repeating reflections that fade into the background.", description: "Represents infinite complexity, luxury status, and design." },
    { id: "comp-f25", name: "The Altar Focus", formula: "Positioned on an altar step, with leading lines of steps and columns drawing all focus to the product.", description: "Elevates the product to a sacred relic status." }
  ],
  color_grading: [
    { id: "color-f1", name: "Muted Gold & Champagne", formula: "Graded in a sophisticated palette of muted golds, warm champagnes, and soft cream tones for a timeless editorial look.", description: "Conveys timeless elegance and warm luxury." },
    { id: "color-f2", name: "Obsidian & Deep Charcoal", formula: "A high-contrast palette of deep charcoal, black, and silver, emphasizing shadows and specular highlights.", description: "Conveys modern sophistication, power, and edge." },
    { id: "color-f3", name: "Mediterranean Teal & Sapphire", formula: "Rich sapphire blues, deep teals, and cool aquamarine tones, offset by clean white marble highlights.", description: "Conveys pure hydration, water temple energy, and fresh luxury." },
    { id: "color-f4", name: "Imperial Crimson & Gold", formula: "Deep crimson red, rich burgundy, and polished gold accents, creating a warm, regal, and heavy atmosphere.", description: "Conveys royalty, passion, and historic power." },
    { id: "color-f5", name: "Lavender & Pale Rose", formula: "Soft lavender, pastel pink, and cream tones, creating a calming, clean, and gentle beauty aesthetic.", description: "Perfect for skincare, wellness, and soft elegance." },
    { id: "color-f6", name: "Titanium Silver & Pure White", formula: "An ultra-clean, desaturated palette of cool titanium grays, silver, and pure white highlights. Apple-grade color.", description: "Conveys high-tech innovation, clarity, and minimalist design." },
    { id: "color-f7", name: "Emerald & Forest Green", formula: "Rich emerald green, moss, and warm gold highlights, creating an organic, botanical, and prestigious forest aesthetic.", description: "Conveys natural heritage, organic ingredients, and luxury." },
    { id: "color-f8", name: "Desert Sand & Warm Amber", formula: "Warm orange sand, gold, and deep amber gradients, mimicking a desert sunset or glowing firelight.", description: "Conveys warmth, adventure, and rich materials." },
    { id: "color-f9", name: "Cosmic Indigo & Starlight White", formula: "Pitch-black space, deep indigo nebula gas, and sharp starlight white highlights. Clean, high contrast.", description: "Conveys universal scale, mystery, and elite tech." },
    { id: "color-f10", name: "Alabaster Beige & Sage", formula: "Soft alabaster stone beige, warm white, and muted sage green, for a modern, organic, and calm editorial vibe.", description: "Conveys organic modernism and gentle care." },
    { id: "color-f11", name: "Sunset Gold & Dark Magenta", formula: "A dramatic gradient of sunset orange, gold, and deep magenta sky tones, creating high visual impact.", description: "Conveys awe, sunset desire, and passion." },
    { id: "color-f12", name: "Liquid Chrome & Obsidian", formula: "Monochromatic silver liquid reflections against a dark, reflective black obsidian background.", description: "Conveys futuristic, cutting-edge style, and luxury." },
    { id: "color-f13", name: "French Chateau Warm White", formula: "Soft warm white, light travertine beige, and gold accents, mimicking a historic French palace interior.", description: "Conveys heritage, classical art, and prestige." },
    { id: "color-f14", name: "Deep Navy & Polished Copper", formula: "Deep navy blue shadow tones contrasted with warm, glowing polished copper highlights.", description: "Conveys structure, durability, and refined contrast." },
    { id: "color-f15", name: "Glacial Blue & Platinum", formula: "Cool ice blue, white snow highlights, and platinum silver reflections, creating a cold, fresh look.", description: "Conveys pure cleanliness, freshness, and elite grade." },
    { id: "color-f16", name: "Wabi-Sabi Gray & Oak", formula: "Muted gray plaster concrete, warm oak wood tones, and soft shadows, for an organic, understated luxury look.", description: "Conveys craft, simplicity, and peaceful design." },
    { id: "color-f17", name: "Bioluminescent Green & Charcoal", formula: "Charcoal gray background with highlights of glowing bioluminescent green and gold.", description: "Conveys exotic ingredients, magical origin, and science." },
    { id: "color-f18", name: "Royal Purple & Polished Bronze", formula: "Deep purple velvet shadows combined with warm, polished bronze highlights and antique stone.", description: "Conveys historic royalty, elite prestige, and wealth." },
    { id: "color-f19", name: "High-Key White & Glass Reflection", formula: "Overwhelmingly bright white tones, with transparent glass reflections and light gray shadows. Clean.", description: "Conveys ultimate clarity, skincare purity, and minimal design." },
    { id: "color-f20", name: "Peach Sunset & Ivory", formula: "Soft peach, light cream, and warm ivory tones, mimicking a gentle sky morning. Very flattering on packaging.", description: "Conveys soft beauty, cosmetics luxury, and calm." },
    { id: "color-f21", name: "Obsidian & Gold Speckle", formula: "Pitch black background with gold leaf flecks and warm golden rim lights reflecting on the product.", description: "Conveys night luxury, celebration, and extreme wealth." },
    { id: "color-f22", name: "Eucalyptus Green & White Travertine", formula: "Soft eucalyptus green leaves, white travertine stone, and clear water highlights, for a fresh spa look.", description: "Conveys wellness, organic skincare, and purity." },
    { id: "color-f23", name: "Brutalist Concrete & Rust Gold", formula: "Textured gray concrete, muted copper-rust, and warm light, creating an industrial, raw luxury contrast.", description: "Conveys architectural art, strength, and modern design." },
    { id: "color-f24", name: "Lotus Blossom Pink & Pale Blue", formula: "Soft pink petals, light sky blue water reflections, and clean white stone highlights. Peaceful.", description: "Conveys beauty, rejuvenation, and natural harmony." },
    { id: "color-f25", name: "Champagne Sparkle & Bronze", formula: "Glittering champagne bubbles, warm bronze columns, and amber twilight gradients. Elegant and rich.", description: "Conveys celebration, high status, and luxury." }
  ],
  atmosphere: [
    { id: "atmos-f1", name: "Volumetric Haze", formula: "A soft, volumetric haze fills the air, catching sunbeams and diffusing the background details elegantly.", description: "Adds depth, scale, and a cinematic dreamscape feel." },
    { id: "atmos-f2", name: "Morning Mist", formula: "Low-lying morning mist floats gracefully over the floor, wrapping the pedestal base in a soft cloud.", description: "Creates a sense of dawn, purity, and sacred origin." },
    { id: "atmos-f3", name: "Bioluminescent Spores", formula: "Microscopic, glowing bioluminescent spores float in the air, creating tiny, soft points of light in bokeh.", description: "Adds magic, mystery, and an exotic forest vibe." },
    { id: "atmos-f4", name: "High-Altitude Cumulus Clouds", formula: "Wispy cumulus clouds pass through the scene, partially obscuring the background architecture for a heavenly height.", description: "Conveys high altitude, divine prestige, and freedom." },
    { id: "atmos-f5", name: "Water Vapor Mist", formula: "A fine water vapor mist fills the air, casting microscopic droplets on the product's surface that catch the light.", description: "Ideal for skincare, freshness, and hydration." },
    { id: "atmos-f6", name: "Floating Gold Leaf Flecks", formula: "Tiny, delicate flecks of gold leaf float weightlessly around the product, catching golden light reflections.", description: "Conveys supreme opulence, wealth, and celebration." },
    { id: "atmos-f7", name: "Wind-Blown Silk Movement", formula: "Gentle wind blows through the scene, making soft silk fabrics ripple gracefully in the background.", description: "Adds motion, elegance, and high-fashion style." },
    { id: "atmos-f8", name: "High-Speed Water Splash", formula: "A dynamic splash of crystal-clear water is frozen in mid-air, with sharp droplets suspended around the product.", description: "Conveys energy, clean water, and pure freshness." },
    { id: "atmos-f9", name: "Dust Motes in Light Beam", formula: "Tiny dust motes float inside a sharp beam of light, rendering as glowing points that define the light path.", description: "Adds realistic history, character, and depth to light." },
    { id: "atmos-f10", name: "Cosmic Nebula Gas", formula: "Soft, translucent nebula clouds glow in the deep space background, adding color gradients to the darkness.", description: "Adds cosmic scale, modern luxury, and mystery." },
    { id: "atmos-f11", name: "Crashing Ocean Spray", formula: "A powerful wave crashes in the background, creating a fine salty spray that catches the sunset light.", description: "Conveys untamed power, strength, and raw nature." },
    { id: "atmos-f12", name: "Floating White Feathers", formula: "Delicate white down feathers float down slowly, drifting past the product in a soft pastel sky.", description: "Evokes comfort, lightness, and cosmetic care." },
    { id: "atmos-f13", name: "Rising Incense Smoke", formula: "Whisps of white incense smoke rise slowly from a burner, winding through the scene with organic curves.", description: "Creates a ritual, sacred temple, and mystery vibe." },
    { id: "atmos-f14", name: "Glittering Diamond Dust", formula: "Thousands of microscopic, glittering diamond dust particles swirl in the air, creating a dazzling bokeh.", description: "Adds immense opulence, shimmer, and luxury value." },
    { id: "atmos-f15", name: "Molten Gold Liquid Ribbon", formula: "A ribbon of molten liquid gold floats weightlessly, winding around the product in a dynamic loop.", description: "Represents fluid wealth, premium design, and art." },
    { id: "atmos-f16", name: "Champagne Bubble Effervescence", formula: "Glittering champagne bubbles rise rapidly, surrounding the product with a sparkling, active atmosphere.", description: "Conveys celebration, high status, and carbonated life." },
    { id: "atmos-f17", name: "Forest Canopy Shadow Play", formula: "Shifting shadow patterns of tree leaves sway gently on the stone walls, creating a calm forest breeze feel.", description: "Adds organic movement, natural origin, and peace." },
    { id: "atmos-f18", name: "Holographic Geometric Outlines", formula: "Glowing holographic grid lines project softly in the air, tracing geometric forms around the product.", description: "Conveys advanced tech, precision, and design." },
    { id: "atmos-f19", name: "Raindrops on Glass", formula: "Rainwater runs down a window in the foreground, with the product lit sharply in the warm room behind it.", description: "Creates cozy contrast, protection, and premium design." },
    { id: "atmos-f20", name: "Melting Glacial Haze", formula: "A cool, fresh mist rises from melting glacial ice blocks, creating a crisp, low-temperature ambient feel.", description: "Conveys cold purity, preservation, and cleanliness." },
    { id: "atmos-f21", name: "Volcanic Ash Smoke", formula: "Dark, moody smoke and warm orange embers float in the background, casting warm backlighting.", description: "Adds extreme power, dangerous luxury, and heat." },
    { id: "atmos-f22", name: "Desert Sand Mist", formula: "A fine mist of orange sand dust is swept by the wind, diffusing the sunset sky in warm amber tones.", description: "Conveys vast space, warm sun, and desert heritage." },
    { id: "atmos-f23", name: "Glass Prism Refractions", formula: "Multi-layered rainbow light leaks and lens flares project into the lens, creating a warm, premium finish.", description: "Adds high-end photographic realism and style." },
    { id: "atmos-f24", name: "Floating Lotus Petals", formula: "Delicate pink lotus petals float on the still water surface and drift through the air in a slow breeze.", description: "Creates a peaceful spa, beauty, and wellness vibe." },
    { id: "atmos-f25", name: "Clean High-Key Air", formula: "An ultra-clean, dust-free atmosphere with crystal-clear air, preserving maximum product detail and logo sharpness.", description: "Perfect for high-definition tech and skincare campaigns." }
  ],
  materials: [
    { id: "mat-f1", name: "Carrara Marble", formula: "Crafted from solid white Carrara marble with elegant gray veins, polished to a soft satin finish.", description: "Signifies classical luxury, heritage, and structure." },
    { id: "mat-f2", name: "Polished Obsidian", formula: "A slab of dark, mirror-polished black obsidian stone, reflecting light with high-contrast definition.", description: "Gives a sleek, modern, sophisticated dark style." },
    { id: "mat-f3", name: "Brushed Titanium", formula: "Minimalist sheets of brushed titanium metal with fine grain lines, catching light with silver sheen.", description: "Signifies durability, premium tech, and precision." },
    { id: "mat-f4", name: "White Travertine", formula: "Raw, textured white travertine stone with organic porous cavities, adding a natural architectural weight.", description: "Adds heritage, earthy modernism, and warm style." },
    { id: "mat-f5", name: "Molten Liquid Gold", formula: "Thick, highly reflective liquid gold that flows like mercury, catching bright, warm highlights.", description: "Represents ultimate wealth, opulence, and prestige." },
    { id: "mat-f6", name: "Refractive Quartz Crystal", formula: "Raw, multi-faceted quartz crystal pillars that refract light into geometric rainbow bands.", description: "Adds rare natural beauty, complexity, and elegance." },
    { id: "mat-f7", name: "Heavy Silk Satin", formula: "Heavy, structured silk satin fabric in cream-blush tones, draped in elegant, flowing folds.", description: "Adds sensuality, haute couture prestige, and soft detail." },
    { id: "mat-f8", name: "Polished Bronze", formula: "Textured, cast bronze metal with rich brown-gold tones, reflecting light with warm, antique sheen.", description: "Conveys heritage, strength, and classic artwork." },
    { id: "mat-f9", name: "Frosted Glass", formula: "Semi-translucent frosted glass sheets that diffuse light, creating soft glowing edges and gradients.", description: "Adds design complexity, beauty, and soft contrast." },
    { id: "mat-f10", name: "Green Jade Stone", formula: "Carved green jade stone, polished to a glossy finish, showing translucent green veins when lit.", description: "Signifies imperial status, balance, and luxury heritage." },
    { id: "mat-f11", name: "Woven Carbon Fiber", formula: "Sleek, dark carbon fiber mesh with a clear coat, catching light with a high-tech geometric pattern.", description: "Conveys ultra-lightweight strength, speed, and premium tech." },
    { id: "mat-f12", name: "Raw Calcite Stone", formula: "A jagged block of white calcite stone with sparkling crystal structures along the split edges.", description: "Adds organic mineral beauty, structure, and rarity." },
    { id: "mat-f13", name: "Polished Chrome", formula: "Mirror-finish chrome plating that reflects the surrounding environment with absolute clarity.", description: "Apple-grade material, modern design, and clean reflection." },
    { id: "mat-f14", name: "Washed Concrete", formula: "Smooth, brutalist concrete blocks with tiny air bubbles and gray aggregate textures.", description: "Conveys modern architectural art, raw weight, and design." },
    { id: "mat-f15", name: "Crimson Velvet", formula: "Thick, royal crimson velvet fabric that absorbs light, creating deep, rich red folds and shadows.", description: "Conveys royalty, luxury comfort, and passion." },
    { id: "mat-f16", name: "Glacial Ice", formula: "Pure, compacted glacial ice showing ancient internal fractures and frozen air bubbles.", description: "Adds clean freshness, preservation, and cool purity." },
    { id: "mat-f17", name: "Woven Gold Mesh", formula: "A fine screen of woven gold wire fabric, reflecting light with a shimmering, metallic screen texture.", description: "Adds intricate craftsmanship and jewelry-grade value." },
    { id: "mat-f18", name: "Polished Mahogany Wood", formula: "Rich, dark mahogany wood with deep grain patterns, polished to a warm, mirror-like gloss.", description: "Conveys heritage, warmth, and traditional luxury." },
    { id: "mat-f19", name: "Alabaster Stone", formula: "Translucent white alabaster stone, carved into clean geometric blocks and illuminated from within.", description: "Creates a soft, warm room glow and natural stone veins." },
    { id: "mat-f20", name: "Black Onyx Mirror", formula: "A polished black onyx surface that acts as a dark mirror, reflecting the product with high-contrast shadows.", description: "Adds mystery, prestige, and high-end design styling." },
    { id: "mat-f21", name: "Copper Foil Sheets", formula: "Crushed, textured copper foil sheets, catching light with warm, orange metallic speculars.", description: "Adds texture, industrial luxury, and rich contrast." },
    { id: "mat-f22", name: "White Travertine Mosaic", formula: "A floor composed of small travertine tiles arranged in a clean, modern herringbone pattern.", description: "Gives an architectural gallery layout, clean and premium." },
    { id: "mat-f23", name: "Polished White Gold", formula: "Sleek, light silver-gold alloy with a high-gloss finish, casting a clean, warm-toned highlight.", description: "Represents jewelry-grade wealth and modern opulence." },
    { id: "mat-f24", name: "Raw Basalt Stone", formula: "Dark, porous volcanic basalt rock with rough, split textures, contrasting with smooth product glass.", description: "Adds natural strength, texture contrast, and weight." },
    { id: "mat-f25", name: "Transparent Glass Prism", formula: "Flawless optical glass, ground with sharp edges that bend light into spectrum color leaks.", description: "Signifies precision engineering, clarity, and innovation." }
  ],
  camera: [
    { id: "cam-f1", name: "Phase One 80mm", formula: "Shot on Phase One XF 150MP, 80mm lens, f/8, crisp edge-to-edge detail, realistic perspective, print-ready clarity.", description: "The industry standard for high-end luxury print campaigns." },
    { id: "cam-f2", name: "Hasselblad 120mm Macro", formula: "Captured with a Hasselblad H6D-100c, 120mm macro lens, f/5.6, shallow depth of field, focusing on fine packaging details.", description: "Best for cosmetics, watch details, and premium texture focus." },
    { id: "cam-f3", name: "Wide-Angle 35mm Perspective", formula: "Shot on a 35mm wide-angle lens, low camera position, capturing the product in a monumental architectural setting.", description: "Adds grand environmental scale, depth, and hero stature." },
    { id: "cam-f4", name: "Eye-Level Studio Portrait", formula: "Shot at eye-level with an 85mm portrait lens, f/11, minimal distortion, perfect product proportions, clean studio layout.", description: "Standard catalog and clean e-commerce campaign style." },
    { id: "cam-f5", name: "High-Angle Flat Lay", formula: "Shot from a high camera angle looking directly down (90 degrees flat lay) with a 50mm lens, capturing geometric balance.", description: "Ideal for cosmetic sets, skincare routines, and graphic layouts." },
    { id: "cam-f6", name: "Looking-Up Hero Shot", formula: "Extreme low camera angle looking up at the product, making it tower over the frame against the sky or ceiling.", description: "Conveys power, dominance, and a majestic campaign vibe." },
    { id: "cam-f7", name: "Three-Quarters Angle Depth", formula: "Three-quarters view of the product, showcasing both the front label and side contour with a 100mm lens, f/8.", description: "Best for displaying three-dimensional packaging shapes." },
    { id: "cam-f8", name: "Submerged Underwater Macro", formula: "Shot with an underwater housing, 90mm macro lens, focusing through water caustics onto the submerged product details.", description: "Creates clean water ripples, reflections, and spa luxury." },
    { id: "cam-f9", name: "Shift Lens Architectural", formula: "Shot on a 24mm tilt-shift lens to keep vertical column lines perfectly parallel, framing the product in a temple.", description: "Maintains architectural perspective and professional layout." },
    { id: "cam-f10", name: "High-Contrast Chiaroscuro Focus", formula: "Shot with a 90mm lens, f/4, shallow depth, focusing on the lit edge of the product, with the logo in sharp profile.", description: "Adds artistic mystery, shadow, and design prestige." },
    { id: "cam-f11", name: "Studio Macro f/16 Sharpness", formula: "Shot on a 105mm macro lens at f/16 with focus stacking, ensuring every millimeter of the product packaging is sharp.", description: "Critical for preserving crisp brand text and materials." },
    { id: "cam-f12", name: "Atmospheric Telephoto 135mm", formula: "Shot from a distance on a 135mm lens, f/2.8, compressing the background and creating a beautiful, soft bokeh.", description: "Isolates the product beautifully in natural landscapes." },
    { id: "cam-f13", name: "Reflective Table View", formula: "Low angle shot, camera positioned near the polished floor level to capture a perfect mirror reflection of the product.", description: "Adds symmetry, cleanliness, and premium catalog style." },
    { id: "cam-f14", name: "Vogue Editorial 90mm Portrait", formula: "Shot on a 90mm f/2.2 lens, editorial fashion grade, capturing soft skin-like textures and luxury fabric folds.", description: "Creates a warm, lifestyle-oriented campaign look." },
    { id: "cam-f15", name: "Apple-Grade f/11 Studio Lens", formula: "Shot on a high-resolution 100mm f/11 studio lens, capturing crisp white and silver highlights with no distortion.", description: "Standard for high-end tech, design, and product launches." },
    { id: "cam-f16", name: "Dynamic Fluid Macro", formula: "Captured at 1/8000s shutter speed with a 100mm macro lens, freezing liquid droplets splashing off the product.", description: "Conveys high energy, organic freshness, and clean liquid." },
    { id: "cam-f17", name: "Canyon Wall Perspective", formula: "Shot from a tight angle inside canyon walls using a 50mm lens, framing the product along the organic stone lines.", description: "Adds depth, texture contrast, and nature-fusion style." },
    { id: "cam-f18", name: "Linear Grid Alignment Shot", formula: "Symmetrical layout shot at f/8, aligning the product to architectural vertical and horizontal lines perfectly.", description: "Emphasizes precision engineering and modern design." },
    { id: "cam-f19", name: "Glass Distortion Close-Up", formula: "Shot through a glass sphere or prism with a 100mm macro lens, capturing beautiful edge distortion.", description: "Adds artistic complexity, beauty, and luxury innovation." },
    { id: "cam-f20", name: "Cosmic Horizon Wide Angle", formula: "Wide 28mm perspective capturing the product on a moon platform with Earth hanging in the black sky background.", description: "Conveys immense scale, space station luxury, and authority." },
    { id: "cam-f21", name: "Dappled Light f/4 Detail", formula: "Shot on a 85mm lens at f/4, capturing dappled forest light spots with soft-focus leaves in the foreground.", description: "Nests the product organically in botanical nature." },
    { id: "cam-f22", name: "The Alchemist Still Life View", formula: "Shot on an 80mm medium format lens, f/5.6, capturing historical books and bronze tools in the soft background.", description: "Brings heritage, science, and traditional values." },
    { id: "cam-f23", name: "Velvet Texture Close-Up", formula: "Macro shot focusing on the contact point between the product and rich red velvet, highlighting texture.", description: "Emphasizes luxury touch, weight, and royalty." },
    { id: "cam-f24", name: "Gold Halo Rim Shot", formula: "Backlit composition shot with a 90mm lens, capturing the glowing gold outline of the product packaging.", description: "Creates an iconic, powerful, and unforgettable silhouette." },
    { id: "cam-f25", name: "Phase One 100mm Studio", formula: "Shot on Phase One 150MP with a 100mm studio lens, f/8, calibrated lighting, capturing precise brand color values.", description: "Ensures accurate color mapping and perfect commercial output." }
  ],
  pedestal: [
    { id: "ped-f1", name: "Travertine Block", formula: "Placed on a solid, rectangular block of raw white travertine stone with beautiful textured cavities.", description: "Gives a modern architectural weight and organic feel." },
    { id: "ped-f2", name: "Carrara Column Capital", formula: "Resting on a fluted ancient Carrara marble column capital, showing classical Greek carvings.", description: "Signifies history, heritage, and mythological luxury." },
    { id: "ped-f3", name: "Polished Obsidian Mirror", formula: "Positioned on a block of dark black obsidian stone, polished to a flawless mirror-like finish.", description: "Creates sleek, high-contrast reflections and modern style." },
    { id: "ped-f4", name: "Brushed Titanium Ring", formula: "Hovering weightlessly inside a floating circular ring of brushed titanium metal with gold accents.", description: "Conveys future tech, precision design, and luxury." },
    { id: "ped-f5", name: "Wet Jade Lotus Leaf", formula: "Resting on a wet, carved green jade pedestal shaped like a lotus blossom, with droplets of water.", description: "Adds imperial status, spa-like purity, and heritage." },
    { id: "ped-f6", name: "Raw Split Granite", formula: "Placed on a rough, split granite rock pedestal showing sparkling quartz grains along the crack.", description: "Brings natural strength, rugged elegance, and weight." },
    { id: "ped-f7", name: "Alabaster Internal Glow", formula: "Positioned on a geometric white alabaster pedestal that is illuminated from within by a warm light.", description: "Casts a soft glow on the product and shows stone veins." },
    { id: "ped-f8", name: "Peeling Gold Leaf Stone", formula: "Placed on a raw limestone block covered in peeling gold leaf, revealing rough stone underneath.", description: "Represents artisanal value, rich history, and opulence." },
    { id: "ped-f9", name: "Brutalist Concrete Block", formula: "Presented on a heavy, rectangular brutalist concrete block with clean geometric edges.", description: "Conveys architectural modern art, structure, and design." },
    { id: "ped-f10", name: "Polished Brass Disk", formula: "Resting on a thin, circular disk of polished brass, casting a warm golden reflection on the floor.", description: "Adds a clean, expensive metal accents to e-commerce." },
    { id: "ped-f11", name: "Glacial Ice Ledge", formula: "Positioned on a clean, horizontal shelf of pure glacial ice, with water droplets on the sides.", description: "Conveys cold purity, freshness, and organic cooling." },
    { id: "ped-f12", name: "Polished Mahogany Desk", formula: "Placed on a polished dark mahogany table showing rich wood grain patterns and a warm sheen.", description: "Conveys traditional heritage, libraries, and class." },
    { id: "ped-f13", name: "Woven Carbon Disk", formula: "Hovering over a circular disk of woven carbon fiber, with glowing white LED lines around it.", description: "Signifies advanced lightweight tech, speed, and premium." },
    { id: "ped-f14", name: "Submerged Jade Step", formula: "Resting on a semi-submerged step of white jade inside a shallow, reflective temple water pool.", description: "Perfect for cosmetics, hydration, and tranquil spa mood." },
    { id: "ped-f15", name: "Red Porphyry Slab", formula: "Placed on a slab of dark red porphyry marble, the imperial stone of Roman emperors.", description: "Conveys royalty, power, and high-end heritage." },
    { id: "ped-f16", name: "Woven Gold Mesh Bed", formula: "Resting on a bed of woven gold wire fabric, reflecting light with a shimmering gold screen texture.", description: "Adds fine jewelry craftsmanship and high-value detail." },
    { id: "ped-f17", name: "Hexagonal Basalt Column", formula: "Centered on a tall, dark basalt column rising out of a still, reflective pool of water.", description: "Creates structural order, natural geometry, and power." },
    { id: "ped-f18", name: "Floating Travertine Arch", formula: "Placed inside the curve of a floating travertine arch, suspended high above the clouds.", description: "Adds epic height, divine architecture, and fantasy scale." },
    { id: "ped-f19", name: "Cast Bronze Pillar", formula: "Resting on a heavy, textured cast bronze pedestal with a brutalist, handcrafted pattern.", description: "Adds raw metallic weight, custom artwork, and legacy." },
    { id: "ped-f20", name: "Frosted Glass Cube", formula: "Positioned inside a transparent glass box resting on a frosted glass pedestal lit from below.", description: "Apple-style display, museum-grade value, and design clarity." },
    { id: "ped-f21", name: "Velvet Cushion Crimson", formula: "Nestled on a plush cushion of royal crimson velvet, with golden thread borders.", description: "Conveys classic luxury, crown jewels, and prestige." },
    { id: "ped-f22", name: "Chrome Sphere Cluster", formula: "Balanced on the peak of three touching polished chrome spheres, reflecting the environment.", description: "Adds future design, high reflectivity, and tech prestige." },
    { id: "ped-f23", name: "White Onyx Tiers", formula: "Placed on a three-tiered white onyx pedestal, with a soft translucent glow along the edges.", description: "Signifies pure cosmetics beauty, luxury care, and elegance." },
    { id: "ped-f24", name: "Volcanic Slate Slab", formula: "Resting on a dark volcanic slate slab, with wet water ripples reflecting light next to it.", description: "Brings contrast, natural textures, and raw earth power." },
    { id: "ped-f25", name: "Liquid Gold Wave", formula: "Suspended just above a wave of liquid gold that frozen in mid-air like a polished sculpture.", description: "Represents absolute wealth, fluid design, and luxury." }
  ],
  environmental: [
    { id: "env-f1", name: "Golden Cloud Ocean", formula: "An endless ocean of soft, golden clouds at sunrise, with light rays piercing from the sky.", description: "Creates celestial heaven, divine prestige, and dreamscapes." },
    { id: "env-f2", name: "Ancient Greek Colonnade", formula: "Ruined ancient marble columns and arches under a deep Mediterranean blue sky with Cypress trees.", description: "Adds mythological majesty, history, and classical design." },
    { id: "env-f3", name: "Imperial Roman Palace", formula: "A grand corridor of porphyry stone columns, bronze statues, and polished mosaic floors lit by torches.", description: "Conveys imperial power, wealth, and traditional luxury." },
    { id: "env-f4", name: "Minimalist Concrete Gallery", formula: "A vast, empty concrete hall with curved white plaster walls and a skylight casting soft window light.", description: "Apple-grade space, architectural art, and design focus." },
    { id: "env-f5", name: "Bioluminescent Forest", formula: "A dark forest of ancient trees with glowing moss and spores floating in the air, creating green lights.", description: "Adds magical botanical origin, mystery, and premium care." },
    { id: "env-f6", name: "Glacial Ice Cavern", formula: "Inside a deep blue glacier cave with massive icicles and frozen walls refracting sunlight.", description: "Conveys cold cleanliness, pure preservation, and freshness." },
    { id: "env-f7", name: "Reflective Water Temple", formula: "A quiet indoor pool surrounded by white stone steps and arches, reflecting a pastel twilight sky.", description: "Ideal for tranquil spa, hydration, and wellness cosmetics." },
    { id: "env-f8", name: "Deep Space Earth Horizon", formula: "Pitch-black space with the curved blue line of Earth hanging in the background, lit by a distant sun.", description: "Conveys global dominance, space station tech, and epic scale." },
    { id: "env-f9", name: "French Chateau Garden", formula: "A manicured classical garden with white gravel paths, boxwood hedges, and a stone fountain.", description: "Conveys timeless heritage, nobility, and premium lifestyle." },
    { id: "env-f10", name: "Desert Sand Dunes", formula: "Endless ripples of orange sand dunes stretching to a warm sunset horizon under a hazy sky.", description: "Conveys warm sun, vastness, and organic mineral design." },
    { id: "env-f11", name: "High-Altitude Glass Dome", formula: "Inside a futuristic dome made of glass prisms, overlooking white clouds in the stratosphere.", description: "Signifies heaven-tech, future vision, and elite status." },
    { id: "env-f12", name: "Volcanic Smoke Chamber", formula: "A dark stone cave with glowing orange lava lines in the background and soft ash smoke.", description: "Adds untamed power, raw energy, and dangerous luxury." },
    { id: "env-f13", name: "Botanical Greenhouse Arch", formula: "Under towering glass greenhouse arches draped in green ivy leaves and white orchid flowers.", description: "Nests the product in botanical luxury and organic science." },
    { id: "env-f14", name: "Deep Teal Ocean Submerge", formula: "Submerged in a deep sapphire ocean, with light rays filtering through water and creating caustics.", description: "Represents deep hydration, marine power, and ocean purity." },
    { id: "env-f15", name: "Brutalist Concrete Courtyard", formula: "An outdoor courtyard of brutalist concrete blocks, with a clear blue sky reflected on mirror water.", description: "Conveys architectural modern art, structure, and design." },
    { id: "env-f16", name: "Pleated Linen Wall", formula: "A studio setting with a massive, geometric pleated white linen fabric wall stretching in the back.", description: "High-fashion editorial style, clean texture, and symmetry." },
    { id: "env-f17", name: "Alchemist Chamber Vault", formula: "A dark stone vault filled with antique books, bronze scales, and glass flasks in soft focus.", description: "Brings heritage, alchemy research, and traditional values." },
    { id: "env-f18", name: "Lotus Water Garden", formula: "A serene outdoor garden pool filled with pink lotus flowers and weeping willow branches.", description: "Creates a peaceful spa, natural beauty, and wellness vibe." },
    { id: "env-f19", name: "Copper Forge Corridor", formula: "A dark space with textured copper walls and geometric channels of glowing orange liquid metal.", description: "Conveys raw craft, industrial luxury, and metallic strength." },
    { id: "env-f20", name: "Champagne Gold Studio", formula: "A clean studio room with champagne-gold gradient walls, filled with glittering bubble bokeh.", description: "Conveys celebration, high status, and luxury wealth." },
    { id: "env-f21", name: "Antelope Sandstone Canyon", formula: "Inside a narrow sandstone canyon with swirling red-orange walls, lit by a sunbeam from the opening.", description: "Creates natural elegance, organic curves, and time." },
    { id: "env-f22", name: "Dappled Bamboo Grove", formula: "A quiet bamboo forest, with tall green stalks creating a linear perspective and light shadows.", description: "Conveys clean wellness, Zen balance, and organic skincare." },
    { id: "env-f23", name: "Lunar Crater Sandbox", formula: "Inside a circular lunar crater lined with black obsidian glass under a starry space sky.", description: "Adds cosmic rarity, tech design, and universal prestige." },
    { id: "env-f24", name: "French Chateau Archway", formula: "A stone balcony of a French castle, looking out to a hazy morning forest in soft focus.", description: "Conveys timeless heritage, elegance, and premium lifestyle." },
    { id: "env-f25", name: "Infinite White Sanctuary", formula: "An empty, high-key white room with no corners, filled with soft beauty light and glass reflections.", description: "Perfect for clean skincare, cosmetics, and Apple-grade tech." }
  ]
};
