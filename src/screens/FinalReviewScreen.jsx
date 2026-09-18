import { Fragment } from 'react';

export default function FinalReviewScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "26px", color: "#0B2A5B", margin: "0 0 8px" }}>
          {"Final Review"}
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", margin: "14px 0 18px" }}>
          <div style={{ background: "#E6F4EA", borderRadius: "8px", padding: "14px 16px", color: "#14532D" }}>
            <div style={{ fontSize: "11.5px", textTransform: "uppercase" }}>
              {"Instructional time"}
            </div>
            <div style={{ fontWeight: 700 }}>
              {"✓ "}
              {v.instrDoneText}
            </div>
          </div>
          <div style={{ background: "#E6F4EA", borderRadius: "8px", padding: "14px 16px", color: "#14532D" }}>
            <div style={{ fontSize: "11.5px", textTransform: "uppercase" }}>
              {"Mandatory breaks"}
            </div>
            <div style={{ fontWeight: 700 }}>
              {"✓ "}
              {v.breaksText}
            </div>
          </div>
          <div style={{ background: "#E6F4EA", borderRadius: "8px", padding: "14px 16px", color: "#14532D" }}>
            <div style={{ fontSize: "11.5px", textTransform: "uppercase" }}>
              {"Eligibility for the final exam"}
            </div>
            <div style={{ fontWeight: 700 }}>
              {"✓ Required course time satisfied"}
            </div>
          </div>
        </div>
        <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.55 }}>
          {"You have completed all of the modules in the Basic Driver Improvement course. Before the exam you may revisit any module below (review mode – no timers). The exam is open book: you can also review course content from inside the exam. To receive your certificate you must pass the 40-question final exam with at least 32 correct answers (80%)."}
        </p>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", overflow: "hidden", margin: "14px 0 18px" }}>
          {(v.reviewRows || []).map((r, rIdx) => (
            <Fragment key={rIdx}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 18px", borderTop: "1px solid #EEF1F5" }}>
                <span style={{ color: "#1E7B34", fontWeight: 700 }}>
                  {"✓"}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "12px", color: "#5B6577" }}>
                    {r.label}
                    {" · "}
                    {r.minutes}
                  </div>
                  <div style={{ fontWeight: 600, color: "#1E2430" }}>
                    {r.title}
                  </div>
                </div>
                <button onClick={r.onOpen} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "5px", padding: "7px 12px", cursor: "pointer", fontSize: "13px" }}>
                  {"Review"}
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={v.goExamIntro} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "13px 24px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Go to the Final Exam →"}
          </button>
        </div>
      </div>
    </>
  );
}
