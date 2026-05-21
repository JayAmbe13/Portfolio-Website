import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg tracking-tight">
            Vaibhav Patel
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    active
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-sm text-muted-foreground"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background/95">
            <div className="px-6 py-3 flex flex-col gap-1 text-sm">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded text-muted-foreground hover:text-primary"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border mt-20">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            ​
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/JayAmbe13" target="_blank" rel="noreferrer"
               className="h-9 w-9 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/vaibhavpatel13" target="_blank" rel="noreferrer"
               className="h-9 w-9 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:vaibhavpatel9398@gmail.com"
               className="h-9 w-9 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
