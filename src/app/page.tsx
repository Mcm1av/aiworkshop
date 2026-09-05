import { resume } from "@/data/resume";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex-1">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 py-8 sm:px-6 sm:py-12">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {resume.name}
              </h1>
              <p className="text-xl font-medium text-zinc-600 dark:text-zinc-300">
                {resume.title}
              </p>
            </div>
            <ThemeToggle />
          </div>
          <p className="text-zinc-500 dark:text-zinc-400">{resume.location}</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
            <a
              href={`mailto:${resume.email}`}
              className="underline-offset-4 hover:underline"
            >
              {resume.email}
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <section aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="mt-10 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Summary
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-200">
            {resume.summary}
          </p>
        </section>

        <section aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="mt-10 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Experience
          </h2>
          <div className="mt-4 flex flex-col gap-8">
            {resume.experience.map((job) => (
              <article key={`${job.role}-${job.organization}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {job.organization} • {job.location}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.dates}
                  </p>
                </div>
                <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-zinc-700 dark:text-zinc-200">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="mt-10 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Skills
          </h2>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {resume.skills.map((group) => (
              <div
                key={group.name}
                className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <dt className="text-sm font-semibold">{group.name}</dt>
                <dd className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="mt-10 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Education
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            {resume.education.map((degree) => (
              <article key={degree.degree}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">{degree.degree}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {degree.dates}
                  </p>
                </div>
                {degree.detail && (
                  <p className="text-zinc-600 dark:text-zinc-300">
                    {degree.detail}
                  </p>
                )}
                <p className="text-zinc-600 dark:text-zinc-300">
                  {degree.school}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {degree.honors}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="coursework-heading">
          <h2
            id="coursework-heading"
            className="mt-10 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Related Coursework
          </h2>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-zinc-700 dark:text-zinc-200">
            {resume.coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="certifications-heading">
          <h2
            id="certifications-heading"
            className="mt-10 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Certifications
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            {resume.certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-zinc-700 dark:text-zinc-200">
                  {cert.name}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {cert.dates}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-14 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-1 px-4 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400 sm:px-6">
          <p>
            © {year} {resume.name}
          </p>
        </div>
      </footer>
    </div>
  );
}