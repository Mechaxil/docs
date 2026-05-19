import React from 'react';
import { useAudience } from '@site/src/context/AudienceContext';
import { AUDIENCE_OPTIONS } from '@site/src/lib/audience';

export default function AudienceToggle() {
  const { audience: selected, setAudience } = useAudience();

  return (
    <div className="mx-audience-toggle" role="group" aria-label="Documentation audience toggle">
      {AUDIENCE_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`mx-audience-toggle-button${selected === option.value ? ' mx-audience-toggle-button--active' : ''}`}
          onClick={() => setAudience(option.value)}
          aria-pressed={selected === option.value}
        >
          <span className="mx-audience-toggle-icon" aria-hidden="true">
            {option.icon}
          </span>
          {option.label}
        </button>
      ))}
    </div>
  );
}
