import { Fragment } from 'react';

export default function ReviewPanel({ v }) {
  return (
    <>
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(380px, 100vw)", maxWidth: "100%", background: "#1E2430", color: "#E6E9EF", zIndex: 65, overflowY: "auto", padding: "18px 18px 80px", boxShadow: "-10px 0 40px rgba(0,0,0,0.4)", boxSizing: "border-box" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F5B800", fontWeight: 700 }}>
          {"Prototype only · not part of the student product"}
        </div>
        <div style={{ fontSize: "18px", fontWeight: 700, margin: "4px 0 12px" }}>
          {"Management review panel"}
        </div>
        <label style={{ display: "flex", gap: "10px", alignItems: "center", background: "#2A3242", borderRadius: "8px", padding: "10px 12px", fontSize: "13px", cursor: "pointer" }}>
          <input type="checkbox" checked={v.demo} onChange={v.toggleDemo} />
          <span>
            <b>
              {"Demo Mode"}
            </b>
            {" — accelerate timers 60× (1 real second = 1 course minute). The UI always shows the real required time. Production never bypasses seat time, breaks, validation or exam rules."}
          </span>
        </label>
        <div style={{ fontSize: "12px", color: "#9AA3B5", margin: "16px 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {"Jump to a workflow state"}
        </div>
        {(v.panelJumps || []).map((j, jIdx) => (
          <Fragment key={jIdx}>
            <div onClick={j.go} onKeyDown={j.onKey} role="button" tabIndex="0" style={{ padding: "7px 10px", borderRadius: "6px", fontSize: "13px", cursor: "pointer", border: "1px solid transparent", color: "#E6E9EF", marginBottom: "2px", background: "#252D3C" }}>
              {j.label}
            </div>
          </Fragment>
        ))}
        <div style={{ fontSize: "12px", color: "#9AA3B5", margin: "16px 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {"Failure / edge states"}
        </div>
        {(v.edgeStates || []).map((j, jIdx) => (
          <Fragment key={jIdx}>
            <div onClick={j.go} onKeyDown={j.onKey} role="button" tabIndex="0" style={{ padding: "7px 10px", borderRadius: "6px", fontSize: "13px", cursor: "pointer", color: "#FFD6D2", marginBottom: "2px", background: "#3A2426" }}>
              {j.label}
            </div>
          </Fragment>
        ))}
        <div style={{ fontSize: "12px", color: "#9AA3B5", margin: "16px 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {"Documentation"}
        </div>
        <a href="BDI Prototype Report.dc.html" target="_blank" style={{ display: "block", padding: "8px 10px", borderRadius: "6px", fontSize: "13px", color: "#F5B800", background: "#252D3C", textDecoration: "none" }}>
          {"Open the prototype report (screen inventory, journey map, module map, traceability) ↗"}
        </a>
      </div>
    </>
  );
}
