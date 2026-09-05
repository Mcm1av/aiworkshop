import { resume } from "@/data/resume";
import { ThemeToggle } from "@/components/theme-toggle";

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex-1">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
            {resume.name}
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-5 sm:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="px-6 pb-20 pt-16 sm:pt-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
                  <ShieldIcon />
                  {resume.title}
                </p>
                <span className="hidden items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 sm:inline-flex">
                  <MapPinIcon />
                  {resume.location}
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                {resume.name}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                {resume.summary}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${resume.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <EmailIcon />
                  Get in touch
                </a>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {resume.email}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-24 bg-zinc-50 px-6 py-16 sm:py-20 dark:bg-zinc-900/50"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="about-heading"
              className="mb-8 text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl dark:text-blue-400"
            >
              About
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {resume.summary}
            </p>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="scroll-mt-24 px-6 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="experience-heading"
              className="mb-10 text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl dark:text-blue-400"
            >
              Experience
            </h2>
            <div className="flex flex-col gap-12">
              {resume.experience.map((job) => (
                <article
                  key={`${job.role}-${job.organization}`}
                  className="border-l-2 border-blue-600 pl-6 dark:border-blue-400"
                >
                  <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl">{job.role}</h3>
                      <p className="text-lg text-blue-700 dark:text-blue-400">
                        {job.organization} • {job.location}
                      </p>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.dates}</p>
                  </div>
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-zinc-700 dark:text-zinc-300">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="scroll-mt-24 bg-zinc-50 px-6 py-16 sm:py-20 dark:bg-zinc-900/50"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="skills-heading"
              className="mb-10 text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl dark:text-blue-400"
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resume.skills.map((group) => (
                <div key={group.name} className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-blue-300">
                    {group.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          aria-labelledby="education-heading"
          className="scroll-mt-24 px-6 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="education-heading"
              className="mb-10 text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl dark:text-blue-400"
            >
              Education
            </h2>
            <div className="flex flex-col gap-8">
              {resume.education.map((degree) => (
                <article
                  key={degree.degree}
                  className="border-l-2 border-green-600 pl-6 dark:border-green-400"
                >
                  <div className="mb-1 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-xl font-bold">{degree.degree}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {degree.dates}
                    </p>
                  </div>
                  {degree.detail && (
                    <p className="text-zinc-600 dark:text-zinc-300">{degree.detail}</p>
                  )}
                  <p className="text-zinc-600 dark:text-zinc-300">{degree.school}</p>
                  <p className="mt-1 inline-block rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-500/10 dark:text-green-300">
                    {degree.honors}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          aria-labelledby="certifications-heading"
          className="scroll-mt-24 bg-zinc-50 px-6 py-16 sm:py-20 dark:bg-zinc-900/50"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="certifications-heading"
              className="mb-10 text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl dark:text-blue-400"
            >
              Certifications
            </h2>
            <ul className="flex flex-col gap-5">
              {resume.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col gap-1 border-l-2 border-purple-600 pl-6 sm:flex-row sm:items-baseline sm:justify-between dark:border-purple-400"
                >
                  <span className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
                    {cert.name}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{cert.dates}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="mb-3 text-xl font-bold text-zinc-800 dark:text-zinc-100">
                Related Coursework
              </h3>
              <ul className="flex flex-wrap gap-2">
                {resume.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full bg-white px-3 py-1 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-24 px-6 py-16 sm:py-20"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
            <h2
              id="contact-heading"
              className="text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl dark:text-blue-400"
            >
              Contact
            </h2>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-300">
              Interested in security or IT roles? I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${resume.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <EmailIcon />
                {resume.email}
              </a>
              <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                <MapPinIcon />
                {resume.location}
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            © {year} {resume.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}