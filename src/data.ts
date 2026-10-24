// ─────────────────────────────────────────────────────────────
//  All the site's content lives here. Edit this file to update
//  your portfolio; you don't need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Kiran Kumar Reddy",
  fullName: "Sapa Kiran Kumar Reddy",
  role: "Software Engineer",
  tagline: "Software Engineer · Backend & Full-Stack · NIT Warangal",
  location: "Hyderabad, India · Open to remote",
  email: "kkreddy650@gmail.com",
  phone: "+91 93901 68818",
  github: "https://github.com/Kirankumar4567",
  linkedin: "https://www.linkedin.com/in/kiran-kumar-reddy-sapa-12762b24b/",
  resume: "/resume.pdf",
  photo: "/kiran.jpg",
  // Hero text. The `highlight` part is shown in bright white.
  subtitle: { before: "Software Engineer building production backends with ", highlight: "2 years", after: " of experience" },
  intro:
    "I build subscription payments, search, recommendations and LLM-powered content tools for a multilingual learning app and the Aadhan news platform, using Python, FastAPI and React.",
};

export const stats = [
  { value: "2 yrs", label: "Experience" },
  { value: "13", label: "Production services" },
  { value: "1,700+", label: "Commits shipped" },
];

export type SkillGroup = { title: string; icon: "code" | "server" | "layout" | "database" | "cloud" | "brain"; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Languages", icon: "code", items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++"] },
  { title: "Backend", icon: "server", items: ["FastAPI", "Node.js", "REST APIs", "Pydantic", "Webhooks", "Event-driven consumers"] },
  { title: "Frontend & Mobile", icon: "layout", items: ["React", "Redux Toolkit", "React Query", "Ant Design", "Tailwind CSS", "Remix", "React Native"] },
  { title: "Data & Messaging", icon: "database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Apache Kafka", "Elasticsearch", "Kibana"] },
  { title: "Cloud & DevOps", icon: "cloud", items: ["AWS", "Docker", "Kubernetes", "Linux", "Git", "CI/CD"] },
  { title: "AI & Integrations", icon: "brain", items: ["Claude API", "OpenAI", "Razorpay", "PhonePe Autopay", "Apple/Google IAP", "Firebase (FCM)", "FastPix"] },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  tags: string[];
  link?: { label: string; href: string };
};

export const jobs: Job[] = [
  {
    role: "Software Engineer",
    company: "Aadhan Media Pvt. Ltd. · intern → full time",
    period: "May 2025 – Present",
    location: "Hyderabad",
    summary:
      "One of the main backend engineers on the company's multilingual video-learning app, and a regular contributor to the Aadhan news app and the CMS behind both.",
    points: [
      "365+ commits to the learning app's FastAPI service: OTP login over SMS and WhatsApp, courses, playlists, watch progress, ratings and the paywall.",
      "Subscription billing across Razorpay, PhonePe Autopay and Apple/Google in-app purchases, with webhooks and Kafka consumers for renewals, failed-debit retries, mandate upgrades and free trials.",
      "v2 search on Elasticsearch with custom ranking, suggestions and trending queries, plus Redis caching for the busiest feed and search endpoints.",
      "Most of the learning app's content-production pipeline in the CMS (1,200+ commits): role dashboards from script writer to publisher, studio booking with crew-conflict checks, and FastPix video workflows.",
      "LLM features for editors: a Claude Messages API router and AI-generated YouTube scripts, shoot guidelines and script validation.",
    ],
    tags: ["Python", "FastAPI", "React", "MongoDB", "Kafka", "Redis", "Elasticsearch", "Kubernetes"],
  },
  {
    role: "Software Developer Intern",
    company: "Dattam Labs",
    period: "Aug 2024 – Jan 2025",
    location: "Hyderabad",
    summary: "Mobile app development and AWS logging infrastructure.",
    points: [
      "Built a cross-platform React Native app for iOS and Android with React Native Paper and Tamagui.",
      "Set up centralised AWS logging: CloudFront and ALB logs flow through S3 and SQS into an ELK stack on EC2, with index lifecycle policies.",
    ],
    tags: ["React Native", "AWS", "S3", "SQS", "ELK Stack"],
    link: {
      label: "Certificate",
      href: "https://drive.google.com/file/d/1wPsfAQuuxiyno6n7zFMDNiRrjvl6WmQX/view?usp=sharing",
    },
  },
];

export type Project = {
  title: string;
  kind: string;
  icon: "card" | "search" | "clapper" | "bot" | "cloud" | "code";
  flow: string[];
  description: string;
  tags: string[];
  code?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Subscription Billing",
    kind: "Work · Learning app",
    icon: "card",
    flow: ["Webhook", "Kafka", "Consumer", "MongoDB"],
    description:
      "One subscription record per user across four payment rails. Handles renewals, failed-debit retries, PhonePe mandate upgrades and cancellations, and free-trial eligibility.",
    tags: ["FastAPI", "Kafka", "Razorpay", "PhonePe", "Apple/Google IAP"],
  },
  {
    title: "Search & Home Feed",
    kind: "Work · Learning app",
    icon: "search",
    flow: ["Query", "Elasticsearch", "Ranking", "Redis"],
    description:
      "v2 search with custom ranking, suggestions and trending queries, plus a course recommender and system playlists that decide what learners see first.",
    tags: ["Elasticsearch", "Redis", "MongoDB", "Python"],
  },
  {
    title: "Content Production CMS",
    kind: "Work · Learning app",
    icon: "clapper",
    flow: ["Script", "Shoot", "Edit", "Publish"],
    description:
      "Role-based dashboards that take a lesson from script to published video, with studio booking, asset review, FastPix uploads and LLM-generated scripts and shoot guidelines.",
    tags: ["React", "Ant Design", "FastAPI", "Claude API", "FastPix"],
  },
  {
    title: "AI Astrology Platform",
    kind: "Side project",
    icon: "bot",
    flow: ["Birth details", "Kundli", "LLM chat"],
    description:
      "Generates a personalised Kundli from birth details and answers follow-up questions with an LLM chatbot grounded in the user's chart.",
    tags: ["Remix", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI"],
  },
  {
    title: "ECR Lifecycle Automation",
    kind: "Side project",
    icon: "cloud",
    flow: ["Image push", "EventBridge", "Lambda", "ECR policy"],
    description:
      "EventBridge detects new repositories and image pushes and triggers a Lambda that applies lifecycle policies, so old images are cleaned up automatically.",
    tags: ["AWS Lambda", "EventBridge", "ECR", "IAM"],
  },
  {
    title: "Language Detection API",
    kind: "Side project",
    icon: "code",
    flow: ["Text", "fastText lid.176", "Language"],
    description: "A containerised FastAPI service that detects the language of input text across 176 languages.",
    tags: ["Python", "FastAPI", "fastText", "Docker"],
    code: "https://github.com/Kirankumar4567/FastAPI-Lang-Detector",
  },
];

export const education = {
  school: "National Institute of Technology, Warangal",
  degree: "B.Tech, Computer Science and Engineering",
  period: "2020 – 2024",
  achievements: ["JEE Main 2020: All India Rank 1724", "Specialist, Coding Ninjas", "Additional Secretary, NITW Sports Club"],
};

