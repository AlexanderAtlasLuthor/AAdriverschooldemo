export default function BreakScreen({ v }) {
  return (
    <>
      <div style={{ flex: 1, background: "#0B2A5B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px", padding: "40px 20px" }}>
        <img src="./assets/logo-aa-training.png" alt="A&A Online Training" style={{ height: "46px", width: "auto" }} />
        <div style={{ background: "#fff", borderRadius: "14px", maxWidth: "640px", width: "100%", padding: "34px 36px", textAlign: "center", boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}>
          <div style={{ display: "inline-block", background: "#FFF4D6", color: "#7A5A00", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", padding: "5px 12px", borderRadius: "3px", textTransform: "uppercase" }}>
            {"Mandatory Break "}
            {v.breakNum}
            {" of 2 · Required by course timing"}
          </div>
          <h1 style={{ fontSize: "28px", color: "#0B2A5B", margin: "14px 0 8px" }}>
            {"Congratulations — take a 10-minute break"}
          </h1>
          <p style={{ fontSize: "15px", color: "#3A4352", lineHeight: 1.55, margin: "0 0 18px" }}>
            {"You have completed the required instructional time for this block of the course. A 10-minute break is required before the next module. You may begin the course again when the timer counts down to zero."}
          </p>
          <div style={{ fontSize: "64px", fontWeight: 700, color: "#0B2A5B", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
            {v.breakTimer}
          </div>
          <div style={{ height: "10px", background: "#E9EDF3", borderRadius: "5px", margin: "16px 0 6px", overflow: "hidden" }}>
            <div style={{ height: "100%", background: "#F5B800", width: `${v.breakPct}%` }} />
          </div>
          <div style={{ fontSize: "13px", color: "#5B6577" }}>
            {"Break time remaining · Continue unlocks at 00:00"}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", margin: "22px 0", textAlign: "left", fontSize: "13.5px", color: "#3A4352" }}>
            <div style={{ background: "#F4F6FA", borderRadius: "8px", padding: "12px 14px" }}>
              <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
                {"Completed so far"}
              </div>
              <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
                {v.completedCount}
                {" · "}
                {v.doneMinText}
              </div>
            </div>
            <div style={{ background: "#F4F6FA", borderRadius: "8px", padding: "12px 14px" }}>
              <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
                {"Up next"}
              </div>
              <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
                {v.breakNextText}
              </div>
            </div>
          </div>
          <button onClick={v.breakContinue} disabled={v.breakNotDone} aria-disabled={v.breakNotDone} style={{ width: "100%", background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "14px", fontSize: "16px", fontWeight: 700, cursor: "pointer", opacity: v.breakContinueOpacity }}>
            {"Continue course"}
          </button>
          {v.breakNotDone ? (
            <>
              <div style={{ fontSize: "12.5px", color: "#B26A00", marginTop: "8px" }}>
                {"The Continue button is disabled until the break timer reaches 00:00."}
              </div>
              <button onClick={v.demoFinishBreak} style={{ marginTop: "12px", background: "#fff", color: "#7A5A00", border: "1px dashed #F5B800", borderRadius: "6px", padding: "8px 12px", cursor: "pointer", fontSize: "12px" }}>
                {"DEMO MODE · PROTOTYPE ONLY: end break timer"}
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
