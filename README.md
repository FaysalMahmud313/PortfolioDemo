# 🚀 3D Web Portfolio — Faysal Mahmud

Interactive **3D Web Portfolio** for **Faysal Mahmud**, Computer Science and Engineering (CSE) student at **American International University-Bangladesh (AIUB)**.

Aspiring Software Engineer | Web Developer | AI/ML Research Enthusiast

Built with **Three.js WebGL**, modern cyber glassmorphism, responsive 3D card perspective tilt, an interactive recruiter terminal, dedicated **Research & Publications** and **Leadership & Activities** sections, and an **Owner-Only CMS & Edit Portal** with 1-click GitHub Pages sync.

---

## 🌟 Key Sections & Verified Features

- **🌐 Interactive 3D Cyber Core**: High-performance Three.js WebGL scene with an interactive holographic icosahedron, orbital gyroscope rings, and dynamic neural constellation particle web. Responds fluidly to mouse movement, dragging, clicks, and page scrolling.
- **🎓 Academic Track Record**: Dedicated section for American International University-Bangladesh (AIUB), B.Sc. in Computer Science and Engineering, core CS coursework, and academic honors.
- **💻 Technical Competencies Matrix**: Clean, categorized presentation of Programming Languages, Tools, Platforms, Research Domains, and Soft Skills without arbitrary proficiency percentage claims.
- **🚀 Featured Projects (Strongest Completed First)**:
  1. **NextTrip — Travel Management System**: Comprehensive travel planning, booking workflows, and itinerary management. *(Completed)*
  2. **FlowSense — AI Cash-Flow Co-Pilot & Financial Platform**: FinTechathon 2026 team project featuring shortage arithmetic, recovery plan calculations, and approval safety checks. *(Competition Prototype)*
  3. **Bank Management System**: Java-based banking application demonstrating clean OOP principles and transaction handling. *(Completed)*
  4. **Tourism Management System**: C# Windows Forms desktop application with Microsoft SQL Server and RBAC for Admin, Vendor, and Traveler roles. *(Completed)*
  5. **RA-BRI — Rheumatoid Arthritis Risk Prediction**: Healthcare machine learning on NHANES (2011–2020, N=13,273) with leakage-aware validation and SHAP explainability. *(Research Project)*
  6. **Explainability & Intrusion Detection in EV Charging Networks**: Cybersecurity ML on CICEV2023 dataset (N=111,284) for anomaly detection and XAI telemetry attribution. *(Research Project)*
  7. **AI-Generated Faces & Human Rights Online**: Empirical survey research across 120 participants in Bangladesh on digital ethics and deepfake privacy risks. *(Research Study)*
  8. **AI DeskBuddy**: ESP32-S3 smart desk companion prototype with animated OLED expressions, touch/motion interaction, and local configuration webpage. *(Hardware Prototype)*
  9. **Faysal FileHub**: ESP32-S3 & W5500 hardwired Ethernet personal file-server concept for local private LAN storage. *(Hardware Concept)*
- **🔬 Dedicated Research & Publications**:
  - Highlights core research areas: Health Risk Prediction, Explainable AI (XAI), SHAP Feature Interpretation, EV Charging Cybersecurity, Network Intrusion Detection, and AI Ethics.
  - Dedicated cards for the **2 reported peer-reviewed publications** ready for manual linking of verified paper titles, conference/journal names, and DOIs.
- **🏆 Leadership, Volunteering & Achievements**:
  - **AIUB R&D Club (Organizer)**: Academic research seminars (Prof. Dr. Nowshad Amin, Prof. Pushp Lata of BITS Pilani, Dr. Md. Saef Ullah Miah), Erasmus Mundus, and research methodology workshops.
  - **Scout Volunteering (~3 Years)**: Community service, medical camp serving >1,300 patients, relief distribution, and served as Team Leader in two camps.
  - **9 Documented Achievements & Competitions**: Presentation wins at State University and Southeast University, University Physics Poster Winner, GP FutureMakers Round 2, CUET 3MT, Sciblitz 2.0, MOS State Championship, and SANSO Scout Jamboree.
- **💻 Recruiter Interactive Terminal**: Recruiter terminal simulator in the About section with commands: `whoami`, `education`, `skills`, `projects`, `research`, `leadership`, `contact`, `sudo hire 🚀`, `clear`.
- **🔐 Secret Owner-Only Admin Portal**:
  - Hidden from regular visitors.
  - Activated via keyboard shortcut (**`Ctrl + Shift + A`** or **`Cmd + Shift + A`**) or by clicking the lock icon in the footer/navbar.
  - Master Passcode: `cse2026` (can be changed anytime in the Admin Settings tab).
  - In-place editing: Click the "Edit" badge on any card.
  - Image uploader: Upload any personal photo or project screenshot from your laptop with instant preview.
  - **1-Click GitHub Export**: Generates an updated `data.js` file ready to be committed to your repository so changes are visible to visitors worldwide.
