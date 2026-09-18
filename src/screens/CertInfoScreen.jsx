import { Fragment } from 'react';

export default function CertInfoScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "24px", color: "#0B2A5B", margin: "0 0 8px" }}>
          {"Get my certificate — verify your information"}
        </h1>
        <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.55, margin: "0 0 14px" }}>
          <b>
            {"Important:"}
          </b>
          {" please review and verify the following information for accuracy and correct anything that is wrong. Inaccurate or incorrect information could delay your certificate or cause the state or county to reject your course completion; resubmission fees may apply (TBD). If your certificate must be reissued because of an incorrect entry, it may take several days to process."}
        </p>
        {v.hasCertErrors ? (
          <>
            <div style={{ background: "#FCE8E6", border: "1px solid #B3261E", color: "#7F1D14", borderRadius: "6px", padding: "12px 14px", marginBottom: "16px", fontSize: "14px" }}>
              {"Required information is missing or invalid — see the highlighted fields."}
            </div>
          </>
        ) : null}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
            <div style={{ gridColumn: "1 / -1", fontWeight: 700, color: "#0B2A5B" }}>
              {"Customer information"}
            </div>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Legal first name *"}
              <input name="firstName" value={v.cert.firstName} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Legal last name *"}
              <input name="lastName" value={v.cert.lastName} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
              <span style={{ color: "#B3261E", fontSize: "12px" }}>
                {v.certErr.name}
              </span>
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Date of birth *"}
              <input name="dob" type="date" value={v.cert.dob} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "9px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "span 2" }}>
              {"E-mail address"}
              <input name="email" value={v.cert.email} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Gender"}
              <input name="gender" value={v.cert.gender} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
            <div style={{ gridColumn: "1 / -1", fontWeight: 700, color: "#0B2A5B" }}>
              {"Course information"}
            </div>
            <div style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Date of course completion"}
              <div style={{ marginTop: "4px", padding: "10px", background: "#F4F6FA", borderRadius: "5px", fontSize: "14px" }}>
                {v.completionDate}
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Final exam"}
              <div style={{ marginTop: "4px", padding: "10px", background: "#F4F6FA", borderRadius: "5px", fontSize: "14px" }}>
                {v.certExamText}
                {" · PASSED"}
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Reason for taking this course"}
              <div style={{ marginTop: "4px", padding: "10px", background: "#F4F6FA", borderRadius: "5px", fontSize: "13px" }}>
                {v.certReasonText}
              </div>
            </div>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Driver license / ID state *"}
              <input name="dlState" value={v.cert.dlState} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "span 2" }}>
              {"Driver license / ID number *"}
              <input name="dlNumber" value={v.cert.dlNumber} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
              <span style={{ color: "#B3261E", fontSize: "12px" }}>
                {v.certErr.dlNumber}
              </span>
            </label>
            <div style={{ gridColumn: "1 / -1", fontSize: "12.5px", color: "#5B6577" }}>
              {"Enter your citation information below. Inaccurate or incorrect information could delay your certificate or cause the state or county to reject your course completion."}
            </div>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Ticket state"}
              <input name="ticketState" value={v.cert.ticketState} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Ticket county *"}
              <select name="county" value={v.cert.county} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", background: "#fff" }}>
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
                {v.certErr.county}
              </span>
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Ticket number * "}
              <span style={{ color: "#5B6577" }}>
                {"(6 letters or numbers followed by 1 letter, e.g. A1B2C3E)"}
              </span>
              <input name="citation" value={v.cert.citation} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", textTransform: "uppercase" }} />
              <span style={{ color: "#B3261E", fontSize: "12px" }}>
                {v.certErr.citation}
              </span>
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Ticket date *"}
              <input name="citationDate" type="date" value={v.cert.citationDate} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "9px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
              <span style={{ color: "#B3261E", fontSize: "12px" }}>
                {v.certErr.citationDate}
              </span>
            </label>
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "12px" }}>
            <div style={{ gridColumn: "1 / -1", fontWeight: 700, color: "#0B2A5B" }}>
              {"Certificate / delivery information"}
            </div>
            <div style={{ gridColumn: "1 / -1", fontSize: "12.5px", color: "#5B6577" }}>
              {"Couriers will not deliver to a PO Box — if you plan to choose expedited delivery on the next page, do not use a PO Box here."}
            </div>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"Street address *"}
              <input name="street" value={v.cert.street} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"City *"}
              <input name="city" value={v.cert.city} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352" }}>
              {"State / ZIP *"}
              <input name="zip" value={v.cert.zip} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
              <span style={{ color: "#B3261E", fontSize: "12px" }}>
                {v.certErr.address}
              </span>
            </label>
            <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "span 2" }}>
              {"Phone"}
              <input name="phone" value={v.cert.phone} onChange={v.onCert} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
            </label>
            <label style={{ gridColumn: "1 / -1", display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", color: "#1E2430", background: "#FFF9E6", border: "1px solid #F5B800", borderRadius: "6px", padding: "10px 12px" }}>
              <input name="verify" type="checkbox" checked={v.cert.verify} onChange={v.onCert} style={{ marginTop: "3px" }} />
              <span>
                {"Check here to verify that all delivery information is correct. "}
                <span style={{ color: "#B3261E", fontSize: "12px" }}>
                  {v.certErr.verify}
                </span>
              </span>
            </label>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginTop: "18px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "13px", color: "#5B6577" }}>
            {"Next step: confirm certificate delivery method"}
          </span>
          <button onClick={v.confirmCert} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Confirm information →"}
          </button>
        </div>
      </div>
    </>
  );
}
