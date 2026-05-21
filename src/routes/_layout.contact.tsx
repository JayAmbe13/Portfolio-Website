import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const Route = createFileRoute("/_layout/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Vaibhav Patel" },
      { name: "description", content: "Get in touch with Vaibhav Patel for full-stack web and mobile development opportunities, freelance work, or collaboration." },
      { property: "og:title", content: "Contact | Vaibhav Patel" },
      { property: "og:description", content: "Open to freelance, full-time, and collaboration opportunities." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "vaibhavpatel9398@gmail.com", href: "mailto:vaibhavpatel9398@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9106998569", href: "tel:+919106998569" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vaibhavpatel13", href: "https://linkedin.com/in/vaibhavpatel13" },
  { icon: Github, label: "GitHub", value: "github.com/JayAmbe13", href: "https://github.com/JayAmbe13" },
];

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:vaibhavpatel9398@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Let's build something great</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
        Open to freelance, full-time, and open-source collaboration.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <div className="grid gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-hover group rounded-xl border border-border bg-card p-6 flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-md bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="font-medium truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Based in Surat, Gujarat — India · Available remotely worldwide
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold mb-6">Send a message</h2>
          {sent && (
            <div className="mb-4 rounded-md bg-green-500/10 border border-green-500/30 px-4 py-3 text-sm text-green-400 flex items-center gap-2">
              ✓ Your email client has been opened. Send the message from there!
            </div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can I help?"
                className="min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                required
              />
            </div>
            <Button type="submit" className="w-full gap-2">
              Send Message <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
