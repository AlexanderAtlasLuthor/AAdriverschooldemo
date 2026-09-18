export default function SponsorScreen({ v }) {
  return (
    <>
      <div style={{ flex: 1, background: "#0B2A5B", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "34px 20px 50px" }}>
        <div style={{ width: "100%", maxWidth: "1000px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ background: "rgba(255,255,255,0.14)", color: "#FFFFFF", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.08em", padding: "6px 12px", borderRadius: "3px", textTransform: "uppercase" }}>
              {"Break "}
              {v.sponsorBreakNum}
              {" complete · A message from A&A Insurance"}
            </div>
            <div style={{ color: "#9FB4D8", fontSize: "12px" }}>
              {"A&A UX Enhancement · not a course requirement"}
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: "14px", padding: "30px 34px", boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.55fr) minmax(0, 1fr)", gap: "28px", alignItems: "start" }}>
              <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
                  <img src="./assets/agent-megan-luchey.png" alt="Megan Luchey, licensed insurance agent at A&A Insurance" style={{ width: "128px", height: "128px", borderRadius: "50%", boxShadow: "0 6px 18px rgba(11,42,91,0.25)", flex: "none" }} />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0B2A5B" }}>
                      {"Licensed Insurance Agent"}
                    </div>
                    <div style={{ fontSize: "34px", fontWeight: 800, color: "#F5B800", lineHeight: 1.1, margin: "4px 0 2px" }}>
                      {"Megan Luchey"}
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#0B2A5B" }}>
                      {"A&A Insurance"}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px", fontSize: "13px", color: "#3A4352", flexWrap: "wrap" }}>
                      <span style={{ color: "#F5B800", letterSpacing: "2px", fontSize: "14px" }}>
                        {"★★★★★"}
                      </span>
                      <span>
                        {"4.9/5 on Google"}
                      </span>
                      <span style={{ color: "#5B6577" }}>
                        {"(889 reviews)"}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
                      <button className="aa-h4" onClick={v.sponsorQuote} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "999px", padding: "13px 26px", fontSize: "13.5px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer" }}>
                        {"Get a quote"}
                      </button>
                      <a className="aa-h5" href="tel:+18444806515" style={{ background: "#F5B800", color: "#0B2A5B", borderRadius: "999px", padding: "13px 26px", fontSize: "13.5px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>
                        {"Call: 844-480-6515"}
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0B2A5B", marginBottom: "8px" }}>
                    {"Headquarter"}
                  </div>
                  <div style={{ border: "1px solid #E1E5EC", borderRadius: "10px", padding: "16px 18px" }}>
                    <div style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", color: "#0B2A5B" }}>
                      {"West Palm Beach"}
                    </div>
                    <div style={{ fontSize: "14px", color: "#3A4352", lineHeight: 1.6, marginTop: "4px" }}>
                      {"951 Sansbury's Way Suite 204"}
                    </div>
                    <div style={{ fontSize: "14px", color: "#3A4352", lineHeight: 1.6 }}>
                      {"West Palm Beach, FL 33411"}
                    </div>
                    <div style={{ fontSize: "14px", color: "#3A4352", marginTop: "4px" }}>
                      {"Office: "}
                      <a href="tel:+18444806515" style={{ color: "#0B2A5B", fontWeight: 700 }}>
                        {"844-480-6515"}
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0B2A5B", marginBottom: "6px" }}>
                    {"About us"}
                  </div>
                  <p style={{ fontSize: "14px", color: "#3A4352", lineHeight: 1.6, margin: 0, textWrap: "pretty" }}>
                    {"A&A Insurance is an independent insurance agency with access to multiple carriers backed by over 50 years of combined experience and dedicated to serving your insurance needs."}
                  </p>
                </div>
              </div>
              <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B2A5B" }}>
                    {"Office hours"}
                  </div>
                  <div style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.9, marginTop: "6px" }}>
                    {"Mon – Fri: 8:00 AM – 5:00 PM"}
                  </div>
                  <div style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.9 }}>
                    {"Sat: 10:00 AM – 2:00 PM"}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B2A5B" }}>
                    {"Insurance products offered"}
                  </div>
                  <div style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.9, marginTop: "6px" }}>
                    {"Homeowners, Auto,"}
                  </div>
                  <div style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.9 }}>
                    {"Life, Commercial"}
                  </div>
                </div>
                <div style={{ background: "#F4F6FA", borderRadius: "10px", padding: "14px 16px" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#5B6577" }}>
                    {"Your course progress"}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0B2A5B", marginTop: "4px" }}>
                    {v.completedCount}
                    {" · "}
                    {v.doneMinText}
                  </div>
                  <div style={{ fontSize: "13px", color: "#3A4352", marginTop: "6px" }}>
                    {v.breakNextText}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #E9EDF3", marginTop: "24px", paddingTop: "18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "12.5px", color: "#5B6577", maxWidth: "500px", textWrap: "pretty" }}>
                {"Sponsor messages appear only after a completed mandatory break. They never replace instructional time and are not counted toward the required 220 instructional minutes."}
              </div>
              <button className="aa-h4" onClick={v.sponsorNext} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "14px 26px", fontSize: "15.5px", fontWeight: 700, cursor: "pointer" }}>
                {"Next → "}
                {v.sponsorNextLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
