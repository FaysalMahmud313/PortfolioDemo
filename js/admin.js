/**
 * Admin CMS & In-Place Editing Engine
 * Allows the owner (and ONLY the owner) to authenticate and manually edit:
 * - Profile, name, bio, and profile picture (via URL or local file upload converted to Base64)
 * - School, College, Degree, CGPA, and Coursework
 * - Projects (Title, summary, description, metrics, tags, links, images)
 * - Technical Skills & Experience
 * - One-click export to `data.js` for seamless GitHub Pages deployment!
 */

let isAdminAuthenticated = false;
let editingEducationId = null;
let editingProjectId = null;

document.addEventListener('DOMContentLoaded', () => {
  // Check if session was authenticated
  if (sessionStorage.getItem('cse_admin_auth') === 'true') {
    enableAdminMode(false);
  }

  // Setup Keyboard Shortcut: Ctrl + Shift + A or Cmd + Shift + A
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      toggleAdminAccess();
    }
  });

  // Setup Image File Upload Handlers (converts file to Data URL)
  setupImageUploader('admin-avatar-file', 'admin-avatar-url', 'admin-avatar-preview');
  setupImageUploader('admin-proj-file', 'admin-proj-image', 'admin-proj-preview');
});

/**
 * Toggle Admin access prompt or open CMS modal
 */
function toggleAdminAccess() {
  if (isAdminAuthenticated) {
    openAdminModal('profile');
  } else {
    openAuthModal();
  }
}

/**
 * Open Passcode Auth Modal
 */
function openAuthModal() {
  const modal = document.getElementById('admin-auth-modal');
  const input = document.getElementById('admin-passcode-input');
  const err = document.getElementById('admin-auth-error');
  if (!modal) return;

  if (err) err.style.display = 'none';
  if (input) input.value = '';
  modal.classList.add('active');
  input?.focus();
}

function closeAuthModal() {
  const modal = document.getElementById('admin-auth-modal');
  if (modal) modal.classList.remove('active');
}

/**
 * Verify Master Passcode
 */
function verifyAdminPasscode() {
  const input = document.getElementById('admin-passcode-input');
  const err = document.getElementById('admin-auth-error');
  const enteredPass = input ? input.value.trim() : '';

  const storedPass = currentPortfolioData.admin?.passcode || 'cse2026';

  if (enteredPass === storedPass) {
    enableAdminMode(true);
    closeAuthModal();
    openAdminModal('profile');
  } else {
    if (err) {
      err.textContent = 'Incorrect passcode. (Default demo pass is cse2026)';
      err.style.display = 'block';
    }
  }
}

/**
 * Enable Admin Mode
 */
function enableAdminMode(showFeedback = true) {
  isAdminAuthenticated = true;
  sessionStorage.setItem('cse_admin_auth', 'true');
  document.body.classList.add('admin-mode-active');

  const hud = document.getElementById('admin-hud-bar');
  if (hud) hud.style.display = 'flex';

  if (showFeedback) {
    showToast('Admin Mode Active. You can now edit portfolio details & export to GitHub!');
  }
}

/**
 * Exit Admin Mode
 */
function exitAdminMode() {
  isAdminAuthenticated = false;
  sessionStorage.removeItem('cse_admin_auth');
  document.body.classList.remove('admin-mode-active');

  const hud = document.getElementById('admin-hud-bar');
  if (hud) hud.style.display = 'none';

  closeAdminModal();
  showToast('Exited Admin Mode.');
}

/**
 * Open Admin CMS Modal with specified tab
 */
function openAdminModal(tabName = 'profile', targetId = null) {
  if (!isAdminAuthenticated) {
    openAuthModal();
    return;
  }

  const modal = document.getElementById('admin-cms-modal');
  if (!modal) return;

  switchAdminTab(tabName);
  modal.classList.add('active');

  // If specific ID requested (e.g. from in-place edit buttons)
  if (tabName === 'education' && targetId) {
    loadEducationIntoForm(targetId);
  } else if (tabName === 'projects' && targetId) {
    loadProjectIntoForm(targetId);
  } else {
    populateAllAdminForms();
  }
}

function closeAdminModal() {
  const modal = document.getElementById('admin-cms-modal');
  if (modal) modal.classList.remove('active');
}

