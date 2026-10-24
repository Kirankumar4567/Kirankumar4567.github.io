import { useState, type FormEvent } from "react";
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import { profile } from "../data";
import { Card, Reveal, Section } from "./ui";

const inputClass =
  "w-full rounded-md border border-line bg-soft/60 px-3 py-2 text-sm outline-none transition-shadow placeholder:text-muted focus:border-fg/40 focus:ring-2 focus:ring-fg/10 dark:border-line-dark dark:bg-soft-dark/60 dark:placeholder:text-muted-dark dark:focus:border-fg-dark/40 dark:focus:ring-fg-dark/10";

const contactItems = [
  { icon: LuMail, title: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: LuPhone, title: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: LuMapPin, title: "Location", value: profile.location },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  // No backend: opens the visitor's email app with the message filled in.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = form.subject || `Hello from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  return (
    <Section
      id="contact"
      title="Let's Work Together"
      subtitle="Hiring for a backend or full-stack role? I'd love to hear about it. I usually reply within a day."
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal className="space-y-6">
          {contactItems.map(({ icon: Icon, title, value, href }) => (
            <Card key={title} className="p-6">
              <div className="flex items-center gap-4">
                <Icon size={22} className="shrink-0 text-muted dark:text-muted-dark" />
                <div className="min-w-0">
                  <h3 className="font-medium">{title}</h3>
                  {href ? (
                    <a href={href} className="break-words text-muted hover:text-fg dark:text-muted-dark dark:hover:text-fg-dark">
                      {value}
                    </a>
                  ) : (
                    <p className="text-muted dark:text-muted-dark">{value}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </Reveal>

        <Reveal delay={0.05}>
          <Card className="p-6">
            <h3 className="mb-5 font-medium">Send a Message</h3>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input required placeholder="Your Name" aria-label="Your name" className={inputClass} {...field("name")} />
                <input required type="email" placeholder="Your Email" aria-label="Your email" className={inputClass} {...field("email")} />
              </div>
              <input placeholder="Subject" aria-label="Subject" className={inputClass} {...field("subject")} />
              <textarea
                required
                rows={5}
                placeholder="Your Message"
                aria-label="Your message"
                className={`${inputClass} resize-none`}
                {...field("message")}
              />
              <button
                type="submit"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-fg text-sm font-medium text-bg transition-colors hover:bg-fg/90 dark:bg-fg-dark dark:text-bg-dark dark:hover:bg-fg-dark/90"
              >
                <LuSend size={16} /> Send Message
              </button>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
