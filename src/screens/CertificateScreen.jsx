import { ASSETS } from '../data/company.js';

export default function CertificateScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "24px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "14px" }}>
          <div>
            <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {"Certificate of completion · print or save as PDF"}
            </div>
            <h1 style={{ fontSize: "22px", color: "#0B2A5B", margin: "4px 0 0" }}>
              {"Your A&A certificate"}
            </h1>
          </div>
          <div className="aa-noprint" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button onClick={v.backFromCertificate} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "6px", padding: "11px 18px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
              {"← Back to completion"}
            </button>
            <button onClick={v.downloadCertificate} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "11px 20px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
              {"⬇ Download PDF"}
            </button>
            <button onClick={v.printCertificate} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "11px 20px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
              {"🖨 Print certificate"}
            </button>
          </div>
        </div>
        <div id="aa-cert-sheet" style={{ background: "#FFFFFF", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "18px" }}>
          <div style={{ border: "3px solid #0B2A5B", padding: "6px" }}>
            <div style={{ border: "1px solid #F5B800", padding: "34px 40px", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <img src={ASSETS.logo} alt="A&A Services" style={{ height: "62px", width: "auto" }} />
                  <div>
                    <div style={{ fontSize: "17px", fontWeight: 700, color: "#0B2A5B", lineHeight: 1.2 }}>
                      {"A & Associates"}
                    </div>
                    <div style={{ fontSize: "13px", color: "#5B6577" }}>
                      {"A&A Online Training · Quality In Everything We Do"}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "right", fontSize: "12px", color: "#5B6577", lineHeight: 1.6 }}>
                  <div>
                    {"Certificate / completion ID"}
                  </div>
                  <div style={{ fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "14px", fontWeight: 700, color: "#0B2A5B" }}>
                    {v.certId}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center", margin: "30px 0 6px" }}>
                <div style={{ fontSize: "13px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#5B6577" }}>
                  {"Certificate of Completion"}
                </div>
                <div style={{ height: "2px", background: "#F5B800", width: "120px", margin: "12px auto 0" }} />
              </div>
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                <div style={{ fontSize: "13.5px", color: "#5B6577" }}>
                  {"This certifies that"}
                </div>
                <div style={{ fontSize: "34px", fontWeight: 700, color: "#0B2A5B", letterSpacing: "0.02em", margin: "8px 0 6px", textWrap: "balance" }}>
                  {v.certName}
                </div>
                <div style={{ borderBottom: "1px solid #D9DEE7", maxWidth: "520px", margin: "0 auto 18px" }} />
                <div style={{ fontSize: "14.5px", color: "#1E2430", lineHeight: 1.6, maxWidth: "640px", margin: "0 auto" }}>
                  {"has personally completed the "}
                  <b>
                    {"Florida Basic Driver Improvement (BDI) Course"}
                  </b>
                  {" — 4 hours of instruction (220 instructional minutes and two 10-minute mandatory breaks) — and passed the 40-question final examination with a score of at least 80%."}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "16px", margin: "28px 0 10px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {"Completion date"}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0B2A5B" }}>
                    {v.completionDate}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {"Final exam score"}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0B2A5B" }}>
                    {v.examScoreText}
                    {" ("}
                    {v.examPctText}
                    {")"}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {"Reason for course"}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0B2A5B" }}>
                    {v.certReason}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {"Driver license"}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0B2A5B" }}>
                    {v.certDlState}
                    {" · "}
                    {v.certDl}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {"Ticket county"}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0B2A5B" }}>
                    {v.certCounty}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {"Citation number"}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0B2A5B" }}>
                    {v.certCitation}
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "26px", marginTop: "30px", alignItems: "end" }}>
                <div>
                  <div style={{ borderBottom: "1px solid #0B2A5B", height: "42px" }} />
                  <div style={{ fontSize: "12px", color: "#5B6577", marginTop: "6px" }}>
                    {"Authorized representative, A & Associates"}
                  </div>
                  <div style={{ fontSize: "11px", color: "#8A94A6" }}>
                    {"Signature area — no signature asset provided (TBD / Requires A&A Decision)"}
                  </div>
                </div>
                <div>
                  <div style={{ borderBottom: "1px solid #0B2A5B", height: "42px" }} />
                  <div style={{ fontSize: "12px", color: "#5B6577", marginTop: "6px" }}>
                    {"Date issued"}
                  </div>
                  <div style={{ fontSize: "11px", color: "#8A94A6" }}>
                    {"Populated at issuance"}
                  </div>
                </div>
                <div style={{ border: "1px dashed #B9C2D0", borderRadius: "8px", padding: "12px 14px", textAlign: "center", color: "#5B6577" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#0B2A5B" }}>
                    {"Provider / approval identifiers"}
                  </div>
                  <div style={{ fontSize: "11.5px", lineHeight: 1.5, marginTop: "4px" }}>
                    {"School and course approval numbers, and any state seal, are printed here at issuance — TBD / Requires A&A Decision. None are shown in this prototype."}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "12px", color: "#5B6577", lineHeight: 1.55, marginTop: "14px" }}>
            {"Prototype certificate: layout and A&A branding only. No signature, seal, provider number or approval number is reproduced — those come from A&A and FLHSMV at issuance. Values shown are the demo student's course record."}
          </div>
        </div>
      </div>
    </>
  );
}
