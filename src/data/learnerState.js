// Reads the BDI prototype's saved state for the shared My Learning dashboard.
// Only whitelisted, non-sensitive fields ever leave this module: first name and progress.
const KEY = 'aa-bdi-proto-v1';

const STATUS_LABEL = {
  completed: 'Completed',
  'exam-passed': 'Exam passed · completion steps remaining',
  'in-progress': 'In progress',
  enrolled: 'Enrolled · ready to begin',
};

function readRaw() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    return d && d.v === 1 ? d : null;
  } catch (e) { return null; }
}

// Fallback for saved states written before the engine started storing a progress snapshot.
function legacyProgress(d) {
  const modulesDone = Array.isArray(d.completed) ? d.completed.length : 0;
  const modulesTotal = 12;
  const status = d.completionDone ? 'completed' : (d.exam && d.exam.passed) ? 'exam-passed' : modulesDone ? 'in-progress' : 'enrolled';
  return { pct: d.completionDone ? 100 : Math.round(100 * modulesDone / modulesTotal), doneMinutes: null, totalMinutes: 240, modulesDone, modulesTotal, status };
}

export function readLearnerCourses() {
  const d = readRaw();
  if (!d || d.orderState !== 'done') return { firstName: '', courses: [] };
  const p = d.progress && typeof d.progress.pct === 'number' ? d.progress : legacyProgress(d);
  return {
    firstName: (d.reg && typeof d.reg.firstName === 'string') ? d.reg.firstName : '',
    courses: [{
      courseId: 'bdi',
      worldId: 'driver',
      pct: Math.max(0, Math.min(100, p.pct || 0)),
      doneMinutes: p.doneMinutes,
      totalMinutes: p.totalMinutes || 240,
      modulesDone: p.modulesDone || 0,
      modulesTotal: p.modulesTotal || 12,
      status: p.status || 'enrolled',
      statusLabel: STATUS_LABEL[p.status] || STATUS_LABEL.enrolled,
      completionDate: d.completionDone ? (d.completionDate || '') : '',
    }],
  };
}

export function hasLearnerState() { return !!readRaw(); }

export function clearLearnerState() {
  try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
}
