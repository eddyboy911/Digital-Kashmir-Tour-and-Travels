import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, type RevealDirection } from '@/components/Reveal';

const tiles: { src: string; alt: string; span: string; title: string; sub: string; dir: RevealDirection }[] = [
  {
    src: 'https://images.unsplash.com/photo-1566837497312-7be4a47a1d70?auto=format&fit=crop&w=900&q=70',
    alt: 'Houseboats on Dal Lake at sunrise',
    span: 'md:col-span-2 md:row-span-2',
    title: 'Dal Lake',
    sub: 'Houseboats · Shikaras',
    dir: 'left',
  },
  {
    src: 'https://images.unsplash.com/photo-1606117331085-5760e3b58520?auto=format&fit=crop&w=900&q=70',
    alt: 'Snow-capped peaks of Gulmarg',
    span: '',
    title: 'Gulmarg',
    sub: 'Snow',
    dir: 'right',
  },
  {
    src: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=70',
    alt: 'Lidder river, Pahalgam',
    span: '',
    title: 'Pahalgam',
    sub: 'Lidder valley',
    dir: 'up',
  },
  {
    src: 'https://images.unsplash.com/photo-1591019479261-1a103585c559?auto=format&fit=crop&w=900&q=70',
    alt: 'Pangong Lake, Ladakh',
    span: '',
    title: 'Pangong',
    sub: 'Ladakh',
    dir: 'right',
  },
  {
    src: 'https://images.unsplash.com/photo-1614608997588-8c1c5b3a3b3a?auto=format&fit=crop&w=900&q=70',
    alt: 'Gurez Valley meadows',
    span: '',
    title: 'Gurez',
    sub: 'Hidden valley',
    dir: 'left',
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="section surface-cream"
    >
      <Container>
        <SectionHeading
          eyebrow="Glimpses"
          title={
            <>
              From our travellers’
              <span className="font-extralight italic text-jade-700"> cameras.</span>
            </>
          }
          subtitle="A small slice of what you’ll see. We update this gallery every season with new submissions from our guests."
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal key={tile.title} direction={tile.dir}>
              <figure
                className={`img-zoom-on-hover card-premium relative h-full w-full overflow-hidden rounded-3xl ${tile.span}`}
              >
                <img
                  src={tile.src}
                  alt={tile.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-5 text-white">
                  <p className="font-display text-xl font-bold leading-tight">
                    {tile.title}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.22em] text-slate-200/90">
                    {tile.sub}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
