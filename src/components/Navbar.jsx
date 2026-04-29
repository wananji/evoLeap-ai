function Navbar() {
  return (
    <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-100 dark:border-zinc-800">
      <div className="flex justify-between items-center h-16 px-6 max-w-[1200px] mx-auto w-full">
        <div className="flex items-center gap-10">
          <span className="text-xl font-bold tracking-tighter" style={{ color: '#235CEB' }}>
            EvoLeap AI
          </span>
          <nav className="hidden md:flex items-center gap-6">
            <a className="font-nav-item text-nav-item text-zinc-900 dark:text-zinc-50 font-semibold transition-colors duration-200" href="#">
              产品
            </a>
            <a className="font-nav-item text-nav-item text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200" href="#">
              技术
            </a>
            <a className="font-nav-item text-nav-item text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200" href="#">
              合作
            </a>
            <a className="font-nav-item text-nav-item text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200" href="#">
              公司
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="font-nav-item text-nav-item text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 transition-colors">
            Log in
          </button>
          <button className="font-nav-item text-nav-item px-4 py-2 rounded-lg hover:opacity-80 transition-opacity" style={{ backgroundColor: '#235CEB', color: '#ffffff' }}>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
