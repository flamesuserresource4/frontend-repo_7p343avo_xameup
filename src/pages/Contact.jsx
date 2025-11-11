import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main className="bg-white pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-2xl font-medium tracking-tight text-black mb-6">Contact</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.1,duration:.6}} className="text-neutral-700 mb-8">
          For bookings, collaborations, or press inquiries, please reach out using the form below or email directly at hello@ihsanfauzi.com
        </motion.p>
        <form className="grid grid-cols-1 gap-5">
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-600">Name</label>
            <input type="text" className="mt-2 w-full border border-black/10 rounded-md px-3 py-2 outline-none focus:border-black/30 transition-colors" placeholder="Your name" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-600">Email</label>
            <input type="email" className="mt-2 w-full border border-black/10 rounded-md px-3 py-2 outline-none focus:border-black/30 transition-colors" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-600">Message</label>
            <textarea rows="5" className="mt-2 w-full border border-black/10 rounded-md px-3 py-2 outline-none focus:border-black/30 transition-colors" placeholder="Tell me about your project" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-black text-white text-sm tracking-wide hover:bg-neutral-900 transition-colors">Send</button>
        </form>
      </div>
    </main>
  )
}
