import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/_layout/work")({
  head: () => ({
    meta: [
      { title: "Work | Vaibhav Patel" },
      { name: "description", content: "Selected projects by Vaibhav Patel — full-stack web and mobile applications, backend systems, and production deployments." },
      { property: "og:title", content: "Work | Vaibhav Patel" },
      { property: "og:description", content: "Full-stack projects, backend systems, and production work." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    name: "FestivoMaster-Frontend",
    tag: "Frontend · Event Management",
    desc: "A modern and responsive event & invitation management frontend built with React.js and Tailwind CSS. Designed with a clean UI, smooth user experience, reusable components, and fully responsive layouts across all devices.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "Reusable Components"],
    github: "https://github.com/JayAmbe13/FestivoMaster-Frontend",
    live: null,
    highlight: true,
  },
  {
    name: "StudyNotion-Frontend",
    tag: "Frontend · Ed-Tech Platform",
    desc: "The front end of the StudyNotion platform built using ReactJS — a popular JavaScript library for building user interfaces. Features dynamic and responsive UI with modern design patterns for an engaging learning experience.",
    stack: ["React.js", "JavaScript", "CSS", "Responsive UI", "REST API Integration"],
    github: "https://github.com/JayAmbe13/StudyNotion-Frontend",
    live: null,
    highlight: true,
  },
  {
    name: "StudyNotion_Server",
    tag: "Backend · Ed-Tech API",
    desc: "A full-stack ed-tech backend API built with Node.js, Express & MongoDB. Features JWT authentication, Razorpay payment integration, Cloudinary media uploads, and role-based access control (Student, Instructor, Admin).",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Razorpay", "Cloudinary"],
    github: "https://github.com/JayAmbe13/StudyNotion_Server",
    live: null,
  },
  {
    name: "Employee-Creation-WebApp-Server",
    tag: "Backend · CRUD API",
    desc: "Backend API for employee management supporting full CRUD operations with strong validation, consistent error handling, and a clean, scalable architecture designed for production readiness.",
    stack: ["Node.js", "Express", "JavaScript", "REST API", "Validation"],
    github: "https://github.com/JayAmbe13/Employee-Creation-WebApp-Server",
    live: null,
  },
];

function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        A mix of production work, internship projects, and personal builds — across full-stack web and mobile.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`card-hover rounded-xl border border-border bg-card p-6 flex flex-col ${
              p.highlight ? "md:col-span-1" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-primary font-medium">{p.tag}</p>
                <h2 className="text-xl md:text-2xl font-semibold mt-1">{p.name}</h2>
              </div>
              <div className="flex gap-2">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                     className="h-9 w-9 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                     className="h-9 w-9 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-xl border border-border bg-card p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold">More on GitHub</h3>
          <p className="text-sm text-muted-foreground mt-1">All my open work and experiments live on GitHub.</p>
        </div>
        <a href="https://github.com/JayAmbe13" target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:glow-primary transition-shadow">
          <Github className="h-4 w-4" /> github.com/JayAmbe13
        </a>
      </div>
    </div>
  );
}
