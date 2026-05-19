import React from 'react';
import { useAudience } from '@site/src/context/AudienceContext';

export default function AudienceSection({ audience, children }) {
  const { audience: current } = useAudience();
  const allowedAudiences = Array.isArray(audience) ? audience : [audience];

  if (!allowedAudiences.includes(current)) {
    return null;
  }

  return <div className="mx-audience-section">{children}</div>;
}
