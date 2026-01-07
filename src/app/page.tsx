import React from "react";

// ==========================
// Minimal Cybersecurity Portfolio
// Animated Blue Gradient Background
// ==========================

const META = {
  name: "Syarique Izzat Syahrizal",
  tagline: "3rd year Cybersecurity Student at Queen's University",
  email: "syarique.syahrizal5@gmail.com",
  github: "https://github.com/syarique31",
  linkedin: "https://www.linkedin.com/in/syariques/",
  location: "Kingston, Toronto",
  resume: "/Syarique-Syahrizal-Resume.pdf",
};

const PROJECTS = [

  {
  title: "Risk-Driven Cyber Threat Prioritization Engine",
  href: "https://github.com/syarique31/risk-driven-cyber-threat-prioritization-engine",
  summary:
    "Python-based risk prioritization pipeline that generates, normalizes, and scores security incidents to support risk-based SOC triage and decision-making. Incorporates likelihood, impact, exploitability, and business context using NIST CSF and MITRE ATT&CK.",
  meta: "Python · Risk Scoring · NIST CSF · MITRE ATT&CK · SOC",
  },

  {
    title: "Security Analysis Dashboard",
    href: "https://github.com/syarique31/Network-Analysis-Dashboard",
    summary:
      "Splunk dashboard for monitoring network activity, analyzing IPs, and visualizing event data.",
    meta: "Splunk · SIEM · Dashboard",
  },
  {
    title: "Hash-Cracker",
    href: "https://github.com/syarique31/Hash-Cracker",
    summary:
      "Python-based hash cracking tool that reads wordlists and attempts to recover plaintext from cryptographic hashes. Supports MD5, SHA1, and SHA256 algorithms.",
    meta: "Cybersecurity · Python · Hashing",
  },
  {
    title: "Web Exploitation Testing Lab",
    href: "https://github.com/syarique31/Web-Exploitation-Testing-Lab-",
    summary:
      "Docker-based penetration testing lab using Kali Linux and DVWA to practice reconnaissance, exploitation, and reverse shells.",
    meta: "Penetration Testing · Docker · DVWA",
  },
];

const CTF = [
  {
    title: "Blame-Game (picoCTF)",
    href: "https://github.com/syarique31/Blame-Game/tree/main",
    summary: "Used git log to trace faulty commits and uncover the challenge flag.",
    meta: "CTF · Git · Forensics",
  },
  {
    title: "Log-Hunt (picoCTF)",
    href: "https://github.com/syarique31/Log-Hunt",
    summary: "Analyzed system logs to identify suspicious behavior and extract the hidden flag.",
    meta: "CTF · Logs · Threat Analysis",
  },
];


function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-3xl px-5">{children}</div>;
}

function Header() {
  return (
    <header className="py-16">
      <Container>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
          {META.name}
        </h1>
        <p className="mt-2 text-zinc-300">{META.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {[
            { label: "Email", href: `mailto:${META.email}` },
            { label: "GitHub", href: META.github },
            { label: "LinkedIn", href: META.linkedin },
            { label: "Resume", href: META.resume },
          ].map((link) => (
            <a
              key={link.label}
              className="px-3 py-2 rounded border border-sky-400 text-sky-400 hover:bg-sky-400/10 hover:text-sky-300 transition-all"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </header>
  );
}

function SimpleList({
  items,
}: {
  items: Array<{ title: string; href: string; summary?: string; meta?: string }>;
}) {
  return (
    <ul className="divide-y divide-zinc-800">
      {items.map((it) => (
        <li key={it.title} className="py-4">
          <a
            href={it.href}
            className="group block focus:outline-none focus:ring-1 focus:ring-sky-400 rounded transition-all"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-medium group-hover:underline text-sky-400">
                {it.title}
              </span>
            </div>
            {it.summary && <p className="mt-1 text-sm text-zinc-300">{it.summary}</p>}
            {it.meta && <p className="mt-1 text-xs text-zinc-500">{it.meta}</p>}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-sky-400 border-b border-sky-400 pb-2">
          {title}
        </h2>
        <div className="mt-4">{children}</div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact-footer" className="py-14">
      <Container>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Contact", href: `mailto:${META.email}` },
            { label: "GitHub", href: META.github },
            { label: "LinkedIn", href: META.linkedin },
            { label: "Resume", href: META.resume },
          ].map((link) => (
            <a
              key={link.label}
              className="px-3 py-2 rounded border border-sky-400 text-sky-400 hover:bg-sky-400/10 hover:text-sky-300 transition-all"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} {META.name}
        </p>
      </Container>
    </footer>
  );
}

export default function MinimalPortfolio() {
  return (
    <div className="relative min-h-screen text-zinc-100 antialiased overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-zinc-900 to-sky-950 animate-gradient-slow"></div>

      <Header />

      <Section title="Projects">
        <SimpleList items={PROJECTS} />
      </Section>

      <Section title="CTFs">
        <SimpleList items={CTF} />
      </Section>

      <Section title="About">
        <div className="prose prose-invert max-w-none text-zinc-300">
          <p>
            I’m {META.name}, an international student from Saudi Arabia who has lived in five different countries across Asia, the United States, Canada, and the Middle East. 
            I graduated from St. Andrew’s College in Toronto and now study Cybersecurity at Queen’s University. 
          </p>
          
          <p className="mt-4">
            I’m passionate about ethical hacking and cybersecurity defense, and I’ve been focusing on the blue team side, learning how to detect, investigate, and respond to security incidents. I’m especially interested in SOC analysis, where I use tools like Splunk to monitor alerts, analyze threats,
            and strengthen system security. In the future, I hope to move into penetration testing and red teaming to gain experience from both the defensive and offensive sides of cybersecurity.
          </p>

          <p className="mt-4">
           Outside of school, I enjoy running, working out, playing soccer, pickleball, volleyball, and golf, and I find cooking a great way to relax.
           I’ve also started day trading as a side hustle, which has helped me build patience, discipline, and focus. Been collecting Lego Speed Champions and trying to complete the F1 grid.
          </p>

          <p className="mt-4">
            Right now, I’m working on CTFs like picoCTF, building server-based cybersecurity projects, and creating Splunk dashboards to visualize and analyze data. I also share 
            my projects and write-ups online to help others learn. My goal is to show that with consistency and curiosity, anyone can build a meaningful career in cybersecurity.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
}