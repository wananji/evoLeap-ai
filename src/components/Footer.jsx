function Footer() {
  const footerLinks = [
    {
      title: "服务",
      links: ["Overview", "Index", "GTP-4o"]
    },
    {
      title: "解决方案",
      links: ["About us", "News", "Careers"]
    },
    {
      title: "联系我们",
      links: ["contact@evoleap.ai", "400-888-0199"]
    }
  ];

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 py-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div>
          <span className="font-bold block mb-4" style={{ color: '#235CEB' }}>
            EvoLeap AI
          </span>
          <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 max-w-sm">
            © 2025 EvoLeap AI 极智跃维（北京）科技有限公司
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <span className="font-semibold text-xs uppercase tracking-widest" style={{ color: '#235CEB' }}>
                {section.title}
              </span>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  className="font-sans text-xs text-zinc-500 dark:text-zinc-400 hover:underline transition-all"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
