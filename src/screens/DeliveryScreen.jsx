import { Fragment } from 'react';

export default function DeliveryScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "0 0 8px" }}>
          {"Choose a certificate delivery method"}
        </h1>
        <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.55, margin: "0 0 14px" }}>
          {"Your certificate of completion is issued after processing. A&A's delivery options and prices have not been finalized — the structure below mirrors the mapped journey (electronic, standard, expedited); all prices are TBD / Requires A&A Decision."}
        </p>
        {(v.deliveryOptions || []).map((o, oIdx) => (
          <Fragment key={oIdx}>
            <div onClick={o.onPick} onKeyDown={o.onKey} role="button" tabIndex="0" style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: o.bg, border: `2px solid ${o.border}`, borderRadius: "10px", padding: "16px 18px", marginBottom: "10px", cursor: "pointer" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid #0B2A5B", marginTop: "2px", flexShrink: 0, background: o.border }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "15.5px" }}>
                  {o.title}
                </div>
                <div style={{ fontSize: "13.5px", color: "#3A4352", margin: "4px 0" }}>
                  {o.desc}
                </div>
                <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#7A5A00" }}>
                  {o.price}
                </div>
              </div>
            </div>
          </Fragment>
        ))}
        <div style={{ background: "#F4F6FA", borderRadius: "8px", padding: "12px 14px", fontSize: "13px", color: "#3A4352", lineHeight: 1.55, margin: "12px 0 18px" }}>
          {"Mapped source behavior: the state (FLHSMV) receives notification of certificate information and proof of completion within 7–10 days; the source course sold a paid \"rush\" notification and text alert. A&A equivalents: TBD / Requires A&A Decision."}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={v.submitDelivery} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "13px 24px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Submit for processing →"}
          </button>
        </div>
      </div>
    </>
  );
}
