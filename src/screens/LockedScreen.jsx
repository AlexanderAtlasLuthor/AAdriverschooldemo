export default function LockedScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "680px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "2px solid #B3261E", borderRadius: "12px", padding: "30px", textAlign: "center" }}>
          <div style={{ fontSize: "44px" }}>
            {"🔒"}
          </div>
          <h1 style={{ fontSize: "26px", color: "#B3261E", margin: "8px 0" }}>
            {"Course locked — identity validation failed"}
          </h1>
          <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.6 }}>
            {"Your answers to the validation questions did not match the answers recorded at the start of the course. As required by the course rules, you are locked out of the course until you speak with an A&A customer service representative. Your position has been saved."}
          </p>
          <div style={{ background: "#F4F6FA", borderRadius: "8px", padding: "14px", fontSize: "14px", color: "#0B2A5B", fontWeight: 700 }}>
            {"A&A Student Support · (561) 533-5303 · support hours and identity re-verification procedure: TBD / Requires A&A Decision"}
          </div>
          <button onClick={v.unlockDemo} style={{ marginTop: "16px", background: "#fff", color: "#7A5A00", border: "1px dashed #F5B800", borderRadius: "6px", padding: "9px 12px", cursor: "pointer", fontSize: "12px" }}>
            {"DEMO MODE · PROTOTYPE ONLY: support has unlocked the course"}
          </button>
        </div>
      </div>
    </>
  );
}
