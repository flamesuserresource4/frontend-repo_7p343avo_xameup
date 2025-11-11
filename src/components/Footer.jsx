export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Ihsan Fauzi. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@ihsanfauzi.com" className="hover:text-black transition-colors">Email</a>
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  )
}
