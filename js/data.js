/**
 * 3D CSE Student Web Portfolio - Master Data Store
 * Personal & Professional Information for Faysal Mahmud
 * Computer Science and Engineering (CSE), American International University-Bangladesh (AIUB)
 *
 * This file is dynamically read by app.js. When updated through the Admin Panel,
 * you can export and overwrite this file to publish updates permanently on GitHub Pages.
 */

const DEFAULT_PORTFOLIO_DATA = {
  // Personal & Professional Information
  personal: {
    name: "Faysal Mahmud",
    role: "Aspiring Software Engineer | Web Developer | AI/ML Research Enthusiast",
    tagline: "Computer Science and Engineering student at American International University-Bangladesh (AIUB). Building practical software projects, exploring emerging technologies, and solving real-world problems through programming and research.",
    statusBadge: "🟢 Open for Software Engineering Internships & Research Collaborations",
    availableForHire: true,
    avatar: "assets/images/demo-avatar.svg",
    resumeUrl: "#resume-preview",
    bioP1: "I am a Computer Science and Engineering student at American International University-Bangladesh with a strong interest in software engineering, web development, artificial intelligence, and research.",
    bioP2: "I enjoy building practical software projects, exploring emerging technologies, and solving real-world problems through programming and research. My goal is to grow as a software engineer while contributing to innovative projects and meaningful research.",
    email: "23-54032-3@student.aiub.edu",
    phone: "", // Preserved clean (no fabricated phone number)
    location: "Mirpur-02, Dhaka, Bangladesh",
    university: "American International University-Bangladesh (AIUB)",
    department: "Computer Science and Engineering (CSE)",
    github: "", // Will be linked manually by the author
    linkedin: "", // Will be linked manually by the author
    leetcode: "",
    twitter: "",
    stats: [
      { label: "Institution", value: "AIUB CSE", note: "Dhaka, Bangladesh" },
      { label: "Engineering Projects", value: "9 Projects", note: "Software, IoT & AI" },
      { label: "Research Areas", value: "ML & XAI", note: "Healthcare & EV Security" },
      { label: "Leadership & Service", value: "AIUB R&D", note: "Organizer & Scout Leader" }
    ],
    careerInterests: [
      "Software Engineering",
      "Web Development and Full-Stack Development",
      "Software Engineering Internships",
      "Artificial Intelligence and Machine Learning Research",
      "Explainable AI",
      "Embedded Systems and IoT",
      "Cybersecurity and Networking",
      "Research and Development"
    ]
  },

  // Education / Academic Profile
  education: [
    {
      id: "edu-1",
      institution: "American International University-Bangladesh (AIUB)",
      degree: "Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)",
      duration: "Undergraduate Degree Program",
      score: "B.Sc. in CSE (In Progress)",
      location: "Kuratoli, Khilkhet, Dhaka, Bangladesh",
      type: "university",
      badge: "AIUB CSE",
      description: "Department of Computer Science and Engineering. Focusing on software engineering methodologies, web application development, object-oriented systems, and machine learning research.",
      coursework: [
        "Object-Oriented Programming (C++, Java, C#)",
        "Data Structures & Algorithms",
        "Database Management Systems (SQL)",
        "Web Technologies & Application Development",
        "Artificial Intelligence & Machine Learning",
        "Computer Networks & Data Communication",
        "Operating Systems",
        "Software Engineering Principles"
      ],
      achievements: [
        "Organizer, AIUB Research & Development (R&D) Club",
        "Winner of Physics Poster Presentation Competition at University",
        "Active Participant in Academic Research Seminars and Technical Workshops"
      ]
    }
  ],

  // Categorized Technical Skills (No arbitrary percentages assigned)
  skills: [
    {
      category: "Programming Languages & Web Technologies",
      icon: "code-2",
      items: [
        { name: "C++", tag: "Object-Oriented & Algorithms" },
        { name: "Java", tag: "OOP & Banking Workflows" },
        { name: "C#", tag: ".NET & Desktop Applications" },
        { name: "HTML5", tag: "Semantic Web Structure" },
        { name: "CSS3", tag: "Responsive Styling" },
        { name: "JavaScript", tag: "Client-Side Scripting" },
        { name: "PHP", tag: "Server-Side Web Development" },
        { name: "SQL", tag: "Relational Queries & Schema" }
      ]
    },
    {
      category: "Tools, Platforms & Hardware",
      icon: "wrench",
      items: [
        { name: "Git & GitHub", tag: "Version Control & Collaboration" },
        { name: "Arduino IDE", tag: "Embedded Microcontroller Coding" },
        { name: "ESP32 / ESP32-S3", tag: "IoT & Hardware Prototyping" },
        { name: "LaTeX & Overleaf", tag: "Academic Research Typesetting" },
        { name: "SPSS", tag: "Statistical Data Analysis" },
        { name: "Microsoft Office & Excel", tag: "Data Organization & Documentation" },
        { name: "MySQL & MS SQL Server", tag: "Relational Database Administration" }
      ]
    },
    {
      category: "Technical Interests & Research Domains",
      icon: "cpu",
      items: [
        { name: "Software Engineering", tag: "Core Practice" },
        { name: "Web Application Development", tag: "Full-Stack Design" },
        { name: "Object-Oriented Programming", tag: "Modular Architecture" },
        { name: "Machine Learning", tag: "Predictive Modeling" },
        { name: "Explainable AI & SHAP", tag: "Model Interpretability" },
        { name: "Embedded Systems & IoT", tag: "Physical Computing" },
        { name: "Cybersecurity & Networking", tag: "Intrusion Detection" },
        { name: "Data Analysis & Statistics", tag: "Empirical Studies" }
      ]
    },
    {
      category: "Soft Skills & Professional Competencies",
      icon: "users",
      items: [
        { name: "Communication", tag: "Technical & Academic" },
        { name: "Teamwork", tag: "Collaborative Projects" },
        { name: "Leadership", tag: "Scout Team Leader" },
        { name: "Event Organization", tag: "Seminars & Workshops" },
        { name: "Problem-Solving", tag: "Analytical Thinking" },
        { name: "Public Speaking", tag: "Presentations" },
        { name: "Research Presentation", tag: "Academic Competitions" },
        { name: "Technical Writing", tag: "Documentation & Reports" }
      ]
    }
  ],

  // Featured Projects: Strongest completed software projects first, followed by research & experimental
  projects: [
    {
      id: "proj-nexttrip",
      title: "NextTrip — Travel Management System",
      subtitle: "Software Engineering Travel Management Platform",
      category: "web-software",
      categoryLabel: "Software Engineering & Web",
      status: "Completed",
      statusClass: "completed",
      summary: "A software engineering project focused on travel management, itinerary planning, package booking workflows, and customer record management.",
      description: "Engineered as a practical software engineering project structured around end-to-end travel management. Implements user booking flows, travel package browsing, itinerary organization, and administrative records. Demonstrates modular application architecture, robust form handling, and relational database workflows.",
      tags: ["Software Engineering", "Web Development", "Database Management", "Booking Workflows", "Itinerary Planning"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-nexttrip.svg",
      featured: true,
      metrics: "Completed Software Engineering Project",
      highlights: [
        "Developed dedicated modules for travel package exploration, itinerary scheduling, and reservation coordination.",
        "Applied structured software engineering practices to maintain maintainable, clean code.",
        "Integrated database tables to manage user profiles, tour packages, and transaction records."
      ]
    },
    {
      id: "proj-flowsense",
      title: "FlowSense — AI Cash-Flow Co-Pilot & Financial Platform",
      subtitle: "FinTechathon 2026 Collaborative Team Project",
      category: "web-software",
      categoryLabel: "FinTech & Web Prototype",
      status: "Competition Prototype",
      statusClass: "in-progress",
      summary: "An AI-assisted cash-flow co-pilot prototype featuring shortage arithmetic, recovery plan calculations, what-if expense simulations, and multi-tier approval safety checks.",
      description: "Developed collaboratively with Team Decimal Point for FinTechathon 2026. FlowSense connects contextual AI financial advice with preflight safety checks and sandboxed execution. Automatically computes projected funding shortages, evaluates invoice factoring recovery alternatives against strict borrowing caps, and protects essential payroll reserves from unauthorized disbursement.",
      tags: ["Team Project", "FinTech", "AI Cash-Flow Co-Pilot", "Financial Forecasting", "Approval Safety Preflight", "Web Development"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-flowsense.svg",
      featured: true,
      metrics: "FinTechathon 2026 Submission • Verified Preflight Approval Controls",
      highlights: [
        "Automated cash shortage arithmetic (e.g., calculating funding gaps against essential bills and protected reserves).",
        "Engineered recovery alternative evaluations with parameterized borrowing cost caps (<8% cap policy compliance).",
        "Built approval safety preflight to block unreserved disbursements and enforce financial governance.",
        "Interactive what-if expense simulator showing instant impact on projected 30-day runway balances."
      ]
    },
    {
      id: "proj-bank",
      title: "Bank Management System",
      subtitle: "Java Object-Oriented Banking Application",
      category: "web-software",
      categoryLabel: "Java & OOP",
      status: "Completed",
      statusClass: "completed",
      summary: "A Java-based banking application demonstrating object-oriented programming principles, account administration, and transaction workflow implementation.",
      description: "Developed in Java to demonstrate clean Object-Oriented Programming (OOP) design. Implements core banking operations including customer account creation, balance inquiry, deposit and withdrawal validation, fund transfers, and chronological transaction ledger tracking with boundary validation.",
      tags: ["Java", "OOP", "Banking Workflows", "Desktop Application", "Transaction Handling"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-bank.svg",
      featured: true,
      metrics: "Completed Desktop Application • 100% OOP Architecture",
      highlights: [
        "Structured class hierarchies applying encapsulation, inheritance, polymorphism, and abstraction.",
        "Built boundary validation to safeguard against overdrafts, negative transactions, and unauthorized requests.",
        "Maintained structured in-memory and file-based transaction ledger tracking."
      ]
    },
    {
      id: "proj-tourism",
      title: "Tourism Management System",
      subtitle: "C# Windows Forms Platform with Microsoft SQL Server",
      category: "web-software",
      categoryLabel: "C# Windows Forms & SQL Server",
      status: "Completed",
      statusClass: "completed",
      summary: "A C# Windows Forms desktop application using Microsoft SQL Server, featuring multi-role access control for Admin, Vendor, and Traveler users.",
      description: "Engineered a desktop tourism and travel management system using C# and .NET Windows Forms with a normalized Microsoft SQL Server relational database. Features role-based access control (RBAC) separating administrative system configuration, vendor package listing, and traveler booking portals.",
      tags: ["C#", "Windows Forms", ".NET", "Microsoft SQL Server", "RBAC", "CRUD Operations"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-tourism.svg",
      featured: true,
      metrics: "Multi-Role Desktop Platform • Full SQL Server Integration",
      highlights: [
        "Configured distinct role-based dashboards: Admin (system management), Vendor (package listing), and Traveler (booking).",
        "Designed normalized Microsoft SQL Server relational schema with primary and foreign key constraints.",
        "Created an intuitive desktop GUI with data grid views, search filters, and transaction summaries."
      ]
    },
    {
      id: "proj-rabri",
      title: "RA-BRI — Rheumatoid Arthritis Risk Prediction",
      subtitle: "Machine Learning with NHANES Data & SHAP Interpretability",
      category: "ai-research",
      categoryLabel: "Machine Learning & Healthcare Research",
      status: "Research Project",
      statusClass: "research",
      summary: "A machine learning healthcare research project using NHANES (2011–2020) data across 13,273 participants, leakage-aware model evaluation, and SHAP-based feature interpretation.",
      description: "Conducted machine learning research on cross-sectional epidemiological health survey records from the CDC NHANES database (2011–2020) encompassing approximately 13,273 participants. Enforced strict leakage-aware preprocessing to ensure authentic clinical predictive validity. Applied SHAP (SHapley Additive exPlanations) to interpret feature importance and understand individual demographic, inflammatory, and behavioral risk contributors.",
      tags: ["Machine Learning", "Healthcare AI", "NHANES Dataset", "Leakage-Aware ML", "Explainable AI (XAI)", "SHAP"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-rabri.svg",
      featured: true,
      metrics: "N=13,273 Participants • 10-Year NHANES Cohort • SHAP Feature Importance",
      highlights: [
        "Preprocessed large-scale survey data with rigorous handling of missingness, outliers, and laboratory variables.",
        "Prevented data leakage between training, cross-validation, and hold-out evaluation partitions.",
        "Generated global and local SHAP summary plots highlighting biomarkers and demographic predictors of arthritis risk."
      ]
    },
    {
      id: "proj-ev",
      title: "Explainability & Intrusion Detection in EV Charging Networks",
      subtitle: "Cybersecurity & Leakage-Aware ML using CICEV2023 Dataset",
      category: "ai-research",
      categoryLabel: "Cybersecurity & Machine Learning Research",
      status: "Research Project",
      statusClass: "research",
      summary: "A cybersecurity research project analyzing 111,284 electric vehicle charging-session records across 17 features, focusing on leakage-aware intrusion detection and model explainability.",
      description: "Investigated network security threats against electric vehicle (EV) smart charging infrastructure using the benchmark CICEV2023 dataset. Evaluated supervised machine learning classifiers on approximately 111,284 charging-session flow records across 17 features. Emphasized leakage-aware evaluation to prevent overoptimistic detection scores, and coupled anomaly detection with explainability techniques to provide actionable diagnostic rationales for security operators.",
      tags: ["Cybersecurity", "Intrusion Detection", "EV Charging Networks", "CICEV2023", "Machine Learning", "Explainable AI"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-ev.svg",
      featured: true,
      metrics: "111,284 Charging Records • 17 Features • Leakage-Free Protocol",
      highlights: [
        "Evaluated multi-class network flow records to detect abnormal charging sessions and simulated attacks.",
        "Ensured strict partition separation across charging station identifiers to eliminate temporal/spatial leakage.",
        "Integrated explainability mechanisms to illuminate key network telemetry features driving intrusion alerts."
      ]
    },
    {
      id: "proj-aifaces",
      title: "AI-Generated Faces and Human Rights Online",
      subtitle: "Empirical Survey Research on Digital Ethics in Bangladesh",
      category: "ai-research",
      categoryLabel: "AI Ethics & Social Research",
      status: "Research Study",
      statusClass: "research",
      summary: "A survey-based research study involving 120 participants in Bangladesh, investigating public concerns about synthetic AI-generated faces and their effects on digital human rights.",
      description: "Designed and executed a structured empirical study investigating user awareness, psychological perceptions, and ethical concerns regarding AI-generated synthetic faces. Surveyed 120 respondents across diverse demographics in Bangladesh. Analyzed quantitative and qualitative responses using SPSS and descriptive statistical methods to evaluate privacy risks, identity theft fears, and the necessity of regulatory safeguards.",
      tags: ["AI Ethics", "Human Rights Online", "Survey Research", "SPSS", "Deepfake Awareness", "Empirical Analysis"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-aifaces.svg",
      featured: true,
      metrics: "120 Survey Participants • SPSS Statistical Analysis • Policy & Ethics Framework",
      highlights: [
        "Formulated structured questionnaire evaluating awareness of synthetic media and potential misuse.",
        "Conducted statistical cross-tabulation and descriptive analyses in SPSS.",
        "Synthesized findings highlighting the urgent need for digital literacy and legal protections against non-consensual face generation."
      ]
    },
    {
      id: "proj-deskbuddy",
      title: "AI DeskBuddy — Smart Desk Companion",
      subtitle: "ESP32-S3 Physical Prototype with Animated OLED Expressions",
      category: "iot-embedded",
      categoryLabel: "Embedded Systems & IoT",
      status: "Hardware Prototype / In Progress",
      statusClass: "in-progress",
      summary: "An ESP32-S3-based smart desk companion featuring animated OLED eyes, touch and motion interaction, a local configuration webpage, and smart reminders.",
      description: "Conceptualized and prototyped an interactive smart desk companion powered by an ESP32-S3 microcontroller. Features expressive OLED animations reflecting mood and interaction states, integrated touch sensors, and PIR motion detection. Implements a local HTTP configuration webpage hosted on the ESP32 for user preferences and customizable productivity reminders.",
      tags: ["ESP32-S3", "Embedded Systems", "IoT", "Arduino IDE", "OLED Display", "Hardware Prototype"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-deskbuddy.svg",
      featured: false,
      metrics: "Functional Hardware Prototype • ESP32-S3 Hosted Configuration Webpage",
      highlights: [
        "Implemented: Rendered real-time expressive procedural eye animations on an I2C OLED display.",
        "Implemented: Interfaced capacitive touch and PIR motion sensing to trigger interactive responses.",
        "Implemented: Deployed local Wi-Fi web server on the ESP32 for easy browser-based settings and reminders.",
        "Planned: Future integration of live weather API synchronization and voice feedback interaction."
      ]
    },
    {
      id: "proj-filehub",
      title: "Faysal FileHub — Personal Networked File-Server",
      subtitle: "ESP32-S3 & W5500 Ethernet Local Storage Solution",
      category: "iot-embedded",
      categoryLabel: "Embedded Systems & Hardware Concept",
      status: "Hardware Concept / In Progress",
      statusClass: "concept",
      summary: "A personal file-server concept using an ESP32-S3, hardwired W5500 Ethernet, and external storage to provide private local LAN file storage.",
      description: "Architected a low-power, standalone personal file server built on the ESP32-S3 paired with a W5500 SPI Ethernet module for reliable wired network connectivity and local mass storage. Designed to provide secure private cloud storage inside a home or laboratory local area network without external third-party subscriptions.",
      tags: ["ESP32-S3", "W5500 Ethernet", "Embedded Systems", "IoT", "File Server", "Hardware Concept"],
      github: "", // Will be added manually by author
      demo: "",
      image: "assets/images/project-filehub.svg",
      featured: false,
      metrics: "Hardware Concept & Architecture • W5500 Hardwired Network Interface",
      highlights: [
        "Hardware Architecture: High-speed SPI interface between ESP32-S3 and W5500 hardwired TCP/IP chip.",
        "Planned: Web-based file storage management dashboard with upload/download capability.",
        "Planned: Multi-user account authentication, role-based access control (RBAC), and per-user storage quotas.",
        "Planned: Local network discovery and lightweight streaming protocols."
      ]
    }
  ],

  // Dedicated Research & Publications Section
  research: {
    areas: [
      { title: "Machine Learning-Based Health Risk Prediction", icon: "activity", desc: "Developing leakage-aware predictive models using multi-year national epidemiological cohorts." },
      { title: "Explainable Artificial Intelligence (XAI)", icon: "sparkles", desc: "Applying SHAP-based feature interpretation to make complex predictive models transparent and clinically reliable." },
      { title: "SHAP-Based Feature Interpretation", icon: "bar-chart-2", desc: "Global and local feature attribution to eliminate black-box decision uncertainty in critical systems." },
      { title: "EV Charging Station Cybersecurity", icon: "shield-alert", desc: "Analyzing telemetry data from EV charging infrastructure to detect protocol anomalies and network threats." },
      { title: "Machine Learning-Based Intrusion Detection", icon: "lock", desc: "Engineering leakage-free machine learning pipelines for network flow classification and anomaly alerts." },
      { title: "AI Ethics and Online Human Rights", icon: "user-check", desc: "Investigating the societal impacts of deepfake face generation, privacy violations, and regulatory frameworks." }
    ],
    // The author reported having two published research papers.
    // Placeholder cards are provided for manual insertion of verified titles, journal/conference, year, and DOI links.
    publications: [
      {
        id: "pub-1",
        title: "Peer-Reviewed Research Paper 1 (Title to be added)",
        status: "Published Paper",
        authors: "Faysal Mahmud et al.",
        conference: "Details to be verified & updated by author",
        year: "Published",
        focus: "Machine Learning / Explainable AI in Healthcare Risk Prediction",
        doi: "",
        link: "#",
        note: "Exact paper title, conference/journal, year, and DOI link to be verified and added manually."
      },
      {
        id: "pub-2",
        title: "Peer-Reviewed Research Paper 2 (Title to be added)",
        status: "Published Paper",
        authors: "Faysal Mahmud et al.",
        conference: "Details to be verified & updated by author",
        year: "Published",
        focus: "Cybersecurity & Intrusion Detection in EV Charging Infrastructure",
        doi: "",
        link: "#",
        note: "Exact paper title, conference/journal, year, and DOI link to be verified and added manually."
      }
    ]
  },

  // Leadership & Volunteering Experience
  experience: [
    {
      id: "exp-rd-club",
      role: "Organizer & Event Coordinator",
      company: "AIUB Research and Development (R&D) Club",
      duration: "Active Volunteer & Organizer",
      location: "AIUB, Dhaka, Bangladesh",
      type: "Academic Leadership",
      description: [
        "Organized and coordinated university-wide academic research seminars, technical workshops, and student development events.",
        "Helped organize research and development seminar featuring Prof. Dr. Nowshad Amin, engaging approximately 150 student attendees.",
        "Coordinated 'Unlocking Research: A Beginner’s Blueprint' featuring Prof. Pushp Lata of BITS Pilani, with more than 260 registered participants.",
        "Assisted in executing hands-on research methodology workshops and academic writing initiatives.",
        "Supported the Erasmus Mundus scholarship and international exchange seminar for engineering students.",
        "Organized specialized machine learning seminar featuring Dr. Md. Saef Ullah Miah."
      ]
    },
    {
      id: "exp-scout",
      role: "Team Leader & Volunteer",
      company: "Scout Volunteering & Community Service",
      duration: "Approximately 3 Years of Service",
      location: "Bangladesh & International",
      type: "Community Leadership",
      description: [
        "Dedicated approximately three years to active community service, humanitarian initiatives, and youth leadership.",
        "Led and participated in humanitarian food and clothing distribution drives supporting underserved communities.",
        "Active volunteer in a community health and medical camp that provided medical assistance to more than 1,300 people.",
        "Served as Team Leader in two Scout camps, directing logistics, field activities, safety protocols, and team coordination.",
        "Participated as a delegate in the International 3rd SANSO Scout Jamboree, held March 8–14."
      ]
    }
  ],

  // Achievements & Competitions (Accurately documented)
  certifications: [
    {
      title: "Winner — Abstract Presentation Competition",
      issuer: "State University",
      date: "Competition Award",
      id: "1st Place / Winner",
      link: "#"
    },
    {
      title: "Winner — Physics Poster Presentation Competition",
      issuer: "University Poster Competition",
      date: "Academic Award",
      id: "1st Place / Winner",
      link: "#"
    },
    {
      title: "Winner — Abstract Presentation Competition",
      issuer: "Southeast University",
      date: "Competition Award",
      id: "1st Place / Winner",
      link: "#"
    },
    {
      title: "2nd Round Qualifier — Bangladesh / GP FutureMakers",
      issuer: "Grameenphone / FutureMakers",
      date: "National Contest",
      id: "Second Round Qualifier",
      link: "#"
    },
    {
      title: "Participant — Microsoft Office Specialist (MOS) State Championship",
      issuer: "MOS State Championship",
      date: "Championship Participant",
      id: "State Competitor",
      link: "#"
    },
    {
      title: "Participant — Three Minute Thesis (3MT) Competition",
      issuer: "Chittagong University of Engineering & Technology (CUET)",
      date: "Academic Competition",
      id: "CUET 3MT Competitor",
      link: "#"
    },
    {
      title: "Participant — Sciblitz 2.0 Science & Tech Contest",
      issuer: "Chittagong University of Engineering & Technology (CUET)",
      date: "Tech Competition",
      id: "Sciblitz 2.0 Participant",
      link: "#"
    },
    {
      title: "Participant & Delegate — International 3rd SANSO Scout Jamboree",
      issuer: "SANSO International Scout Jamboree (March 8–14)",
      date: "International Delegate",
      id: "SANSO Jamboree Delegate",
      link: "#"
    },
    {
      title: "Team Leader — National & Regional Scout Camps",
      issuer: "Scouts Leadership Service",
      date: "Two Camps as Team Leader",
      id: "Team Leader Designation",
      link: "#"
    }
  ],

  // Security & Admin Configuration
  admin: {
    passcode: "cse2026",
    lastUpdated: "2026-10-22"
  }
};

// Export to window object for global client access
if (typeof window !== "undefined") {
  window.DEFAULT_PORTFOLIO_DATA = DEFAULT_PORTFOLIO_DATA;
}
