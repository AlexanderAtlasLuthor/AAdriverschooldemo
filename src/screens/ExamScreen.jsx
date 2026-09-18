import { Fragment } from 'react';

export default function ExamScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "24px 20px 60px", width: "100%", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "22px", alignItems: "start" }}>
        <div style={{ flex: "999 1 460px", minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {"Final Exam · open book · no time limit"}
              </div>
              <h1 style={{ fontSize: "22px", color: "#0B2A5B", margin: "2px 0" }}>
                {v.examIdxText}
              </h1>
            </div>
            <div style={{ fontSize: "13px", color: "#3A4352" }}>
              {v.examAnsweredText}
            </div>
          </div>
          <div style={{ height: "8px", background: "#E9EDF3", borderRadius: "4px", margin: "10px 0 16px", overflow: "hidden" }}>
            <div style={{ height: "100%", background: "#0B2A5B", width: `${v.examProgressPct}%` }} />
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "24px 26px" }}>
            <div style={{ fontSize: "17px", fontWeight: 700, color: "#1E2430", lineHeight: 1.5, marginBottom: "14px" }}>
              {v.examQ}
            </div>
            {(v.examChoices || []).map((c, cIdx) => (
              <Fragment key={cIdx}>
                <div onClick={c.onPick} onKeyDown={c.onKey} role="button" tabIndex="0" style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 14px", border: `1px solid ${c.border}`, background: c.bg, borderRadius: "6px", marginBottom: "8px", cursor: "pointer", fontSize: "15px" }}>
                  <span style={{ fontWeight: 700, color: "#0B2A5B", width: "22px" }}>
                    {c.letter}
                    {"."}
                  </span>
                  <span>
                    {c.text}
                  </span>
                </div>
              </Fragment>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "18px", flexWrap: "wrap" }}>
              <button onClick={v.examPrev} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #C9CFDA", borderRadius: "5px", padding: "10px 14px", cursor: "pointer", fontSize: "14px" }}>
                {"← Previous"}
              </button>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={v.examNext} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "5px", padding: "10px 16px", cursor: "pointer", fontSize: "14px", fontWeight: 700 }}>
                  {"Next →"}
                </button>
                <button onClick={v.askSubmit} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "5px", padding: "10px 16px", cursor: "pointer", fontSize: "14px", fontWeight: 700 }}>
                  {"Submit exam"}
                </button>
              </div>
            </div>
          </div>
          {v.examConfirm ? (
            <>
              <div style={{ marginTop: "14px", background: "#FFF4E0", border: "1px solid #F3D9A4", borderRadius: "10px", padding: "16px 18px" }}>
                <div style={{ fontWeight: 700, color: "#6B4600" }}>
                  {"Submit your exam?"}
                </div>
                <div style={{ fontSize: "14px", color: "#3A4352", margin: "6px 0 12px" }}>
                  {v.examUnansweredText}
                  {" Once submitted, your score is final for this attempt."}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={v.confirmSubmit} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "5px", padding: "10px 16px", cursor: "pointer", fontWeight: 700 }}>
                    {"Yes, submit my exam"}
                  </button>
                  <button onClick={v.cancelSubmit} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "5px", padding: "10px 16px", cursor: "pointer" }}>
                    {"Keep answering"}
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: "1 1 280px", maxWidth: "320px", minWidth: 0 }}>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "14px" }}>
            <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700, marginBottom: "8px" }}>
              {"Questions"}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {(v.examDots || []).map((d, dIdx) => (
                <Fragment key={dIdx}>
                  <button onClick={d.onPick} aria-label={`Question ${d.n}`} style={{ width: "30px", height: "30px", borderRadius: "4px", border: "1px solid #C9CFDA", background: d.bg, color: d.fg, fontSize: "11.5px", cursor: "pointer" }}>
                    {d.n}
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "14px" }}>
            <button onClick={v.toggleOpenBook} style={{ width: "100%", background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "5px", padding: "9px", cursor: "pointer", fontSize: "13.5px", fontWeight: 700 }}>
              {"📖 Review course contents"}
            </button>
            {v.examOpenBook ? (
              <>
                <div style={{ marginTop: "10px", fontSize: "12.5px", color: "#5B6577" }}>
                  {"Open book: reviewing a module keeps your answers (prototype). Select a module:"}
                </div>
                {(v.examReviewRows || []).map((r, rIdx) => (
                  <Fragment key={rIdx}>
                    <div onClick={r.onOpen} style={{ padding: "6px 0", borderTop: "1px solid #F0F2F6", fontSize: "13px", color: "#0B2A5B", cursor: "pointer" }}>
                      {r.label}
                      {" – "}
                      {r.title}
                    </div>
                  </Fragment>
                ))}
              </>
            ) : null}
          </div>
          <div style={{ background: "#FFF4D6", borderRadius: "10px", padding: "12px 14px", fontSize: "12px", color: "#7A5A00", lineHeight: 1.5 }}>
            <b>
              {"DEMO ONLY – NOT PRODUCTION FUNCTIONALITY"}
            </b>
            {" · DEMO MODE / PROTOTYPE ONLY — these controls would not exist in production."}
            <div style={{ display: "flex", gap: "8px", marginTop: "8px", flexWrap: "wrap" }}>
              <button onClick={v.demoPass} style={{ background: "#fff", color: "#1E7B34", border: "1px dashed #1E7B34", borderRadius: "5px", padding: "7px 10px", cursor: "pointer", fontSize: "12px" }}>
                {"Demo: complete exam (pass 36/40)"}
              </button>
              <button onClick={v.demoFail} style={{ background: "#fff", color: "#B3261E", border: "1px dashed #B3261E", borderRadius: "5px", padding: "7px 10px", cursor: "pointer", fontSize: "12px" }}>
                {"Demo: complete exam (fail 24/40)"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
