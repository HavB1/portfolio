export type Project = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: "monetiq",
    title: "Monétiq",
    blurb: "Personal finance with budgets, multi-currency and reports.",
    image: "/monetiq.png",
    url: "https://monetiq.ditolab.com",
  },
  {
    id: "squish",
    title: "Squish",
    blurb: "Image compressor that never leaves your browser.",
    image: "/squish.png",
    url: "https://squish.ditolab.com",
  },
  {
    id: "litquiz",
    title: "LitQuiz",
    blurb: "Turns study notes into quizzes and flashcards with AI.",
    image: "/litquiz-note.png",
    url: "https://note.litquiz.pro",
  },
  {
    id: "doeit",
    title: "Doeit",
    blurb: "Workout planner and progress tracker.",
    image: "/doeit.png",
    url: "https://doeit.ditolab.com",
  },
];

export const nowBuilding = {
  title: "LitQuiz v2: spaced repetition and shared decks",
  label: "Sprint 4",
  progress: 68,
};

export const email = "business@ditolab.com";

export const links = [
  { label: "Email", value: email, href: `mailto:${email}` },
  { label: "GitHub", value: "@HavB1", href: "https://github.com/HavB1" },
  {
    label: "LinkedIn",
    value: "/in/dedfegens",
    href: "https://linkedin.com/in/dedfegens",
  },
];
