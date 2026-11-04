/**
 * Featured Projects Catalog
 * 
 * Each project contains descriptive details, tech stacks, and action links.
 * Missing links (empty strings) are clearly displayed as disabled/pending
 * in the UI to prevent broken navigation.
 */

export const projectsData = [
  {
    id: "healthcare-monitoring",
    title: "AI-Based Healthcare Monitoring System",
    shortTitle: "Healthcare AI",
    badge: "Featured • AI & Health",
    description:
      "An AI-powered healthcare monitoring platform designed to analyze soldier health parameters and identify potential health risks through real-time machine learning inference.",
    impact:
      "Processes vitals streaming in real time, triggering proactive health alerts and predictive risk factor flags.",
    technologies: ["Python", "FastAPI", "React", "Machine Learning", "SQLite"],
    category: "AI / Healthcare",
    featured: true,
    // Links: Leave empty if pending; UI renders a clear "Source Pending" or "Demo Pending" state
    githubUrl: "",
    demoUrl: "",
    videoUrl: "",
    themeColor: "from-blue-600/20 to-cyan-500/10",
    accentColor: "#3B82F6",
    mockupType: "vital-dashboard"
  },
  {
    id: "aimentor-platform",
    title: "AiMentor: AI-Powered Coding Platform",
    shortTitle: "AiMentor",
    badge: "Featured • EdTech & AI",
    description:
      "A personalized coding education platform featuring skill assessments, learning analysis, and an AI-powered mentoring experience tailored to student progress.",
    impact:
      "Evaluates code syntax, recommends tailored coding drills, and provides contextual AI feedback without manual instructor bottleneck.",
    technologies: ["React", "Python", "Flask", "SQLAlchemy", "AI Integration"],
    category: "Full Stack / AI",
    featured: true,
    githubUrl: "",
    demoUrl: "",
    videoUrl: "",
    themeColor: "from-indigo-600/20 to-purple-500/10",
    accentColor: "#6366F1",
    mockupType: "code-editor"
  },
  {
    id: "via-health-organizer",
    title: "VIA: Family Health Organizer",
    shortTitle: "VIA Organizer",
    badge: "Featured • Web App",
    description:
      "A personal and family health management platform designed to organize medical documents, medications, appointments, reminders, and health-related records.",
    impact:
      "Centralizes records for multi-member families with smart scheduling, dosage reminders, and encrypted health document storage.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    category: "Frontend / Full Stack",
    featured: true,
    githubUrl: "",
    demoUrl: "",
    videoUrl: "",
    themeColor: "from-emerald-600/20 to-teal-500/10",
    accentColor: "#10B981",
    mockupType: "records-table"
  },
  {
    id: "skinfederated-fl",
    title: "SkinFederated: Privacy-Preserving FL",
    shortTitle: "SkinFederated",
    badge: "Research • Privacy AI",
    description:
      "A privacy-focused federated learning research project for skin lesion classification, combining distributed model training with differential privacy techniques.",
    impact:
      "Trains distributed convolutional neural networks across simulated hospital nodes without centralizing raw dermatological imagery, fortified with Opacus differential privacy.",
    technologies: ["Python", "PyTorch", "Flower", "Opacus", "Federated Learning"],
    category: "Research / Deep Learning",
    featured: false,
    githubUrl: "",
    demoUrl: "",
    videoUrl: "",
    themeColor: "from-cyan-600/20 to-blue-500/10",
    accentColor: "#06B6D4",
    mockupType: "federated-nodes"
  }
];