/**
 * Switch Tab in Admin Modal
 */
function switchAdminTab(tabId) {
  document.querySelectorAll('.modal-tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
  });

  document.querySelectorAll('.tab-pane').forEach(p => {
    p.classList.toggle('active', p.id === `tab-${tabId}`);
  });

  if (tabId === 'export') {
    updateExportCodePreview();
  }
}

/**
 * Helper to setup file uploader and convert to Base64
 */
function setupImageUploader(fileInputId, urlInputId, previewImgId) {
  const fileInput = document.getElementById(fileInputId);
  const urlInput = document.getElementById(urlInputId);
  const previewImg = document.getElementById(previewImgId);

  if (!fileInput || !urlInput) return;

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('Image file size is larger than 2MB. Please choose a smaller image for best web performance.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      urlInput.value = dataUrl;
      if (previewImg) previewImg.src = dataUrl;
      showToast('Image uploaded and converted! Click "Save" to apply.');
    };
    reader.readAsDataURL(file);
  });

  urlInput.addEventListener('input', () => {
    if (previewImg) previewImg.src = urlInput.value || 'assets/images/demo-avatar.svg';
  });
}

/**
 * Populate all forms in the Admin panel from current data
 */
function populateAllAdminForms() {
  const p = currentPortfolioData.personal || {};

  // Profile Form
  setVal('admin-name', p.name);
  setVal('admin-role', p.role);
  setVal('admin-status', p.statusBadge);
  setVal('admin-tagline', p.tagline);
  setVal('admin-bio-p1', p.bioP1);
  setVal('admin-bio-p2', p.bioP2);
  setVal('admin-avatar-url', p.avatar);
  setVal('admin-email', p.email);
  setVal('admin-phone', p.phone);
  setVal('admin-location', p.location);
  setVal('admin-github', p.github);
  setVal('admin-linkedin', p.linkedin);
  setVal('admin-leetcode', p.leetcode);
  setVal('admin-twitter', p.twitter);
  setVal('admin-resume', p.resumeUrl);

  const previewAvatar = document.getElementById('admin-avatar-preview');
  if (previewAvatar) previewAvatar.src = p.avatar || 'assets/images/demo-avatar.svg';

  // Populate Education List
  renderAdminEducationList();

  // Populate Projects List
  renderAdminProjectsList();
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

/**
 * Save Profile Settings
 */
function saveAdminProfile() {
  currentPortfolioData.personal = {
    ...currentPortfolioData.personal,
    name: getVal('admin-name'),
    role: getVal('admin-role'),
    statusBadge: getVal('admin-status'),
    tagline: getVal('admin-tagline'),
    bioP1: getVal('admin-bio-p1'),
    bioP2: getVal('admin-bio-p2'),
    avatar: getVal('admin-avatar-url') || 'assets/images/demo-avatar.svg',
    email: getVal('admin-email'),
    phone: getVal('admin-phone'),
    location: getVal('admin-location'),
    github: getVal('admin-github'),
    linkedin: getVal('admin-linkedin'),
    leetcode: getVal('admin-leetcode'),
    twitter: getVal('admin-twitter'),
    resumeUrl: getVal('admin-resume') || '#resume-preview'
  };

  savePortfolioData(currentPortfolioData);
  showToast('Profile information updated successfully!');
}

/* ==========================================================================
   Education Management (College & School)
   ========================================================================== */
function renderAdminEducationList() {
  const list = document.getElementById('admin-education-items');
  if (!list) return;

  const eduItems = currentPortfolioData.education || [];
  list.innerHTML = eduItems.map(edu => `
    <div style="background:#111827; border:1px solid var(--border-subtle); padding:1rem; border-radius:8px; display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem">
      <div>
        <div style="font-weight:700; color:#fff">${escapeHTML(edu.institution)}</div>
        <div style="font-size:0.85rem; color:var(--accent-cyan)">${escapeHTML(edu.degree)} • ${escapeHTML(edu.score)}</div>
        <div style="font-size:0.78rem; color:var(--text-muted)">${escapeHTML(edu.duration)} (${escapeHTML(edu.badge || 'CSE')})</div>
      </div>
      <div style="display:flex; gap:0.5rem">
        <button class="hud-btn" onclick="loadEducationIntoForm('${edu.id}')">Edit</button>
        <button class="hud-btn danger" onclick="deleteEducation('${edu.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function resetEducationForm() {
  editingEducationId = null;
  setVal('admin-edu-institution', '');
  setVal('admin-edu-degree', '');
  setVal('admin-edu-duration', '');
  setVal('admin-edu-score', '');
  setVal('admin-edu-badge', '');
  setVal('admin-edu-type', 'university');
  setVal('admin-edu-desc', '');
  setVal('admin-edu-coursework', '');
  setVal('admin-edu-achievements', '');
  const title = document.getElementById('admin-edu-form-title');
  if (title) title.textContent = 'Add New Education Entry';
}

function loadEducationIntoForm(id) {
  const edu = (currentPortfolioData.education || []).find(e => e.id === id);
  if (!edu) return;

  editingEducationId = id;
  setVal('admin-edu-institution', edu.institution);
  setVal('admin-edu-degree', edu.degree);
  setVal('admin-edu-duration', edu.duration);
  setVal('admin-edu-score', edu.score);
  setVal('admin-edu-badge', edu.badge);
  setVal('admin-edu-type', edu.type || 'university');
  setVal('admin-edu-desc', edu.description);
  setVal('admin-edu-coursework', (edu.coursework || []).join(', '));
  setVal('admin-edu-achievements', (edu.achievements || []).join(', '));

  const title = document.getElementById('admin-edu-form-title');
  if (title) title.textContent = 'Edit Education: ' + edu.institution;

  switchAdminTab('education');
}

function saveAdminEducation() {
  const institution = getVal('admin-edu-institution');
  const degree = getVal('admin-edu-degree');
  if (!institution || !degree) {
    alert('Please enter at least Institution Name and Degree.');
    return;
  }

  const courseworkRaw = getVal('admin-edu-coursework');
  const achievementsRaw = getVal('admin-edu-achievements');

  const coursework = courseworkRaw ? courseworkRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
  const achievements = achievementsRaw ? achievementsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

  const eduObj = {
    id: editingEducationId || ('edu-' + Date.now()),
    institution: institution,
    degree: degree,
    duration: getVal('admin-edu-duration') || '2023 — 2027',
    score: getVal('admin-edu-score') || 'CGPA: 3.90 / 4.00',
    type: getVal('admin-edu-type') || 'university',
    badge: getVal('admin-edu-badge') || 'Degree',
    description: getVal('admin-edu-desc'),
    coursework: coursework,
    achievements: achievements
  };

  if (!currentPortfolioData.education) currentPortfolioData.education = [];

  if (editingEducationId) {
    const idx = currentPortfolioData.education.findIndex(e => e.id === editingEducationId);
    if (idx !== -1) currentPortfolioData.education[idx] = eduObj;
  } else {
    currentPortfolioData.education.unshift(eduObj);
  }

  savePortfolioData(currentPortfolioData);
  resetEducationForm();
  renderAdminEducationList();
  showToast('Education entry saved successfully!');
}

function deleteEducation(id) {
  if (!confirm('Are you sure you want to delete this education entry?')) return;
  currentPortfolioData.education = (currentPortfolioData.education || []).filter(e => e.id !== id);
  savePortfolioData(currentPortfolioData);
  renderAdminEducationList();
  showToast('Education entry deleted.');
}

/* ==========================================================================
   Project Management
   ========================================================================== */
function renderAdminProjectsList() {
  const list = document.getElementById('admin-projects-items');
  if (!list) return;

  const projs = currentPortfolioData.projects || [];
  list.innerHTML = projs.map(proj => `
    <div style="background:#111827; border:1px solid var(--border-subtle); padding:1rem; border-radius:8px; display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem">
      <div style="display:flex; align-items:center; gap:0.75rem">
        <img src="${escapeHTML(proj.image || 'assets/images/project-systems.svg')}" style="width:48px; height:48px; object-fit:cover; border-radius:6px">
        <div>
          <div style="font-weight:700; color:#fff">${escapeHTML(proj.title)}</div>
          <div style="font-size:0.82rem; color:var(--accent-cyan)">${escapeHTML(proj.categoryLabel || proj.category)}</div>
        </div>
      </div>
      <div style="display:flex; gap:0.5rem">
        <button class="hud-btn" onclick="loadProjectIntoForm('${proj.id}')">Edit</button>
        <button class="hud-btn danger" onclick="deleteProject('${proj.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function resetProjectForm() {
  editingProjectId = null;
  setVal('admin-proj-title', '');
  setVal('admin-proj-subtitle', '');
  setVal('admin-proj-status', 'Completed');
  setVal('admin-proj-category', 'web-software');
  setVal('admin-proj-summary', '');
  setVal('admin-proj-desc', '');
  setVal('admin-proj-metrics', '');
  setVal('admin-proj-tags', '');
  setVal('admin-proj-github', '');
  setVal('admin-proj-demo', '');
  setVal('admin-proj-image', '');
  const preview = document.getElementById('admin-proj-preview');
  if (preview) preview.src = 'assets/images/project-nexttrip.svg';

  const title = document.getElementById('admin-proj-form-title');
  if (title) title.textContent = 'Add New Project';
}

function loadProjectIntoForm(id) {
  const proj = (currentPortfolioData.projects || []).find(p => p.id === id);
  if (!proj) return;

  editingProjectId = id;
  setVal('admin-proj-title', proj.title);
  setVal('admin-proj-subtitle', proj.subtitle);
  setVal('admin-proj-status', proj.status || 'Completed');
  setVal('admin-proj-category', proj.category || 'web-software');
  setVal('admin-proj-summary', proj.summary);
  setVal('admin-proj-desc', proj.description);
  setVal('admin-proj-metrics', proj.metrics);
  setVal('admin-proj-tags', (proj.tags || []).join(', '));
  setVal('admin-proj-github', proj.github);
  setVal('admin-proj-demo', proj.demo);
  setVal('admin-proj-image', proj.image);

  const preview = document.getElementById('admin-proj-preview');
  if (preview) preview.src = proj.image || 'assets/images/project-nexttrip.svg';

  const title = document.getElementById('admin-proj-form-title');
  if (title) title.textContent = 'Edit Project: ' + proj.title;

  switchAdminTab('projects');
}

function saveAdminProject() {
  const title = getVal('admin-proj-title');
  if (!title) {
    alert('Please provide a Project Title.');
    return;
  }

  const tagsRaw = getVal('admin-proj-tags');
  const tags = tagsRaw ? tagsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

  const category = getVal('admin-proj-category') || 'web-software';
  const categoryLabels = {
    'web-software': 'Software Engineering & Web',
    'ai-research': 'AI / ML & Research',
    'iot-embedded': 'Embedded Systems & IoT',
    'systems': 'Systems & Cloud',
    'fullstack': 'Full Stack & Web',
    'aiml': 'AI / Machine Learning'
  };

  const statusVal = getVal('admin-proj-status') || 'Completed';
  let statusClass = 'completed';
  if (statusVal.toLowerCase().includes('progress')) statusClass = 'in-progress';
  else if (statusVal.toLowerCase().includes('research')) statusClass = 'research';
  else if (statusVal.toLowerCase().includes('concept')) statusClass = 'concept';

  const projObj = {
    id: editingProjectId || ('proj-' + Date.now()),
    title: title,
    subtitle: getVal('admin-proj-subtitle'),
    category: category,
    categoryLabel: categoryLabels[category] || category,
    status: statusVal,
    statusClass: statusClass,
    summary: getVal('admin-proj-summary'),
    description: getVal('admin-proj-desc'),
    metrics: getVal('admin-proj-metrics'),
    tags: tags,
    github: getVal('admin-proj-github'),
    demo: getVal('admin-proj-demo'),
    image: getVal('admin-proj-image') || 'assets/images/project-nexttrip.svg',
    featured: true
  };

  if (!currentPortfolioData.projects) currentPortfolioData.projects = [];

  if (editingProjectId) {
    const idx = currentPortfolioData.projects.findIndex(p => p.id === editingProjectId);
    if (idx !== -1) currentPortfolioData.projects[idx] = projObj;
  } else {
    currentPortfolioData.projects.unshift(projObj);
  }

  savePortfolioData(currentPortfolioData);
  resetProjectForm();
  renderAdminProjectsList();
  showToast('Project saved successfully!');
}

function deleteProject(id) {
  if (!confirm('Are you sure you want to delete this project?')) return;
  currentPortfolioData.projects = (currentPortfolioData.projects || []).filter(p => p.id !== id);
  savePortfolioData(currentPortfolioData);
  renderAdminProjectsList();
  showToast('Project deleted.');
}

/* ==========================================================================
   Export & GitHub Pages Synchronization
   ========================================================================== */
function generateDataJsContent() {
  const jsonStr = JSON.stringify(currentPortfolioData, null, 2);
  return `/**
 * 3D CSE Student Portfolio - Master Data Store
 * Automatically exported from Admin CMS.
 * Commit this updated file to your GitHub repository to update your live site!
 */

const DEFAULT_PORTFOLIO_DATA = ${jsonStr};

if (typeof window !== "undefined") {
  window.DEFAULT_PORTFOLIO_DATA = DEFAULT_PORTFOLIO_DATA;
}
`;
}

function updateExportCodePreview() {
  const box = document.getElementById('export-code-preview');
  if (box) {
    box.textContent = generateDataJsContent();
  }
}

/**
 * Download data.js file directly to student's Downloads folder
 */
function downloadDataJsFile() {
  const content = generateDataJsContent();
  const blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloaded data.js! Place it inside portfolio-3d/js/ and push to GitHub.');
}

/**
 * Copy data.js code to clipboard
 */
function copyDataJsCode() {
  const content = generateDataJsContent();
  navigator.clipboard.writeText(content).then(() => {
    showToast('Code copied to clipboard! You can paste it into js/data.js.');
  }).catch(() => {
    showToast('Could not copy automatically. Please select text manually.');
  });
}

/**
 * Export JSON backup file
 */
function exportJsonBackup() {
  const jsonStr = JSON.stringify(currentPortfolioData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Downloaded full JSON backup!');
}

/**
 * Import JSON backup
 */
function importJsonBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.personal && imported.projects) {
        savePortfolioData(imported);
        populateAllAdminForms();
        showToast('Backup successfully imported and applied!');
      } else {
        alert('Invalid backup file format.');
      }
    } catch (err) {
      alert('Error parsing JSON backup file: ' + err.message);
    }
  };
  reader.readAsText(file);
}

