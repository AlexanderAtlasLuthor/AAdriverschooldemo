import { Fragment } from 'react';

export default function DashboardScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "26px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        {v.restoredNote ? (
          <>
            <div style={{ background: "#EEF2F9", border: "1px solid #C9D3E6", color: "#0B2A5B", borderRadius: "6px", padding: "11px 14px", marginBottom: "12px", display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", fontSize: "13.5px" }}>
              <span>
                {"Your course position was restored from this browser. Mandatory breaks and module timers always restart from their full required time — saved progress never shortens them."}
              </span>
              <button onClick={v.dismissRestored} style={{ background: "none", border: "1px solid #0B2A5B", color: "#0B2A5B", borderRadius: "5px", padding: "6px 12px", fontSize: "12.5px", fontWeight: 700, cursor: "pointer" }}>
                {"Dismiss"}
              </button>
            </div>
          </>
        ) : null}
        {v.hasLockedMsg ? (
          <>
            <div style={{ background: "#FFF4E0", border: "1px solid #F3D9A4", color: "#6B4600", borderRadius: "6px", padding: "12px 14px", marginBottom: "16px", fontSize: "14px", display: "flex", justifyContent: "space-between", gap: "12px" }}>
              <span>
                {"🔒 "}
                {v.lockedMsg}
              </span>
              <button onClick={v.clearLocked} style={{ background: "transparent", border: 0, color: "#6B4600", cursor: "pointer", fontWeight: 700 }}>
                {"Dismiss"}
              </button>
            </div>
          </>
        ) : null}
        {v.isPostExam ? (
          <>
            <div style={{ background: "#E6F4EA", border: "1px solid #1E7B34", color: "#14532D", borderRadius: "6px", padding: "14px 16px", marginBottom: "16px", fontSize: "14.5px", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <span>
                <b>
                  {"You have passed the course. Congratulations!"}
                </b>
                {" Before we can process your certificate, you must sign a statement certifying that you completed the course yourself without unauthorized assistance."}
              </span>
              <button onClick={v.goSign} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "10px 16px", fontWeight: 700, cursor: "pointer" }}>
                {"Sign Statement"}
              </button>
            </div>
          </>
        ) : null}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div style={{ flex: "999 1 460px", minWidth: 0 }}>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {"My course"}
                  </div>
                  <div style={{ fontSize: "22px", fontWeight: 700, color: "#0B2A5B" }}>
                    {v.courseTitle}
                  </div>
                  <div style={{ fontSize: "13.5px", color: "#3A4352", marginTop: "4px" }}>
                    {"Status: "}
                    <b>
                      {v.courseStatus}
                    </b>
                    {" · Student: "}
                    {v.stName}
                  </div>
                </div>
                <button onClick={v.startCourse} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 20px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                  {v.startLabel}
                </button>
              </div>
              <div style={{ marginTop: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#3A4352" }}>
                  <span>
                    {"Overall progress · "}
                    {v.completedCount}
                  </span>
                  <span>
                    {v.doneMinText}
                    {" · "}
                    {v.remainingMinText}
                  </span>
                </div>
                <div style={{ height: "10px", background: "#E9EDF3", borderRadius: "5px", marginTop: "6px", overflow: "hidden" }}>
                  <div style={{ height: "100%", background: "#0B2A5B", width: v.pctText }} />
                </div>
                <div style={{ fontSize: "12px", color: "#5B6577", marginTop: "4px" }}>
                  {"Required course time: 240 minutes (220 instructional + two 10-minute mandatory breaks). Time counts only while a module timer is running."}
                </div>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "8px 0", marginTop: "18px" }}>
              <h2 style={{ margin: 0, padding: "12px 22px 6px", fontWeight: 700, color: "#0B2A5B" }}>
                {"Course outline — modules unlock in order"}
              </h2>
              {(v.moduleRows || []).map((m, mIdx) => (
                <Fragment key={mIdx}>
                  <div onClick={m.onOpen} onKeyDown={m.onKey} role="button" tabIndex="0" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 22px", borderTop: "1px solid #EEF1F5", cursor: "pointer", background: m.bg }}>
                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: `2px solid ${m.fg}`, color: m.fg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>
                      {m.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "12px", color: "#5B6577" }}>
                        {m.num}
                      </div>
                      <div style={{ fontWeight: 600, color: m.fg }}>
                        {m.title}
                      </div>
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#5B6577", width: "60px", textAlign: "right" }}>
                      {m.minutes}
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: m.fg, width: "96px", textAlign: "right" }}>
                      {m.status}
                    </div>
                  </div>
                </Fragment>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 22px", borderTop: "1px solid #EEF1F5", color: "#8A94A6" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "2px solid #8A94A6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>
                  {"🔒"}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "12px" }}>
                    {"After all modules and breaks"}
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    {"Final Review · Final Exam (40 questions, 80% to pass) · Completion statement · Certificate"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", flex: "1 1 300px", maxWidth: "340px", minWidth: 0 }}>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "18px" }}>
              <h2 style={{ margin: 0, fontWeight: 700, color: "#0B2A5B", marginBottom: "8px" }}>
                {"Course objectives"}
              </h2>
              {(v.objectives || []).map((o, oIdx) => (
                <Fragment key={oIdx}>
                  <div style={{ fontSize: "13px", color: "#3A4352", lineHeight: 1.5, padding: "4px 0", borderTop: "1px solid #F0F2F6" }}>
                    {o.t}
                  </div>
                </Fragment>
              ))}
            </div>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "18px", fontSize: "13px", color: "#3A4352", lineHeight: 1.55 }}>
              <h2 style={{ margin: 0, fontWeight: 700, color: "#0B2A5B", marginBottom: "8px" }}>
                {"Before you begin"}
              </h2>
              {"1. Confirm your student and citation information."}
              <br />
              {"2. Set up your 10 validation questions."}
              <br />
              {"3. Read and acknowledge the course rules."}
              <br />
              <span style={{ color: "#5B6577" }}>
                {"Then the Introduction starts automatically. You will be asked ten random validation questions during the course; answers must match what you set up."}
              </span>
            </div>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "18px", fontSize: "13px", color: "#3A4352" }}>
              <div style={{ fontWeight: 700, color: "#0B2A5B", marginBottom: "8px" }}>
                {"Most recent exam"}
              </div>
              {v.examRecordText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
