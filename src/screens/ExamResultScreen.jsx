export default function ExamResultScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "760px", margin: "40px auto", padding: "0 20px 60px" }}>
        {v.examPassed ? (
          <>
            <div style={{ background: "#fff", border: "2px solid #1E7B34", borderRadius: "12px", padding: "30px", textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#E6F4EA", color: "#1E7B34", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", fontWeight: 700, margin: "0 auto 12px" }}>
                {"✓"}
              </div>
              <h1 style={{ fontSize: "28px", color: "#1E7B34", margin: "0 0 6px" }}>
                {"Course Passed"}
              </h1>
              <div style={{ fontSize: "15px", color: "#3A4352" }}>
                {"Final exam score: "}
                <b>
                  {v.examScoreText}
                  {" correct ("}
                  {v.examPctText}
                  {")"}
                </b>
                {" · required 32 of 40 (80%) · Completion date: "}
                {v.completionDate}
              </div>
              <div style={{ margin: "20px auto 0", maxWidth: "520px", background: "#F4F6FA", borderRadius: "8px", padding: "14px 16px", textAlign: "left", fontSize: "14px", color: "#3A4352", lineHeight: 1.55 }}>
                <b>
                  {"Next required action:"}
                </b>
                {" before your certificate can be processed you must sign a statement certifying that you completed the course without unauthorized assistance and abided by the course rules. Then verify your certificate information and choose a delivery method."}
              </div>
              <button onClick={v.afterPass} style={{ marginTop: "18px", background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "13px 24px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                {"Continue to my dashboard →"}
              </button>
            </div>
          </>
        ) : null}
        {v.examFailed ? (
          <>
            <div style={{ background: "#fff", border: "2px solid #B3261E", borderRadius: "12px", padding: "30px", textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#FCE8E6", color: "#B3261E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", fontWeight: 700, margin: "0 auto 12px" }}>
                {"✗"}
              </div>
              <h1 style={{ fontSize: "28px", color: "#B3261E", margin: "0 0 6px" }}>
                {"Exam not passed"}
              </h1>
              <div style={{ fontSize: "15px", color: "#3A4352" }}>
                {"Your score: "}
                <b>
                  {v.examScoreText}
                  {" correct ("}
                  {v.examPctText}
                  {")"}
                </b>
                {" · required 32 of 40 (80%)"}
              </div>
              <div style={{ margin: "20px auto 0", maxWidth: "520px", background: "#F4F6FA", borderRadius: "8px", padding: "14px 16px", textAlign: "left", fontSize: "14px", color: "#3A4352", lineHeight: 1.55 }}>
                {"A certificate cannot be issued until you pass the final exam. You may review the course content and retake the exam; each attempt uses a different set of questions. Retest fee and number of attempts: TBD / Requires A&A Decision."}
              </div>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "18px", flexWrap: "wrap" }}>
                <button onClick={v.backToReviewFromExam} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "6px", padding: "12px 18px", fontSize: "14px", cursor: "pointer" }}>
                  {"Review course content"}
                </button>
                <button onClick={v.retakeExam} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                  {"Retake the final exam"}
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