/**
 * Change Master Admin Passcode
 */
function changeAdminPasscode() {
  const newPass = prompt('Enter new Master Passcode:');
  if (!newPass || newPass.trim().length < 4) {
    alert('Passcode must be at least 4 characters long.');
    return;
  }

  if (!currentPortfolioData.admin) currentPortfolioData.admin = {};
  currentPortfolioData.admin.passcode = newPass.trim();
  savePortfolioData(currentPortfolioData);
  showToast('Admin passcode updated successfully! Remember your new passcode.');
}

/**
 * Reset to factory demo data
 */
function resetToDemoData() {
  if (!confirm('Are you sure you want to restore the initial demo data? Any unsaved local edits will be cleared.')) return;
  localStorage.removeItem('cse_portfolio_data');
  currentPortfolioData = JSON.parse(JSON.stringify(window.DEFAULT_PORTFOLIO_DATA || {}));
  renderAllSections();
  populateAllAdminForms();
  showToast('Reset to default demo data completed.');
}

// Global exposure
window.toggleAdminAccess = toggleAdminAccess;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.verifyAdminPasscode = verifyAdminPasscode;
window.openAdminModal = openAdminModal;
window.closeAdminModal = closeAdminModal;
window.switchAdminTab = switchAdminTab;
window.exitAdminMode = exitAdminMode;
window.saveAdminProfile = saveAdminProfile;
window.resetEducationForm = resetEducationForm;
window.loadEducationIntoForm = loadEducationIntoForm;
window.saveAdminEducation = saveAdminEducation;
window.deleteEducation = deleteEducation;
window.resetProjectForm = resetProjectForm;
window.loadProjectIntoForm = loadProjectIntoForm;
window.saveAdminProject = saveAdminProject;
window.deleteProject = deleteProject;
window.downloadDataJsFile = downloadDataJsFile;
window.copyDataJsCode = copyDataJsCode;
window.exportJsonBackup = exportJsonBackup;
window.importJsonBackup = importJsonBackup;
window.changeAdminPasscode = changeAdminPasscode;
window.resetToDemoData = resetToDemoData;
