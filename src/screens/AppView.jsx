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
import StudentInfoScreen from './StudentInfoScreen.jsx';
import Link from '../router/Link.jsx';
import Icon from '../components/platform/Icon.jsx';
import { ASSETS, BRAND } from '../data/company.js';

// Course experience shell: the BDI journey inside the A&A Online Training brand.
// Header hierarchy: A&A Online Training › Driver & Traffic Training › Florida Basic Driver Improvement.
export default function AppView({ v }) {
  return (
    <>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <header className="aa-course-header aa-noprint">
          <div className="aa-course-header__inner">
            <div className="aa-course-header__brand">
              <Link to="/" aria-label={`${BRAND.name} — home`} style={{ display: "flex" }}>
                <img className="aa-course-header__logo" src={ASSETS.logo} alt="" />
              </Link>
              <div>
                <nav className="aa-course-header__crumbs" aria-label="You are here">
                  <Link to="/">{BRAND.name}</Link>
                  <Icon name="chevron-right" size={12} />
                  <Link to="/training/driver">{v.worldName}</Link>
                </nav>
                <h1 className="aa-course-header__title">{v.courseTitle}</h1>
              </div>
            </div>
            <div className="aa-course-header__tools">
              {v.demo ? (
                <span className="aa-pill aa-pill--demo aa-course-header__demo" title="Timers run 60× faster so the full course can be shown in one session.">{v.demoLabel}</span>
              ) : null}
              <button type="button" className="aa-btn aa-btn--secondary aa-btn--sm" onClick={v.contactSupport}>Help / Support</button>
              <button type="button" className="aa-btn aa-btn--ghost aa-btn--sm" onClick={v.a11yInfo}>Accessibility</button>
              <Link to="/my-learning" className="aa-btn aa-btn--primary aa-btn--sm">
                <Icon name="user" size={16} />
                <span>My Learning</span>
              </Link>
              <div className="aa-course-header__student" aria-label={`Signed in as ${v.stName}`}>
                <div className="aa-avatar" aria-hidden="true">{v.studentInitials}</div>
                <span className="aa-course-header__student-name">{v.stName}</span>
              </div>
            </div>
          </div>
        </header>
        {v.hasEdgeNote ? (
          <div style={{ background: "#FFF4E0", color: "#6B4600", fontSize: "13px", padding: "8px 20px", borderBottom: "1px solid #F3D9A4" }}>
            {v.edgeNote}
          </div>
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
      {/* ===================== TOAST ===================== */}
      {v.hasToast ? (
        <div className="aa-noprint" aria-hidden="true" style={{ position: "fixed", left: "50%", bottom: "28px", transform: "translateX(-50%)", background: "#1E2430", color: "#fff", padding: "12px 18px", borderRadius: "8px", fontSize: "14px", maxWidth: "640px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", zIndex: 60, animation: "aaFade 0.2s ease" }}>
          {v.toast}
        </div>
      ) : null}
      <div role="status" aria-live="polite" style={{ position: "absolute", width: "1px", height: "1px", margin: "-1px", padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }}>
        {v.toast}
      </div>
      {/* ===================== DIALOG (help / terms / privacy / accessibility) ===================== */}
      {v.hasModal ? <Modal v={v} /> : null}
      {/* ===================== MANAGEMENT REVIEW PANEL — review mode only (?review=1 or development) ===================== */}
      {v.reviewTools ? (
        <button type="button" className="aa-noprint" onClick={v.togglePanel} aria-expanded={v.panelOpen} style={{ position: "fixed", right: "18px", bottom: "18px", zIndex: 70, background: "#1E2430", color: "#F5B800", border: "1px solid #F5B800", borderRadius: "30px", padding: "10px 16px", fontSize: "13px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
          Management review
        </button>
      ) : null}
      {v.reviewTools && v.panelOpen ? <ReviewPanel v={v} /> : null}
    </>
  );
}
