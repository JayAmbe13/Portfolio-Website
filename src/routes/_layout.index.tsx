import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import vaibhav from "@/assets/vaibhav-face.jpg";

export const Route = createFileRoute("/_layout/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Patel | Portfolio" },
      { name: "description", content: "Portfolio of Vaibhav Patel, full-stack web & mobile app developer from India specializing in Node.js, React, and scalable backend systems." },
      { property: "og:title", content: "Vaibhav Patel | Portfolio" },
      { property: "og:description", content: "Full-stack web & mobile app developer building scalable, production-ready applications." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative grid-bg">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Hi, I'm <span className="text-gradient">Vaibhav Patel</span>
            </h1>
            <p className="mt-5 text-xl md:text-2xl font-medium text-foreground/90">
              Web And Mobile App Developer
            </p>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              B.Tech in Computer Science Engineering. I build scalable, production-ready
              applications across web and mobile — combining clean backend architecture with
              modern frontend experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:glow-primary transition-shadow"
              >
                Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
            <div className="relative rounded-full border border-border bg-card p-2">
              <img
                src={vaibhav}
                alt="Vaibhav Patel"
                className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 rounded-full bg-background border border-primary px-3 py-1.5 text-xs font-medium text-primary">
                ● Available for work
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
