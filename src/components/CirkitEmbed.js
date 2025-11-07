import React from 'react';

export default function CirkitEmbed({ id, padding }) {
  const paddingTop = padding || 'calc(max(56.25%, 400px))';
  const projectUrl = `https://app.cirkitdesigner.com/project/${id}`;
  const previewUrl = `${projectUrl}?view=interactive_preview`;

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: paddingTop,
        }}
      >
        <iframe
          src={previewUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p
        style={{
          marginTop: '6px',
          textAlign: 'center',
          fontSize: '0.9em',
        }}
      >
        Edit this project interactively in{' '}
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cirkit Designer
        </a>.
      </p>
    </div>
  );
}
