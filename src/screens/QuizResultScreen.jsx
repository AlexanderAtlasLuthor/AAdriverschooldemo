import { Fragment } from 'react';

export default function QuizResultScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "820px", margin: "30px auto", padding: "0 20px 60px" }}>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "22px 24px", marginBottom: "14px", display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {v.modLabel}
              {" · "}
              {v.quizName}
              {" results"}
            </div>
            <div style={{ fontSize: "26px", fontWeight: 700, color: "#0B2A5B" }}>
              {"Total correct: "}
              {v.quizScoreText}
            </div>
            {v.quizPassed ? (
              <>
                <div style={{ color: "#1E7B34", fontWeight: 700 }}>
                  {"You passed!"}
                </div>
              </>
            ) : null}
            {v.quizMissed ? (
              <>
                <div style={{ color: "#B26A00", fontWeight: 700 }}>
                  {"Review the highlighted items below. You may retake the quiz or continue (passing rule: TBD / Requires A&A Decision)."}
                </div>
              </>
            ) : null}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {v.quizMissed ? (
              <>
                <button onClick={v.retakeQuiz} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "6px", padding: "12px 18px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
                  {"Retake quiz"}
                </button>
              </>
            ) : null}
            <button onClick={v.quizContinue} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
              {"Continue course →"}
            </button>
          </div>
        </div>
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
                  <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "9px 12px", border: `1px solid ${c.border}`, background: c.bg, borderRadius: "6px", marginBottom: "6px", fontSize: "14.5px" }}>
                    <span style={{ fontWeight: 700, color: "#0B2A5B", width: "20px" }}>
                      {c.letter}
                      {"."}
                    </span>
                    <span style={{ flex: 1 }}>
                      {c.text}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#3A4352" }}>
                      {c.mark}
                    </span>
                  </div>
                </Fragment>
              ))}
              {q.resultOk ? (
                <>
                  <div style={{ color: "#1E7B34", fontWeight: 700, fontSize: "13.5px", marginTop: "6px" }}>
                    {"Correct!"}
                  </div>
                </>
              ) : null}
              {q.resultBad ? (
                <>
                  <div style={{ color: "#B3261E", fontWeight: 700, fontSize: "13.5px", marginTop: "6px" }}>
                    {"Incorrect."}
                  </div>
                </>
              ) : null}
              <div style={{ fontSize: "13px", color: "#5B6577", marginTop: "2px" }}>
                {"Explanation: item found in "}
                {q.section}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
