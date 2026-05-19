export const STORAGE_KEY = 'mechaxilAudience';
export const AUDIENCE_CHANGE_EVENT = 'mechaxilAudienceChange';
export const DEFAULT_AUDIENCE = 'maker';

export const AUDIENCES = {
  maker: { value: 'maker', label: 'Maker', icon: '🛠️' },
  engineer: { value: 'engineer', label: 'Engineer (beta)', icon: '📐' },
};

export const AUDIENCE_OPTIONS = Object.values(AUDIENCES);

export function getStoredAudience() {
  if (typeof window === 'undefined') {
    return DEFAULT_AUDIENCE;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'engineer' ? 'engineer' : DEFAULT_AUDIENCE;
}

export function setStoredAudience(value) {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event(AUDIENCE_CHANGE_EVENT));
}

export function isValidAudience(value) {
  return value === 'maker' || value === 'engineer';
}
