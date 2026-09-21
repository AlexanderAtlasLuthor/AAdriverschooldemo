export default function CompleteScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "30px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ background: "#0B2A5B", color: "#fff", borderRadius: "12px", padding: "30px 32px", display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F5B800", fontWeight: 700 }}>
              {"Congratulations"}
            </div>
            <h1 style={{ fontSize: "30px", margin: "4px 0 6px" }}>
              {"Course Completed"}
            </h1>
            <div style={{ fontSize: "15px", color: "#C9D3E6" }}>
              {v.stName}
              {" · "}
              {v.courseTitle}
              {" · Completed "}
              {v.completionDate}
            </div>
          </div>
          <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "#F5B800", color: "#0B2A5B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "44px", fontWeight: 700 }}>
            {"✓"}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", marginTop: "18px" }}>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "16px" }}>
            <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
              {"Final exam"}
            </div>
            <div style={{ fontWeight: 700, color: "#1E7B34", fontSize: "18px" }}>
              {"PASSED · "}
              {v.examScoreText}
              {" ("}
              {v.examPctText}
              {")"}
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "16px" }}>
            <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
              {"Certificate status"}
            </div>
            <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "18px" }}>
              {"Processing"}
            </div>
            <div style={{ fontSize: "12.5px", color: "#5B6577" }}>
              {"Statement signed · information verified"}
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "16px" }}>
            <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
              {"State reporting"}
            </div>
            <div style={{ fontWeight: 700, color: "#B26A00", fontSize: "18px" }}>
              {"Pending"}
            </div>
            <div style={{ fontSize: "12.5px", color: "#5B6577" }}>
              {"State Reporting Integration – TBD / Regulatory Integration Required"}
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "16px" }}>
            <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
              {"Certificate delivery"}
            </div>
            <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "18px" }}>
              {v.deliveryText}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "18px", flexWrap: "wrap" }}>
          <button onClick={v.viewCertificate} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "6px", padding: "12px 18px", fontSize: "14px", cursor: "pointer" }}>
            {"View certificate"}
          </button>
          <button onClick={v.downloadCertificate} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "12px 18px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
            {"⬇ Download PDF"}
          </button>
          <button onClick={v.returnToDashboard} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Return to dashboard"}
          </button>
        </div>
      </div>
    </>
  );
}
