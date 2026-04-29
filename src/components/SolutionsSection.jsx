function SolutionsSection() {
  const solutions = [
    {
      title: "Medical Agent OS 2.0",
      description: "自动化的企业级智能助理，重塑工作流程。",
      image: "/image2.png"
    },
    {
      title: "VKA资产化引擎",
      description: "深度学习研究的前沿阵地，探索无限可能。",
      image: "/image3.png"
    },
    {
      title: "GEO 增长引擎",
      description: "为全球顶级企业提供最强大的 AI 算力支持。",
      image: "/image1.png"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-xl">
      <h2 className="font-section-title text-section-title mb-lg">解决方案</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {solutions.map((solution, index) => (
          <div key={index} className="group cursor-pointer">
            <div 
              className="aspect-square w-full rounded-xl mb-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${solution.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span className="text-white font-bold text-2xl tracking-widest drop-shadow-lg">
                {solution.title}
              </span>
            </div>
            <h3 className="font-card-title text-card-title">{solution.title}</h3>
            <p className="font-body-main text-body-main text-text-secondary mt-xs">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolutionsSection;
