export default function SiteScreen({ v }) {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
        <div style={{ background: "#0B2A5B", color: "#fff", fontSize: "12.5px", padding: "6px 24px", display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <span>
            {"A&A Online Training · Florida-approved driver improvement (approval status: TBD)"}
          </span>
          <span>
            {"Student support: (561) 533-5303 · support@aaservices.com (TBD)"}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "16px 24px", borderBottom: "1px solid #D9DEE7", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img src="./assets/logo-aa.png" alt="A&A" style={{ height: "44px", width: "auto" }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: "18px", color: "#0B2A5B", letterSpacing: "0.01em" }}>
                {"A&A Online Training"}
              </div>
              <div style={{ fontSize: "12px", color: "#5B6577" }}>
                {"Quality In Everything We Do"}
              </div>
            </div>
          </div>
          <nav aria-label="Main" style={{ display: "flex", gap: "6px", fontSize: "14px", flexWrap: "wrap" }}>
            <button className="aa-h1" onClick={v.navCourses} style={{ background: "none", border: 0, color: "#1E2430", fontSize: "14px", padding: "6px 10px", borderRadius: "5px", cursor: "pointer" }}>
              {"Courses"}
            </button>
            <button className="aa-h1" onClick={v.navHow} style={{ background: "none", border: 0, color: "#1E2430", fontSize: "14px", padding: "6px 10px", borderRadius: "5px", cursor: "pointer" }}>
              {"How it works"}
            </button>
            <button className="aa-h1" onClick={v.navRequirements} style={{ background: "none", border: 0, color: "#1E2430", fontSize: "14px", padding: "6px 10px", borderRadius: "5px", cursor: "pointer" }}>
              {"Florida requirements"}
            </button>
            <button className="aa-h1" onClick={v.openHelp} style={{ background: "none", border: 0, color: "#1E2430", fontSize: "14px", padding: "6px 10px", borderRadius: "5px", cursor: "pointer" }}>
              {"Help"}
            </button>
            <button className="aa-h2" onClick={v.openSignIn} style={{ background: "none", border: "1px solid #0B2A5B", color: "#0B2A5B", fontWeight: 700, fontSize: "14px", padding: "6px 14px", borderRadius: "5px", cursor: "pointer" }}>
              {"Log in"}
            </button>
            <button className="aa-noprint" onClick={v.restartDemo} style={{ background: "#FFF4D6", border: "1px solid #F5B800", color: "#7A5A00", fontWeight: 700, fontSize: "13.5px", padding: "6px 12px", borderRadius: "5px", cursor: "pointer" }} title="PROTOTYPE ONLY: clears saved progress so the journey can be run again">
              {"↻ Restart demo"}
            </button>
          </nav>
        </div>
        <div id="courses" style={{ maxWidth: "1120px", margin: "0 auto", padding: "56px 24px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "40px", alignItems: "center" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "inline-block", background: "#FFF4D6", color: "#7A5A00", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", padding: "4px 10px", borderRadius: "3px", textTransform: "uppercase" }}>
              {"Florida · Basic Driver Improvement"}
            </div>
            <h1 style={{ fontSize: "40px", lineHeight: 1.12, margin: "14px 0 12px", color: "#0B2A5B", textWrap: "pretty" }}>
              {"Take your Florida 4-hour BDI course online — at your own pace, on any device."}
            </h1>
            <p style={{ fontSize: "17px", lineHeight: 1.55, color: "#3A4352", margin: "0 0 22px", textWrap: "pretty" }}>
              {"Satisfy a court order, keep points off your record after a ticket, or meet an FLHSMV requirement. Clear lessons, short quizzes, and a certificate of completion when you pass the final exam."}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={v.goRegister} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "14px 24px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
                {"Enroll in the 4-Hour BDI Course"}
              </button>
              <button onClick={v.howItWorks} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "6px", padding: "14px 20px", fontSize: "16px", cursor: "pointer" }}>
                {"How the course works"}
              </button>
            </div>
          </div>
          <div style={{ background: "#F4F6FA", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "22px", minWidth: 0 }}>
            <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
              {"Course card"}
            </div>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#0B2A5B", margin: "6px 0 4px" }}>
              {"Florida 4-Hour Basic Driver Improvement (BDI)"}
            </h2>
            <div style={{ fontSize: "14px", color: "#3A4352", lineHeight: 1.5 }}>
              {"Eleven instructional modules plus an introduction — crash prevention, Florida traffic law, DUI prevention, sharing the road, safety equipment and driver attitude — followed by an open-book 40-question final exam."}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "16px 0" }}>
              <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "6px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase" }}>
                  {"Required time"}
                </div>
                <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
                  {"4 hours (240 min)"}
                </div>
                <div style={{ fontSize: "11.5px", color: "#5B6577" }}>
                  {"220 min instruction + two 10-min breaks"}
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "6px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase" }}>
                  {"Delivery"}
                </div>
                <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
                  {"100% online"}
                </div>
                <div style={{ fontSize: "11.5px", color: "#5B6577" }}>
                  {"Stop and resume anytime"}
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "6px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase" }}>
                  {"Final exam"}
                </div>
                <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
                  {"40 questions · open book"}
                </div>
                <div style={{ fontSize: "11.5px", color: "#5B6577" }}>
                  {"80% (32 of 40) to pass · no time limit"}
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "6px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#5B6577", textTransform: "uppercase" }}>
                  {"Price"}
                </div>
                <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
                  {"TBD"}
                </div>
                <div style={{ fontSize: "11.5px", color: "#5B6577" }}>
                  {"+ $2.50 Florida state assessment fee"}
                </div>
              </div>
            </div>
            <div id="florida-requirements" style={{ fontSize: "13.5px", color: "#3A4352", lineHeight: 1.6 }}>
              {"Who it is for: drivers electing BDI in lieu of points for a non-criminal moving violation (not available if charged with more than 30 mph over the limit or holding a CDL), drivers ordered by a court, and drivers required by FLHSMV after qualifying crashes or convictions. Election benefit: 18% civil-penalty reduction and no points when adjudication is withheld (Section 318.14(9), F.S.)."}
            </div>
            <button onClick={v.goRegister} style={{ marginTop: "16px", width: "100%", background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "13px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
              {"Start enrollment →"}
            </button>
          </div>
        </div>
        <div id="how-it-works" style={{ maxWidth: "1120px", margin: "0 auto", padding: "24px 24px 64px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px" }}>
          <div style={{ borderTop: "3px solid #F5B800", paddingTop: "12px" }}>
            <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
              {"Timed, sequential modules"}
            </div>
            <div style={{ fontSize: "13.5px", color: "#3A4352", lineHeight: 1.5 }}>
              {"Each module has a required minimum time and unlocks the next when complete — exactly as Florida BDI courses are structured."}
            </div>
          </div>
          <div style={{ borderTop: "3px solid #F5B800", paddingTop: "12px" }}>
            <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
              {"Identity validation"}
            </div>
            <div style={{ fontSize: "13.5px", color: "#3A4352", lineHeight: 1.5 }}>
              {"Personal validation questions during the course confirm that the registered student is the one completing it."}
            </div>
          </div>
          <div style={{ borderTop: "3px solid #F5B800", paddingTop: "12px" }}>
            <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
              {"Certificate & state reporting"}
            </div>
            <div style={{ fontSize: "13.5px", color: "#3A4352", lineHeight: 1.5 }}>
              {"After you pass and sign your completion statement, your certificate is processed and completion information is prepared for the state."}
            </div>
          </div>
          <div style={{ borderTop: "3px solid #F5B800", paddingTop: "12px" }}>
            <div style={{ fontWeight: 700, color: "#0B2A5B" }}>
              {"Support when you need it"}
            </div>
            <div style={{ fontSize: "13.5px", color: "#3A4352", lineHeight: 1.5 }}>
              {"Help is available from every course screen. Support hours and channels: TBD / Requires A&A Decision."}
            </div>
          </div>
        </div>
        <div style={{ background: "#0B2A5B", color: "#C9D3E6", fontSize: "12.5px", padding: "18px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <span>
            {"A&A Services · Corporate Headquarters · 951 Sansbury's Way, West Palm Beach, FL 33411 · (561) 533-5303"}
          </span>
          <nav aria-label="Legal and support" style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            <button className="aa-h3" onClick={v.openTerms} style={{ background: "none", border: 0, color: "#FFFFFF", fontSize: "12.5px", textDecoration: "underline", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>
              {"Terms"}
            </button>
            <button className="aa-h3" onClick={v.openPrivacy} style={{ background: "none", border: 0, color: "#FFFFFF", fontSize: "12.5px", textDecoration: "underline", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>
              {"Privacy"}
            </button>
            <button className="aa-h3" onClick={v.openA11y} style={{ background: "none", border: 0, color: "#FFFFFF", fontSize: "12.5px", textDecoration: "underline", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>
              {"Accessibility"}
            </button>
            <button className="aa-h3" onClick={v.openHelp} style={{ background: "none", border: 0, color: "#FFFFFF", fontSize: "12.5px", textDecoration: "underline", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>
              {"Contact"}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
