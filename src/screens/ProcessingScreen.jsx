export default function ProcessingScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "560px", margin: "80px auto", textAlign: "center", padding: "0 20px" }}>
        <div style={{ width: "54px", height: "54px", border: "5px solid #D9DEE7", borderTopColor: "#0B2A5B", borderRadius: "50%", margin: "0 auto 18px", animation: "aaSpin 0.9s linear infinite" }} />
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#0B2A5B" }}>
          {"Processing your enrollment…"}
        </h1>
        <div style={{ color: "#5B6577", marginTop: "8px", fontSize: "14px" }}>
          {"Payment authorization · Account creation · Course assignment"}
        </div>
      </div>
    </>
  );
}
