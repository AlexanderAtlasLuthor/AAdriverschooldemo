// Course engine for the A&A Florida BDI prototype.
//
// Ported from the prototype's logic class. State lives in the mutable `M`
// object and `upd()` patches it and asks React to re-render, so the whole
// flow (timers, quizzes, exam, certificate) behaves exactly as before.
import React from 'react';
import { AA_COURSE } from '../data/course.js';
import { AA_PROTO } from '../data/helpers.js';
import MediaImage from '../components/MediaImage.jsx';

export function createEngine() {
  const D = AA_COURSE, H = AA_PROTO;
  const NAVY = '#0B2A5B', GOLD = '#F5B800', GREEN = '#1E7B34', RED = '#B3261E', MUTED = '#5B6577';
  const initialReg = { firstName: '', lastName: '', suffix: '', dob: '', email: '', username: '', password: '', phone: '', street: '', city: '', state: 'FL', zip: '', gender: '', dlState: 'FL', dlNumber: '', reason: '', ticketState: 'FL', citation: '', county: '', citationDate: '', agency: '', noCitation: false };
  const demoReg = { firstName: 'Maria', lastName: 'Santos', suffix: '', dob: '1988-07-18', email: 'maria.santos@example.com', username: 'msantos', password: 'demo1234', phone: '(561) 555-0142', street: '404 Lake Ave', city: 'Lake Worth', state: 'FL', zip: '33460', gender: 'Female', dlState: 'FL', dlNumber: 'S520-219-88-258-0', reason: 'elected', ticketState: 'FL', citation: 'A1B2C3E', county: 'Palm Beach', citationDate: '2026-08-02', agency: '(1) F.H.P.', noCitation: false };
  const initialPay = { cardName: '', cardNumber: '', exp: '', cvv: '', billingZip: '', terms: false, privacy: false };
  const modIds = D.modules.map(m => m.id);
  const breakAfter = Object.fromEntries(D.breaks.map(b => [b.afterModule, b]));
  const validationPlan = { 'm1:1': 2, 'm6:1': 4, 'm11:2': 9 }; // lesson key → validation question index

  const initialState = () => ({
      screen: 'site', demo: true, panelOpen: false, toast: '', edgeNote: '',
      reg: { ...initialReg }, regAttempted: false, pay: { ...initialPay }, payAttempted: false, payError: '', orderState: 'idle', orderNo: '',
      infoAttempted: false, infoConfirmed: false, secAnswers: Array(10).fill(null), secAttempted: false, secSetupDone: false, attestChecked: false, attested: false,
      moduleIdx: 0, lessonIdx: 0, timeLeft: {}, completed: [], breaksDone: [], reviewMode: false, lockedMsg: '', modal: '', restoredNote: false,
      quiz: { selected: {}, submitted: false }, breakState: null,
      validation: { active: false, qIdx: 0, answer: null, result: null, failures: 0, seen: {}, forceWrong: false }, locked: false,
      exam: { idx: 0, answers: {}, submitted: false, score: null, passed: null, attempts: 0, confirm: false, openBook: false },
      signName: '', signChecked: false, signed: false,
      cert: null, certAttempted: false, certConfirmed: false, delivery: '', completionDone: false, completionDate: '',
    });
  const M = initialState();
  let inst = null; let timerStarted = false; let tickCount = 0; let lastTick = 0; let timerHandle = null; if (typeof window !== 'undefined') window.__AA = { M, D, get inst() { return inst; }, get started() { return timerStarted; }, get ticks() { return tickCount; }, tick: () => { if (inst) inst.tick(); } };
  let tickN = 0; const upd = p => { const patch = typeof p === 'function' ? p(M) : p; if (patch) Object.assign(M, patch); tickN++; if (inst) inst._rerender(); };
  class CourseEngine {
    constructor() { this._rerender = () => {}; }

    mount() { inst = this;
      try { const raw = localStorage.getItem('aa-bdi-proto-v1'); if (raw && !M._restored) { const d = JSON.parse(raw); if (d && d.v === 1) { const want = d.screen, scr = this.allowedScreen(want, d); Object.assign(M, d, { screen: ['break', 'sponsor', 'certificate', 'completionProcessing', 'processing'].includes(scr) ? (d.completionDone ? 'complete' : 'dashboard') : scr, breakState: null, pay: { ...initialPay }, payAttempted: false, panelOpen: false, modal: '', toast: '', reviewMode: false, _restored: true, restoredNote: true }); } } } catch (e) {}
      this._onPop = (e) => { const st = e.state; if (!st || !st.aaScreen) return; this._pop = true; const target = this.allowedScreen(st.aaScreen); upd({ screen: target, modal: '', toast: target !== st.aaScreen ? 'That step is not unlocked yet — you were returned to the closest screen you have access to.' : '' }); this._pop = false; };
      this._onKeyDown = (e) => { if (e.key === 'Escape' && M.modal) upd({ modal: '' }); };
      window.addEventListener('popstate', this._onPop); window.addEventListener('keydown', this._onKeyDown);
      try { history.replaceState({ aaScreen: M.screen }, ''); } catch (e) {}
      this._rerender();
    }
    unmount() { if (inst === this) inst = null; try { window.removeEventListener('popstate', this._onPop); window.removeEventListener('keydown', this._onKeyDown); } catch (e) {} }
    tick() {
      tickCount++;
      upd(s => {
        const step = s.demo ? 60 : 1;
        if (s.screen === 'player' && !s.reviewMode && !s.validation.active && !s.locked) {
          const id = modIds[s.moduleIdx]; const m = D.modules[s.moduleIdx]; const left = s.timeLeft[id] === undefined ? m.minutes * 60 : s.timeLeft[id];
          if (left > 0) return { timeLeft: { ...s.timeLeft, [id]: Math.max(0, left - step) } };
        } else if (s.screen === 'break' && s.breakState && s.breakState.remaining > 0) {
          return { breakState: { ...s.breakState, remaining: Math.max(0, s.breakState.remaining - step) } };
        }
        return null;
      });
    }
    timeLeftFor(id) { const m = D.modules.find(x => x.id === id); return M.timeLeft[id] === undefined ? m.minutes * 60 : M.timeLeft[id]; }
    go(screen, extra = {}) { upd({ screen, toast: '', lockedMsg: '', panelOpen: false, modal: '', ...extra }); window.scrollTo(0, 0); this.pushHist(screen); this.persist(); }
    pushHist(screen) { try { if (this._pop) return; history.pushState({ aaScreen: screen, aaT: Date.now() }, ''); } catch (e) {} }
    persist() { try { const s = M; localStorage.setItem('aa-bdi-proto-v1', JSON.stringify({ v: 1, screen: s.screen, moduleIdx: s.moduleIdx, lessonIdx: s.lessonIdx, timeLeft: s.timeLeft, completed: s.completed, breaksDone: s.breaksDone, reg: s.reg, secAnswers: s.secAnswers, secSetupDone: s.secSetupDone, attestChecked: s.attestChecked, attested: s.attested, infoConfirmed: s.infoConfirmed, orderState: s.orderState, orderNo: s.orderNo, quiz: s.quiz, exam: s.exam, signed: s.signed, signName: s.signName, signChecked: s.signChecked, cert: s.cert, certConfirmed: s.certConfirmed, delivery: s.delivery, completionDone: s.completionDone, completionDate: s.completionDate, demo: s.demo, locked: s.locked })); } catch (e) {} }
    allowedScreen(screen, st = M) {
      const done = modIds.every(id => (st.completed || []).includes(id)) && (st.breaksDone || []).length >= 2;
      const enrolled = st.orderState === 'done', inCourse = enrolled && st.attested, ex = st.exam || {};
      const ok = { site: true, register: true, checkout: true, processing: true, receipt: enrolled, dashboard: enrolled, studentInfo: enrolled,
        securitySetup: enrolled && st.infoConfirmed, securityConfirm: enrolled && st.infoConfirmed, attestation: enrolled && st.secSetupDone,
        player: inCourse, quizIntro: inCourse, quiz: inCourse, quizResult: inCourse, break: false, sponsor: false,
        finalReview: inCourse && done, examIntro: inCourse && done, exam: inCourse && done, examResult: !!ex.submitted,
        postExam: !!ex.passed, sign: !!ex.passed, certInfo: !!st.signed, delivery: !!st.certConfirmed,
        completionProcessing: !!st.certConfirmed, complete: !!st.completionDone, certificate: !!st.completionDone, locked: !!st.locked };
      if (ok[screen]) return screen;
      if (st.completionDone) return 'complete';
      if (st.signed) return 'certInfo';
      if (ex.passed) return 'postExam';
      if (enrolled) return 'dashboard';
      return 'site';
    }
    scrollToId(id) { const el = document.getElementById(id); if (!el) { this.toast('That section is not available on this screen.'); return; } try { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 16, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, el.offsetTop); } }
    sanitize(s) { return String(s || 'Student').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 48) || 'Student'; }
    buildCertPdf(v) {
      const W = 792, H = 612;
      const asc = t => String(t == null ? '' : t).replace(/[\u2010-\u2015]/g, '-').replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[\u00B7\u2022]/g, '-').replace(/\u2192/g, '->').replace(/\u2026/g, '...').replace(/[^\x20-\x7E]/g, '');
      const enc = t => asc(t).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
      const wid = (t, sz, bold) => asc(t).length * sz * (bold ? 0.56 : 0.5);
      const ops = [];
      const rect = (x, y, w, h, c) => ops.push(`${c} rg ${x} ${y} ${w} ${h} re f`);
      const text = (t, x, y, sz, bold, c, center) => { const xx = center ? x - wid(t, sz, bold) / 2 : x; ops.push(`BT ${c || '0 0 0'} rg /${bold ? 'F2' : 'F1'} ${sz} Tf 1 0 0 1 ${xx.toFixed(1)} ${y} Tm (${enc(t)}) Tj ET`); };
      const NAVY = '0.043 0.165 0.357', GOLD = '0.961 0.722 0', GREY = '0.357 0.396 0.467', INK = '0.118 0.141 0.188';
      rect(0, 0, W, H, '1 1 1');
      rect(28, 28, W - 56, H - 56, NAVY); rect(34, 34, W - 68, H - 68, '1 1 1');
      rect(44, 44, W - 88, 1.5, GOLD); rect(44, H - 46, W - 88, 1.5, GOLD); rect(44, 44, 1.5, H - 90, GOLD); rect(W - 46, 44, 1.5, H - 90, GOLD);
      text('A & ASSOCIATES', 70, H - 96, 16, true, NAVY);
      text('A&A Online Training  |  Quality In Everything We Do', 70, H - 116, 10, false, GREY);
      text('Certificate / completion ID', W - 70 - wid('Certificate / completion ID', 9, false), H - 96, 9, false, GREY);
      text(v.id, W - 70 - wid(v.id, 11, true), H - 114, 11, true, NAVY);
      text('CERTIFICATE OF COMPLETION', W / 2, H - 180, 15, true, GREY, true);
      rect(W / 2 - 60, H - 196, 120, 2, GOLD);
      text('This certifies that', W / 2, H - 230, 11, false, GREY, true);
      text(v.name, W / 2, H - 268, 26, true, NAVY, true);
      rect(W / 2 - 230, H - 282, 460, 0.8, '0.851 0.871 0.906');
      text('has personally completed the Florida Basic Driver Improvement (BDI) Course - 4 hours of', W / 2, H - 308, 10.5, false, INK, true);
      text('instruction (220 instructional minutes and two 10-minute mandatory breaks) - and passed the', W / 2, H - 324, 10.5, false, INK, true);
      text('40-question final examination with a score of at least 80%.', W / 2, H - 340, 10.5, false, INK, true);
      const cols = [['Completion date', v.date], ['Final exam score', v.score], ['Reason for course', v.reason], ['Driver license', v.dl], ['Ticket county', v.county], ['Citation number', v.citation]];
      cols.forEach((c, i) => { const x = 70 + (i % 3) * 220, y = H - 385 - Math.floor(i / 3) * 44; text(c[0].toUpperCase(), x, y, 8, false, GREY); text(String(c[1] || '-'), x, y - 15, 11.5, true, NAVY); });
      rect(70, 108, 200, 0.9, NAVY); text('Authorized representative, A & Associates', 70, 94, 9, false, GREY);
      text('Signature area - no signature asset provided (TBD / Requires A&A Decision)', 70, 82, 7.5, false, '0.541 0.580 0.651');
      rect(300, 108, 150, 0.9, NAVY); text('Date issued', 300, 94, 9, false, GREY); text('Populated at issuance', 300, 82, 7.5, false, '0.541 0.580 0.651');
      text('Provider / approval identifiers', 490, 108, 9, true, NAVY);
      text('School and course approval numbers, and any state seal, are printed', 490, 94, 7.5, false, GREY);
      text('here at issuance - TBD / Requires A&A Decision. None are shown here.', 490, 83, 7.5, false, GREY);
      text('Prototype certificate - layout and A&A branding only. No signature, seal, provider number or approval number is reproduced.', W / 2, 58, 7.5, false, '0.541 0.580 0.651', true);
      const stream = ops.join('\n');
      const objs = ['<</Type/Catalog/Pages 2 0 R>>', '<</Type/Pages/Kids[3 0 R]/Count 1>>',
        '<</Type/Page/Parent 2 0 R/MediaBox[0 0 792 612]/Resources<</Font<</F1 5 0 R/F2 6 0 R>>>>/Contents 4 0 R>>',
        '<</Length ' + stream.length + '>>\nstream\n' + stream + '\nendstream',
        '<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>', '<</Type/Font/Subtype/Type1/BaseFont/Helvetica-Bold>>'];
      let pdf = '%PDF-1.4\n'; const off = [];
      objs.forEach((o, i) => { off.push(pdf.length); pdf += (i + 1) + ' 0 obj\n' + o + '\nendobj\n'; });
      const xref = pdf.length;
      pdf += 'xref\n0 ' + (objs.length + 1) + '\n0000000000 65535 f \n' + off.map(o => String(o).padStart(10, '0') + ' 00000 n \n').join('');
      pdf += 'trailer\n<</Size ' + (objs.length + 1) + '/Root 1 0 R>>\nstartxref\n' + xref + '\n%%EOF';
      return new Blob([pdf], { type: 'application/pdf' });
    }
    toast(msg) { upd({ toast: msg }); clearTimeout(this._t); this._t = setTimeout(() => upd({ toast: '' }), 4200); }
    // ---------- validation helpers
    regErrors(reg = M.reg) {
      const e = {};
      if (!reg.firstName.trim()) e.firstName = 'Legal first name is required.'; if (!reg.lastName.trim()) e.lastName = 'Legal last name is required.';
      if (!H.dobOk(reg.dob)) e.dob = 'Enter your date of birth.'; if (!H.emailOk(reg.email)) e.email = 'Enter a valid e-mail address.';
      if (reg.username.trim().length < 6 || !/^[a-z0-9]+$/i.test(reg.username)) e.username = 'Minimum six characters; only letters and numbers.'; if (reg.password.length < 6) e.password = 'Minimum six characters.';
      if (!reg.street.trim() || !reg.city.trim() || !/^\d{5}(-\d{4})?$/.test(reg.zip)) e.address = 'Street, city and 5-digit ZIP are required.';
      if (!reg.reason) e.reason = 'Select the reason you are taking this course.';
      if (!reg.dlNumber.trim()) e.dlNumber = 'Driver license / ID number is required.';
      if (!reg.noCitation && reg.reason && reg.reason !== 'insurance') { if (!H.citationOk(reg.citation)) e.citation = 'Citation numbers must be 6 letters or numbers followed by 1 letter (for example A1B2C3E).'; if (!reg.county) e.county = 'Select the county where you received the ticket.'; if (!reg.citationDate) e.citationDate = 'Enter the citation date.'; }
      return e;
    }
    payErrors(p = M.pay) { const e = {}; if (!p.cardName.trim()) e.cardName = 'Name on card is required.'; if (!/^\d{16}$/.test(p.cardNumber.replace(/\s/g, ''))) e.cardNumber = 'Enter a 16-digit card number.'; if (!/^\d{2}\/\d{2}$/.test(p.exp)) e.exp = 'MM/YY'; if (!/^\d{3,4}$/.test(p.cvv)) e.cvv = 'CVV'; if (!/^\d{5}$/.test(p.billingZip)) e.billingZip = 'Billing ZIP'; if (!p.terms) e.terms = 'You must accept the Terms and Conditions.'; if (!p.privacy) e.privacy = 'You must accept the Privacy Policy.'; return e; }
    certErrors(c = M.cert || {}) { const e = {}; if (!c.firstName || !c.lastName) e.name = 'Legal name is required.'; if (!c.dlNumber) e.dlNumber = 'Driver license number is required.'; if (c.reason !== 'insurance') { if (!c.county) e.county = 'Ticket County: Required'; if (!H.citationOk(c.citation)) e.citation = 'Ticket Number: Citation numbers must be 6 letters or numbers followed by 1 letter. For example, A1B2C3E. Required'; if (!c.citationDate) e.citationDate = 'Ticket Date: Required'; } if (!c.street || !c.city || !c.zip) e.address = 'Certificate shipping address is required.'; if (!c.verify) e.verify = 'Check the box to verify that all delivery information is correct.'; return e; }
    // ---------- module flow
    startModule(idx, extra = {}) { const id = modIds[idx]; const tl = { ...M.timeLeft }; if (tl[id] === undefined) tl[id] = D.modules[idx].minutes * 60; this.go('player', { moduleIdx: idx, lessonIdx: 0, timeLeft: tl, reviewMode: false, quiz: { selected: {}, submitted: false }, ...extra }); }
    maybeValidation(idx, lessonIdx) { const key = `${modIds[idx]}:${lessonIdx}`; const q = validationPlan[key]; if (q !== undefined && !M.validation.seen[key] && !M.reviewMode) { upd({ validation: { ...M.validation, active: true, qIdx: q, answer: null, result: null, seen: { ...M.validation.seen, [key]: true } } }); } }
    finishModule() {
      const s = M; const id = modIds[s.moduleIdx]; const completed = s.completed.includes(id) ? s.completed : [...s.completed, id];
      const m = D.modules[s.moduleIdx]; const br = breakAfter[m.num];
      if (br && !s.breaksDone.includes(br.num)) { this.go('break', { completed, breakState: { num: br.num, remaining: br.minutes * 60, nextIdx: s.moduleIdx + 1 } }); return; }
      if (s.moduleIdx + 1 < modIds.length) { upd({ completed }); this.startModule(s.moduleIdx + 1); } else this.go('finalReview', { completed });
    }
    allDone() { return modIds.every(id => M.completed.includes(id)); }
    jumpToModule(idx) { // management shortcut: treat earlier modules and breaks as satisfied
      const completed = modIds.slice(0, idx); const breaksDone = D.breaks.filter(b => idx > b.afterModule).map(b => b.num);
      upd({ completed, breaksDone, secSetupDone: true, attested: true, infoConfirmed: true, orderState: 'done', reg: M.reg.firstName ? M.reg : { ...demoReg }, cert: M.cert || { ...demoReg, verify: false } });
      this.startModule(idx);
    }
    seedStudent() { if (!M.reg.firstName) upd({ reg: { ...demoReg }, orderState: 'done', orderNo: 'AA-2026-000917' }); }
    examScore(answers) { let c = 0; D.exam.forEach((q, i) => { if (answers[i] === q.a) c++; }); return c; }
    finishExam(answers) { const score = this.examScore(answers); const passed = score >= 32; upd({ exam: { ...M.exam, answers, submitted: true, score, passed, confirm: false, attempts: M.exam.attempts + 1 } }); this.go('examResult', { completionDate: passed ? H.today() : M.completionDate }); }
    demoExam(pass) { const answers = {}; D.exam.forEach((q, i) => { answers[i] = (pass ? i < 36 : i < 24) ? q.a : (q.a + 1) % q.c.length; }); this.finishExam(answers); }
    // ---------- render values
    renderVals() {
      inst = this; timerStarted = true; const s = M; const set = (patch) => upd(patch);
      const field = (group) => (e) => { const t = e.target; const v = t.type === 'checkbox' ? t.checked : t.value; set({ [group]: { ...s[group], [t.name]: v } }); };
      const cur = D.modules[s.moduleIdx]; const curId = cur.id; const left = this.timeLeftFor(curId); const lesson = cur.lessons[Math.min(s.lessonIdx, cur.lessons.length - 1)];
      const isLastLesson = s.lessonIdx >= cur.lessons.length - 1; const timerDone = left <= 0;
      const fillKeys = (o, keys) => Object.fromEntries(keys.map(k => [k, o[k] || ''])); const regErr = fillKeys(s.regAttempted ? this.regErrors() : {}, ['email', 'username', 'password', 'firstName', 'lastName', 'dob', 'address', 'reason', 'dlNumber', 'citation', 'county', 'citationDate']); const payErr = fillKeys(s.payAttempted ? this.payErrors() : {}, ['cardName', 'cardNumber', 'exp', 'cvv', 'billingZip', 'terms', 'privacy']); const certErr = fillKeys(s.certAttempted ? this.certErrors() : {}, ['name', 'dlNumber', 'county', 'citation', 'citationDate', 'address', 'verify']);
      const stName = s.reg.firstName ? `${s.reg.firstName} ${s.reg.lastName}` : 'Student';
      const doneMin = s.completed.reduce((a, id) => a + D.modules.find(m => m.id === id).minutes, 0) + s.breaksDone.length * 10;
      const totalMin = 240; const pct = Math.round(100 * doneMin / totalMin);
      const statusOf = (i) => { const id = modIds[i]; if (s.completed.includes(id)) return 'completed'; if (i === s.moduleIdx && (s.screen === 'player' || s.screen === 'quiz' || s.screen === 'quizIntro' || s.screen === 'quizResult')) return 'current'; if (i === 0 || s.completed.includes(modIds[i - 1])) return s.completed.length ? 'available' : 'available'; return 'locked'; };
      const moduleRows = []; D.modules.forEach((m, i) => {
        const st = statusOf(i); const colors = { completed: [GREEN, '#E6F4EA', 'Completed'], current: [NAVY, '#EEF2F9', 'In progress'], available: [NAVY, '#FFFFFF', 'Ready'], locked: ['#8A94A6', '#F4F6FA', 'Locked'] }[st];
        moduleRows.push({ key: m.id, num: m.num === 0 ? '—' : String(m.num), title: m.title, minutes: `${m.minutes} min`, status: colors[2], fg: colors[0], bg: colors[1], isLocked: st === 'locked', isCurrent: st === 'current', isDone: st === 'completed', icon: st === 'completed' ? '✓' : st === 'locked' ? '🔒' : '›',
          onOpen: () => { if (st === 'locked') { upd({ lockedMsg: `"${m.title}" is locked. Complete the preceding module${breakAfter[m.num - 1] ? ' and the mandatory break' : ''} first – modules must be taken in order.` }); return; } if (st === 'completed') { this.go('player', { moduleIdx: i, lessonIdx: 0, reviewMode: true }); return; } this.startModule(i); } });
        const br = breakAfter[m.num]; if (br) moduleRows.push({ key: 'b' + br.num, num: '⏸', title: `Mandatory Break ${br.num} – 10 minutes`, minutes: '10 min', status: s.breaksDone.includes(br.num) ? 'Completed' : 'Required', fg: s.breaksDone.includes(br.num) ? GREEN : '#B26A00', bg: s.breaksDone.includes(br.num) ? '#E6F4EA' : '#FFF4E0', isBreak: true, icon: s.breaksDone.includes(br.num) ? '✓' : '⏱', onOpen: () => {} });
      });
      const sideRows = D.modules.map((m, i) => { const st = statusOf(i); return { key: m.id, label: m.num === 0 ? 'Introduction' : `Module ${m.num}`, title: m.title, minutes: `${m.minutes} min`, fg: st === 'locked' ? '#8A94A6' : st === 'completed' ? GREEN : NAVY, bg: i === s.moduleIdx ? '#EEF2F9' : 'transparent', weight: i === s.moduleIdx ? 700 : 500, icon: st === 'completed' ? '✓' : st === 'locked' ? '🔒' : i === s.moduleIdx ? '▶' : '○', onOpen: () => { if (st === 'locked') this.toast(`Module ${m.num} is locked until the preceding module is complete.`); else if (st === 'completed') this.go('player', { moduleIdx: i, lessonIdx: 0, reviewMode: true }); else this.startModule(i); } }; });
      const lessonRows = cur.lessons.map((l, i) => ({ key: i, n: i + 1, title: l.title, active: i === s.lessonIdx, fg: i === s.lessonIdx ? NAVY : MUTED, weight: i === s.lessonIdx ? 700 : 400, onOpen: () => { set({ lessonIdx: i }); this.maybeValidation(s.moduleIdx, i); window.scrollTo(0, 0); } }));
      const quiz = cur.quiz; const quizRows = quiz ? quiz.questions.map((q, qi) => ({ key: qi, n: qi + 1, q: q.q, choices: q.choices.map((c, ci) => { const sel = s.quiz.selected[qi] === ci; const sub = s.quiz.submitted; const correct = ci === q.answer; return { key: ci, letter: String.fromCharCode(65 + ci), text: c, bg: sub ? (correct ? '#E6F4EA' : sel ? '#FCE8E6' : '#FFFFFF') : (sel ? '#EEF2F9' : '#FFFFFF'), border: sub ? (correct ? GREEN : sel ? RED : '#D9DEE7') : (sel ? NAVY : '#D9DEE7'), mark: sub ? (correct ? '✓ Correct answer' : sel ? '✗ Your answer' : '') : (sel ? 'Selected' : ''), onPick: () => upd(st => st.quiz.submitted ? null : ({ quiz: { ...st.quiz, selected: { ...st.quiz.selected, [qi]: ci } } })) }; }), resultOk: s.quiz.submitted && s.quiz.selected[qi] === q.answer, resultBad: s.quiz.submitted && s.quiz.selected[qi] !== q.answer, section: q.section })) : [];
      const quizCorrect = quiz ? quiz.questions.filter((q, qi) => s.quiz.selected[qi] === q.answer).length : 0; const quizTotal = quiz ? quiz.questions.length : 0; const quizAllAnswered = quiz ? quiz.questions.every((q, qi) => s.quiz.selected[qi] !== undefined) : false;
      const vq = D.validationQuestions[s.validation.qIdx]; const expected = s.secAnswers[s.validation.qIdx];
      const answerValidation = (ans) => { const ok = !s.validation.forceWrong && ans === (expected || 'Yes'); if (ok) set({ validation: { ...s.validation, answer: ans, result: 'ok' } }); else { const failures = s.validation.failures + 1; if (failures >= 2) { this.go('locked', { locked: true, validation: { ...s.validation, active: false, failures, forceWrong: false } }); } else set({ validation: { ...s.validation, answer: ans, result: 'fail', failures, forceWrong: false } }); } };
      const secRows = D.validationQuestions.map((q, i) => ({ key: i, n: i + 1, q, yes: s.secAnswers[i] === 'Yes', no: s.secAnswers[i] === 'No', answerText: s.secAnswers[i] || '—', yesBg: s.secAnswers[i] === 'Yes' ? NAVY : '#FFFFFF', yesFg: s.secAnswers[i] === 'Yes' ? '#FFFFFF' : NAVY, noBg: s.secAnswers[i] === 'No' ? NAVY : '#FFFFFF', noFg: s.secAnswers[i] === 'No' ? '#FFFFFF' : NAVY, setYes: () => upd(st => { const a = [...st.secAnswers]; a[i] = 'Yes'; return { secAnswers: a }; }), setNo: () => upd(st => { const a = [...st.secAnswers]; a[i] = 'No'; return { secAnswers: a }; }) }));
      const secComplete = s.secAnswers.every(a => a);
      const exam = s.exam; const eq = D.exam[exam.idx]; const examAnswered = Object.keys(exam.answers).length;
      const examChoices = eq.c.map((c, ci) => ({ key: ci, letter: String.fromCharCode(65 + ci), text: c, bg: exam.answers[exam.idx] === ci ? '#EEF2F9' : '#FFFFFF', border: exam.answers[exam.idx] === ci ? NAVY : '#D9DEE7', onPick: () => upd(st => ({ exam: { ...st.exam, answers: { ...st.exam.answers, [st.exam.idx]: ci } } })) }));
      const examDots = D.exam.map((q, i) => ({ key: i, n: i + 1, bg: i === exam.idx ? NAVY : exam.answers[i] !== undefined ? '#CFE0F5' : '#FFFFFF', fg: i === exam.idx ? '#FFFFFF' : NAVY, onPick: () => set({ exam: { ...exam, idx: i } }) }));
      const reviewRows = D.modules.map((m, i) => ({ key: m.id, label: m.num === 0 ? 'Introduction' : `Module ${m.num}`, title: m.title, minutes: `${m.minutes} min`, onOpen: () => this.go('player', { moduleIdx: i, lessonIdx: 0, reviewMode: true }) }));
      const cert = s.cert || {}; const reasonText = (H.reasons.find(r => r.v === (cert.reason || s.reg.reason)) || {}).t || '—';
      const breakRemaining = s.breakState ? s.breakState.remaining : 0;
      const shell = s.screen !== 'site';
      const jump = (screen, extra) => () => { this.seedStudent(); this.go(screen, extra); };
      const panelJumps = [
        { label: 'Public website', go: () => this.go('site') },
        { label: 'Reset prototype state (clear saved progress)', go: () => { try { localStorage.removeItem('aa-bdi-proto-v1'); } catch (e) {} const fresh = initialState(); Object.keys(M).forEach(k => { delete M[k]; }); Object.assign(M, fresh, { _restored: true }); this.go('site'); this.toast('Prototype state cleared — the demo starts again from the public website.'); } }, { label: 'Registration', go: () => this.go('register') }, { label: 'Checkout', go: () => { this.go('checkout', { reg: s.reg.firstName ? s.reg : { ...demoReg } }); } }, { label: 'Receipt', go: jump('receipt') }, { label: 'Dashboard', go: jump('dashboard') },
        { label: 'Student information confirmation', go: jump('studentInfo') }, { label: 'Security questions setup', go: jump('securitySetup') }, { label: 'Eligibility / attestation', go: jump('attestation') },
        ...D.modules.map((m, i) => ({ label: m.num === 0 ? 'Introduction (4 min)' : `Module ${m.num} – ${m.title} (${m.minutes} min)`, go: () => this.jumpToModule(i) })),
        { label: 'Quiz (Module 1)', go: () => { this.jumpToModule(1); this.go('quizIntro', { timeLeft: { ...s.timeLeft, m1: 0 } }); } },
        { label: 'Break 1 (after Module 5)', go: () => { this.jumpToModule(6); this.go('break', { breakState: { num: 1, remaining: 572, nextIdx: 6 }, breaksDone: [] }); } },
        { label: 'Break 2 (before Module 11)', go: () => { this.jumpToModule(11); this.go('break', { breakState: { num: 2, remaining: 581, nextIdx: 11 }, breaksDone: [1] }); } },
        { label: 'A&A Insurance message (after a break)', go: () => { this.jumpToModule(6); this.go('sponsor', { breakState: { num: 1, remaining: 0, nextIdx: 6 }, breaksDone: [1] }); } },
        { label: 'Final Review', go: () => { this.seedStudent(); this.go('finalReview', { completed: [...modIds], breaksDone: [1, 2], secSetupDone: true, attested: true, infoConfirmed: true }); } },
        { label: 'Final Exam', go: () => { this.seedStudent(); this.go('examIntro', { completed: [...modIds], breaksDone: [1, 2], exam: { ...exam, idx: 0, answers: {}, submitted: false, confirm: false } }); } },
        { label: 'Exam – failed result', go: () => { this.seedStudent(); upd({ completed: [...modIds], breaksDone: [1, 2] }); this.demoExam(false); } },
        { label: 'Exam – passed result', go: () => { this.seedStudent(); upd({ completed: [...modIds], breaksDone: [1, 2] }); this.demoExam(true); } },
        { label: 'Post-exam dashboard (sign statement required)', go: () => { this.seedStudent(); this.go('postExam', { completed: [...modIds], breaksDone: [1, 2], exam: { ...exam, submitted: true, passed: true, score: 39 }, completionDate: H.today() }); } },
        { label: 'Sign Statement', go: () => { this.seedStudent(); this.go('sign', { completed: [...modIds], breaksDone: [1, 2], exam: { ...exam, submitted: true, passed: true, score: 39 }, completionDate: H.today() }); } },
        { label: 'Certificate information', go: () => { this.seedStudent(); this.go('certInfo', { signed: true, cert: s.cert || { ...demoReg, verify: false }, exam: { ...exam, submitted: true, passed: true, score: 39 }, completionDate: H.today() }); } },
        { label: 'Certificate delivery', go: () => { this.seedStudent(); this.go('delivery', { signed: true, certConfirmed: true, exam: { ...exam, submitted: true, passed: true, score: 39 }, completionDate: H.today() }); } },
        { label: 'Completion processing / state reporting', go: () => { this.seedStudent(); this.go('completionProcessing', { delivery: s.delivery || 'electronic' }); setTimeout(() => this.go('complete', { completionDone: true }), 2600); } },
        { label: 'Certificate of completion (printable)', go: () => { this.seedStudent(); this.go('certificate', { completionDone: true, delivery: s.delivery || 'electronic', exam: { ...exam, submitted: true, passed: true, score: 39 }, signed: true, certConfirmed: true, completionDate: s.completionDate || H.today() }); } },
        { label: 'Final completion screen', go: () => { this.seedStudent(); this.go('complete', { completionDone: true, delivery: s.delivery || 'electronic', exam: { ...exam, submitted: true, passed: true, score: 39 }, completionDate: H.today(), completed: [...modIds], breaksDone: [1, 2] }); } },
      ].map((j, i) => ({ key: i, ...j }));
      const edgeStates = [
        { label: 'Registration – required-field errors', go: () => this.go('register', { reg: { ...initialReg }, regAttempted: true, edgeNote: 'Edge state: the student clicked Continue with empty required fields.' }) },
        { label: 'Registration – invalid citation number', go: () => this.go('register', { reg: { ...demoReg, citation: 'ABC12' }, regAttempted: true, edgeNote: 'Edge state: citation number does not match the required 7-character format.' }) },
        { label: 'Checkout – failed payment', go: () => this.go('checkout', { reg: { ...demoReg }, pay: { cardName: 'Maria Santos', cardNumber: '4000000000000000', exp: '09/28', cvv: '123', billingZip: '33460', terms: true, privacy: true }, payAttempted: true, payError: 'Your card was declined (prototype: any card number ending in 0000 is declined). No charge was made. Please check the card details or use another card.', orderState: 'failed' }) },
        { label: 'Student information – incomplete', go: () => this.go('studentInfo', { reg: { ...demoReg, county: '', dlNumber: '' }, infoAttempted: true, edgeNote: 'Edge state: required course/citation fields are missing.' }) },
        { label: 'Security verification – failed answer', go: () => { this.jumpToModule(1); upd({ lessonIdx: 1, validation: { ...M.validation, active: true, qIdx: 2, answer: 'No', result: 'fail', failures: 1, forceWrong: false } }); } },
        { label: 'Course locked – verification failure', go: () => { this.seedStudent(); this.go('locked', { locked: true }); } },
        { label: 'Advance before module timer completes', go: () => { this.jumpToModule(1); upd({ lessonIdx: 2 }); setTimeout(() => this.toast(`Required time remaining for Module 1: ${H.fmt(this.timeLeftFor('m1'))}. You can review the lesson pages, but you cannot continue until the timer reaches 00:00.`), 300); } },
        { label: 'Attempt to open a locked module', go: () => { this.seedStudent(); this.go('dashboard', { completed: ['intro', 'm1', 'm2'], breaksDone: [], lockedMsg: '"Module 8 – Space Management / Defensive Driving Techniques" is locked. Complete Module 3 through Module 7 and Mandatory Break 1 first – modules must be taken in order.' }); } },
        { label: 'Mandatory break timer active', go: () => { this.jumpToModule(6); this.go('break', { breakState: { num: 1, remaining: 572, nextIdx: 6 }, breaksDone: [] }); } },
        { label: 'Practice quiz – incorrect answers', go: () => { this.jumpToModule(1); this.go('quizResult', { quiz: { selected: { 0: 1, 1: 0, 2: 2 }, submitted: true }, timeLeft: { ...s.timeLeft, m1: 0 } }); } },
        { label: 'Final exam – failed (24/40)', go: () => { this.seedStudent(); upd({ completed: [...modIds], breaksDone: [1, 2] }); this.demoExam(false); } },
        { label: 'Final exam – passed (36/40)', go: () => { this.seedStudent(); upd({ completed: [...modIds], breaksDone: [1, 2] }); this.demoExam(true); } },
        { label: 'Certificate information – incomplete', go: () => { this.seedStudent(); this.go('certInfo', { signed: true, cert: { ...demoReg, county: '', citation: '', verify: false }, certAttempted: true, exam: { ...exam, submitted: true, passed: true, score: 39 }, completionDate: H.today() }); } },
      ].map((j, i) => ({ key: i, ...j }));
      const deliveryOptions = [
        { v: 'electronic', title: 'Electronic certificate (e-mail / download)', desc: 'Delivered to your account and e-mail after processing. Source course: e-mail delivery offered as a paid option.', price: 'Price: TBD – Requires A&A Decision' },
        { v: 'standard', title: 'Standard mail delivery', desc: 'Printed certificate mailed to your certificate address. Source course: free USPS mail, up to 11–30 days, no tracking.', price: 'Included / TBD – Requires A&A Decision' },
        { v: 'expedited', title: 'Expedited delivery', desc: 'Tracked courier delivery (no PO boxes). Source course: overnight and two-day options offered at additional cost.', price: 'Price: TBD – Requires A&A Decision' },
      ].map(o => ({ ...o, key: o.v, selected: s.delivery === o.v, border: s.delivery === o.v ? NAVY : '#D9DEE7', bg: s.delivery === o.v ? '#EEF2F9' : '#FFFFFF', onPick: () => set({ delivery: o.v }) }));
      const keyed = fn => (e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); fn(); } };
      const addKeys = (arr, prop) => { (arr || []).forEach(r => { if (r && typeof r[prop] === 'function' && !r.onKey) r.onKey = keyed(r[prop]); }); return arr; };
      addKeys(moduleRows, 'onOpen'); addKeys(sideRows, 'onOpen'); addKeys(lessonRows, 'onOpen'); addKeys(reviewRows, 'onOpen'); addKeys(examChoices, 'onPick'); addKeys(deliveryOptions, 'onPick');
      (quizRows || []).forEach(q => addKeys(q.choices, 'onPick'));
      const CONTACT = { phone: '(561) 533-5303', fax: '(561) 533-3858', addr: '951 Sansbury\'s Way, West Palm Beach, FL 33411', site: 'www.AAServices.com' };
      const MODALS = {
        help: { title: 'Help and student support', paras: [
          'A & Associates can help with enrolment, course access, validation questions, exam problems and certificate processing.',
          'Corporate headquarters: ' + CONTACT.addr,
          'Phone: ' + CONTACT.phone + '   ·   Fax: ' + CONTACT.fax,
          'Web: ' + CONTACT.site,
          'Prototype note: a dedicated student-support e-mail address, chat channel and published support hours for the online course are TBD / Requires A&A Decision. Only contact details that already exist in the project are shown here.' ] },
        signin: { title: 'Sign in — prototype', paras: [
          'Returning-student sign in is not connected in this prototype. No accounts, passwords or sessions exist in this build, and none are simulated.',
          'In production this screen would authenticate a returning student and restore their course position. The authentication method is TBD / Requires A&A Decision.',
          'For this demo, start a new enrolment — the prototype remembers your progress in this browser so a refresh returns you to where you left off.' ],
          actions: [{ label: 'Start / register for the course', primary: true, go: () => this.go('register', { edgeNote: '' }) }, { label: 'Return to home', go: () => this.go('site') }] },
        terms: { title: 'Terms and Conditions — prototype draft', paras: [
          'PROTOTYPE TEXT — REQUIRES FORMAL A&A AND LEGAL APPROVAL. No approved Terms and Conditions document exists in the project yet; the summary below describes the subjects the final document must cover.',
          '1. The course. A&A Online Training provides the Florida 4-hour Basic Driver Improvement (BDI) course. The course requires 220 minutes of instruction and two 10-minute mandatory breaks, completed sequentially.',
          '2. The student. The registered student must personally complete the course without unauthorised assistance. Identity is confirmed through security questions asked at random during the course.',
          '3. Examination and certificate. A final examination of 40 questions must be passed with at least 32 correct answers (80%). A failed examination must be retaken; no certificate is issued for a failed examination. A completion statement must be signed before the certificate is processed.',
          '4. Fees and refunds. Course price, the Florida state assessment fee shown at checkout, certificate delivery charges and the refund policy are TBD / Requires A&A Decision.',
          '5. Reporting. Completion information is processed and reported as required by Florida. The technical reporting mechanism is TBD / Regulatory integration required.',
          '6. Governing law and disputes. To be drafted by A&A counsel.' ] },
        privacy: { title: 'Privacy Policy — prototype draft', paras: [
          'PROTOTYPE TEXT — REQUIRES FORMAL A&A AND LEGAL APPROVAL. No approved Privacy Policy exists in the project yet; the summary below describes the subjects the final document must cover.',
          '1. What is collected. Account details, legal name, date of birth, address, driver licence information and citation information — the fields required for course delivery and for certificate and state processing.',
          '2. Why it is collected. To deliver the course, verify that the registered student completed it, issue the certificate and report completion as required by Florida.',
          '3. Payment data. Card details are handled by a payment processor. This prototype does not store card numbers or security codes, and does not retain them when your progress is saved in this browser.',
          '4. Sharing. Completion information is shared with the State of Florida and, where applicable, the court or agency named on your citation. Any other sharing is TBD / Requires A&A Decision.',
          '5. Retention and your rights. Record-retention periods and how a student requests correction or deletion are TBD / Requires A&A Decision.',
          '6. Prototype storage. This demo saves your course progress in your own browser (local storage) so a refresh does not lose the demo. It never stores payment data, and clearing your browser data removes it.' ] },
        a11y: { title: 'Accessibility', paras: [
          'The course is built to be usable with a keyboard: every control can be reached with Tab and activated with Enter or Space, and the focused control shows a visible gold outline.',
          'Status messages, timer warnings and validation results are announced to screen readers.',
          'Text can be enlarged with your browser zoom without losing controls; the layout reflows down to phone width.',
          'Planned for a later phase: read-aloud narration, captions for instructional video, a text-size control and a high-contrast theme. The final accessibility feature set is TBD / Requires A&A Decision.',
          'If you need help completing the course in another way, contact A & Associates on ' + CONTACT.phone + '.' ] },
      };
      const mk = MODALS[s.modal] || null;
      return {
        // flags
        hasModal: !!mk, modalTitle: mk ? mk.title : '', modalParas: mk ? mk.paras.map((text, i) => ({ key: i, text })) : [],
        modalActions: mk && mk.actions ? mk.actions.map((a, i) => ({ key: i, label: a.label, onClick: a.go, bg: a.primary ? NAVY : '#FFFFFF', fg: a.primary ? '#FFFFFF' : NAVY, border: a.primary ? NAVY : '#0B2A5B' })) : [],
        goHome: () => this.go('site'),
        restartDemo: () => { try { localStorage.removeItem('aa-bdi-proto-v1'); } catch (e) {} const fresh = initialState(); Object.keys(M).forEach(k => { delete M[k]; }); Object.assign(M, fresh, { _restored: true }); this.go('site'); this.toast('Demo restarted — saved progress cleared. You can run the whole journey again from the public website.'); },
        closeModal: () => set({ modal: '' }), openHelp: () => set({ modal: 'help' }), openSignIn: () => set({ modal: 'signin' }), openTerms: () => set({ modal: 'terms' }), openPrivacy: () => set({ modal: 'privacy' }), openA11y: () => set({ modal: 'a11y' }),
        navCourses: () => this.scrollToId('courses'), navHow: () => this.scrollToId('how-it-works'), navRequirements: () => this.scrollToId('florida-requirements'),
        downloadCertificate: () => {
          try {
            const v = { name: (s.cert && s.cert.firstName ? [s.cert.firstName, s.cert.middleName, s.cert.lastName].filter(Boolean).join(' ') : stName).toUpperCase(),
              id: 'AA-BDI-' + (s.orderNo || 'SAMPLE') + '-' + String(s.exam.score || 0).padStart(2, '0'), date: s.completionDate || H.today(),
              score: (s.exam.score || 0) + ' of 40 correct (' + Math.round((s.exam.score || 0) / 40 * 100) + '%)', reason: reasonText,
              dl: ((s.cert && s.cert.dlState) || 'FL') + ' ' + ((s.cert && s.cert.dlNumber) || s.reg.dlNumber || 'TBD'),
              county: (s.cert && s.cert.county) || '-', citation: (s.cert && s.cert.citation) || '-' };
            const blob = this.buildCertPdf(v);
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
            a.download = 'A&A_BDI_Certificate_' + this.sanitize(v.name) + '.pdf';
            document.body.appendChild(a); a.click(); document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(a.href), 4000);
            this.toast('Certificate PDF downloaded: ' + a.download);
          } catch (e) { this.toast('The certificate PDF could not be generated in this browser — use Print / Save as PDF instead.'); }
        },
        isFirstLesson: s.lessonIdx === 0, prevDisabled: s.lessonIdx === 0, nextDisabled: isLastLesson,
        prevOpacity: s.lessonIdx === 0 ? 0.45 : 1, nextOpacity: isLastLesson ? 0.45 : 1,
        restoredNote: !!s.restoredNote, dismissRestored: () => set({ restoredNote: false }),
        shell, isSite: s.screen === 'site', isRegister: s.screen === 'register', isCheckout: s.screen === 'checkout', isProcessing: s.screen === 'processing', isReceipt: s.screen === 'receipt', isSponsor: s.screen === 'sponsor', isCertificate: s.screen === 'certificate', isDashboard: s.screen === 'dashboard' || s.screen === 'postExam', isPostExam: s.screen === 'postExam', isDashboardOnly: s.screen === 'dashboard', isStudentInfo: s.screen === 'studentInfo', isSecuritySetup: s.screen === 'securitySetup', isSecurityConfirm: s.screen === 'securityConfirm', isAttestation: s.screen === 'attestation', isPlayer: s.screen === 'player', isQuizIntro: s.screen === 'quizIntro', isQuiz: s.screen === 'quiz', isQuizResult: s.screen === 'quizResult', isBreak: s.screen === 'break', isFinalReview: s.screen === 'finalReview', isExamIntro: s.screen === 'examIntro', isExam: s.screen === 'exam', isExamResult: s.screen === 'examResult', isSign: s.screen === 'sign', isCertInfo: s.screen === 'certInfo', isDelivery: s.screen === 'delivery', isCompletionProcessing: s.screen === 'completionProcessing', isComplete: s.screen === 'complete', isLocked: s.screen === 'locked',
        demo: s.demo, demoLabel: s.demo ? 'DEMO MODE ON – timers run 60× faster (PROTOTYPE ONLY)' : 'Demo mode off – real time', toggleDemo: () => set({ demo: !s.demo }), panelOpen: s.panelOpen, togglePanel: () => set({ panelOpen: !s.panelOpen }), panelJumps, edgeStates, toast: s.toast, hasToast: !!s.toast, edgeNote: s.edgeNote, hasEdgeNote: !!s.edgeNote,
        stName, studentInitials: stName.split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase(), today: H.today(),
        // site
        goRegister: () => this.go('register', { edgeNote: '' }), goSite: () => this.go('site'),
        // registration
        reg: s.reg, onReg: field('reg'), regErr, hasRegErrors: Object.keys(regErr).length > 0, regErrorCount: Object.keys(regErr).length, showCitation: !s.reg.noCitation && s.reg.reason !== 'insurance', reasons: H.reasons.map(r => ({ ...r, key: r.v })), counties: H.counties.map(c => ({ key: c, c })), agencies: H.agencies.map(a => ({ key: a, a })),
        fillDemoReg: () => set({ reg: { ...demoReg }, regAttempted: false, edgeNote: '' }), submitReg: () => { const e = this.regErrors(); if (Object.keys(e).length) { set({ regAttempted: true }); window.scrollTo(0, 0); return; } this.go('checkout', { regAttempted: false, edgeNote: '' }); },
        // checkout
        pay: s.pay, onPay: field('pay'), payErr, payError: s.payError, hasPayError: !!s.payError, orderFailed: s.orderState === 'failed', fillDemoPay: () => set({ pay: { cardName: `${s.reg.firstName} ${s.reg.lastName}`.trim() || 'Maria Santos', cardNumber: '4111111111111111', exp: '09/28', cvv: '123', billingZip: s.reg.zip || '33460', terms: true, privacy: true }, payAttempted: false, payError: '' }),
        placeOrder: () => { const e = this.payErrors(); if (Object.keys(e).length) { set({ payAttempted: true }); return; } if (s.pay.cardNumber.replace(/\s/g, '').endsWith('0000')) { set({ payAttempted: true, payError: 'Your card was declined (prototype: any card number ending in 0000 is declined). No charge was made. Please check the card details or use another card.', orderState: 'failed' }); return; } this.go('processing', { payError: '', orderState: 'processing' }); setTimeout(() => this.go('receipt', { orderState: 'done', orderNo: 'AA-2026-000917' }), 2200); },
        orderNo: s.orderNo || 'AA-2026-000917', goDashboard: () => this.go('dashboard'), backToRegister: () => this.go('register'),
        // dashboard
        moduleRows, pct, pctText: `${pct}%`, doneMinText: `${doneMin} of ${totalMin} minutes`, remainingMinText: `${totalMin - doneMin} minutes remaining`, completedCount: `${s.completed.length} of ${modIds.length} modules`, lockedMsg: s.lockedMsg, hasLockedMsg: !!s.lockedMsg, clearLocked: () => set({ lockedMsg: '' }),
        courseStatus: s.completionDone ? 'Completed' : s.exam.passed ? 'Exam passed – completion statement required' : s.completed.length ? 'In progress' : s.attested ? 'Ready to begin' : 'Enrolled – setup required',
        startLabel: s.completionDone ? 'Course completed' : s.exam.passed ? 'Sign completion statement' : this.allDone() ? 'Go to Final Review' : s.completed.length || s.attested ? 'Continue course' : 'Start course',
        startCourse: () => { if (s.completionDone) return; if (s.exam.passed && !s.signed) { this.go('sign'); return; } if (s.exam.passed && s.signed && !s.certConfirmed) { this.go('certInfo'); return; } if (this.allDone()) { this.go('finalReview'); return; } if (!s.infoConfirmed) { this.go('studentInfo', { cert: null }); return; } if (!s.secSetupDone) { this.go('securitySetup'); return; } if (!s.attested) { this.go('attestation'); return; } const next = modIds.findIndex(id => !s.completed.includes(id)); this.startModule(Math.max(0, next)); },
        objectives: ['I. To help participants become responsible drivers by providing them with accurate and current information.', 'II. To help participants realize that proper attitudes will make them safer drivers.', 'III. To remind participants of Florida Law as it pertains to the operation of a motor vehicle.', 'IV. To help participants develop respect for obedience of traffic laws as a result of their knowledge of Florida Law.', 'V. To help participants realize that to be good drivers, they must practice courtesy, discipline and patience in their driving behaviors.'].map((t, i) => ({ key: i, t })),
        examRecordText: s.exam.submitted ? `${s.completionDate || H.today()} · Score: ${s.exam.score} of 40 (${Math.round(100 * s.exam.score / 40)}%) · ${s.exam.passed ? 'PASSED' : 'NOT PASSED'}` : 'No exam attempts yet',
        // student info confirmation
        infoErr: fillKeys(s.infoAttempted ? this.regErrors() : {}, ['firstName', 'lastName', 'dob', 'address', 'reason', 'dlNumber', 'county', 'citation', 'citationDate']), hasInfoErrors: s.infoAttempted && Object.keys(this.regErrors()).length > 0, confirmInfo: () => { const e = this.regErrors(); if (Object.keys(e).length) { set({ infoAttempted: true }); window.scrollTo(0, 0); return; } this.go('securitySetup', { infoConfirmed: true, infoAttempted: false, edgeNote: '' }); }, reasonText: (H.reasons.find(r => r.v === s.reg.reason) || {}).t || '—',
        // security setup
        secRows, secComplete, secAttempted: s.secAttempted, saveSecurity: () => { if (!secComplete) { set({ secAttempted: true }); return; } this.go('securityConfirm', { secAttempted: false }); }, confirmSecurity: () => this.go('attestation', { secSetupDone: true }), backToSecurity: () => this.go('securitySetup'), printPage: () => { try { window.print(); } catch (e) { this.toast('Use your browser print command to print this page.'); } }, attestationText: D.attestation,
        // attestation
        attestChecked: s.attestChecked, toggleAttest: (e) => set({ attestChecked: e.target.checked }), acceptAttestation: () => { if (!s.attestChecked) { this.toast('Please check the acknowledgement box to continue.'); return; } upd({ attested: true }); this.startModule(0); },
        // player
        modLabel: cur.num === 0 ? 'Introduction' : `Module ${cur.num}`, modTitle: cur.title, modMinutes: `${cur.minutes} min`, modSource: cur.source, lessonTitle: lesson.title, lessonRef: lesson.ref, lessonBlocks: (lesson.blocks || (lesson.paras || []).map(t => ({ t: 'p', text: t }))).map((b, i) => ({ key: i, isP: b.t === 'p', isH: b.t === 'h', isLi: b.t === 'li', isImg: b.t === 'img', isTable: b.t === 'table', isFoot: b.t === 'foot', text: b.text || '', num: b.num || '•', indent: (b.lvl || 0) * 18, src: b.src || '', imgEl: b.t === 'img' ? React.createElement(MediaImage, { src: b.src, alt: 'Course illustration from the mapped source', style: { maxWidth: '100%', height: 'auto', border: '1px solid #E3E7EE', borderRadius: 6, background: '#fff' } }) : null, rows: (b.rows || []).map((r, ri) => ({ key: ri, cells: r.map((c, ci) => ({ key: ci, text: c })) })) })), lessonCounter: `Lesson ${Math.min(s.lessonIdx, cur.lessons.length - 1) + 1} of ${cur.lessons.length}`, lessonRows,
        mediaSrcName: lesson.media.srcName || '', mediaSrcUrl: lesson.media.srcUrl || '', mediaSrcLic: lesson.media.srcLic || '', hasMediaSrc: !!lesson.media.srcName, mediaGfx: (lesson.media.gfx || []).map((src, i) => ({ key: i, src, el: React.createElement(MediaImage, { src, alt: lesson.media.label, style: { width: '100%', height: 'auto', display: 'block', border: '1px solid #D9DEE7', borderRadius: 8, background: '#fff' } }) })), hasGfx: !!(lesson.media.gfx && lesson.media.gfx.length), noGfx: !(lesson.media.gfx && lesson.media.gfx.length), mediaKind: lesson.media.kind, mediaLabel: lesson.media.label, mediaTag: lesson.media.tag, mediaTagBg: lesson.media.tag === D.REQ ? '#E6F4EA' : '#FFF4E0', mediaTagFg: lesson.media.tag === D.REQ ? GREEN : '#8A5200', mediaIcon: { video: '▶', audio: '♪', diagram: '◈', animation: '◎', chart: '▤', interactive: '☰', illustration: '✎', scenario: '⚑', sign: '⬟' }[lesson.media.kind] || '◈',
        hasCallout: !!lesson.callout, calloutTitle: lesson.callout ? lesson.callout.title : '', calloutText: lesson.callout ? lesson.callout.text : '',
        timerText: H.fmt(left), timerRequired: `Required: ${cur.minutes}:00`, timerPct: Math.round(100 * (1 - left / (cur.minutes * 60))), timerDone, timerColor: timerDone ? GREEN : NAVY, reviewMode: s.reviewMode, notReview: !s.reviewMode,
        prevLesson: () => { if (s.lessonIdx > 0) { set({ lessonIdx: s.lessonIdx - 1 }); window.scrollTo(0, 0); } }, hasPrev: s.lessonIdx > 0,
        notLastLessonFlag: !isLastLesson, nextLesson: () => { if (!isLastLesson) { const n = s.lessonIdx + 1; set({ lessonIdx: n }); window.scrollTo(0, 0); this.maybeValidation(s.moduleIdx, n); } }, isLastLesson,
        continueLabel: s.reviewMode ? 'Back' : quiz ? `Take the ${quiz.name}` : (breakAfter[cur.num] && !s.breaksDone.includes(breakAfter[cur.num].num)) ? `Complete module → Mandatory Break ${breakAfter[cur.num].num}` : s.moduleIdx + 1 < modIds.length ? 'Complete module → next module' : 'Complete module → Final Review',
        continueModule: () => { if (s.reviewMode) { this.go(this.allDone() ? (s.exam.submitted && s.exam.passed ? 'postExam' : 'finalReview') : 'dashboard'); return; } if (!timerDone) { this.toast(`Required time remaining for this module: ${H.fmt(left)}. You may review the lesson pages, but you cannot continue until the timer reaches 00:00.`); return; } if (quiz) this.go('quizIntro'); else this.finishModule(); },
        continueOpacity: s.reviewMode || timerDone ? 1 : 0.45, demoFinishTimer: () => set({ timeLeft: { ...s.timeLeft, [curId]: 0 } }), sideRows, exitToDashboard: () => this.go('dashboard'), helpOpen: false,
        // validation prompt
        vActive: s.validation.active && s.screen === 'player', vQuestion: vq, vResult: s.validation.result, vPending: s.validation.active && !s.validation.result, vOk: s.validation.result === 'ok', vFail: s.validation.result === 'fail', vFailures: s.validation.failures, vAnswerYes: () => answerValidation('Yes'), vAnswerNo: () => answerValidation('No'), vResume: () => set({ validation: { ...s.validation, active: false, result: null, answer: null } }), vRetry: () => set({ validation: { ...s.validation, qIdx: (s.validation.qIdx + 3) % 10, answer: null, result: null } }), vForceWrong: () => set({ validation: { ...s.validation, forceWrong: true } }),
        // quiz
        quizName: quiz ? quiz.name : 'Knowledge check', quizRef: quiz ? quiz.ref : '', quizKeyNote: quiz ? quiz.keyNote : '', quizCount: quiz ? `${quiz.questions.length} questions` : '', quizRows, quizAllAnswered, quizNote: cur.quizNote || '', hasQuizNote: !!cur.quizNote,
        startQuiz: () => this.go('quiz', { quiz: { selected: {}, submitted: false } }), submitQuiz: () => { if (!quizAllAnswered) { this.toast('Please answer every question before submitting.'); return; } this.go('quizResult', { quiz: { ...s.quiz, submitted: true } }); }, retakeQuiz: () => this.go('quiz', { quiz: { selected: {}, submitted: false } }),
        quizScoreText: `${quizCorrect} of ${quizTotal} correct`, quizPassed: quizCorrect === quizTotal, quizMissed: quizCorrect < quizTotal, quizContinue: () => this.finishModule(), submitOpacity: quizAllAnswered ? 1 : 0.5,
        // break
        breakNum: s.breakState ? s.breakState.num : 1, breakTimer: H.fmt(breakRemaining), breakDone: s.breakState ? breakRemaining <= 0 : false, breakNotDone: s.breakState ? breakRemaining > 0 : true, breakPct: s.breakState ? Math.round(100 * (1 - breakRemaining / 600)) : 0, breakContinueOpacity: s.breakState && breakRemaining <= 0 ? 1 : 0.45,
        breakContinue: () => { if (!s.breakState || s.breakState.remaining > 0) { this.toast('The mandatory break is still in progress. Continue becomes available at 00:00.'); return; } this.go('sponsor', { breaksDone: [...s.breaksDone, s.breakState.num] }); }, sponsorQuote: () => this.toast('A&A Insurance quote request – TBD / Requires A&A Decision (marketing integration not established by the mapping).'), sponsorNext: () => { const next = s.breakState ? s.breakState.nextIdx : modIds.length; upd({ breakState: null }); if (next < modIds.length) this.startModule(next); else this.go('finalReview'); }, demoFinishBreak: () => set({ breakState: { ...s.breakState, remaining: 0 } }),
        sponsorNextLabel: s.breakState && s.breakState.nextIdx < modIds.length ? `Module ${D.modules[s.breakState.nextIdx].num} – ${D.modules[s.breakState.nextIdx].title}` : 'Final Review', sponsorBreakNum: s.breakState ? s.breakState.num : 1,
        breakNextText: s.breakState && s.breakState.nextIdx < modIds.length ? `Next: Module ${D.modules[s.breakState.nextIdx].num} – ${D.modules[s.breakState.nextIdx].title}` : 'Next: Final Review',
        // final review
        reviewRows, instrDoneText: `${s.completed.reduce((a, id) => a + D.modules.find(m => m.id === id).minutes, 0)} of 220 instructional minutes completed`, breaksText: `${s.breaksDone.length} of 2 mandatory breaks completed`, allDone: this.allDone() && s.breaksDone.length === 2, goExamIntro: () => this.go('examIntro', { exam: { ...exam, idx: 0, answers: {}, submitted: false, confirm: false } }),
        // exam
        examAttemptText: exam.attempts ? `Attempt ${exam.attempts + 1}` : 'Attempt 1', beginExam: () => this.go('exam'), examIdxText: `Question ${exam.idx + 1} of 40`, examQ: eq.q, examChoices, examDots, examAnsweredText: `${examAnswered} of 40 answered`, examProgressPct: Math.round(100 * examAnswered / 40),
        examPrev: () => set({ exam: { ...exam, idx: Math.max(0, exam.idx - 1) } }), examNext: () => set({ exam: { ...exam, idx: Math.min(39, exam.idx + 1) } }), examFirst: exam.idx === 0, examLast: exam.idx === 39,
        examOpenBook: exam.openBook, toggleOpenBook: () => set({ exam: { ...exam, openBook: !exam.openBook } }), examReviewRows: reviewRows.map(r => ({ ...r, onOpen: () => this.go('player', { moduleIdx: modIds.indexOf(r.key), lessonIdx: 0, reviewMode: true }) })),
        askSubmit: () => set({ exam: { ...exam, confirm: true } }), cancelSubmit: () => set({ exam: { ...exam, confirm: false } }), examConfirm: exam.confirm, examUnansweredText: `${40 - examAnswered} unanswered question${40 - examAnswered === 1 ? '' : 's'} will be marked incorrect.`, confirmSubmit: () => this.finishExam(exam.answers),
        demoPass: () => this.demoExam(true), demoFail: () => this.demoExam(false), backToReviewFromExam: () => this.go('finalReview'),
        examScoreText: `${exam.score} of 40`, examPctText: `${Math.round(100 * (exam.score || 0) / 40)}%`, examPassed: !!exam.passed, examFailed: exam.submitted && !exam.passed, completionDate: s.completionDate || H.today(), retakeExam: () => this.go('examIntro', { exam: { ...exam, idx: 0, answers: {}, submitted: false, confirm: false } }), afterPass: () => this.go('postExam'),
        // sign
        signName: s.signName, onSignName: (e) => set({ signName: e.target.value }), signChecked: s.signChecked, toggleSign: (e) => set({ signChecked: e.target.checked }), signNameOk: s.signName.trim().toLowerCase() === stName.toLowerCase(), goSign: () => this.go('sign'),
        submitSign: () => { if (s.signName.trim().toLowerCase() !== stName.toLowerCase()) { this.toast(`Type your full legal name exactly as registered: ${stName}`); return; } if (!s.signChecked) { this.toast('Check the certification box to sign.'); return; } this.go('certInfo', { signed: true, cert: s.cert || { ...s.reg, verify: false } }); },
        // certificate info
        cert, onCert: field('cert'), certErr, hasCertErrors: Object.keys(certErr).length > 0, certReasonText: reasonText, certExamText: `${s.exam.score || 39} of 40 (${Math.round(100 * (s.exam.score || 39) / 40)}%)`,
        confirmCert: () => { const e = this.certErrors(); if (Object.keys(e).length) { set({ certAttempted: true }); window.scrollTo(0, 0); return; } this.go('delivery', { certConfirmed: true, certAttempted: false }); },
        // delivery & completion
        deliveryOptions, deliveryChosen: !!s.delivery, submitDelivery: () => { if (!s.delivery) { this.toast('Select a certificate delivery method.'); return; } this.go('completionProcessing'); setTimeout(() => this.go('complete', { completionDone: true }), 2600); },
        deliveryText: ({ electronic: 'Electronic certificate – queued', standard: 'Standard mail – queued', expedited: 'Expedited delivery – queued' })[s.delivery] || 'Not selected',
        // misc
        viewCertificate: () => this.go('certificate'), printCertificate: () => { try { document.body.classList.add('aa-print-cert'); setTimeout(() => { window.print(); setTimeout(() => document.body.classList.remove('aa-print-cert'), 400); }, 60); } catch (e) { this.toast('Use your browser print command to print the certificate.'); } }, backFromCertificate: () => this.go('complete'),
        certName: (s.cert && s.cert.firstName ? [s.cert.firstName, s.cert.middleName, s.cert.lastName].filter(Boolean).join(' ') : stName).toUpperCase(),
        certId: 'AA-BDI-' + (s.orderNo || 'SAMPLE') + '-' + String(s.exam.score || 0).padStart(2, '0'),
        certReason: reasonText, certDl: (s.cert && s.cert.dlNumber) || (s.reg.dlNumber || 'TBD'), certDlState: (s.cert && s.cert.dlState) || 'FL',
        certCounty: (s.cert && s.cert.county) || '—', certCitation: (s.cert && s.cert.citation) || '—',
        contactSupport: () => set({ modal: 'help' }), howItWorks: () => this.scrollToId('how-it-works'), a11yInfo: () => set({ modal: 'a11y' }), readAloudInfo: () => this.toast('Read-aloud narration is Supported by Mapping (the source course offered an audio read-along). It will be implemented in a later phase — no narration audio exists in this build.'), viewCertificate: () => this.toast('Certificate preview – A&A UX Enhancement. Official certificate format and issuance system: TBD / External Integration Required.'), returnToDashboard: () => this.go('dashboard'), unlockDemo: () => { this.seedStudent(); this.go('dashboard', { locked: false, validation: { ...s.validation, active: false, result: null, failures: 0 } }); },
        goReport: () => { const u = 'BDI Prototype Report.dc.html'; try { fetch(u, { method: 'GET' }).then(r => { if (r.ok) window.open(u, '_blank'); else this.toast('The prototype report is not included in this build. Open "BDI Prototype Report" from the project instead.'); }).catch(() => this.toast('The prototype report is not included in this build. Open "BDI Prototype Report" from the project instead.')); } catch (e) { this.toast('The prototype report is not included in this build.'); } },
      };
    }
  }
  return new CourseEngine();
}
