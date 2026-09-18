import AttestationScreen from './AttestationScreen.jsx';
import BreakScreen from './BreakScreen.jsx';
import CertInfoScreen from './CertInfoScreen.jsx';
import CertificateScreen from './CertificateScreen.jsx';
import CheckoutScreen from './CheckoutScreen.jsx';
import CompleteScreen from './CompleteScreen.jsx';
import CompletionProcessingScreen from './CompletionProcessingScreen.jsx';
import DashboardScreen from './DashboardScreen.jsx';
import DeliveryScreen from './DeliveryScreen.jsx';
import ExamIntroScreen from './ExamIntroScreen.jsx';
import ExamResultScreen from './ExamResultScreen.jsx';
import ExamScreen from './ExamScreen.jsx';
import FinalReviewScreen from './FinalReviewScreen.jsx';
import LockedScreen from './LockedScreen.jsx';
import Modal from './Modal.jsx';
import PlayerScreen from './PlayerScreen.jsx';
import ProcessingScreen from './ProcessingScreen.jsx';
import QuizIntroScreen from './QuizIntroScreen.jsx';
import QuizResultScreen from './QuizResultScreen.jsx';
import QuizScreen from './QuizScreen.jsx';
import ReceiptScreen from './ReceiptScreen.jsx';
import RegisterScreen from './RegisterScreen.jsx';
import ReviewPanel from './ReviewPanel.jsx';
import SecurityConfirmScreen from './SecurityConfirmScreen.jsx';
import SecuritySetupScreen from './SecuritySetupScreen.jsx';
import SignScreen from './SignScreen.jsx';
import SiteScreen from './SiteScreen.jsx';
import SponsorScreen from './SponsorScreen.jsx';
import StudentInfoScreen from './StudentInfoScreen.jsx';

