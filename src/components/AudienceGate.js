import React from 'react';
import { useAudience } from '@site/src/context/AudienceContext';
import { AUDIENCES } from '@site/src/lib/audience';

export default function AudienceGate({ audience, children }) {
  const { audience: current, setAudience } = useAudience();
  const allowed = Array.isArray(audience) ? audience : [audience];

  if (allowed.includes(current)) {
    return <>{children}</>;
  }

  const target = AUDIENCES[allowed[0]];

  return (
    <div className="mx-audience-gate" role="note">
      <p>
        <strong>{target.icon} {target.label} mode required.</strong> This page is written for the{' '}
        {target.label.toLowerCase()} documentation view.
      </p>
      <button
        type="button"
        className="button button--primary button--sm"
        onClick={() => setAudience(target.value)}
      >
        Switch to {target.label} mode
      </button>
    </div>
  );
}
