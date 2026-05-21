// Tier Content Definitions
// Defines which content is accessible to BASIC vs PREMIUM users

// Basic tier: first 6 categories fully unlocked (90 prompts)
export const BASIC_CATEGORY_IDS: string[] = [
  "celestial-heaven",
  "greek-god",
  "roman-imperial",
  "floating-crystal",
  "water-temple",
  "dreamlike-sky"
];

// Premium tier unlocks all 15 categories
export const PREMIUM_CATEGORY_IDS: string[] = [
  "celestial-heaven",
  "greek-god",
  "roman-imperial",
  "floating-crystal",
  "water-temple",
  "dreamlike-sky",
  "heaven-tech",
  "monumental-pedestal",
  "nature-fusion",
  "glass-box",
  "liquid-heaven",
  "luxury-cosmic",
  "fashion-god",
  "mythic-editorial",
  "sacred-light"
];

// Basic tier: limited formula types (first 3)
export const BASIC_FORMULA_TYPES: string[] = [
  "lighting",
  "composition",
  "color_grading"
];

// Premium tier: all formula types
export const PREMIUM_FORMULA_TYPES: string[] = [
  "lighting",
  "composition",
  "color_grading",
  "atmosphere",
  "materials",
  "camera",
  "pedestal",
  "environmental"
];

// Sections locked for basic tier
export const BASIC_LOCKED_SECTIONS: string[] = [
  "builder",
  "hub"
];

// Universal prompts: basic tier gets first 20, premium gets all 50
export const BASIC_UNIVERSAL_PROMPT_COUNT = 20;
export const PREMIUM_UNIVERSAL_PROMPT_COUNT = 50;

// Negative prompts: basic tier gets first 10, premium gets all 25
export const BASIC_NEGATIVE_PROMPT_COUNT = 10;
export const PREMIUM_NEGATIVE_PROMPT_COUNT = 25;

// Check if a category is accessible for a given tier
export function isCategoryAccessible(categoryId: string, tier: "basic" | "premium"): boolean {
  if (tier === "premium") return true;
  return BASIC_CATEGORY_IDS.includes(categoryId);
}

// Check if a formula type is accessible for a given tier
export function isFormulaAccessible(formulaType: string, tier: "basic" | "premium"): boolean {
  if (tier === "premium") return true;
  return BASIC_FORMULA_TYPES.includes(formulaType);
}

// Check if a section is locked for basic tier
export function isSectionLocked(sectionId: string, tier: "basic" | "premium"): boolean {
  if (tier === "premium") return false;
  return BASIC_LOCKED_SECTIONS.includes(sectionId);
}
