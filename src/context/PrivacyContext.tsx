import { createContext, useContext, useEffect, useLayoutEffect, useState, type ReactNode } from 'react';
import { applyAnalyticsPreference } from '../lib/analytics';

const storageKey = 'vila-zizel-privacy-v1';

export type PrivacyChoices = { analytics: boolean; maps: boolean };
export const optionalOff: PrivacyChoices = { analytics: false, maps: false };
export const optionalOn: PrivacyChoices = { analytics: true, maps: true };

function readChoices(): PrivacyChoices | null {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? 'null');
    if (typeof saved?.analytics === 'boolean' && typeof saved?.maps === 'boolean') {
      return { analytics: saved.analytics, maps: saved.maps };
    }
  } catch {
    // Missing or inaccessible storage leaves optional services off.
  }
  return null;
}

type PrivacyContextValue = {
  choices: PrivacyChoices | null;
  editing: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  saveChoices: (choices: PrivacyChoices) => void;
};

const PrivacyContext = createContext<PrivacyContextValue | null>(null);

export function PrivacyProvider({ children }: { children: ReactNode }) {
  const [choices, setChoices] = useState(readChoices);
  const [editing, setEditing] = useState(false);
  const analytics = choices?.analytics ?? null;

  useLayoutEffect(() => {
    applyAnalyticsPreference(analytics);
  }, [analytics]);

  useEffect(() => {
    function syncChoices(event: StorageEvent) {
      if (event.storageArea === localStorage && (event.key === storageKey || event.key === null)) {
        setChoices(readChoices());
      }
    }
    window.addEventListener('storage', syncChoices);
    return () => window.removeEventListener('storage', syncChoices);
  }, []);

  function saveChoices(next: PrivacyChoices) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // Apply the choice for the current visit when storage is unavailable.
    }
    setChoices(next);
    setEditing(false);
  }

  return (
    <PrivacyContext.Provider value={{
      choices, editing, saveChoices,
      openPreferences: () => setEditing(true),
      closePreferences: () => setEditing(false),
    }}>
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  const privacy = useContext(PrivacyContext);
  if (!privacy) throw new Error('usePrivacy must be used within PrivacyProvider');
  return privacy;
}
