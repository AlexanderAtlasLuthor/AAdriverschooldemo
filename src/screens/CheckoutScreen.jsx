export default function CheckoutScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "1060px", margin: "0 auto", padding: "28px 20px 60px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#5B6577", marginBottom: "14px" }}>
          <span>
            {"1 Registration"}
          </span>
          <span>
            {"›"}
          </span>
          <span style={{ color: "#0B2A5B", fontWeight: 700 }}>
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
        <h1 style={{ fontSize: "26px", color: "#0B2A5B", margin: "0 0 18px" }}>
          {"Checkout"}
        </h1>
        {v.hasPayError ? (
          <>
            <div style={{ background: "#FCE8E6", border: "1px solid #B3261E", color: "#7F1D14", borderRadius: "6px", padding: "12px 14px", marginBottom: "16px", fontSize: "14px" }}>
              <b>
                {"Payment failed."}
              </b>
              {' '}
              {v.payError}
            </div>
          </>
        ) : null}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", flex: "999 1 460px", minWidth: 0 }}>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "16px", marginBottom: "12px" }}>
                {"Payment"}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "12px" }}>
                <label style={{ fontSize: "13px", color: "#3A4352", gridColumn: "1 / -1" }}>
                  {"Name on card *"}
                  <input name="cardName" value={v.pay.cardName} onChange={v.onPay} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.payErr.cardName}
                  </span>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Card number *"}
                  <input name="cardNumber" value={v.pay.cardNumber} onChange={v.onPay} placeholder="16 digits" style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.payErr.cardNumber}
                  </span>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Expires *"}
                  <input name="exp" value={v.pay.exp} onChange={v.onPay} placeholder="MM/YY" style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.payErr.exp}
                  </span>
                </label>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"CVV *"}
                  <input name="cvv" value={v.pay.cvv} onChange={v.onPay} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.payErr.cvv}
                  </span>
                </label>
              </div>
              <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "16px", margin: "18px 0 12px" }}>
                {"Billing information"}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px" }}>
                <div style={{ fontSize: "13.5px", color: "#3A4352", lineHeight: 1.5, background: "#F4F6FA", borderRadius: "5px", padding: "10px" }}>
                  {v.reg.firstName}
                  {' '}
                  {v.reg.lastName}
                  <br />
                  {v.reg.street}
                  {", "}
                  {v.reg.city}
                  {", "}
                  {v.reg.state}
                  {' '}
                  {v.reg.zip}
                  <br />
                  <span style={{ color: "#5B6577", fontSize: "12px" }}>
                    {"Same as student address (change: TBD)"}
                  </span>
                </div>
                <label style={{ fontSize: "13px", color: "#3A4352" }}>
                  {"Billing ZIP *"}
                  <input name="billingZip" value={v.pay.billingZip} onChange={v.onPay} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "10px", border: "1px solid #C9CFDA", borderRadius: "5px", fontSize: "14px" }} />
                  <span style={{ color: "#B3261E", fontSize: "12px" }}>
                    {v.payErr.billingZip}
                  </span>
                </label>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#0B2A5B", fontSize: "16px", marginBottom: "10px" }}>
                {"Agreements"}
              </div>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "10px" }}>
                <button onClick={v.openTerms} style={{ background: "none", border: 0, padding: "2px 0", color: "#0B2A5B", fontSize: "13px", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}>
                  {"Read the Terms and Conditions"}
                </button>
                <button onClick={v.openPrivacy} style={{ background: "none", border: 0, padding: "2px 0", color: "#0B2A5B", fontSize: "13px", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}>
                  {"Read the Privacy Policy"}
                </button>
              </div>
              <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#3A4352", marginBottom: "8px" }}>
                <input name="terms" type="checkbox" checked={v.pay.terms} onChange={v.onPay} style={{ marginTop: "3px" }} />
                <span>
                  {"I have read and accept the A&A Online Training "}
                  <b>
                    {"Terms and Conditions"}
                  </b>
                  {" (A&A terms text: TBD – the mapped source course presents fee disclosures, course/testing rules and dispute terms at this step). "}
                  <span style={{ color: "#B3261E" }}>
                    {v.payErr.terms}
                  </span>
                </span>
              </label>
              <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#3A4352" }}>
                <input name="privacy" type="checkbox" checked={v.pay.privacy} onChange={v.onPay} style={{ marginTop: "3px" }} />
                <span>
                  {"I have read and accept the "}
                  <b>
                    {"Privacy Policy"}
                  </b>
                  {", including that my successful completion will be reported to the applicable state agency with my name, address, e-mail, phone, birth date, gender, driver license number and citation data. "}
                  <span style={{ color: "#B3261E" }}>
                    {v.payErr.privacy}
                  </span>
                </span>
              </label>
            </div>
            <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
              <button onClick={v.backToRegister} style={{ background: "transparent", color: "#0B2A5B", border: 0, cursor: "pointer", fontSize: "14px" }}>
                {"← Back to registration"}
              </button>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={v.fillDemoPay} style={{ background: "#fff", color: "#7A5A00", border: "1px dashed #F5B800", borderRadius: "6px", padding: "12px 14px", cursor: "pointer", fontSize: "12.5px" }}>
                  {"DEMO: fill test card"}
                </button>
                <button onClick={v.placeOrder} style={{ background: "#F5B800", color: "#0B2A5B", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                  {"Place order & complete enrollment"}
                </button>
              </div>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "8px", padding: "18px", fontSize: "13.5px", color: "#3A4352", lineHeight: 1.55, flex: "1 1 300px", maxWidth: "340px", minWidth: 0 }}>
            <div style={{ fontWeight: 700, color: "#0B2A5B", marginBottom: "8px" }}>
              {"Order summary"}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                {"Florida 4-Hour Basic Driver Improvement Course"}
              </span>
              <span style={{ fontWeight: 700 }}>
                {"TBD"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span>
                {"Florida state assessment fee (required, BDI)"}
              </span>
              <span style={{ fontWeight: 700 }}>
                {"$2.50"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span>
                {"Provider processing fee"}
              </span>
              <span style={{ fontWeight: 700 }}>
                {"TBD"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span>
                {"Certificate of completion"}
              </span>
              <span style={{ fontWeight: 700 }}>
                {"Included"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #D9DEE7", margin: "10px 0", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0B2A5B" }}>
              <span>
                {"Total today"}
              </span>
              <span>
                {"TBD + $2.50"}
              </span>
            </div>
            <div style={{ fontSize: "12px", color: "#5B6577" }}>
              {"Certificate delivery options (electronic, standard mail, expedited) are selected after you pass the final exam; prices TBD / Requires A&A Decision. Fee disclosure text and any retest fee: TBD."}
            </div>
            <div style={{ marginTop: "12px", padding: "10px", background: "#EEF2F9", borderRadius: "5px", fontSize: "12.5px", color: "#0B2A5B" }}>
              {"🔒 Secure payment · A receipt and step-by-step instructions are e-mailed after purchase."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
