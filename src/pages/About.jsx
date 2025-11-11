import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="bg-white pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-2xl font-medium tracking-tight text-black mb-6">About</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.1,duration:.6}} className="text-neutral-700 leading-7">
          Ihsan Fauzi is a professional photographer specializing in fashion, product, and architecture. His work embraces minimalism and timeless aesthetics, emphasizing light, texture, and structure. Available worldwide for editorial, commercial, and brand collaborations.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-neutral-600">
          <div>
            <h3 className="text-neutral-800 font-medium mb-2">Expertise</h3>
            <ul className="space-y-1">
              <li>Fashion Editorial</li>
              <li>Product Still Life</li>
              <li>Architecture</li>
            </ul>
          </div>
          <div>
            <h3 className="text-neutral-800 font-medium mb-2">Clients</h3>
            <ul className="space-y-1">
              <li>Luxury Brands</li>
              <li>Design Studios</li>
              <li>Architects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-neutral-800 font-medium mb-2">Recognition</h3>
            <ul className="space-y-1">
              <li>International Features</li>
              <li>Exhibitions</li>
              <li>Awards</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