export default function AppView({ v }) {
  return (
    <>
      {/* ===================== PUBLIC WEBSITE ===================== */}
      {v.isSite ? <SiteScreen v={v} /> : null}
      {/* ===================== APP SHELL ===================== */}
      {v.shell ? (
        <>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <div style={{ background: "#FFFFFF", borderBottom: "1px solid #D9DEE7", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
              <button className="aa-h1" onClick={v.goHome} title="Back to the A&A public website" style={{ display: "flex", alignItems: "center", gap: "12px", background: "none", border: 0, padding: "4px", borderRadius: "6px", cursor: "pointer", textAlign: "left" }}>
                <img src="./assets/logo-aa.png" alt="A&A" style={{ height: "34px", width: "auto" }} />
                <span>
                  <span style={{ display: "block", fontWeight: 700, color: "#0B2A5B", fontSize: "15px" }}>
                    {"A&A Online Training"}
                  </span>
                  <h1 style={{ margin: 0, fontSize: "11.5px", color: "#5B6577", fontWeight: 400 }}>
                    {"Florida 4-Hour Basic Driver Improvement"}
                  </h1>
                </span>
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", fontSize: "13px" }}>
                <span style={{ background: "#FFF4D6", color: "#7A5A00", border: "1px solid #F5B800", padding: "4px 9px", borderRadius: "4px", fontSize: "11.5px", fontWeight: 700 }}>
                  {v.demoLabel}
                </span>
                <button onClick={v.goHome} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #D9DEE7", borderRadius: "5px", padding: "7px 12px", cursor: "pointer", fontSize: "13px" }}>
                  {"⌂ Home"}
                </button>
                <button className="aa-noprint" onClick={v.restartDemo} style={{ background: "#FFF4D6", color: "#7A5A00", border: "1px solid #F5B800", borderRadius: "5px", padding: "7px 12px", cursor: "pointer", fontSize: "13px", fontWeight: 700 }} title="PROTOTYPE ONLY: clears saved progress so the whole journey can be demonstrated again">
                  {"↻ Restart demo"}
                </button>
                <button onClick={v.contactSupport} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #0B2A5B", borderRadius: "5px", padding: "7px 12px", cursor: "pointer", fontSize: "13px" }}>
                  {"Help / Support"}
                </button>
                <button onClick={v.a11yInfo} style={{ background: "#fff", color: "#0B2A5B", border: "1px solid #D9DEE7", borderRadius: "5px", padding: "7px 12px", cursor: "pointer", fontSize: "13px" }} title="Accessibility options – prototype placeholder">
                  {"♿ Accessibility"}
                </button>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#0B2A5B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "13px" }}>
                    {v.studentInitials}
                  </div>
                  <span style={{ color: "#1E2430" }}>
                    {v.stName}
                  </span>
                </div>
              </div>
            </div>
            {v.hasEdgeNote ? (
              <>
                <div style={{ background: "#FFF4E0", color: "#6B4600", fontSize: "13px", padding: "8px 20px", borderBottom: "1px solid #F3D9A4" }}>
                  {"⚠ "}
                  {v.edgeNote}
                </div>
              </>
            ) : null}
            {/* REGISTRATION */}
            {v.isRegister ? <RegisterScreen v={v} /> : null}
            {/* CHECKOUT */}
            {v.isCheckout ? <CheckoutScreen v={v} /> : null}
            {/* PROCESSING / RECEIPT */}
            {v.isProcessing ? <ProcessingScreen v={v} /> : null}
            {v.isReceipt ? <ReceiptScreen v={v} /> : null}
            {/* DASHBOARD (incl. post-exam state) */}
            {v.isDashboard ? <DashboardScreen v={v} /> : null}
            {/* STUDENT INFORMATION CONFIRMATION */}
            {v.isStudentInfo ? <StudentInfoScreen v={v} /> : null}
            {/* SECURITY QUESTIONS */}
            {v.isSecuritySetup ? <SecuritySetupScreen v={v} /> : null}
            {v.isSecurityConfirm ? <SecurityConfirmScreen v={v} /> : null}
            {/* ATTESTATION / ELIGIBILITY */}
            {v.isAttestation ? <AttestationScreen v={v} /> : null}
            {/* COURSE PLAYER */}
            {v.isPlayer ? <PlayerScreen v={v} /> : null}
            {/* QUIZ */}
            {v.isQuizIntro ? <QuizIntroScreen v={v} /> : null}
            {v.isQuiz ? <QuizScreen v={v} /> : null}
            {v.isQuizResult ? <QuizResultScreen v={v} /> : null}
            {/* MANDATORY BREAK */}
            {v.isBreak ? <BreakScreen v={v} /> : null}
            {/* SPONSOR MESSAGE (after a completed mandatory break) */}
            {v.isSponsor ? <SponsorScreen v={v} /> : null}
            {/* FINAL REVIEW */}
            {v.isFinalReview ? <FinalReviewScreen v={v} /> : null}
            {/* FINAL EXAM */}
            {v.isExamIntro ? <ExamIntroScreen v={v} /> : null}
            {v.isExam ? <ExamScreen v={v} /> : null}
            {v.isExamResult ? <ExamResultScreen v={v} /> : null}
            {/* SIGN STATEMENT */}
            {v.isSign ? <SignScreen v={v} /> : null}
            {/* CERTIFICATE INFORMATION */}
            {v.isCertInfo ? <CertInfoScreen v={v} /> : null}
            {/* DELIVERY */}
            {v.isDelivery ? <DeliveryScreen v={v} /> : null}
            {/* COMPLETION PROCESSING */}
            {v.isCompletionProcessing ? <CompletionProcessingScreen v={v} /> : null}
            {/* CERTIFICATE (printable) */}
            {v.isCertificate ? <CertificateScreen v={v} /> : null}
            {/* COURSE COMPLETE */}
            {v.isComplete ? <CompleteScreen v={v} /> : null}
            {/* LOCKED */}
            {v.isLocked ? <LockedScreen v={v} /> : null}
          </div>
        </>
      ) : null}
      {/* ===================== TOAST ===================== */}
      {v.hasToast ? (
        <>
          <div className="aa-noprint" aria-hidden="true" style={{ position: "fixed", left: "50%", bottom: "28px", transform: "translateX(-50%)", background: "#1E2430", color: "#fff", padding: "12px 18px", borderRadius: "8px", fontSize: "14px", maxWidth: "640px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", zIndex: 60, animation: "aaFade 0.2s ease" }}>
            {v.toast}
          </div>
        </>
      ) : null}
      <div role="status" aria-live="polite" style={{ position: "absolute", width: "1px", height: "1px", margin: "-1px", padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }}>
        {v.toast}
      </div>
      {/* ===================== DIALOG (help / sign in / terms / privacy / accessibility) ===================== */}
      {v.hasModal ? <Modal v={v} /> : null}
      {/* ===================== MANAGEMENT REVIEW PANEL (prototype only) ===================== */}
      <button className="aa-noprint" onClick={v.togglePanel} style={{ position: "fixed", right: "18px", bottom: "18px", zIndex: 70, background: "#1E2430", color: "#F5B800", border: "1px solid #F5B800", borderRadius: "30px", padding: "10px 16px", fontSize: "13px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
        {"☰ Management review"}
      </button>
      {v.panelOpen ? <ReviewPanel v={v} /> : null}
    </>
  );
}
