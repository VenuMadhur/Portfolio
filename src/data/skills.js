/**
 * Skills & Technologies Catalog
 * 
 * Organized by category with verified SVG icons and descriptive tags.
 * No fabricated percentages or progress bars—focused strictly on demonstrated capabilities.
 */

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages for building software, data pipelines, and algorithms",
    items: [
      { name: "Python", icon: "python", tag: "Primary" },
      { name: "JavaScript", icon: "javascript", tag: "Web / ES6+" },
      { name: "SQL", icon: "database", tag: "Relational Queries" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Modern client-side engineering for responsive, accessible web interfaces",
    items: [
      { name: "React", icon: "react", tag: "UI Framework" },
      { name: "Tailwind CSS", icon: "tailwind", tag: "Modern Styling" },
      { name: "HTML5", icon: "html5", tag: "Semantic Markup" },
      { name: "CSS3", icon: "css3", tag: "Layouts & Animations" }
    ]
  },
  {
    category: "Backend Development",
    description: "Server architecture, API design, and asynchronous microservices",
    items: [
      { name: "FastAPI", icon: "fastapi", tag: "High-perf Async" },
      { name: "Flask", icon: "flask", tag: "Microframework" },
      { name: "Python", icon: "python", tag: "Server Logic" },
      { name: "REST APIs", icon: "api", tag: "Service Integration" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Schema design, relational persistence, and query optimization",
    items: [
      { name: "MySQL", icon: "mysql", tag: "RDBMS" },
      { name: "SQLite", icon: "sqlite", tag: "Embedded SQL" }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Deep learning models, privacy preservation, and federated training",
    items: [
      { name: "PyTorch", icon: "pytorch", tag: "Deep Learning" },
      { name: "Machine Learning", icon: "brain", tag: "Scikit-Learn / Math" },
      { name: "Federated Learning", icon: "network", tag: "Distributed AI" },
      { name: "Flower Framework", icon: "flower", tag: "FL Orchestration" },
      { name: "Opacus", icon: "shield", tag: "Differential Privacy" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Developer tooling, version control, API testing, and continuous deployment",
    items: [
      { name: "Git", icon: "git", tag: "Version Control" },
      { name: "GitHub", icon: "github", tag: "Code Hosting & CI" },
      { name: "VS Code", icon: "vscode", tag: "Primary IDE" },
      { name: "Postman", icon: "postman", tag: "API Testing" },
      { name: "Vercel", icon: "vercel", tag: "Cloud Deployment" }
    ]
  }
];
