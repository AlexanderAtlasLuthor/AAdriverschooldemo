import { Fragment } from 'react';

export default function StudentInfoScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ fontSize: "12.5px", color: "#5B6577", marginBottom: "8px" }}>
          {"Course setup · Step 1 of 3"}
        </div>
        <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "0 0 8px" }}>
          {"Confirm your student information"}
        </h1>
        <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.55, margin: "0 0 16px" }}>
          {"Since this is the first time you are starting the course, please review the information that will be used for your course record, certificate and state/court processing. The registered name must be your legal name and must match the identification documents you will present to the DMV. Make sure you notify the Clerk's office in the county where you received your ticket that you are electing to attend driver improvement school before you complete this course."}
        </p>
        {v.hasInfoErrors ? (
          <>
            <div style={{ background: "#FCE8E6", border: "1px solid #B3261E", color: "#7F1D14", borderRadius: "6px", padding: "12px 14px", marginBottom: "16px", fontSize: "14px" }}>
              {"Some required information is missing or invalid. Correct the highlighted fields to continue."}
            </div>
          </>
        ) : null}
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
          <div style={{ gridColumn: "1 / -1", fontWeight: 700, color: "#0B2A5B" }}>
            {"Student"}
          </div>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"Legal first name *"}
            <input name="firstName" value={v.reg.firstName} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.firstName}
            </span>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"Legal last name *"}
            <input name="lastName" value={v.reg.lastName} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.lastName}
            </span>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"Date of birth *"}
            <input name="dob" type="date" value={v.reg.dob} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "9px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.dob}
            </span>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "span 2" }}>
            {"Address *"}
            <input name="street" value={v.reg.street} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"City / State / ZIP *"}
            <input name="zip" value={v.reg.zip} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.address}
            </span>
          </label>
          <div style={{ gridColumn: "1 / -1", fontWeight: 700, color: "#0B2A5B", marginTop: "8px" }}>
            {"Course and citation"}
          </div>
          <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "1 / -1" }}>
            {"Reason for taking this course *"}
            <select name="reason" value={v.reg.reason} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", background: "#fff" }}>
              <option value="">
                {"Select"}
              </option>
              {(v.reasons || []).map((r, rIdx) => (
                <Fragment key={rIdx}>
                  <option value={r.v}>
                    {r.t}
                  </option>
                </Fragment>
              ))}
            </select>
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.reason}
            </span>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"DL / ID state *"}
            <input name="dlState" value={v.reg.dlState} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "span 2" }}>
            {"Driver license / ID number *"}
            <input name="dlNumber" value={v.reg.dlNumber} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.dlNumber}
            </span>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"Ticket state"}
            <input name="ticketState" value={v.reg.ticketState} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"Ticket county *"}
            <select name="county" value={v.reg.county} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", background: "#fff" }}>
              <option value="">
                {"Select county"}
              </option>
              {(v.counties || []).map((c, cIdx) => (
                <Fragment key={cIdx}>
                  <option value={c.c}>
                    {c.c}
                  </option>
                </Fragment>
              ))}
            </select>
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.county}
            </span>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"Citation number * "}
            <span style={{ color: "#5B6577" }}>
              {"(7 characters)"}
            </span>
            <input name="citation" value={v.reg.citation} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", textTransform: "uppercase" }} />
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.citation}
            </span>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"Citation date *"}
            <input name="citationDate" type="date" value={v.reg.citationDate} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "9px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            <span style={{ color: "#B3261E", fontSize: "12px" }}>
              {v.infoErr.citationDate}
            </span>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352" }}>
            {"Ticket agency"}
            <select name="agency" value={v.reg.agency} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", background: "#fff" }}>
              <option value="">
                {"Select"}
              </option>
              {(v.agencies || []).map((a, aIdx) => (
                <Fragment key={aIdx}>
                  <option value={a.a}>
                    {a.a}
                  </option>
                </Fragment>
              ))}
            </select>
          </label>
          <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "1 / -1", display: "flex", gap: "8px", alignItems: "center" }}>
            <input name="noCitation" type="checkbox" checked={v.reg.noCitation} onChange={v.onReg} />
            {" I don't have my citation information. I understand I must enter it before my certificate can be processed."}
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginTop: "18px", flexWrap: "wrap" }}>
          <button onClick={v.goDashboard} style={{ background: "transparent", color: "#0B2A5B", border: 0, cursor: "pointer", fontSize: "14px" }}>
            {"← Back to dashboard"}
          </button>
          <button onClick={v.confirmInfo} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Information is correct → set up validation questions"}
          </button>
        </div>
      </div>
    </>
  );
}
