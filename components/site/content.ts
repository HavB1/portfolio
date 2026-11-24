export type Project = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  url?: string;
  client?: string;
};

export const projects: Project[] = [
  {
    id: "monetiq",
    title: "Monétiq",
    blurb: "Personal finance with budgets, multi-currency and reports.",
    image: "/projects/monetiq.png",
    url: "https://monetiq.ditolab.com",
  },
  {
    id: "dispo",
    title: "dispo",
    blurb: "Find a time that works for everyone. Share a poll, see availability live.",
    image: "/projects/dispo.png",
    url: "https://dispo.ditolab.com",
  },
  {
    id: "squish",
    title: "Squish",
    blurb: "Image compressor that never leaves your browser.",
    image: "/projects/squish.png",
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
    image: "/projects/doeit.png",
    url: "https://doeit.ditolab.com",
  },
  {
    id: "qps",
    title: "Questions Pour les Surdoués",
    blurb:
      "Four connected apps behind Haiti's national intercollegiate culture competition: site, ticketing, school portal and admin.",
    image: "/projects/qps.png",
    url: "https://qps.mhatrix.com",
    client: "MhatriX NG",
  },
  {
    id: "bipp-app",
    title: "Bipp Finance · Client app",
    blurb: "Reliable financial tools that make global transactions simpler and safer.",
    image: "/bipp-client-web.jpg",
    url: "https://app.bippfinance.com",
    client: "Bipp Finance",
  },
  {
    id: "bipp-admin",
    title: "Bipp Finance · Admin",
    blurb: "Client portfolios, financial reports and real-time analytics.",
    image: "/bipp-admin-1.png",
    client: "Bipp Finance",
  },
  {
    id: "bipp-simulator",
    title: "Bipp Finance · Simulator",
    blurb: "Investment projections for informed decisions.",
    image: "/bipp-calc.png",
    url: "https://simulator.bippfinance.com",
    client: "Bipp Finance",
  },
  {
    id: "bipp-website",
    title: "Bipp Finance · Website",
    blurb: "Marketing site, responsive and built for SEO.",
    image: "/projects/bipp-website.png",
    url: "https://bippfinance.com",
    client: "Bipp Finance",
  },
  {
    id: "e4s-tickets",
    title: "E4S · Tickets",
    blurb: "Generates event ticket designs from your own images.",
    image: "/e4s-ticket-making.png",
    url: "https://tickets.e4shaiti.com",
    client: "Entreprises 4 Saisons",
  },
  {
    id: "e4s-admin",
    title: "E4S · Admin",
    blurb: "Service operations and business analytics.",
    image: "/e4s-admin.png",
    client: "Entreprises 4 Saisons",
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
