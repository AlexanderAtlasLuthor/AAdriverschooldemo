export default function ExamIntroScreen({ v }) {
  return (
    <>
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px 60px" }}>
        <div style={{ background: "#fff", border: "1px solid #D9DEE7", borderRadius: "10px", padding: "28px" }}>
          <div style={{ fontSize: "12px", color: "#5B6577", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {"Final Exam · "}
            {v.examAttemptText}
          </div>
          <h1 style={{ fontSize: "26px", color: "#0B2A5B", margin: "6px 0 12px" }}>
            {"Welcome to the Final Exam for the BDI Course"}
          </h1>
          <div style={{ fontSize: "14.5px", color: "#3A4352", lineHeight: 1.65 }}>
            <p style={{ margin: "0 0 10px" }}>
              <b>
                {"You must correctly answer at least 32 out of 40 questions to pass. (Minimum passing score: 80%.)"}
              </b>
            </p>
            <p style={{ margin: "0 0 10px" }}>
              {"There is no time limit on this test. Take your time and read the entire question to make sure you answer it correctly. "}
              <b>
                {"This is an OPEN BOOK exam."}
              </b>
              {" You may review information provided in the course at any time using \"Review course contents\"."}
            </p>
            <p style={{ margin: "0 0 10px" }}>
              {"If you leave the exam before you complete it, your answers will not be saved. Each time you take the exam, you will be given a different set of questions. Unanswered questions are marked incorrect."}
            </p>
            <p style={{ margin: "0 0 10px", color: "#5B6577", fontSize: "13.5px" }}>
              {"Even though there is no time constraint on this exam, if you do not submit within approximately one hour your connection may be dropped for inactivity; due to security constraints required by the State of Florida your results would then be lost and the entire exam must be retaken. If you do not pass, no certificate is issued and you must retake the exam and achieve a passing score (retest fee: TBD / Requires A&A Decision)."}
            </p>
            <p style={{ margin: 0, fontSize: "12.5px", color: "#7A5A00", background: "#FFF4D6", borderRadius: "5px", padding: "8px 10px" }}>
              {"Prototype note: the 40 questions are the exam items captured in the mapping. The source did not identify correct answers; the prototype answer key is inferred from course content and requires A&A instructional review."}
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "18px", flexWrap: "wrap" }}>
            <button onClick={v.beginExam} style={{ background: "#0B2A5B", color: "#fff", border: 0, borderRadius: "6px", padding: "12px 22px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
              {"Begin exam"}
            </button>
            <button onClick={v.backToReviewFromExam} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "6px", padding: "12px 18px", fontSize: "14px", cursor: "pointer" }}>
              {"Back to Final Review"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
