import { Fragment } from 'react';

export default function PlayerScreen({ v }) {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", flex: 1, minHeight: 0 }}>
        <div style={{ background: "#fff", borderRight: "1px solid #D9DEE7", padding: "14px 0", flex: "1 1 260px", maxWidth: "320px", minWidth: 0 }}>
          <div style={{ padding: "0 16px 10px", fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
            {"Course outline"}
          </div>
          {(v.sideRows || []).map((m, mIdx) => (
            <Fragment key={mIdx}>
              <div onClick={m.onOpen} onKeyDown={m.onKey} role="button" tabIndex="0" style={{ display: "flex", gap: "10px", alignItems: "center", padding: "8px 16px", cursor: "pointer", background: m.bg, color: m.fg, fontWeight: m.weight }}>
                <span style={{ width: "18px", textAlign: "center", fontSize: "12px" }}>
                  {m.icon}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "11.5px", opacity: 0.8 }}>
                    {m.label}
                    {" · "}
                    {m.minutes}
                  </div>
                  <div style={{ fontSize: "13px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {m.title}
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
          <div style={{ padding: "14px 16px 0" }}>
            <button onClick={v.exitToDashboard} style={{ width: "100%", background: "#fff", color: "#0B2A5B", border: "1px solid #D9DEE7", borderRadius: "5px", padding: "8px", cursor: "pointer", fontSize: "13px" }}>
              {"Save position & exit to dashboard"}
            </button>
          </div>
        </div>
        <div style={{ padding: "20px 28px 60px", flex: "999 1 460px", minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {v.modLabel}
                {" · "}
                {v.modMinutes}
              </div>
              <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "2px 0 4px" }}>
                {v.modTitle}
              </h1>
              <div style={{ fontSize: "12px", color: "#5B6577" }}>
                {"Content source: "}
                {v.modSource}
              </div>
            </div>
            {v.notReview ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "10px 14px", minWidth: "250px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#5B6577" }}>
                    <span>
                      {"Module timer"}
                    </span>
                    <span>
                      {v.timerRequired}
                    </span>
                  </div>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: v.timerColor, fontVariantNumeric: "tabular-nums" }}>
                    {v.timerText}
                  </div>
                  <div style={{ height: "6px", background: "#E9EDF3", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ height: "100%", background: v.timerColor, width: `${v.timerPct}%` }} />
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#5B6577", marginTop: "4px" }}>
                    {"Remaining required time · Continue unlocks at 00:00"}
                  </div>
                </div>
              </>
            ) : null}
            {v.reviewMode ? (
              <>
                <div style={{ background: "#EEF2F9", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "#0B2A5B", fontWeight: 700 }}>
                  {"Review mode — this module is complete; no timer is running."}
                </div>
              </>
            ) : null}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "22px", marginTop: "16px", alignItems: "flex-start" }}>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "24px 28px", animation: "aaFade 0.25s ease", flex: "999 1 480px", minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "12.5px", color: "#5B6577" }}>
                <span>
                  {v.lessonCounter}
                </span>
                <span>
                  {"Source: "}
                  {v.lessonRef}
                </span>
              </div>
              <h2 style={{ fontSize: "21px", color: "#1E2430", margin: "6px 0 14px" }}>
                {v.lessonTitle}
              </h2>
              {v.hasGfx ? (
                <>
                  {(v.mediaGfx || []).map((g, gIdx) => (
                    <Fragment key={gIdx}>
                      <figure style={{ margin: "0 0 16px" }}>
                        {g.el}
                        <figcaption style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "12px", color: "#5B6577", marginTop: "6px" }}>
                          <span style={{ fontWeight: 700, color: "#0B2A5B" }}>
                            {"A&A course graphic"}
                          </span>
                          <span>
                            {v.mediaLabel}
                          </span>
                          <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 7px", borderRadius: "3px", background: v.mediaTagBg, color: v.mediaTagFg }}>
                            {v.mediaTag}
                          </span>
                        </figcaption>
                      </figure>
                    </Fragment>
                  ))}
                </>
              ) : null}
              {v.noGfx ? (
                <>
                  <div style={{ border: "1px dashed #B9C2D0", borderRadius: "8px", background: "repeating-linear-gradient(135deg, #F7F8FB 0 10px, #EEF1F6 10px 20px)", padding: "22px", display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#0B2A5B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
                      {v.mediaIcon}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "12px", color: "#5B6577", textTransform: "uppercase" }}>
                        {"Media placeholder · "}
                        {v.mediaKind}
                      </div>
                      <div style={{ fontSize: "14px", color: "#1E2430", margin: "3px 0 6px" }}>
                        {v.mediaLabel}
                      </div>
                      <span style={{ display: "inline-block", fontSize: "11.5px", fontWeight: 700, padding: "3px 8px", borderRadius: "3px", background: v.mediaTagBg, color: v.mediaTagFg }}>
                        {v.mediaTag}
                      </span>
                      {v.hasMediaSrc ? (
                        <>
                          <div style={{ marginTop: "8px", fontSize: "11.5px", color: "#5B6577", lineHeight: 1.5 }}>
                            <div>
                              <b style={{ color: "#0B2A5B" }}>
                                {"Approved source:"}
                              </b>
                              {' '}
                              {v.mediaSrcName}
                            </div>
                            <div style={{ overflowWrap: "anywhere" }}>
                              <a href={v.mediaSrcUrl} target="_blank" rel="noopener" style={{ color: "#0B2A5B" }}>
                                {v.mediaSrcUrl}
                              </a>
                            </div>
                            <div>
                              {v.mediaSrcLic}
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </>
              ) : null}
              {(v.lessonBlocks || []).map((b, bIdx) => (
                <Fragment key={bIdx}>
                  <div style={{ minWidth: 0 }}>
                    {b.isH ? (
                      <>
                        <h3 style={{ fontSize: "17px", color: "#0B2A5B", margin: "18px 0 8px", lineHeight: 1.35 }}>
                          {b.text}
                        </h3>
                      </>
                    ) : null}
                    {b.isP ? (
                      <>
                        <p style={{ fontSize: "15.5px", lineHeight: 1.65, color: "#1E2430", margin: "0 0 12px", textWrap: "pretty" }}>
                          {b.text}
                        </p>
                      </>
                    ) : null}
                    {b.isLi ? (
                      <>
                        <div style={{ display: "flex", gap: "10px", margin: `0 0 8px ${b.indent}px`, fontSize: "15.5px", lineHeight: 1.6, color: "#1E2430" }}>
                          <span style={{ flexShrink: 0, minWidth: "18px", color: "#0B2A5B", fontWeight: 700 }}>
                            {b.num}
                          </span>
                          <span style={{ minWidth: 0 }}>
                            {b.text}
                          </span>
                        </div>
                      </>
                    ) : null}
                    {b.isImg ? (
                      <>
                        <figure style={{ margin: "8px 0 14px" }}>
                          {b.imgEl}
                          <figcaption style={{ fontSize: "12px", color: "#5B6577", marginTop: "4px" }}>
                            {"Source Reference – illustration from the mapped course; to be replaced by A&A-produced media."}
                          </figcaption>
                        </figure>
                      </>
                    ) : null}
                    {b.isTable ? (
                      <>
                        <div style={{ overflowX: "auto", margin: "6px 0 14px" }}>
                          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "14px" }}>
                            <tbody>
                              {(b.rows || []).map((r, rIdx) => (
                                <Fragment key={rIdx}>
                                  <tr>
                                    {(r.cells || []).map((c, cIdx) => (
                                      <Fragment key={cIdx}>
                                        <td style={{ border: "1px solid #D9DEE7", padding: "6px 10px", verticalAlign: "top", lineHeight: 1.45 }}>
                                          {c.text}
                                        </td>
                                      </Fragment>
                                    ))}
                                  </tr>
                                </Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    ) : null}
                    {b.isFoot ? (
                      <>
                        <p style={{ fontSize: "12.5px", lineHeight: 1.5, color: "#5B6577", margin: "0 0 6px", overflowWrap: "anywhere" }}>
                          {b.text}
                        </p>
                      </>
                    ) : null}
                  </div>
                </Fragment>
              ))}
              {v.hasCallout ? (
                <>
                  <div style={{ border: "1px solid #F5B800", background: "#FFF9E6", borderRadius: "8px", padding: "14px 16px", marginTop: "8px" }}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#7A5A00", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {"⚖ "}
                      {v.calloutTitle}
                    </div>
                    <div style={{ fontSize: "14px", color: "#1E2430", lineHeight: 1.55, marginTop: "4px" }}>
                      {v.calloutText}
                    </div>
                  </div>
                </>
              ) : null}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={v.prevLesson} disabled={v.prevDisabled} aria-disabled={v.prevDisabled} title="This is the first screen of the module" style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #C9CFDA", borderRadius: "5px", padding: "10px 14px", cursor: "pointer", fontSize: "14px", opacity: v.prevOpacity }}>
                    {"← Previous"}
                  </button>
                  {v.isLastLesson ? (
                    <>
                      <button onClick={v.continueModule} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "5px", padding: "10px 16px", cursor: "pointer", fontSize: "14px", fontWeight: 700, opacity: v.continueOpacity }}>
                        {v.continueLabel}
                      </button>
                    </>
                  ) : null}
                  {v.notLastLessonFlag ? (
                    <>
                      <button onClick={v.nextLesson} disabled={v.nextDisabled} aria-disabled={v.nextDisabled} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "5px", padding: "10px 16px", cursor: "pointer", fontSize: "14px", fontWeight: 700, opacity: v.nextOpacity }}>
                        {"Next lesson →"}
                      </button>
                    </>
                  ) : null}
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <button onClick={v.readAloudInfo} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #C9CFDA", borderRadius: "5px", padding: "8px 12px", cursor: "pointer", fontSize: "13px" }} title="Audio read-along placeholder">
                    {"🔊 Read aloud"}
                  </button>
                  <button onClick={v.contactSupport} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #C9CFDA", borderRadius: "5px", padding: "8px 12px", cursor: "pointer", fontSize: "13px" }}>
                    {"? Help"}
                  </button>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: "1 1 240px", maxWidth: "100%", minWidth: 0 }}>
              <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "14px" }}>
                <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700, marginBottom: "6px" }}>
                  {"Lessons in this module"}
                </div>
                {(v.lessonRows || []).map((l, lIdx) => (
                  <Fragment key={lIdx}>
                    <div onClick={l.onOpen} onKeyDown={l.onKey} role="button" tabIndex="0" style={{ display: "flex", gap: "8px", padding: "6px 0", borderTop: "1px solid #F0F2F6", cursor: "pointer", fontSize: "13px", color: l.fg, fontWeight: l.weight }}>
                      <span>
                        {l.n}
                        {"."}
                      </span>
                      <span>
                        {l.title}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "14px", fontSize: "12.5px", color: "#3A4352", lineHeight: 1.5 }}>
                <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700, marginBottom: "6px" }}>
                  {"Course progress"}
                </div>
                {v.completedCount}
                {" completed"}
                <br />
                {v.doneMinText}
                <div style={{ height: "6px", background: "#E9EDF3", borderRadius: "3px", marginTop: "6px", overflow: "hidden" }}>
                  <div style={{ height: "100%", background: "#0B2A5B", width: v.pctText }} />
                </div>
              </div>
              {v.hasQuizNote ? (
                <>
                  <div style={{ background: "#FFF4D6", borderRadius: "10px", padding: "12px 14px", fontSize: "12px", color: "#7A5A00", lineHeight: 1.5 }}>
                    <b>
                      {"Quiz note:"}
                    </b>
                    {' '}
                    {v.quizNote}
                  </div>
                </>
              ) : null}
              {v.notReview ? (
                <>
                  <button onClick={v.demoFinishTimer} style={{ background: "#fff", color: "#7A5A00", border: "1px dashed #F5B800", borderRadius: "6px", padding: "9px", cursor: "pointer", fontSize: "12px" }}>
                    {"DEMO MODE · PROTOTYPE ONLY: complete this module's timer"}
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* validation interruption */}
      {v.vActive ? (
        <>
          <div style={{ position: "fixed", inset: 0, background: "rgba(11, 42, 91, 0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, padding: "20px" }}>
            <div style={{ background: "#fff", borderRadius: "12px", maxWidth: "520px", width: "100%", padding: "26px 28px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", animation: "aaFade 0.2s ease" }}>
              <div style={{ fontSize: "12px", color: "#7A5A00", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {"Identity validation · Course paused"}
              </div>
              <h2 style={{ fontSize: "20px", color: "#0B2A5B", margin: "6px 0 8px" }}>
                {"Please answer your validation question"}
              </h2>
              <p style={{ fontSize: "13.5px", color: "#3A4352", margin: "0 0 14px", lineHeight: 1.5 }}>
                {"This is one of the ten random checks that confirm the registered student is completing the course. The module timer is paused while this question is open."}
              </p>
              <div style={{ background: "#F4F6FA", borderRadius: "8px", padding: "14px 16px", fontSize: "17px", fontWeight: 700, color: "#1E2430" }}>
                {v.vQuestion}
              </div>
              {v.vPending ? (
                <>
                  <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                    <button onClick={v.vAnswerYes} style={{ flex: 1, background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                      {"Yes"}
                    </button>
                    <button onClick={v.vAnswerNo} style={{ flex: 1, background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                      {"No"}
                    </button>
                  </div>
                  <button onClick={v.vForceWrong} style={{ marginTop: "10px", width: "100%", background: "#fff", color: "#7A5A00", border: "1px dashed #F5B800", borderRadius: "6px", padding: "7px", cursor: "pointer", fontSize: "11.5px" }}>
                    {"DEMO MODE · PROTOTYPE ONLY: make the next answer fail (to review the failure state)"}
                  </button>
                </>
              ) : null}
              {v.vOk ? (
                <>
                  <div style={{ marginTop: "16px", background: "#E6F4EA", color: "#14532D", borderRadius: "8px", padding: "12px 14px", fontSize: "14px" }}>
                    {"✓ "}
                    <b>
                      {"Validation successful."}
                    </b>
                    {" Your answer matches your recorded answer. The lesson will resume where you left off."}
                  </div>
                  <button onClick={v.vResume} style={{ marginTop: "12px", width: "100%", background: "#1E7B34", color: "#fff", border: 0, borderRadius: "6px", padding: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                    {"Resume lesson"}
                  </button>
                </>
              ) : null}
              {v.vFail ? (
                <>
                  <div style={{ marginTop: "16px", background: "#FCE8E6", color: "#7F1D14", borderRadius: "8px", padding: "12px 14px", fontSize: "14px", lineHeight: 1.5 }}>
                    {"✗ "}
                    <b>
                      {"Validation failed."}
                    </b>
                    {" Your answer did not match the answer recorded at setup. This attempt has been logged (failures: "}
                    {v.vFailures}
                    {"). One more incorrect answer will lock the course, and you will need to contact A&A student support to continue."}
                  </div>
                  <button onClick={v.vRetry} style={{ marginTop: "12px", width: "100%", background: "#B3261E", color: "#fff", border: 0, borderRadius: "6px", padding: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                    {"Answer another validation question"}
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
