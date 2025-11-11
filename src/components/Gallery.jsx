import { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1691493502458-fbe21809a665?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb25jcmV0ZSUyMExpZ2h0fGVufDB8MHx8fDE3NjI4NTQzOTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Concrete Light' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop', title: 'Quiet Fashion' },
  { id: 3, src: 'https://images.unsplash.com/photo-1691493502458-fbe21809a665?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb25jcmV0ZSUyMExpZ2h0fGVufDB8MHx8fDE3NjI4NTQzOTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Studio Product' },
  { id: 4, src: 'https://images.unsplash.com/photo-1691493502458-fbe21809a665?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb25jcmV0ZSUyMExpZ2h0fGVufDB8MHx8fDE3NjI4NTQzOTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Geometry' },
  { id: 5, src: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1400&auto=format&fit=crop', title: 'Monochrome' },
  { id: 6, src: 'https://images.unsplash.com/photo-1691493502458-fbe21809a665?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb25jcmV0ZSUyMExpZ2h0fGVufDB8MHx8fDE3NjI4NTQzOTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Still Life' },
]

function FadeInWhenVisible({ children, delay = 0 }) {
  const controls = useAnimation()
  const ref = useInView({ once: true, margin: '-50px' })

  useEffect(() => {
    if (ref.inView) controls.start('visible')
  }, [ref.inView, controls])

  return (
    <motion.div
      ref={ref.ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 md:gap-8">
          {photos.map((p, idx) => (
            <FadeInWhenVisible key={p.id} delay={idx * 0.05}>
              <div className={`group relative overflow-hidden rounded-md bg-neutral-100 sm:col-span-${(idx % 5 === 0) ? '4' : (idx % 3 === 0) ? '3' : '2'}`}>
                <img
                  src={p.src}
                  alt={p.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="pointer-events-none absolute bottom-3 left-3 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-wide">
                  {p.title}
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}
