import { Fragment } from 'react';

export default function RegisterScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "1060px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#5B6577", marginBottom: "14px" }}>
          <span style={{ color: "#0B2A5B", fontWeight: 700 }}>
            {"1 Registration"}
          </span>
          <span>
            {"›"}
          </span>
          <span>
            {"2 Checkout"}
          </span>
          <span>
            {"›"}
          </span>
          <span>
            {"3 Receipt"}
          </span>
          <span>
            {"›"}
          </span>
          <span>
            {"4 Course dashboard"}
          </span>
        </div>
        <h1 style={{ fontSize: "26px", color: "#0B2A5B", margin: "0 0 6px" }}>
          {"Create your student account"}
        </h1>
        <p style={{ margin: "0 0 18px", color: "#3A4352", fontSize: "14.5px", lineHeight: 1.55 }}>
          {"Your registered name must be your legal name and must match the identification you will present to the Florida DMV. If you are taking this course for a ticket, notify the Clerk's office in the county that issued the citation that you are electing to attend driver improvement school before you complete the course."}
        </p>
        {v.hasRegErrors ? (
          <>
            <div style={{ background: "#FCE8E6", border: "1px solid #B3261E", color: "#7F1D14", borderRadius: "6px", padding: "12px 14px", marginBottom: "16px", fontSize: "14px" }}>
              {"Please correct the highlighted fields ("}
              {v.regErrorCount}
              {") before continuing."}
            </div>
          </>
        ) : null}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", flex: "999 1 460px", minWidth: 0 }}>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "16px", marginBottom: "4px" }}>
                {"A. Account information"}
              </div>
              <div style={{ fontSize: "12.5px", color: "#5B6577", marginBottom: "14px" }}>
                {"Used to log in and to send your receipt, reminders and completion notices."}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "1 / -1" }}>
                  {"E-mail address *"}
                  <input name="email" value={v.reg.email} onChange={v.onReg} placeholder="name@example.com" style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.regErr.email}
                  </span>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Username * "}
                  <span style={{ color: "#5B6577" }}>
                    {"(min. 6 characters, letters and numbers)"}
                  </span>
                  <input name="username" value={v.reg.username} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.regErr.username}
                  </span>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Password * "}
                  <span style={{ color: "#5B6577" }}>
                    {"(min. 6 characters)"}
                  </span>
                  <input name="password" type="password" value={v.reg.password} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.regErr.password}
                  </span>
                </label>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "16px", marginBottom: "4px" }}>
                {"B. Student identity information"}
              </div>
              <div style={{ fontSize: "12.5px", color: "#5B6577", marginBottom: "14px" }}>
                {"Exactly as shown on your driver license. This information is printed on your certificate and reported with your completion."}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr", gap: "12px" }}>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Legal first name *"}
                  <input name="firstName" value={v.reg.firstName} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.regErr.firstName}
                  </span>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Legal last name *"}
                  <input name="lastName" value={v.reg.lastName} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.regErr.lastName}
                  </span>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Suffix"}
                  <input name="suffix" value={v.reg.suffix} onChange={v.onReg} placeholder="Jr., III" style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Date of birth *"}
                  <input name="dob" type="date" value={v.reg.dob} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "9px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.regErr.dob}
                  </span>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Gender"}
                  <select name="gender" value={v.reg.gender} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", background: "#fff" }}>
                    <option value="">
                      {"Select"}
                    </option>
                    <option value="Female">
                      {"Female"}
                    </option>
                    <option value="Male">
                      {"Male"}
                    </option>
                    <option value="X">
                      {"X / Not specified"}
                    </option>
                  </select>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Phone"}
                  <input name="phone" value={v.reg.phone} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "1 / -1" }}>
                  {"Street address *"}
                  <input name="street" value={v.reg.street} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"City *"}
                  <input name="city" value={v.reg.city} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"State *"}
                  <input name="state" value={v.reg.state} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"ZIP *"}
                  <input name="zip" value={v.reg.zip} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.regErr.address}
                  </span>
                </label>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "16px", marginBottom: "4px" }}>
                {"C. Course and citation information"}
              </div>
              <div style={{ fontSize: "12.5px", color: "#5B6577", marginBottom: "14px" }}>
                {"Required to report your completion to the court and the state. You may add citation details later if you do not have them now."}
              </div>
              <label style={{ fontSize: "13px", color: "#3A4352", display: "block", marginBottom: "12px" }}>
                {"Reason for taking this course *"}
                <select name="reason" value={v.reg.reason} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", background: "#fff" }}>
                  <option value="">
                    {"Select the reason"}
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
                  {v.regErr.reason}
                </span>
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "12px", marginBottom: "12px" }}>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Driver license / ID state *"}
                  <input name="dlState" value={v.reg.dlState} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Driver license / ID number *"}
                  <input name="dlNumber" value={v.reg.dlNumber} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.regErr.dlNumber}
                  </span>
                </label>
              </div>
              <label style={{ fontSize: "13px", color: "#3A4352", display: "flex", gap: "8px", alignItems: "center", marginBottom: "12px" }}>
                <input name="noCitation" type="checkbox" checked={v.reg.noCitation} onChange={v.onReg} />
                {" I don't have my citation information right now (you will need to enter it before your certificate can be processed)."}
              </label>
              {v.showCitation ? (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                    <label style={{ fontSize: "13px", color: "#3A4352" }}>
                      {"Ticket state"}
                      <input name="ticketState" value={v.reg.ticketState} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                    </label>
                    <label style={{ fontSize: "13px", color: "#3A4352" }}>
                      {"Citation number * "}
                      <span style={{ color: "#5B6577" }}>
                        {"(7 characters, upper-right corner of the ticket)"}
                      </span>
                      <input name="citation" value={v.reg.citation} onChange={v.onReg} placeholder="A1B2C3E" style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", textTransform: "uppercase" }} />
                      <span style={{ color: "#B3261E", fontSize: "12px" }}>
                        {v.regErr.citation}
                      </span>
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
                        {v.regErr.county}
                      </span>
                    </label>
                    <label style={{ fontSize: "13px", color: "#3A4352" }}>
                      {"Citation date *"}
                      <input name="citationDate" type="date" value={v.reg.citationDate} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "9px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                      <span style={{ color: "#B3261E", fontSize: "12px" }}>
                        {v.regErr.citationDate}
                      </span>
                    </label>
                    <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "span 2" }}>
                      {"Ticket agency"}
                      <select name="agency" value={v.reg.agency} onChange={v.onReg} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px", background: "#fff" }}>
                        <option value="">
                          {"Select agency"}
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
                  </div>
                </>
              ) : null}
            </div>
            <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
              <button onClick={v.goSite} style={{ background: "transparent", color: "#0B2A5B", border: 0, cursor: "pointer", fontSize: "14px" }}>
                {"← Back to website"}
              </button>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={v.fillDemoReg} style={{ background: "#fff", color: "#7A5A00", border: "1px dashed #F5B800", borderRadius: "6px", padding: "12px 14px", cursor: "pointer", fontSize: "12.5px" }}>
                  {"DEMO: fill sample student"}
                </button>
                <button onClick={v.submitReg} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                  {"Continue to checkout →"}
                </button>
              </div>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "18px", fontSize: "13.5px", color: "#3A4352", lineHeight: 1.55, flex: "1 1 280px", maxWidth: "320px", minWidth: 0 }}>
            <div style={{ fontWeight: 700, color: "#0B2A5B", marginBottom: "8px" }}>
              {"Your order"}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                {"Florida 4-Hour BDI Course"}
              </span>
              <span style={{ fontWeight: 700 }}>
                {"TBD"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span>
                {"Florida state assessment fee (BDI)"}
              </span>
              <span style={{ fontWeight: 700 }}>
                {"$2.50"}
              </span>
            </div>
            <div style={{ fontSize: "12px", color: "#5B6577", marginTop: "8px" }}>
              {"FLHSMV requires a $2.50 state assessment fee to be collected for each person completing a BDI course; it is remitted to the Highway Safety Operating Trust Fund. Course price, processing and convenience fees: TBD / Requires A&A Decision."}
            </div>
            <div style={{ borderTop: "1px solid #D9DEE7", margin: "12px 0", paddingTop: "12px", fontWeight: 700, color: "#0B2A5B" }}>
              {"Why we ask for this information"}
            </div>
            <div>
              {"Legal name, date of birth, driver license and citation details are the information a Florida BDI provider must report with a successful completion. Fields marked * are required."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
