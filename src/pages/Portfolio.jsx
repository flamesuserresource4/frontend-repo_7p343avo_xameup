import { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const projects = [
  { id: 1, title: 'Editorial — Monochrome Study', cover: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop', year: '2024' },
  { id: 2, title: 'Product — Precision Metals', cover: 'https://images.unsplash.com/photo-1520975922284-4e1294253a57?q=80&w=1600&auto=format&fit=crop', year: '2024' },
  { id: 3, title: 'Architecture — Silent Lines', cover: 'https://images.unsplash.com/photo-1526178611216-1a1b3c55a4f7?q=80&w=1600&auto=format&fit=crop', year: '2023' },
]

function FadeIn({ children, delay = 0 }) {
  const controls = useAnimation()
  const ref = useInView({ once: true, margin: '-50px' })

  useEffect(() => { if (ref.inView) controls.start('visible') }, [ref.inView, controls])

  return (
    <motion.div
      ref={ref.ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } } }}
    >
      {children}
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <main className="bg-white pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-2xl font-medium tracking-tight text-black mb-8">Selected Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <FadeIn key={p.id} delay={idx * 0.05}>
              <a href="#" className="group block">
                <div className="overflow-hidden rounded-md bg-neutral-100">
                  <img src={p.cover} alt={p.title} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-neutral-600">
                  <span className="group-hover:text-black transition-colors">{p.title}</span>
                  <span>{p.year}</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  )
}
