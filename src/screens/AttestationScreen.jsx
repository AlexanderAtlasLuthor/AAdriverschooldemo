export default function AttestationScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ fontSize: "12.5px", color: "#5B6577", marginBottom: "8px" }}>
          {"Course setup · Step 3 of 3"}
        </div>
        <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "0 0 12px" }}>
          {"Course rules and acknowledgement"}
        </h1>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px", fontSize: "14.5px", color: "#3A4352", lineHeight: 1.6 }}>
          <div style={{ fontWeight: 700, color: "#0B2A5B", marginBottom: "6px" }}>
            {"How this course works"}
          </div>
          <div>
            {"• The course contains 220 minutes of instruction in 12 timed units (Introduction and Modules 1–11) plus two mandatory 10-minute breaks — 240 minutes in total. Units must be completed in order; each has a required minimum time before you can continue."}
          </div>
          <div>
            {"• Practice quizzes follow the modules that include them; results show which questions you answered correctly and incorrectly."}
          </div>
          <div>
            {"• Ten random validation questions will be asked during the course. Your answers must match the answers you just recorded. If you fail to answer correctly you will be locked out until you speak with a customer service representative."}
          </div>
          <div>
            {"• The final exam has 40 multiple-choice questions; you must answer at least 32 (80%) correctly. It is open book and has no time limit, but if you leave before submitting your answers are not saved and each attempt uses a different set of questions."}
          </div>
          <div>
            {"• After passing you must sign a completion statement before your certificate is processed; your completion is then reported as required by Florida."}
          </div>
          <div style={{ fontWeight: 700, color: "#0B2A5B", margin: "14px 0 6px" }}>
            {"Eligibility"}
          </div>
          <div>
            {"By continuing you confirm that you are the registered student, that the information you provided is true and complete, and that you personally will complete the entire course without unauthorized assistance."}
          </div>
          <div style={{ fontWeight: 700, color: "#0B2A5B", margin: "14px 0 6px" }}>
            {"Statement you will be asked to certify at the end of the course"}
          </div>
          <div style={{ background: "#EEF2F9", borderRadius: "6px", padding: "12px 14px", color: "#0B2A5B", fontWeight: 700 }}>
            {"\""}
            {v.attestationText}
            {"\""}
          </div>
          <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "16px", fontSize: "14.5px", color: "#1E2430" }}>
            <input type="checkbox" checked={v.attestChecked} onChange={v.toggleAttest} style={{ marginTop: "3px" }} />
            <span>
              {"I have read and understand the course rules, I am the registered student, and I will complete this course personally without unauthorized assistance."}
            </span>
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "18px" }}>
          <button onClick={v.acceptAttestation} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Begin the course →"}
          </button>
        </div>
      </div>
    </>
  );
}