- **⚡ 100% Zero-Dependency & GitHub Pages Ready**: Requires no Node.js or build tools. Pure static HTML, CSS, Three.js, and Lucide icons that deploy natively to GitHub Pages in seconds.

---

## 📂 Project Structure

```text
portfolio-3d/
│
├── index.html                  # Main semantic HTML structure & modals
├── README.md                   # Setup & deployment documentation
│
├── css/
│   └── styles.css              # Cyber glassmorphism, 3D tilt, animations, responsive rules
│
├── js/
│   ├── data.js                 # Master portfolio data store (Faysal Mahmud's data)
│   ├── three-scene.js          # Three.js WebGL 3D interactive core & particle galaxy
│   ├── app.js                  # Dynamic UI rendering, terminal, tilt effects & modals
│   ├── admin.js                # Owner-only authentication, in-place editing & export engine
│   └── vendor/
│       ├── three.min.js        # High-performance Three.js library (vendored for offline reliability)
│       └── lucide.min.js       # Modern developer icon bundle
│
└── assets/
    └── images/
        ├── demo-avatar.svg         # Student profile picture placeholder
        ├── project-nexttrip.svg    # NextTrip travel management diagram
        ├── project-flowsense.svg   # FlowSense AI cash-flow co-pilot diagram
        ├── project-bank.svg        # Bank Management System Java OOP diagram
        ├── project-tourism.svg     # Tourism Management C# Windows Forms diagram
        ├── project-rabri.svg       # RA-BRI machine learning & SHAP diagram
        ├── project-ev.svg          # EV charging network cybersecurity diagram
        ├── project-aifaces.svg     # AI-generated faces & survey ethics diagram
        ├── project-deskbuddy.svg   # AI DeskBuddy ESP32-S3 OLED diagram
        └── project-filehub.svg     # Faysal FileHub ESP32-S3 W5500 Ethernet diagram
```

---

## 🚀 Quick Start: Running Locally

Since Python 3 is installed on your computer, you can preview the website locally anytime:

1. Open PowerShell and navigate to the project directory:
   ```powershell
   cd C:\Users\ASUS\.gemini\antigravity\scratch\portfolio-3d
   ```

2. Start a local server:
   ```powershell
   python -m http.server 8000
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:8000
   ```
   *(Or simply double-click `index.html` in your file explorer!)*

---

## 🌐 How to Deploy to GitHub Pages (Step-by-Step)

### Step 1: Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g., `portfolio` or `faysal-portfolio`).
3. Set the repository visibility to **Public**.
4. Leave "Add a README file" unchecked and click **Create repository**.

### Step 2: Push your files to GitHub
Open PowerShell in the `portfolio-3d` directory and run:

```powershell
cd C:\Users\ASUS\.gemini\antigravity\scratch\portfolio-3d

# Initialize git repository
git init
git branch -M main

# Add all files and make initial commit
git add .
git commit -m "Initial commit: Faysal Mahmud 3D CSE Web Portfolio"

# Link to your new GitHub repository (replace with your actual GitHub URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git

# Push your code
git push -u origin main
```

### Step 3: Enable GitHub Pages in 3 Clicks
1. On your GitHub repository page, click **Settings** (top tab bar).
2. On the left sidebar under *Code and automation*, click **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. In under 60 seconds, your site is live at:
   `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

---

## 🔐 How to Add Your GitHub Links & Real URLs

When you are ready to link your GitHub repos, LinkedIn profile, or publication DOIs:

### Method 1: Using the Built-In Admin Portal (Recommended)
1. Open your portfolio in any web browser.
2. Press **`Ctrl + Shift + A`** (or click the lock icon in the footer/navbar).
3. Enter the master passcode: **`cse2026`** and click **Unlock CMS**.
4. In the **Portfolio Control Center**:
   - **👤 Profile & Picture**: Paste your GitHub profile URL, LinkedIn URL, or upload a custom photo.
   - **🚀 Projects Showcase**: Click **Edit** on any project (e.g. NextTrip, FlowSense, Bank Management) and paste the GitHub repository link.
   - **📦 GitHub Sync & Export**: Click **"Download Updated data.js"**.
5. Move the downloaded `data.js` into your `portfolio-3d/js/` folder.
6. Commit & push:
   ```powershell
   git add js/data.js
   git commit -m "Add GitHub repository links"
   git push
   ```

### Method 2: Direct File Editing
Open [`js/data.js`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/portfolio-3d/js/data.js) in your code editor, fill in the `github` and `demo` fields, save, and push to GitHub.

---

Designed with ❤️ for Faysal Mahmud • Department of Computer Science and Engineering, AIUB. Good luck with your software engineering internship applications and research endeavors! 🚀
