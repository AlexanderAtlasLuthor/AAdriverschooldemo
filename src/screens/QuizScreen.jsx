import { Fragment } from 'react';

export default function QuizScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "820px", margin: "30px auto", padding: "0 20px 60px" }}>
        <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {v.modLabel}
          {" · "}
          {v.quizName}
        </div>
        <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "4px 0 16px" }}>
          {"Answer all questions, then submit"}
        </h1>
        {(v.quizRows || []).map((q, qIdx) => (
          <Fragment key={qIdx}>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "18px 20px", marginBottom: "14px" }}>
              <div style={{ fontSize: "15.5px", fontWeight: 700, color: "#1E2430", marginBottom: "10px" }}>
                {q.n}
                {". "}
                {q.q}
              </div>
              {(q.choices || []).map((c, cIdx) => (
                <Fragment key={cIdx}>
                  <div onClick={c.onPick} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "10px 12px", border: `1px solid ${c.border}`, background: c.bg, borderRadius: "6px", marginBottom: "6px", cursor: "pointer", fontSize: "14.5px" }}>
                    <span style={{ fontWeight: 700, color: "#0B2A5B", width: "20px" }}>
                      {c.letter}
                      {"."}
                    </span>
                    <span style={{ flex: 1 }}>
                      {c.text}
                    </span>
                    <span style={{ fontSize: "12px", color: "#5B6577" }}>
                      {c.mark}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </Fragment>
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={v.submitQuiz} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer", opacity: v.submitOpacity }}>
            {"Submit answers"}
          </button>
        </div>
      </div>
    </>
  );
}
