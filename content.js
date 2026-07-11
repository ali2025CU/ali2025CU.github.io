/* ============================================================
   ALL SITE CONTENT LIVES IN THIS FILE.
   To add a paper, app, or post: copy an existing block { ... },
   paste it at the TOP of the list, and edit the text.
   No other file needs to change.
   ============================================================ */

const SITE = {
  name: "Ali Ebrahimpourlighvani",
  title: "Doctoral Student, Teachers College, Columbia University",
  tagline:
    "I study learning, technology, and leadership — and build AI-powered tools for education. This site collects my research, empirical studies, learning apps, and experiments with machine learning and agentic AI.",
  links: [
    { label: "Google Scholar", url: "#" }, // TODO: paste your Scholar URL
    { label: "LinkedIn", url: "#" },       // TODO: paste your LinkedIn URL
  ],
  /* Homepage hero stats — update as your work grows */
  statPapers: "—",  // e.g. "14"
  statApps: "—",    // e.g. "3"
  /* Scrolling topic strip under the hero */
  topics: [
    "AI in Education",
    "LLM Tutoring Agents",
    "Personalized Learning",
    "Instructional Design",
    "Leadership & Change",
    "Human-AI Collaboration",
  ],
};

/* ---------- News / Blog feed (homepage) ---------- */
const NEWS = [
  {
    date: "2026-07-10",
    title: "Website launched",
    text: "Welcome! This site will track my research projects, learning apps, and AI experiments.",
    link: "",
  },
  {
    date: "2026-06-01",
    title: "Placeholder: new working paper",
    text: "Example news item — replace with a real announcement (a paper, talk, or app release).",
    link: "",
  },
];

/* ---------- Section content ----------
   Each item: title, meta (year/type), description, tags, links.
   Leave links [] if none. */
const SECTIONS = {
  academic: [
    {
      title: "Placeholder: Dissertation research project",
      meta: "In progress · 2026",
      description:
        "One-paragraph summary of your dissertation or main research line: question, method, and why it matters.",
      tags: ["Empirical study", "Education"],
      links: [{ label: "Preprint", url: "#" }],
    },
    {
      title: "Placeholder: Research paper title",
      meta: "Journal / Conference · 2025",
      description:
        "Abstract-style summary of a published or submitted paper. Replace with your real work.",
      tags: ["Quantitative", "Learning sciences"],
      links: [{ label: "PDF", url: "#" }, { label: "DOI", url: "#" }],
    },
    {
      title: "Placeholder: Empirical study",
      meta: "Working paper · 2025",
      description:
        "Description of an empirical study — participants, design, key findings.",
      tags: ["Mixed methods"],
      links: [],
    },
  ],

  apps: [
    {
      title: "Placeholder: Learning app name",
      meta: "Web app · 2026",
      description:
        "What the app teaches, who it's for, and the learning-design principles behind it.",
      tags: ["Learning design", "EdTech"],
      links: [{ label: "Try it", url: "#" }, { label: "Code", url: "#" }],
    },
    {
      title: "Placeholder: Instructional design project",
      meta: "Design case · 2025",
      description:
        "A design case: the problem, your design decisions, and what you learned.",
      tags: ["Instructional design"],
      links: [],
    },
  ],

  leadership: [
    {
      title: "Placeholder: Leadership essay or idea",
      meta: "Essay · 2026",
      description:
        "A short piece on educational leadership — e.g., leading technology adoption in schools, or evidence-based decision making.",
      tags: ["Leadership", "Education policy"],
      links: [],
    },
    {
      title: "Placeholder: Talk or workshop",
      meta: "Presentation · 2025",
      description: "A talk, workshop, or facilitation experience related to leadership.",
      tags: ["Professional development"],
      links: [{ label: "Slides", url: "#" }],
    },
  ],

  ml: [
    {
      title: "Placeholder: Machine learning project",
      meta: "Project · 2026",
      description:
        "An ML analysis or model — dataset, approach, results. E.g., predicting student outcomes from learning-platform data.",
      tags: ["Python", "scikit-learn"],
      links: [{ label: "Code", url: "#" }],
    },
    {
      title: "Placeholder: Methods note",
      meta: "Tutorial · 2025",
      description: "A tutorial or explainer on an ML method relevant to education research.",
      tags: ["Methods", "Tutorial"],
      links: [],
    },
  ],

  aimodels: [
    {
      title: "Placeholder: Working with LLMs",
      meta: "Experiment · 2026",
      description:
        "Experiments with large language models — prompting studies, fine-tuning, or evaluation for educational tasks.",
      tags: ["LLM", "Evaluation"],
      links: [],
    },
    {
      title: "Placeholder: Model comparison study",
      meta: "Analysis · 2025",
      description: "Comparing AI models on an education-relevant benchmark or task.",
      tags: ["Benchmarking"],
      links: [],
    },
  ],

  agentic: [
    {
      title: "Placeholder: AI agent for learning",
      meta: "Prototype · 2026",
      description:
        "An agentic AI system in education — e.g., a tutoring agent, feedback agent, or research assistant for teachers.",
      tags: ["Agents", "Tutoring"],
      links: [{ label: "Demo", url: "#" }],
    },
    {
      title: "Placeholder: Position piece on agentic AI in education",
      meta: "Essay · 2026",
      description:
        "Your perspective on how autonomous AI agents will change teaching, learning, and school leadership.",
      tags: ["Agentic AI", "Future of education"],
      links: [],
    },
  ],
};
