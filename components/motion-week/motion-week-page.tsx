"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  audienceGroups,
  faqItems,
  galleryPanels,
  heroBands,
  highlights,
  lineup,
  outcomes,
  programDays,
  quickStats,
  tickets,
  venueNotes,
} from "@/components/motion-week/data";

const PASS_EMAIL = "passes@motionweek.live";

function buildPassLink(tier: string) {
  const subject = encodeURIComponent(`${tier} request / Motion Week`);
  const body = encodeURIComponent(
    [
      "Hi Motion Week team,",
      "",
      `I want to reserve a ${tier}.`,
      "",
      "Name:",
      "Company / Studio:",
      "How many passes:",
      "",
      "Send me the next steps.",
    ].join("\n"),
  );

  return `mailto:${PASS_EMAIL}?subject=${subject}&body=${body}`;
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0.3, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.18, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-white/50">
          {label}
        </p>
        <h2 className="mt-4 max-w-4xl font-headline text-[clamp(3rem,7vw,5.8rem)] uppercase leading-[0.86] text-white">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

function TickerRow({ items }: { items: string[] }) {
  const loopItems = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.03]"
    >
      <div className="ticker-track flex min-w-max gap-4 py-3">
        {loopItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-4 whitespace-nowrap px-2"
          >
            <span className="font-headline text-[2rem] uppercase leading-none text-white sm:text-[2.25rem]">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-[var(--color-acid)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SmallCapsule({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/14 bg-white/[0.05] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/72">
      {children}
    </span>
  );
}

export function MotionWeekPage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -48]);
  const posterY = useTransform(scrollYProgress, [0, 0.2], [0, 42]);
  const haloScale = useTransform(scrollYProgress, [0, 0.18], [1, 1.15]);

  const heroMotionStyle = reduceMotion ? undefined : { y: heroY };
  const posterMotionStyle = reduceMotion ? undefined : { y: posterY };
  const haloMotionStyle = reduceMotion ? undefined : { scale: haloScale };

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--color-bg)] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,250,133,0.16),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(255,97,32,0.18),transparent_24%),radial-gradient(circle_at_58%_78%,rgba(0,135,255,0.16),transparent_30%),linear-gradient(180deg,#050505_0%,#0a0a0a_46%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:linear-gradient(180deg,white,transparent_88%)]" />
        <div className="noise-layer absolute inset-0 opacity-[0.16]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-10">
          <div className="min-w-0">
            <a
              href="#top"
              className="block font-headline text-[2.3rem] uppercase leading-none text-white sm:text-[2.7rem]"
            >
              Motion Week
            </a>
            <p className="hidden font-mono text-[0.68rem] uppercase tracking-[0.3em] text-white/48 sm:block">
              Oct 09-12 / Brooklyn Navy Yard
            </p>
          </div>

          <nav className="hidden items-center gap-6 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/58 lg:flex">
            <a href="#why" className="transition hover:text-white">
              Why Attend
            </a>
            <a href="#lineup" className="transition hover:text-white">
              Lineup
            </a>
            <a href="#program" className="transition hover:text-white">
              Program
            </a>
            <a href="#tickets" className="transition hover:text-white">
              Tickets
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <a
            href={buildPassLink("Studio Pass")}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--color-acid)] bg-[var(--color-acid)] px-4 py-2.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black transition duration-300 hover:translate-y-[-2px] hover:bg-white sm:px-5"
          >
            Get Studio Pass
          </a>
        </div>
      </header>

      <TickerRow items={heroBands} />

      <section id="top" className="relative z-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:px-10 lg:pb-20 lg:pt-12">
          <motion.div style={heroMotionStyle} className="relative min-w-0">
            <div className="flex flex-wrap gap-3">
              <SmallCapsule>Brooklyn / Oct 09-12</SmallCapsule>
              <SmallCapsule>Talks / workshops / screenings</SmallCapsule>
              <SmallCapsule>Review arena / live sets / installations</SmallCapsule>
            </div>

            <div className="mt-8 max-w-5xl">
              <p className="font-mono text-[0.8rem] uppercase tracking-[0.36em] text-[var(--color-acid)]">
                Four charged days for motion, screen design, and creative technology.
              </p>
              <div className="relative mt-4">
                <h1 className="max-w-5xl font-headline text-[clamp(4.8rem,15vw,12.5rem)] uppercase leading-[0.8] tracking-[-0.03em] text-white">
                  Motion
                  <span className="hero-shadow block text-[var(--color-orange)]/95">
                    Week
                  </span>
                </h1>
                <motion.div
                  style={haloMotionStyle}
                  className="pointer-events-none absolute -right-6 top-14 -z-10 h-44 w-44 rounded-full border border-[var(--color-acid)]/28 bg-[radial-gradient(circle,rgba(0,250,133,0.16),transparent_65%)] blur-[1px] sm:h-56 sm:w-56"
                />
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78 sm:text-[1.35rem]">
                A festival-scale program for motion designers, art directors,
                creative coders, filmmakers, and studio teams who want sharper
                references, direct feedback, and real proximity to the people
                shaping the work.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={buildPassLink("Studio Pass")}
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-acid)] bg-[var(--color-acid)] px-7 py-3 font-mono text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-black transition duration-300 hover:translate-y-[-2px] hover:bg-white"
              >
                Reserve Studio Pass
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-7 py-3 font-mono text-[0.74rem] uppercase tracking-[0.28em] text-white transition duration-300 hover:border-white/32 hover:bg-white/[0.08]"
              >
                Explore Program
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="font-headline text-[3.25rem] uppercase leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/48">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "For teams who want the big-picture context behind the next wave of motion work.",
                "For emerging talent looking for review rooms, sharper feedback, and better visibility.",
                "For studios hiring across motion, brand systems, 3D, realtime, and title design.",
                "For people who want talks by day and screenings, performances, and installations at night.",
              ].map((item) => (
                <div
                  key={item}
                  className="border-l border-white/14 pl-4 text-sm leading-relaxed text-white/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            style={posterMotionStyle}
            className="relative min-h-[720px] min-w-0"
          >
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-6">
              <div className="absolute inset-3 rounded-[1.65rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(255,97,32,0.18),transparent_28%),radial-gradient(circle_at_14%_78%,rgba(0,135,255,0.18),transparent_34%),rgba(0,0,0,0.58)]" />
              <div className="relative flex h-full flex-col gap-4">
                <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[1.45rem] border border-white/10 bg-black/45 p-5 backdrop-blur-sm">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-white/46">
                      Reserve early
                    </p>
                    <p className="mt-4 max-w-xs font-headline text-[3.7rem] uppercase leading-[0.84] text-white">
                      Passes start at $69.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/66">
                      Festival access, workshop upgrades, portfolio reviews, and
                      late-night programming across one dense four-day run.
                    </p>
                  </div>

                  <div className="rounded-[1.45rem] border border-white/10 bg-black/38 p-5 backdrop-blur-sm">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--color-acid)]">
                      Core signals
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {quickStats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-[1rem] border border-white/10 bg-white/[0.04] p-3"
                        >
                          <p className="font-headline text-[2.5rem] uppercase leading-none text-white">
                            {stat.value}
                          </p>
                          <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/46">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid flex-1 gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="grid gap-4">
                    <div className="poster-tile rotate-[-2deg]">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-white/48">
                        Who it is for
                      </span>
                      <p className="mt-3 font-headline text-[3.4rem] uppercase leading-[0.86] text-[var(--color-acid)]">
                        Teams.
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-white/72">
                        Motion designers, art directors, studio leads, creative
                        developers, and image-makers who want a denser room than a
                        typical conference.
                      </p>
                    </div>

                    <div className="poster-tile rotate-[1deg] border-[var(--color-orange)]/40">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-white/48">
                        Best reason to go
                      </span>
                      <p className="mt-3 font-headline text-[3.2rem] uppercase leading-[0.86] text-[var(--color-orange)]">
                        Feedback.
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-white/72">
                        Review rooms, practical workshops, live breakdowns, and
                        conversations that improve the work, not just your mood.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.45rem] border border-white/12 bg-black/40 p-5">
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-blue)]">
                        What the week includes
                      </p>
                      <div className="mt-4 grid gap-3">
                        {[
                          "Keynotes and big-room talks",
                          "Hands-on workshops",
                          "Portfolio review arena",
                          "After-dark screenings and AV performances",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm uppercase tracking-[0.16em] text-white/72"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="poster-tall relative overflow-hidden rounded-[1.45rem] border border-white/12 bg-black/45 p-5">
                      <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-orange)]">
                        Venue atmosphere
                      </p>
                      <p className="mt-3 max-w-sm font-headline text-[3.9rem] uppercase leading-[0.84] text-white">
                        A live poster system for a whole city block.
                      </p>
                      <div className="mt-8 grid max-w-sm gap-2 text-sm uppercase tracking-[0.12em] text-white/58">
                        <span>Projection rooms</span>
                        <span>Open review floor</span>
                        <span>Sound-led performances</span>
                        <span>Experimental showcases</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section
        id="why"
        className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <Reveal>
          <SectionIntro
            label="Why Attend"
            title="Reasons to fly in, stay late, and leave with better work."
            copy="Motion Week is not just about seeing good work. It is for people who want tighter references, direct feedback, stronger context, and better conversations than a casual industry meetup can offer."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {outcomes.map((item, index) => (
              <Reveal key={item.title}>
                <motion.article
                  whileHover={reduceMotion ? undefined : { y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 p-6 ${
                    index === 1
                      ? "bg-[radial-gradient(circle_at_top_right,rgba(255,97,32,0.18),transparent_42%),rgba(255,255,255,0.05)]"
                      : "bg-[radial-gradient(circle_at_top_left,rgba(0,250,133,0.12),transparent_42%),rgba(255,255,255,0.04)]"
                  }`}
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/46">
                    {item.proof}
                  </p>
                  <h3 className="mt-4 max-w-xs font-headline text-[2.8rem] uppercase leading-[0.86] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-white/72">
                    {item.description}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <aside className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-acid)]">
                Built for
              </p>
              <h3 className="mt-4 max-w-xl font-headline text-[3.8rem] uppercase leading-[0.86] text-white">
                The people making visual culture move.
              </h3>
              <div className="mt-8 grid gap-4">
                {audienceGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[1.3rem] border border-white/10 bg-black/24 p-4"
                  >
                    <p className="font-headline text-[2rem] uppercase leading-[0.88] text-white">
                      {group.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/68">
                      {group.description}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "68 speakers, studios, and contributors",
              "11 stages, rooms, labs, and installations",
              "Four days of day-to-night programming",
              "Festival, Studio, and Night passes available",
            ].map((proof) => (
              <div
                key={proof}
                className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/58"
              >
                {proof}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <SectionIntro
            label="Program Formats"
            title="One event, several distinct reasons to stay all day."
            copy="The mix matters. Big-room talks create context, workshops make the ideas practical, review sessions create pressure, and the night program keeps the whole thing from collapsing into conference routine."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {highlights.map((item, index) => (
            <Reveal key={item.title}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -8, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 sm:p-7"
              >
                <div
                  className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 ${
                    item.accent === "lime"
                      ? "bg-[radial-gradient(circle_at_top_right,rgba(0,250,133,0.18),transparent_45%)]"
                      : item.accent === "orange"
                        ? "bg-[radial-gradient(circle_at_top_right,rgba(255,97,32,0.18),transparent_45%)]"
                        : item.accent === "blue"
                          ? "bg-[radial-gradient(circle_at_top_right,rgba(0,135,255,0.18),transparent_45%)]"
                          : "bg-[radial-gradient(circle_at_top_right,rgba(255,28,131,0.18),transparent_45%)]"
                  }`}
                />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/46">
                      {item.meta}
                    </p>
                    <h3 className="mt-4 max-w-md font-headline text-[3rem] uppercase leading-[0.86] text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-base leading-relaxed text-white/72">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="lineup"
        className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <Reveal>
          <SectionIntro
            label="Lineup"
            title="Studios, directors, and technologists worth crossing the city for."
            copy="The lineup mixes title designers, brand directors, filmmakers, sound artists, creative developers, and image-makers whose work already shapes how screens feel in public."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lineup.map((person, index) => (
            <Reveal key={person.name}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -10, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)] opacity-60 transition duration-500 group-hover:scale-110" />
                <div className="relative flex min-h-[280px] flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/56">
                      Featured
                    </span>
                  </div>
                  <div>
                    <p className="font-headline text-[3rem] uppercase leading-[0.84] text-white">
                      {person.name}
                    </p>
                    <p className="mt-3 max-w-xs text-sm uppercase tracking-[0.16em] text-white/54">
                      {person.role}
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-acid)]">
                      Focus
                    </p>
                    <p className="mt-2 text-base text-white/76">{person.focus}</p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="program"
        className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <Reveal>
          <SectionIntro
            label="Schedule Snapshot"
            title="A four-day program that keeps changing shape."
            copy="Each day has a different center of gravity, but the rhythm stays useful: talks feed workshops, reviews lead into screenings, and the venue stays active after sunset."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="grid gap-5 xl:grid-cols-2">
            {programDays.map((day) => (
              <Reveal key={day.day}>
                <article className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-acid),var(--color-orange),var(--color-blue))]" />
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/46">
                        {day.day} / {day.date}
                      </p>
                      <h3 className="mt-3 font-headline text-[3.4rem] uppercase leading-[0.84] text-white">
                        {day.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/50">
                      05 blocks
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {day.sessions.map((session) => (
                      <div
                        key={session.time + session.name}
                        className="rounded-[1rem] border border-white/10 bg-black/28 p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-acid)]">
                            {session.time}
                          </span>
                          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/42">
                            {session.tag}
                          </span>
                        </div>
                        <p className="mt-3 max-w-xs font-headline text-[1.9rem] uppercase leading-[0.88] text-white">
                          {session.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <aside className="flex h-full flex-col gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 sm:p-8">
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-orange)]">
                  Venue + practical notes
                </p>
                <h3 className="mt-4 font-headline text-[3.8rem] uppercase leading-[0.84] text-white">
                  Big visual energy, but easy to parse.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-white/72">
                  The venue is designed to keep the atmosphere intense without
                  making the day hard to navigate. You can come for one part of the
                  program or stay until the room turns into screenings and live AV.
                </p>
              </div>

              <div className="grid gap-3">
                {venueNotes.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.2rem] border border-white/10 bg-black/25 p-4"
                  >
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-white/44">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-white/76">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {galleryPanels.map((panel) => (
                  <div
                    key={panel.title}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-headline text-[1.9rem] uppercase leading-[0.9] text-white">
                      {panel.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/66">
                      {panel.text}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section
        id="tickets"
        className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <Reveal>
          <SectionIntro
            label="Tickets"
            title="Choose your pass and reserve a spot."
            copy="The conversion moment needs to be obvious. Pick the access level that matches how deep you want to go, then send the reservation request directly from the page."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 xl:grid-cols-3">
          {tickets.map((ticket, index) => (
            <Reveal key={ticket.tier}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -10, rotate: index === 1 ? -0.8 : 0.8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-8 ${
                  index === 1
                    ? "border-[var(--color-acid)]/45 bg-[radial-gradient(circle_at_top_right,rgba(0,250,133,0.16),transparent_40%),rgba(255,255,255,0.06)]"
                    : index === 0
                      ? "border-white/12 bg-[radial-gradient(circle_at_bottom_left,rgba(255,97,32,0.16),transparent_40%),rgba(255,255,255,0.04)]"
                      : "border-white/12 bg-[radial-gradient(circle_at_top_left,rgba(0,135,255,0.16),transparent_40%),rgba(255,255,255,0.04)]"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.36)_0_16px,transparent_16px_30px)] opacity-30" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/50">
                        {ticket.note}
                      </p>
                      <h3 className="mt-4 font-headline text-[3.1rem] uppercase leading-[0.84] text-white">
                        {ticket.tier}
                      </h3>
                    </div>
                    <span className="font-headline text-[4.6rem] uppercase leading-none text-white">
                      {ticket.price}
                    </span>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-white/74">
                    {ticket.description}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {ticket.includes.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1rem] border border-white/10 bg-black/24 px-4 py-3 text-sm text-white/72"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <a
                    href={buildPassLink(ticket.tier)}
                    className={`mt-8 inline-flex w-fit items-center justify-center rounded-full px-6 py-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] transition duration-300 hover:translate-y-[-2px] ${
                      index === 1
                        ? "bg-[var(--color-acid)] text-black hover:bg-white"
                        : "border border-white/16 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/[0.1]"
                    }`}
                  >
                    Reserve {ticket.tier}
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-black/24 p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/48">
              Reservation flow
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/68">
              Each reservation button opens a prefilled email with the chosen pass
              so the team can reply with availability, workshop booking details,
              and next steps. Studio Pass holders receive workshop and review
              booking instructions after confirming access.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        id="faq"
        className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <Reveal>
          <SectionIntro
            label="FAQ"
            title="Enough practical detail to remove hesitation."
            copy="These are the practical questions most likely to slow down a reservation decision, answered before you need to email the team."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <Reveal key={item.question}>
              <article className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="max-w-xl font-headline text-[2.35rem] uppercase leading-[0.9] text-white">
                  {item.question}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/72">
                  {item.answer}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 pb-10 pt-6">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div>
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--color-acid)]">
                    Final call
                  </p>
                  <h2 className="mt-4 max-w-4xl font-headline text-[clamp(3.8rem,9vw,8.5rem)] uppercase leading-[0.8] text-white">
                    Be in the room before the work moves on without you.
                  </h2>
                </div>
                <div>
                  <p className="max-w-xl text-lg leading-relaxed text-white/74">
                    Motion Week is for people building the next wave of moving
                    image, visual systems, digital atmosphere, and screen-led
                    storytelling. Reserve the pass that fits and the team will
                    send the next step directly.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={buildPassLink("Studio Pass")}
                      className="inline-flex items-center justify-center rounded-full border border-[var(--color-acid)] bg-[var(--color-acid)] px-7 py-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black transition duration-300 hover:translate-y-[-2px] hover:bg-white"
                    >
                      Reserve Studio Pass
                    </a>
                    <a
                      href="#tickets"
                      className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-7 py-3 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                    >
                      Compare Passes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 pb-10 pt-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <p className="font-headline text-[2.7rem] uppercase leading-none text-white">
              Motion Week
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/64">
              Brooklyn Navy Yard. October 09-12. Talks, workshops, screenings,
              reviews, installations, and night programming for motion, image,
              sound, and creative technology.
            </p>
          </div>

          <div className="grid gap-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/48 sm:text-right">
            <a href={`mailto:${PASS_EMAIL}`} className="transition hover:text-white">
              {PASS_EMAIL}
            </a>
            <a href="#program" className="transition hover:text-white">
              View schedule
            </a>
            <a href="#faq" className="transition hover:text-white">
              Read FAQ
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
