import { Fragment } from 'react';

export default function SecuritySetupScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ fontSize: "12.5px", color: "#5B6577", marginBottom: "8px" }}>
          {"Course setup · Step 2 of 3"}
        </div>
        <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "0 0 8px" }}>
          {"Set up your validation questions"}
        </h1>
        <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.55, margin: "0 0 16px" }}>
          {"While online, you will periodically be asked for the answers you provide to the questions below — ten times at random during the course — to verify that the registered student is completing the training. "}
          <b>
            {"Please remember your answers."}
          </b>
          {" Answers must match exactly; if you fail to answer correctly you will be locked out of the course until you speak with a customer service representative."}
        </p>
        <div style={{ fontSize: "12px", color: "#7A5A00", background: "#FFF4D6", borderRadius: "5px", padding: "8px 10px", marginBottom: "12px" }}>
          {"Question set carried from the mapped source course; A&A may substitute its own questions — TBD / Requires A&A Decision."}
        </div>
        {v.secAttempted ? (
          <>
            <div style={{ background: "#FCE8E6", border: "1px solid #B3261E", color: "#7F1D14", borderRadius: "6px", padding: "10px 14px", marginBottom: "12px", fontSize: "14px" }}>
              {"Please answer all ten questions."}
            </div>
          </>
        ) : null}
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", overflow: "hidden" }}>
          {(v.secRows || []).map((r, rIdx) => (
            <Fragment key={rIdx}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "10px 18px", borderTop: "1px solid #EEF1F5" }}>
                <div style={{ fontSize: "14.5px", color: "#1E2430" }}>
                  <span style={{ color: "#5B6577", marginRight: "8px" }}>
                    {r.n}
                    {"."}
                  </span>
                  {r.q}
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={r.setYes} style={{ minWidth: "64px", padding: "7px 12px", borderRadius: "5px", border: "1px solid #0B2A5B", cursor: "pointer", fontWeight: 700, background: r.yesBg, color: r.yesFg }}>
                    {"Yes"}
                  </button>
                  <button onClick={r.setNo} style={{ minWidth: "64px", padding: "7px 12px", borderRadius: "5px", border: "1px solid #0B2A5B", cursor: "pointer", fontWeight: 700, background: r.noBg, color: r.noFg }}>
                    {"No"}
                  </button>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "18px" }}>
          <button onClick={v.saveSecurity} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Save answers →"}
          </button>
        </div>
      </div>
    </>
  );
}
