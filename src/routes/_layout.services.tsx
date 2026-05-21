import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2,
  Server,
  Layers,
  Smartphone,
  Database,
  TabletSmartphone,
  Monitor,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/_layout/services")({
  head: () => ({
    meta: [
      { title: "Services | Vaibhav Patel" },
      {
        name: "description",
        content:
          "Professional web and mobile development services — responsive websites, scalable backends, and cross-platform mobile apps for Android & iOS.",
      },
      { property: "og:title", content: "Services | Vaibhav Patel" },
      {
        property: "og:description",
        content:
          "Full-stack web & mobile development services — responsive, device-friendly, and cross-platform.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Monitor,
    title: "Frontend Web Development",
    desc: "Pixel-perfect, fully responsive websites that look stunning on every device — desktops, tablets, and mobiles. Built with modern frameworks like React.js and styled with Tailwind CSS for fast, accessible, and SEO-friendly user experiences.",
    highlights: [
      "Responsive & device-friendly layouts",
      "Modern UI/UX with smooth animations",
      "SEO-optimized & accessible",
      "Cross-browser compatibility",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Server,
    title: "Backend Web Development",
    desc: "Robust, scalable server-side architectures powering your web applications. RESTful APIs, secure authentication, payment gateway integration, and optimized database management — engineered for performance and reliability.",
    highlights: [
      "RESTful API design & development",
      "JWT authentication & RBAC",
      "Payment & third-party integrations",
      "Optimized database architecture",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    desc: "Complete end-to-end web solutions — from beautiful, responsive frontends to powerful backend systems. Seamless integration of client and server layers for cohesive, production-ready applications that scale.",
    highlights: [
      "End-to-end application delivery",
      "Responsive on all screen sizes",
      "Scalable architecture patterns",
      "CI/CD & deployment ready",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Smartphone,
    title: "Frontend Mobile App Development",
    desc: "Beautiful, cross-platform mobile interfaces for both Android and iOS — built with React Native & Expo. Native-feeling UIs with smooth gestures, animations, and adaptive layouts that work flawlessly across all devices.",
    highlights: [
      "Cross-platform Android & iOS",
      "Native-feeling UI components",
      "Smooth animations & gestures",
      "Adaptive layouts for all screen sizes",
    ],
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Database,
    title: "Backend Mobile App Development",
    desc: "Powerful backend infrastructure for mobile applications — real-time data sync, push notifications, secure APIs, and cloud services. Designed to handle high traffic and deliver seamless mobile experiences on Android & iOS.",
    highlights: [
      "Real-time data synchronization",
      "Push notification systems",
      "Secure mobile API endpoints",
      "Cloud storage & media handling",
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: TabletSmartphone,
    title: "Full-Stack Mobile App Development",
    desc: "Complete cross-platform mobile solutions from concept to App Store — combining polished React Native frontends with robust Node.js backends. One codebase, two platforms — delivering native Android & iOS experiences.",
    highlights: [
      "Single codebase for Android & iOS",
      "End-to-end mobile delivery",
      "App Store & Play Store deployment",
      "Offline-first capabilities",
    ],
    gradient: "from-indigo-500/20 to-sky-500/20",
    iconColor: "text-indigo-400",
  },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Services</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
        Professional web and mobile development services — responsive, device-friendly websites and cross-platform Android & iOS mobile applications.
      </p>

      {/* Web Services */}
      <div className="mt-14">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-500 to-violet-500" />
          <h2 className="text-2xl md:text-3xl font-bold">Web Development</h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Every web project is built to be <span className="text-foreground font-medium">fully responsive</span> and{" "}
          <span className="text-foreground font-medium">device-friendly</span> — delivering flawless experiences on desktops, tablets, and mobile browsers.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {services.slice(0, 3).map((s) => (
            <div
              key={s.title}
              className="card-hover group rounded-xl border border-border bg-card p-6 flex flex-col relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-md bg-primary/10 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile App Services */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-rose-500" />
          <h2 className="text-2xl md:text-3xl font-bold">Mobile App Development</h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          All mobile applications are built as{" "}
          <span className="text-foreground font-medium">cross-platform</span> solutions — delivering native-quality experiences on both{" "}
          <span className="text-foreground font-medium">Android</span> and{" "}
          <span className="text-foreground font-medium">iOS</span> from a single codebase.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {services.slice(3, 6).map((s) => (
            <div
              key={s.title}
              className="card-hover group rounded-xl border border-border bg-card p-6 flex flex-col relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-md bg-primary/10 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h3 className="text-xl font-semibold">Have a project in mind?</h3>
        <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
          Let's discuss how I can help bring your idea to life — whether it's a responsive website or a cross-platform mobile app.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:glow-primary transition-shadow"
        >
          Get in Touch <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
