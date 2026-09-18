export default function QuizIntroScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "760px", margin: "40px auto", padding: "0 20px 60px" }}>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "28px" }}>
          <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {v.modLabel}
            {" · "}
            {v.modTitle}
          </div>
          <h1 style={{ fontSize: "26px", color: "#0B2A5B", margin: "6px 0 10px" }}>
            {v.quizName}
          </h1>
          <p style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.55 }}>
            {"You have completed the required time for this module. Answer the "}
            {v.quizCount}
            {" below, then submit to see which questions you answered correctly and incorrectly and where in the course each topic appears. The quiz does not have a time limit."}
          </p>
          <div style={{ fontSize: "12.5px", color: "#5B6577", margin: "10px 0 18px" }}>
            {"Source: "}
            {v.quizRef}
            <br />
            {v.quizKeyNote}
            <br />
            {"Passing rule for practice quizzes: TBD / Requires A&A Decision (the source shows \"Total correct: 3 of 3 – You Passed!\"; the prototype offers a retake whenever an answer is incorrect)."}
          </div>
          <button onClick={v.startQuiz} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            {"Start quiz →"}
          </button>
        </div>
      </div>
    </>
  );
}
