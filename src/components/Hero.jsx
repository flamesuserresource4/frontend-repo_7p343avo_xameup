import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black">
              Ihsan Fauzi
            </h1>
            <p className="mt-3 text-sm sm:text-base text-neutral-700 max-w-lg">
              Professional Photographer — Minimal, timeless, luxury-focused imagery across fashion, product, and architecture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
