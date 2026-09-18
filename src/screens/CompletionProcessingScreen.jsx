export default function CompletionProcessingScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "640px", margin: "70px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "12px", padding: "30px", textAlign: "center" }}>
          <div style={{ width: "54px", height: "54px", border: "5px solid #D9DEE7", borderTopColor: "#0B2A5B", borderRadius: "50%", margin: "0 auto 18px", animation: "aaSpin 0.9s linear infinite" }} />
          <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#0B2A5B" }}>
            {"Processing your course completion…"}
          </h1>
          <div style={{ textAlign: "left", margin: "20px auto 0", maxWidth: "460px", fontSize: "14px", color: "#3A4352", lineHeight: 1.7 }}>
            <div>
              {"✓ Completion statement signed and recorded"}
            </div>
            <div>
              {"✓ Certificate information verified"}
            </div>
            <div>
              {"✓ Completion record created ("}
              {v.completionDate}
              {")"}
            </div>
            <div>
              {"⏳ Preparing completion information for the state — "}
              <b>
                {"State Reporting Integration: TBD / Regulatory Integration Required"}
              </b>
              {" (the mapping documents that successful completion, student, license and citation data are reported to the applicable state agency; the technical mechanism is not established)"}
            </div>
            <div>
              {"⏳ Certificate delivery queued: "}
              {v.deliveryText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
