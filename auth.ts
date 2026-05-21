// Aetheris Access Control System
// Frontend-only password authentication with localStorage persistence

export type AccessTier = "basic" | "premium" | null;

// Password arrays for each access tier
export const BASIC_PASSWORDS: string[] = [
  "AETHER-BASIC-7821",
  "AETHER-BASIC-4419",
  "AETHER-BASIC-9932",
  "AETHER-BASIC-1055",
  "AETHER-BASIC-3387",
  "AETHER-BASIC-6624",
  "AETHER-BASIC-8891",
  "AETHER-BASIC-2147"
];

export const PREMIUM_PASSWORDS: string[] = [
  "AETHER-PRO-1947",
  "AETHER-PRO-7722",
  "AETHER-PRO-5588",
  "AETHER-PRO-3410",
  "AETHER-PRO-6851",
  "AETHER-PRO-9224",
  "AETHER-PRO-4567",
  "AETHER-PRO-8139"
];

const STORAGE_KEY = "aetheris_access_tier";
const STORAGE_TIMESTAMP = "aetheris_access_timestamp";

// Validate a password and return the corresponding tier
export function validatePassword(password: string): AccessTier {
  const trimmed = password.trim();
  if (PREMIUM_PASSWORDS.includes(trimmed)) {
    return "premium";
  }
  if (BASIC_PASSWORDS.includes(trimmed)) {
    return "basic";
  }
  return null;
}

// Store access tier in localStorage
export function saveAccessTier(tier: AccessTier): void {
  if (tier) {
    localStorage.setItem(STORAGE_KEY, tier);
    localStorage.setItem(STORAGE_TIMESTAMP, Date.now().toString());
  }
}

// Retrieve access tier from localStorage
export function getAccessTier(): AccessTier {
  const tier = localStorage.getItem(STORAGE_KEY) as AccessTier;
  if (tier === "basic" || tier === "premium") {
    return tier;
  }
  return null;
}

// Clear access tier (logout)
export function clearAccessTier(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_TIMESTAMP);
}

// Check if user is premium
export function isPremium(tier: AccessTier): boolean {
  return tier === "premium";
}

// Check if user has any access
export function hasAccess(tier: AccessTier): boolean {
  return tier === "basic" || tier === "premium";
}
