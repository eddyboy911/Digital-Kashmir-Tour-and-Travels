import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { team } from '@/lib/data';

export function AboutTeam() {
  return (
    <section aria-labelledby="about-team-title" className="section surface-cream">
      <Container className="max-w-5xl">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow">The team</p>
          </Reveal>
          <Reveal delay={1}>
            <h2
              id="about-team-title"
              className="display-lg mt-5 text-balance text-4xl text-slate-900 sm:text-5xl"
            >
              The people you will{' '}
              <span className="font-extralight italic text-jade-700">
                actually talk to.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              No call centres. No middle-men. When you message us, one of these four
              picks up.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}
            >
              <article className="card-premium flex flex-col items-center rounded-3xl border border-slate-200/70 bg-white p-6 text-center">
                <div
                  className={`grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br ${member.gradient} font-display text-2xl font-extrabold text-white shadow-soft`}
                  aria-hidden
                >
                  {member.initial}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                  {member.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
