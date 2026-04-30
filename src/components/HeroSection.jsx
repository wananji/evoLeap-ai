function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        <div className="lg:col-span-2 space-y-md">
          <div className="aspect-[16/9] w-full rounded-xl bg-gradient-rose flex items-center justify-center relative overflow-hidden">
            <h1 className="font-hero-title text-hero-title text-white drop-shadow-sm"></h1>
          </div>
          <div className="pt-sm border-t border-border-subtle">
            <h2 className="font-section-title text-section-title text-text-primary">
              EvoLeap News
            </h2>
            <p className="font-meta-data text-meta-data text-text-secondary mt-xs">
              2024年11月15日
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-md">
          <div className="group cursor-pointer p-md border border-border-subtle rounded-xl hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
            <p className="font-meta-data text-meta-data text-text-secondary mb-xs">
              国家级交付保障
            </p>
            <h3 className="font-card-title text-card-title mb-sm">
              三层堡垒架构
            </h3>
            <div className="w-full h-32 rounded-lg overflow-hidden relative">
              <img 
                src="/三重盾.jpg" 
                alt="三层堡垒架构"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="group cursor-pointer p-md border border-border-subtle rounded-xl hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
            <p className="font-meta-data text-meta-data text-text-secondary mb-xs">
              颠覆性商业模式
            </p>
            <h3 className="font-card-title text-card-title mb-sm">
              Base+RaaS
            </h3>
            <div className="w-full h-48 rounded-lg overflow-hidden relative">
              <img 
                src="/商业模式2.jpg" 
                alt="Base+RaaS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
