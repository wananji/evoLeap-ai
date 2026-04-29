function SearchSection() {
  const tags = ["了解EvoLeap", "查看定价", "API 文档"];

  return (
    <section className="bg-surface-soft py-xl">
      <div className="max-w-[1200px] mx-auto px-6 text-center space-y-lg">
        <h2 className="font-section-title text-section-title">有什么可以帮你？</h2>
        <div className="relative max-w-2xl mx-auto">
          <input
            className="w-full h-14 pl-6 pr-14 rounded-full border-none bg-white shadow-sm focus:ring-2 focus:ring-primary/10 font-body-main text-lg placeholder:text-text-tertiary"
            placeholder="咨询关于 EvoLeap 的一切..."
            type="text"
          />
          <button className="absolute right-2 top-2 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-xs">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 rounded-full bg-white border border-border-subtle font-meta-data text-meta-data text-text-secondary cursor-pointer hover:bg-surface-container-low transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
