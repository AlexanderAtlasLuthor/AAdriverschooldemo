export default function ReceiptScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "720px", margin: "40px auto", padding: "0 20px 60px" }}>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#E6F4EA", color: "#1E7B34", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 700 }}>
              {"✓"}
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#0B2A5B" }}>
                {"Thank you — your enrollment is complete"}
              </h1>
              <div style={{ color: "#5B6577", fontSize: "13.5px" }}>
                {"A copy of this receipt and step-by-step instructions have been sent to "}
                {v.reg.email}
                {"."}
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", margin: "22px 0", fontSize: "14px", color: "#3A4352" }}>
            <div>
              <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
                {"Order number"}
              </div>
              <div style={{ fontWeight: 700 }}>
                {v.orderNo}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
                {"Order date"}
              </div>
              <div style={{ fontWeight: 700 }}>
                {v.today}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
                {"Student"}
              </div>
              <div style={{ fontWeight: 700 }}>
                {v.stName}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
                {"Username"}
              </div>
              <div style={{ fontWeight: 700 }}>
                {v.reg.username}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
                {"Course"}
              </div>
              <div style={{ fontWeight: 700 }}>
                {"Florida 4-Hour Basic Driver Improvement"}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "11.5px", color: "#5B6577", textTransform: "uppercase" }}>
                {"Amount charged"}
              </div>
              <div style={{ fontWeight: 700 }}>
                {"TBD + $2.50 state assessment fee"}
              </div>
            </div>
          </div>
          <button onClick={v.goDashboard} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "13px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Go to my course →"}
          </button>
        </div>
      </div>
    </>
  );
}
