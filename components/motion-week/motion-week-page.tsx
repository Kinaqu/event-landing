"use client";

import { motion, useScroll, useTransform } from "motion/react";

import {
  galleryPanels,
  heroBands,
  highlights,
  lineup,
  programDays,
  quickStats,
  tickets,
  tracks,
} from "@/components/motion-week/data";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.35, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.18, 1, 0.22, 1] }}
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
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
      <div>
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-white/55">
          {label}
        </p>
        <h2 className="mt-4 max-w-3xl font-headline text-[clamp(4rem,10vw,8rem)] uppercase leading-[0.82] text-white">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-lg leading-relaxed text-white/72">{copy}</p>
    </div>
  );
}

function TickerRow({
  items,
  reverse,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const loopItems = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-white/10 bg-white/[0.04] ${className}`}
    >
      <div
        className={`ticker-track flex min-w-max gap-3 py-3 ${reverse ? "ticker-reverse" : ""}`}
      >
        {loopItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap px-2"
          >
            <span className="font-headline text-3xl uppercase leading-none text-white">
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
    <span className="inline-flex items-center rounded-full border border-white/14 bg-white/[0.06] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/72">
      {children}
    </span>
  );
}

export function MotionWeekPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -120]);
  const posterY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);
  const haloScale = useTransform(scrollYProgress, [0, 0.18], [1, 1.22]);
  const atmosphereY = useTransform(scrollYProgress, [0.3, 0.75], [40, -60]);

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--color-bg)] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,250,133,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,97,32,0.2),transparent_24%),radial-gradient(circle_at_55%_72%,rgba(0,135,255,0.2),transparent_30%),linear-gradient(180deg,#050505_0%,#090909_46%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:linear-gradient(180deg,white,transparent_88%)]" />
        <div className="noise-layer absolute inset-0 opacity-[0.18]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="font-headline text-4xl uppercase leading-none text-white">
              Motion Week
            </span>
            <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/48 sm:inline">
              Oct 09-12 / Brooklyn Navy Yard
            </span>
          </div>
          <nav className="hidden items-center gap-6 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/62 lg:flex">
            <a href="#about" className="transition hover:text-white">
              About
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
          </nav>
          <a
            href="#tickets"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-acid)] bg-[var(--color-acid)] px-5 py-2.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black transition duration-300 hover:translate-y-[-2px] hover:bg-white"
          >
            Get festival pass
          </a>
        </div>
      </header>

      <TickerRow items={heroBands} className="relative z-10" />

      <section className="relative z-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-10 lg:pb-16 lg:pt-10">
          <motion.div style={{ y: heroY }} className="relative min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <SmallCapsule>Creative industry event</SmallCapsule>
              <SmallCapsule>4-day live program</SmallCapsule>
              <SmallCapsule>Talks / workshops / screenings / performances</SmallCapsule>
            </div>

            <div className="mt-8 flex items-start gap-4 md:gap-7">
              <div className="hidden shrink-0 flex-col gap-3 pt-3 md:flex">
                <span className="vertical-label text-white/34">Brooklyn</span>
                <span className="vertical-label text-[var(--color-orange)]">
                  Oct 09-12
                </span>
              </div>

              <div className="relative">
                <p className="font-mono text-[0.82rem] uppercase tracking-[0.38em] text-[var(--color-acid)]">
                  Disciplines collide. Screens wake up.
                </p>
                <h1 className="mt-3 font-headline text-[clamp(6rem,19vw,16rem)] uppercase leading-[0.78] tracking-[-0.03em] text-white">
                  Motion
                  <span className="hero-shadow block text-[var(--color-orange)]/95">
                    Week
                  </span>
                </h1>
                <div className="pointer-events-none absolute -left-2 top-8 -z-10 h-40 w-40 rounded-full border border-[var(--color-blue)]/35 bg-[var(--color-blue)]/10 blur-2xl" />
                <motion.div
                  style={{ scale: haloScale }}
                  className="pointer-events-none absolute -right-6 top-12 -z-10 h-52 w-52 rounded-full border border-[var(--color-acid)]/30 bg-[radial-gradient(circle,rgba(0,250,133,0.18),transparent_65%)]"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <p className="max-w-xl text-lg leading-relaxed text-white/78 sm:text-xl">
                Four dense days of motion design, visual culture, creative code,
                sound, film language, live demos, and experimental media. Built
                like a festival. Programmed like a pressure system.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "11 stages, rooms, labs, and installations",
                  "68 speakers, studios, and contributors",
                  "Review arena for fresh portfolios and studio talent",
                  "Late-night screenings, performances, and signal rooms",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-l border-white/14 pl-4 text-sm uppercase tracking-[0.16em] text-white/56"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-acid)] bg-[var(--color-acid)] px-7 py-3 font-mono text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-black transition duration-300 hover:translate-y-[-2px] hover:bg-white"
              >
                Register now
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-7 py-3 font-mono text-[0.74rem] uppercase tracking-[0.28em] text-white transition duration-300 hover:border-white/32 hover:bg-white/[0.08]"
              >
                Explore program
              </a>
            </div>
          </motion.div>

          <motion.div style={{ y: posterY }} className="relative min-h-[680px] min-w-0">
            <div className="relative h-full rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-6">
              <div className="absolute inset-3 rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(255,97,32,0.18),transparent_28%),radial-gradient(circle_at_12%_74%,rgba(0,135,255,0.2),transparent_32%),rgba(0,0,0,0.58)]" />
              <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/20 bg-black/40 backdrop-blur">
                <div className="ticket-ring h-full w-full rounded-full border border-dashed border-[var(--color-acid)]/60" />
              </div>
              <div className="relative grid h-full gap-4 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                <div className="flex min-w-0 flex-col justify-between gap-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/45 p-5 backdrop-blur-sm">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-white/50">
                      Transmission notes
                    </p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {quickStats.map((stat) => (
                        <div key={stat.label} className="border-t border-white/10 pt-3">
                          <p className="font-headline text-6xl uppercase leading-none text-white">
                            {stat.value}
                          </p>
                          <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/46">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                    <div className="poster-tile rotate-[-4deg]">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-white/50">
                        Main room
                      </span>
                      <p className="mt-3 font-headline text-6xl uppercase leading-none text-[var(--color-acid)]">
                        Talks
                      </p>
                      <p className="mt-5 text-sm text-white/70">
                        Keynotes, studio breakdowns, and creative collisions on
                        giant screens.
                      </p>
                    </div>
                    <div className="poster-tile rotate-[3deg] border-[var(--color-orange)]/45">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-white/50">
                        After dark
                      </span>
                      <p className="mt-3 font-headline text-6xl uppercase leading-none text-[var(--color-orange)]">
                        Live
                      </p>
                      <p className="mt-5 text-sm text-white/70">
                        Screenings, AV sets, and installations that keep the
                        venue moving after hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid min-w-0 gap-4 pt-10">
                  <div className="poster-grid rounded-[1.4rem] border border-white/12 bg-black/40 p-4 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-3">
                      {["Signal", "Render", "Pulse", "Afterimage"].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1rem] border border-white/10 bg-white/[0.04] p-3"
                        >
                          <p className="font-headline text-[2.35rem] uppercase leading-[0.9] text-white">
                            {item}
                          </p>
                          <p className="mt-2 font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/44">
                            Program block
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="poster-tall relative overflow-hidden rounded-[1.4rem] border border-white/12 bg-black/45 p-5">
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-blue)]">
                      Venue atmosphere
                    </p>
                    <p className="mt-3 max-w-sm font-headline text-[4rem] uppercase leading-[0.84] text-white">
                      A live poster system for the whole city block.
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
          </motion.div>
        </div>
      </section>

      <TickerRow items={["Live demos", "Installations", "Portfolio reviews", "Title sequences", "Brand systems", "AV performance"]} reverse />

      <Reveal className="relative z-10" >
        <section id="about" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <SectionIntro
            label="About the event"
            title="Not a quiet conference. A moving cultural program."
            copy="Motion Week brings together the people shaping how visuals move now: motion designers, art directors, 3D artists, brand teams, filmmakers, creative developers, and image-makers working across live, digital, and spatial media. The point is not to observe from a distance. It is to enter the current."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="max-w-3xl font-headline text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.84] text-white">
                Motion Week is where title design, branding, code, sound, story,
                and moving image stop acting like separate disciplines.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                "Built for people who think visually, direct rhythm, build scenes, and care about how culture feels on screen.",
                "Programmed with contrast: dense technical workshops, broad visual talks, portfolio rooms, installations, late screenings, and spontaneous conversations.",
                "Made to generate momentum, not just attendance. You leave with references, contacts, pressure, and the need to make better work.",
              ].map((paragraph) => (
                <div key={paragraph} className="border-l border-white/12 pl-5 text-base leading-relaxed text-white/72">
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="relative z-10">
        <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <SectionIntro
            label="What to expect"
            title="A packed program with contrast and tempo."
            copy="The structure shifts on purpose. Big-room keynotes give way to lab intensity, review-floor urgency, screenings, installations, and night programming. The page mirrors that rhythm instead of flattening it."
          />

          <div className="mt-12 grid auto-rows-[minmax(220px,1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 ${
                  index === 1 || index === 4 ? "xl:col-span-2" : ""
                }`}
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
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/46">
                      {item.meta}
                    </p>
                    <h3 className="mt-4 max-w-md font-headline text-[3.25rem] uppercase leading-[0.84] text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-base leading-relaxed text-white/74">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </Reveal>

      <section id="lineup" className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <SectionIntro
            label="Lineup"
            title="A cast list built to pull you in."
            copy="A mix of title designers, brand directors, motion studios, filmmakers, sound artists, 3D image-makers, and creative technologists. The lineup is treated like a wall of campaign posters instead of a row of polite headshots."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lineup.map((person, index) => (
            <Reveal key={person.name}>
              <motion.article
                whileHover={{
                  y: -12,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)] opacity-60 transition duration-500 group-hover:scale-110" />
                <div className="relative flex min-h-[300px] flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/56">
                      Featured
                    </span>
                  </div>
                  <div>
                    <p className="font-headline text-[3.2rem] uppercase leading-[0.82] text-white">
                      {person.name}
                    </p>
                    <p className="mt-3 max-w-xs text-sm uppercase tracking-[0.18em] text-white/54">
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

      <TickerRow items={["Signal", "Render", "Pulse", "Afterimage", "Open floor", "Main room", "Cinema", "Dock stage"]} className="relative z-10" />

      <section id="program" className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <SectionIntro
            label="Program"
            title="A four-day pressure system."
            copy="The schedule is intentionally dense. Talks feed reviews, workshops lead into screenings, and the whole thing keeps mutating after sunset. It should feel impressive at a glance and usable once you lean in."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-4">
          {programDays.map((day) => (
            <Reveal key={day.day}>
              <article className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-acid),var(--color-orange),var(--color-blue))]" />
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/46">
                      {day.day} / {day.date}
                    </p>
                    <h3 className="mt-3 font-headline text-[4rem] uppercase leading-[0.84] text-white">
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
                      <p className="mt-3 max-w-xs font-headline text-[2rem] uppercase leading-[0.86] text-white">
                        {session.name}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <SectionIntro
            label="Tracks"
            title="Six themes. One moving identity."
            copy="Tracks are framed like big editorial slabs rather than neat product features. Each one names a pressure point in contemporary creative work."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {tracks.map((track, index) => (
            <Reveal key={track.title}>
              <motion.article
                whileHover={{ y: -8, x: index % 2 === 0 ? 8 : -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/28 p-6 sm:p-8"
              >
                <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.07),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <span className="font-headline text-7xl uppercase leading-none text-white/18">
                    {track.index}
                  </span>
                  <div className="max-w-xl">
                    <h3 className="font-headline text-[3rem] uppercase leading-[0.86] text-white">
                      {track.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/72">
                      {track.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 overflow-hidden py-20 lg:py-28">
        <motion.div style={{ y: atmosphereY }}>
          <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
            <Reveal>
              <SectionIntro
                label="Atmosphere"
                title="A preview of the world you’re entering."
                copy="Because the event is fictional, the atmosphere is conveyed through composition, texture, and pacing instead of stock photos. The promise is still sensory: projection, noise, movement, giant type, screen light, crowded rooms, and a city block full of visual energy."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="grid min-h-[620px] gap-4 sm:grid-cols-2">
                {galleryPanels.slice(0, 4).map((panel, index) => (
                  <Reveal key={panel.title}>
                    <motion.article
                      whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
                      transition={{ type: "spring", stiffness: 210, damping: 18 }}
                      className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 p-6 ${
                        index === 0
                          ? "bg-[radial-gradient(circle_at_top_left,rgba(0,250,133,0.24),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"
                          : index === 1
                            ? "bg-[radial-gradient(circle_at_bottom_right,rgba(255,97,32,0.26),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"
                            : index === 2
                              ? "bg-[radial-gradient(circle_at_top_right,rgba(0,135,255,0.26),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"
                              : "bg-[radial-gradient(circle_at_bottom_left,rgba(255,28,131,0.24),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"
                      }`}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_55%)]" />
                      <div className="relative flex h-full flex-col justify-between">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/46">
                          Atmosphere panel
                        </p>
                        <div>
                          <h3 className="font-headline text-[3.4rem] uppercase leading-[0.84] text-white">
                            {panel.title}
                          </h3>
                          <p className="mt-4 max-w-xs text-base leading-relaxed text-white/72">
                            {panel.text}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <aside className="flex min-h-[620px] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-orange)]">
                      Preview note
                    </p>
                    <h3 className="mt-4 font-headline text-[clamp(3.4rem,6vw,6rem)] uppercase leading-[0.82] text-white">
                      Controlled intensity, not chaos.
                    </h3>
                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/72">
                      The visual world is dense on purpose: bold type, compressed
                      schedule energy, moving bands, layered gradients, and a
                      sharper color system. It still keeps hierarchy intact so the
                      visitor can feel the momentum without losing the plot.
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
                    <p className="font-headline text-[2.6rem] uppercase leading-[0.84] text-white">
                      {galleryPanels[4].title}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-white/68">
                      {galleryPanels[4].text}
                    </p>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="tickets" className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <SectionIntro
            label="Tickets"
            title="Choose your entry point and move fast."
            copy="The conversion section stays in the event language. These are tickets, not SaaS pricing cards. The goal is urgency, clarity, and enough contrast for the primary CTA to punch through."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 xl:grid-cols-[1.1fr_0.9fr_1fr]">
          {tickets.map((ticket, index) => (
            <Reveal key={ticket.tier}>
              <motion.article
                whileHover={{ y: -12, rotate: index === 1 ? -1.2 : 1.2 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-8 ${
                  index === 1
                    ? "border-[var(--color-acid)]/50 bg-[radial-gradient(circle_at_top_right,rgba(0,250,133,0.18),transparent_40%),rgba(255,255,255,0.06)]"
                    : index === 0
                      ? "border-white/12 bg-[radial-gradient(circle_at_bottom_left,rgba(255,97,32,0.18),transparent_40%),rgba(255,255,255,0.04)]"
                      : "border-white/12 bg-[radial-gradient(circle_at_top_left,rgba(0,135,255,0.18),transparent_40%),rgba(255,255,255,0.04)]"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.4)_0_16px,transparent_16px_30px)] opacity-30" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/50">
                        {ticket.note}
                      </p>
                      <h3 className="mt-4 font-headline text-[3.3rem] uppercase leading-[0.84] text-white">
                        {ticket.tier}
                      </h3>
                    </div>
                    <span className="font-headline text-[4.8rem] uppercase leading-none text-white">
                      {ticket.price}
                    </span>
                  </div>
                  <p className="mt-8 flex-1 text-base leading-relaxed text-white/74">
                    {ticket.description}
                  </p>
                  <a
                    href="#final-cta"
                    className={`mt-8 inline-flex w-fit items-center justify-center rounded-full px-6 py-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] transition duration-300 hover:translate-y-[-2px] ${
                      index === 1
                        ? "bg-[var(--color-acid)] text-black hover:bg-white"
                        : "border border-white/16 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/[0.1]"
                    }`}
                  >
                    Reserve pass
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="final-cta" className="relative z-10 pb-24 pt-8 lg:pb-28">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
                <div>
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--color-acid)]">
                    Final call
                  </p>
                  <h2 className="mt-4 font-headline text-[clamp(4.4rem,11vw,10rem)] uppercase leading-[0.78] text-white">
                    Be in the room when the whole thing lights up.
                  </h2>
                </div>
                <div>
                  <p className="max-w-xl text-lg leading-relaxed text-white/74">
                    Motion Week is for the people building the next wave of moving
                    image, design systems, digital atmospheres, and visual story.
                    If that is your world, you should not hear about it later.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#tickets"
                      className="inline-flex items-center justify-center rounded-full border border-[var(--color-acid)] bg-[var(--color-acid)] px-7 py-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black transition duration-300 hover:translate-y-[-2px] hover:bg-white"
                    >
                      Lock in your pass
                    </a>
                    <a
                      href="#lineup"
                      className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-7 py-3 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                    >
                      View lineup
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
