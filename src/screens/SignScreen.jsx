export default function SignScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "760px", margin: "36px auto", padding: "0 20px 60px" }}>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "28px" }}>
          <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {"Completion statement · required before certificate processing"}
          </div>
          <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "6px 0 12px" }}>
            {"Sign your completion statement"}
          </h1>
          <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.55, margin: "0 0 14px" }}>
            {"You have passed the course, but before we can process your certificate, you must sign a statement certifying that you did not cheat."}
          </p>
          <div style={{ background: "#EEF2F9", borderRadius: "8px", padding: "16px 18px", fontSize: "16px", fontWeight: 700, color: "#0B2A5B", lineHeight: 1.5 }}>
            {"\""}
            {v.attestationText}
            {"\""}
          </div>
          <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "16px", fontSize: "14.5px", color: "#1E2430" }}>
            <input type="checkbox" checked={v.signChecked} onChange={v.toggleSign} style={{ marginTop: "3px" }} />
            <span>
              {"I certify that the statement above is true."}
            </span>
          </label>
          <label style={{ display: "block", marginTop: "14px", fontSize: "13px", color: "#3A4352" }}>
            {"Type your full legal name as your electronic signature ("}
            {v.stName}
            {") *"}
            <input value={v.signName} onChange={v.onSignName} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "12px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "16px", fontStyle: "italic" }} />
          </label>
          <div style={{ fontSize: "12px", color: "#5B6577", marginTop: "8px" }}>
            {"Date: "}
            {v.today}
            {" · Your signature, IP address and time stamp are recorded with your course record (recordkeeping details: TBD)."}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "18px" }}>
            <button onClick={v.submitSign} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "13px 24px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
              {"Sign statement & continue"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
