import { experience, skills, education } from "@/data/resume";
import ThemeToggleButton from "@/components/theme-toggle-button";

const EMAIL = "aslanmaleki@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL}`;
const GITHUB_USERNAME = "AslanMaleki";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-1 flex-col bg-stone-50 text-stone-800 transition-colors dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-mono text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              Aslan Maleki
            </h1>
            <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
              Oklahoma City, OK
            </p>
            <address className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <a
                className="hover:border-b hover:border-stone-300 dark:hover:border-stone-600"
                href={EMAIL_HREF}
              >
                Email
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <a
                className="hover:border-b hover:border-stone-300 dark:hover:border-stone-600"
                href="https://www.linkedin.com/in/AslanMaleki"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <a
                className="hover:border-b hover:border-stone-300 dark:hover:border-stone-600"
                href={`https://github.com/${GITHUB_USERNAME}`}
                rel="noreferrer"
              >
                GitHub
              </a>
            </address>
          </div>
          <div className="shrink-0">
            <ThemeToggleButton />
          </div>
        </header>

        <main>
          <section id="summary" aria-labelledby="summary-heading" className="mt-8">
            <h2 id="summary-heading" className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-200">
              Summary
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-300">
              Sales leader and business executive with a strategic mindset and deep
              understanding of business dynamics. Demonstrated success in driving revenue
              growth and closing $200 million in revenue over the past decade through
              effective business development strategies and capitalizing profitable
              opportunities. Proven expertise in identifying and closing lucrative deals,
              fostering strategic partnerships, and driving sustainable business growth.
            </p>
          </section>

          <section id="experience" aria-labelledby="experience-heading" className="mt-12">
            <h2 id="experience-heading" className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-200">
              Experience
            </h2>
            <div className="mt-6 space-y-10">
              {experience.map((job) => (
                <article key={`${job.organization}-${job.role}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold leading-tight sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                      {job.organization} · {job.location}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-stone-400 dark:text-stone-500">
                    {job.dates}
                  </p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-stone-600 dark:text-stone-300 marker:text-amber-600 dark:marker:text-amber-300">
                    {job.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" aria-labelledby="skills-heading" className="mt-12">
            <h2 id="skills-heading" className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-200">
              Skills
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600 dark:border-stone-700 dark:text-stone-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section id="education" aria-labelledby="education-heading" className="mt-12">
            <h2 id="education-heading" className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-200">
              Education
            </h2>
            <div className="mt-4">
              {education.map((edu) => (
                <div key={edu.school} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">{edu.school}</h3>
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                    {edu.location}
                  </p>
                  <p className="text-sm text-stone-600 dark:text-stone-300">{edu.degree}</p>
                  <p className="text-sm text-stone-400 dark:text-stone-500">{edu.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-stone-200 pb-6 pt-6 text-center text-sm text-stone-400 dark:border-stone-800 dark:text-stone-500">
          © {currentYear} Aslan Maleki · Oklahoma City, OK
        </footer>
      </div>
    </div>
  );
}