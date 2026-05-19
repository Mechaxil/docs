import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {
  AUDIENCE_CHANGE_EVENT,
  DEFAULT_AUDIENCE,
  getStoredAudience,
  setStoredAudience,
} from '@site/src/lib/audience';

const AudienceContext = createContext(null);

export function AudienceProvider({ children }) {
  const isBrowser = useIsBrowser();
  const [audience, setAudienceState] = useState(DEFAULT_AUDIENCE);

  useEffect(() => {
    if (!isBrowser) {
      return undefined;
    }
    setAudienceState(getStoredAudience());

    const handleChange = () => setAudienceState(getStoredAudience());
    window.addEventListener(AUDIENCE_CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(AUDIENCE_CHANGE_EVENT, handleChange);
  }, [isBrowser]);

  const setAudience = (value) => {
    setStoredAudience(value);
    setAudienceState(value);
  };

  const value = useMemo(() => ({ audience, setAudience }), [audience]);

  return <AudienceContext.Provider value={value}>{children}</AudienceContext.Provider>;
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (!context) {
    throw new Error('useAudience must be used within AudienceProvider');
  }
  return context;
}
