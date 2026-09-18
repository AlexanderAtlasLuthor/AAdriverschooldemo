import { Fragment } from 'react';

export default function Modal({ v }) {
  return (
    <>
      <div className="aa-noprint" style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(11,42,91,0.55)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 18px", overflowY: "auto" }}>
        <div role="dialog" aria-modal="true" aria-label={v.modalTitle} style={{ background: "#FFFFFF", borderRadius: "12px", maxWidth: "720px", width: "100%", boxShadow: "0 30px 80px rgba(0,0,0,0.35)", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px", background: "#0B2A5B", color: "#FFFFFF", padding: "18px 22px" }}>
            <h2 style={{ margin: 0, fontSize: "19px", fontWeight: 700, textWrap: "pretty" }}>
              {v.modalTitle}
            </h2>
            <button onClick={v.closeModal} aria-label="Close dialog" style={{ background: "rgba(255,255,255,0.14)", color: "#FFFFFF", border: 0, borderRadius: "6px", width: "32px", height: "32px", fontSize: "17px", lineHeight: 1, cursor: "pointer", flex: "none" }}>
              {"✕"}
            </button>
          </div>
          <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: "12px", maxHeight: "62vh", overflowY: "auto" }}>
            {(v.modalParas || []).map((p, pIdx) => (
              <Fragment key={pIdx}>
                <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.6, color: "#1E2430", textWrap: "pretty" }}>
                  {p.text}
                </p>
              </Fragment>
            ))}
          </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", flexWrap: "wrap", borderTop: "1px solid #E9EDF3", padding: "14px 22px", background: "#F4F6FA" }}>
            {(v.modalActions || []).map((a, aIdx) => (
              <Fragment key={aIdx}>
                <button onClick={a.onClick} style={{ background: a.bg, color: a.fg, border: `1px solid ${a.border}`, borderRadius: "6px", padding: "11px 18px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
                  {a.label}
                </button>
              </Fragment>
            ))}
            <button onClick={v.closeModal} style={{ background: "#FFFFFF", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "6px", padding: "11px 18px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
              {"Close"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
