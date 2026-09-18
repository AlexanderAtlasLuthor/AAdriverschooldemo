import { useState } from 'react';

/**
 * A lesson image that degrades into the course's media-placeholder treatment
 * when the file cannot be loaded.
 *
 * The mapped source artwork (`proto/graphics/*.svg` and `sources/lpts-media/*`)
 * is not part of this build, so the references are kept exactly as the course
 * data has them and only the presentation falls back.
 */
export default function MediaImage({ src, alt, style }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        style={{
          border: '1px dashed #B9C2D0',
          borderRadius: 8,
          background: 'repeating-linear-gradient(135deg, #F7F8FB 0 10px, #EEF1F6 10px 20px)',
          padding: '16px 18px',
          display: 'flex',
          gap: 14,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: '#0B2A5B',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 17,
            flexShrink: 0,
          }}
        >
          ▤
        </div>
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
              fontSize: 11.5,
              color: '#5B6577',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Artwork not included in this build
          </div>
          <div style={{ fontSize: 13.5, color: '#1E2430', margin: '3px 0 4px' }}>{alt}</div>
          <code style={{ fontSize: 11.5, color: '#5B6577', wordBreak: 'break-all' }}>{src}</code>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} style={style} onError={() => setFailed(true)} />;
}
