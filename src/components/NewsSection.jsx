function NewsSection() {
  const newsItems = [
    {
      title: "北京口腔医院 × 数字化AI项目",
      date: "2024年9月12日",
      gradient: "bg-gradient-blue"
    },
    {
      title: "同仁眼科医院 × AI临床教学一体化平台",
      date: "2024年9月05日",
      gradient: "bg-gradient-purple"
    },
    {
      title: "福建医科大学附属第一医院 × 自动医疗报告解读系统",
      date: "2024年8月28日",
      gradient: "bg-gradient-green"
    }
  ];

  return (
    <section className="bg-surface-soft py-xl">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end mb-lg">
          <h2 className="font-section-title text-section-title">合作案例</h2>
          <a className="font-nav-item text-nav-item text-secondary hover:underline" href="#">
            查看全部
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-sm rounded-xl border border-border-subtle flex gap-md hover:shadow-md transition-all cursor-pointer">
              <div className={`w-24 h-24 shrink-0 rounded-lg ${item.gradient}`}></div>
              <div className="flex flex-col justify-between py-1">
                <h3 className="font-card-title text-card-title text-sm line-clamp-2">
                  {item.title}
                </h3>
                <p className="font-meta-data text-meta-data text-text-tertiary">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
