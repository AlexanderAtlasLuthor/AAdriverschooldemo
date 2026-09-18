import { Fragment } from 'react';

export default function SecurityConfirmScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ fontSize: "12.5px", color: "#5B6577", marginBottom: "8px" }}>
          {"Course setup · Step 2 of 3 · Confirmation"}
        </div>
        <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "0 0 8px" }}>
          {"Your recorded answers"}
        </h1>
        <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.55, margin: "0 0 8px" }}>
          {"These are the answers that will be checked during the course. "}
          <b style={{ color: "#B3261E" }}>
            {"Printing out this page is highly recommended."}
          </b>
        </p>
        <button onClick={v.printPage} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "5px", padding: "8px 14px", cursor: "pointer", fontSize: "13.5px", marginBottom: "14px" }}>
          {"🖨 Print this page"}
        </button>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", overflow: "hidden", maxWidth: "560px" }}>
          {(v.secRows || []).map((r, rIdx) => (
            <Fragment key={rIdx}>
              <div style={{ display: "flex", gap: "14px", padding: "9px 18px", borderTop: "1px solid #EEF1F5", fontSize: "14px" }}>
                <span style={{ fontWeight: 700, color: "#0B2A5B", width: "34px" }}>
                  {r.answerText}
                </span>
                <span>
                  {r.q}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={{ marginTop: "18px", background: "#EEF2F9", borderRadius: "8px", padding: "14px 16px", fontSize: "14px", color: "#0B2A5B", lineHeight: 1.55 }}>
          {"At the end of the course you will be required to acknowledge the following statement:"}
          <br />
          <b>
            {"\""}
            {v.attestationText}
            {"\""}
          </b>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginTop: "18px" }}>
          <button onClick={v.backToSecurity} style={{ background: "transparent", color: "#0B2A5B", border: 0, cursor: "pointer", fontSize: "14px" }}>
            {"← Change answers"}
          </button>
          <button onClick={v.confirmSecurity} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Continue →"}
          </button>
        </div>
      </div>
    </>
  );
}
