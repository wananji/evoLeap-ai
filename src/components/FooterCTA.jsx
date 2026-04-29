function FooterCTA() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-xl">
      <div className="bg-surface-soft rounded-xl p-lg flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="space-y-xs text-center md:text-left">
          <h3 className="font-card-title text-card-title">开始使用 EvoLeap</h3>
          <p className="font-body-main text-body-main text-text-secondary">
            立即体验全球领先的人工智能对话系统。
          </p>
        </div>
        <div className="flex gap-sm">
          <button className="px-8 py-2.5 rounded-lg bg-primary text-on-primary font-nav-item text-nav-item hover:opacity-80 transition-opacity">
            试用
          </button>
          <button className="px-8 py-2.5 rounded-lg border border-border-subtle bg-white font-nav-item text-nav-item hover:bg-surface-soft transition-colors">
            联系销售
          </button>
        </div>
      </div>
    </section>
  );
}

export default FooterCTA;
