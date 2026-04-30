import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function MedicalAgentOS() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface-canvas font-body-main antialiased">
      {/* TopNavBar */}
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32 bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-50"></div>
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <h1 className="font-hero-title text-hero-title max-w-4xl mx-auto mb-8 text-primary leading-tight">
              Medical Agent OS 2.0<br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">专为医疗机构打造的 AI 原生运营操作系统</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
              全面超越传统人力模式。从繁琐的医疗流程中解脱，将医疗专业知识转化为高流转、高效率的数字化资产。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">开始免费体验</button>
              <button className="border border-border-subtle bg-white px-8 py-4 rounded-full font-semibold hover:bg-surface-soft transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">play_circle</span> 查看演示视频
              </button>
            </div>
          </div>
          {/* Product Preview Image */}
          <div className="max-w-[1000px] mx-auto mt-20 px-6">
            <div className="rounded-xl border border-border-subtle overflow-hidden shadow-2xl">
              <img 
                className="w-full h-auto" 
                alt="Medical Agent OS 2.0 interface dashboard" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4IIbwIwvPHy_JU0zDcOHoX8GmifXcIwr3qzhtD7YvaqW6y7F0VMTIXgjYonlg9vGWfj7xPEs41gAeHkD3H3tGJbhcmXzQImyOFRWlH6Kka6wqox7hqf6YepELX7PG4AjMiGms3yvQ3-FufZOsPxJpL2vwObrvvSTqhmpeN2ITkk6lp-OA-EhO7nndd4Pb4AgMn822t63XxJ-OQBKIU-TgywqK3GJPW99Ne4h-bZWbSxpjB_WiduAQLvpRX9_A6VSHAWgLFVs6X3x8" 
              />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-section-title text-section-title mb-6">迈向医疗智能的新范式</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>我们正在发布有史以来最智能的医疗 AI 操作系统。Medical Agent OS 2.0 不仅仅是一个助手，它是一个具备完全自主性（Autonomy）、长期规划能力（Planning）以及行业顶尖执行力的生产力引擎。</p>
                  <p>通过 Agent Swarm（智能体集群）架构，我们实现了从"劳动力密集型"向"数字资产型"的跃迁。相比通用型 AI 如 GPT-5.5，Medical Agent OS 2.0 在医疗垂直领域的逻辑严密性与合规性上提升了 40% 以上。</p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="p-4 border-l-2 border-blue-500">
                    <div className="text-2xl font-bold text-primary">85%</div>
                    <div className="text-xs text-text-tertiary">运营成本降低</div>
                  </div>
                  <div className="p-4 border-l-2 border-teal-500">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-text-tertiary">无间断自动化</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white rounded-3xl p-8 border border-border-subtle flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    <span className="text-blue-600 text-4xl">🧠</span>
                  </div>
                  <h3 className="text-card-title font-card-title mb-4">决策大脑 (Decision Core)</h3>
                  <p className="text-text-secondary text-sm">内置万亿级医学知识图谱，支持多步长链推理与自动化任务编排。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmarking Table */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-section-title text-section-title mb-4">性能基准测试</h2>
              <p className="text-text-secondary">在真实医疗场景中与各路方案的深度对比</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="py-6 px-4 text-left font-semibold text-text-tertiary">指标</th>
                    <th className="py-6 px-4 text-center font-bold text-blue-600 bg-blue-50/50 rounded-t-xl">Medical Agent OS 2.0</th>
                    <th className="py-6 px-4 text-center font-medium text-text-secondary">传统人工运营</th>
                    <th className="py-6 px-4 text-center font-medium text-text-secondary">通用 AI 助手</th>
                    <th className="py-6 px-4 text-center font-medium text-text-secondary">竞品医疗 AI A</th>
                    <th className="py-6 px-4 text-center font-medium text-text-secondary">竞品医疗 AI B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  <tr>
                    <td className="py-5 px-4 font-medium">诊前预问诊效率</td>
                    <td className="py-5 px-4 text-center font-bold text-blue-600 bg-blue-50/50">92.7%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">15.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">45.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">78.5%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">72.0%</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 font-medium">病历书写准确率</td>
                    <td className="py-5 px-4 text-center font-bold text-blue-600 bg-blue-50/50">94.3%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">88.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">62.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">89.1%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">85.4%</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 font-medium">GEO 内容生成质量</td>
                    <td className="py-5 px-4 text-center font-bold text-blue-600 bg-blue-50/50">89.6%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">12.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">55.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">68.2%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">61.0%</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 font-medium">合规审计覆盖率</td>
                    <td className="py-5 px-4 text-center font-bold text-blue-600 bg-blue-50/50">99.2%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">5.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">20.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">75.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">68.0%</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 font-medium">患者随访完成率</td>
                    <td className="py-5 px-4 text-center font-bold text-blue-600 bg-blue-50/50">87.4%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">22.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">38.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">64.5%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">59.0%</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 font-medium">专家产能释放率</td>
                    <td className="py-5 px-4 text-center font-bold text-blue-600 bg-blue-50/50">81.8%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">15.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">42.0%</td>
                    <td className="py-5 px-4 text-center text-text-secondary">35.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-section-title text-section-title mb-4">四大智能体矩阵（Agent Swarm）</h2>
                <p className="text-text-secondary">我们构建了端到端的医疗生产力回路，从患者触达到临床决策的全链路数字化。</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
              {/* Marketing Matrix */}
              <div className="col-span-12 md:col-span-6 bg-white/70 backdrop-blur-sm border border-border-subtle p-8 rounded-3xl group hover:-translate-y-0.5 transition-all">
                <h3 className="text-card-title font-card-title mb-3">营销管理矩阵</h3>
                <p className="text-text-secondary text-sm mb-6">名医 IP 数字人 + GEO 内容工厂、流量投流优化、意向锁定智能体</p>
                <img className="w-full h-40 object-cover rounded-xl border border-border-subtle opacity-80 group-hover:opacity-100 transition-opacity" alt="Marketing matrix visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Ck2ys4Gkk19H544d3fDocf6wKrC8epxD1piz7vCnyMxzai4PM-DlsFdc6XPVlMNGb5md2HOqLUmqp5y-3BomSY3Uf4fPPV3cZX43jjd9scxX8WvffbxNtlc19PjCnR4wVgQ0qB22qoT8pzDsZoAoDINp9Vkoiul8SNynyQc12XUqmlbiKKKWErzQM0l5xSbPri_15V6UkRK3nJISvdqr2XHuItite4XK8yV8Q-1o7QjtAt2508YW8iJiY1NP2F0qtxD1b32nkEXv" />
              </div>
              {/* Service Matrix */}
              <div className="col-span-12 md:col-span-6 bg-white/70 backdrop-blur-sm border border-border-subtle p-8 rounded-3xl group hover:-translate-y-0.5 transition-all">
                <h3 className="text-card-title font-card-title mb-3">医疗服务矩阵</h3>
                <p className="text-text-secondary text-sm mb-6">专家临床助手、智能分诊排班</p>
                <img className="w-full h-40 object-cover rounded-xl border border-border-subtle opacity-80 group-hover:opacity-100 transition-opacity" alt="Service matrix visualization" src="https://lh3.googleusercontent.com/aida-public/AB6DXuAOfl7SOSPAi5qTj4UvuB8EfXC1_XmRdgCoTLTekQhvF6S2L0Z84bIbFvFCZSPOWKr4iBkhsZuJNhl_WHWPEhMKNZekZ3EM4xnfuev0niaBVB6nhVwc1OyWtDOQeX2GVDj51zAcCfoeqJXGx--VWBdxEcKaJFjZA7blbrUIt1pxXuka9oHufvs7bBBA1vLDRTAX-PNeOanGV3xDol2vFWFMwXe8tAHmkt_4mPm5koLjDkzWsnSwv8e4wUTTpbQF9exN2MIORKnjMYTV" />
              </div>
              {/* Compliance Matrix */}
              <div className="col-span-12 md:col-span-4 bg-white/70 backdrop-blur-sm border border-border-subtle p-8 rounded-3xl">
                <h3 className="text-card-title font-card-title mb-3">合规风控矩阵</h3>
                <p className="text-text-secondary text-sm">全栈式 AI 合规审计，确保每一条医疗指令都符合法律与医学伦理。</p>
              </div>
              {/* Digital Asset Matrix */}
              <div className="col-span-12 md:col-span-8 bg-zinc-900 text-white p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white">数字资产矩阵</h3>
                    <p className="text-zinc-400 text-sm">将隐性专家经验转化为可流转的数字化智能体资产，实现机构知识的永续传承与指数级扩张。</p>
                  </div>
                  <div className="hidden md:block w-48 h-48 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-section-title text-section-title mb-4">行业落地案例解析</h2>
              <p className="text-text-secondary">听听他们是如何重塑医疗工作流的</p>
            </div>
            <div className="space-y-12">
              {/* Scenario 1 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-primary">智能体编程: 医疗工作流自动化</h3>
                  </div>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    在 Terminal-Bench 2.0 中获得 82.7% 的执行准确率。不仅仅是对话，更是对复杂医疗指令的精确解析与执行。
                  </p>
                  <div className="relative p-8 bg-surface-soft rounded-2xl italic text-text-primary">
                    "这是我用过的第一个在概念理解上具有极高清晰度的医疗 AI 系统。它能理解复杂的临床逻辑并自动生成最优路径。"
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <img className="w-full h-[400px] object-cover rounded-3xl shadow-xl" alt="Developer coding medical AI" src="https://lh3.googleusercontent.com/aida-public/AB6DXuBjPMIniXRMh3K_aGCzyctnYZmiIqOUmFTzcwh3917K9vaYaYBzcP3ENCwc21ft4kg-te0xMQ04kW3TGF80dCnAJSf42J1Z3AhLXugZoyLULb8nTgEhtElDmqf80Ah_3Fhaf_Xxq1kZfJtJgCsdjPX0JIt42F09Ki0aaCSetLpxey8KT2xgtPJk4dSLRQO9k0LZnnssUyI06KWoXGNuJiH66P8Alyq6wPJu9iGH9VjIR7lOqpHXAxKFNDCDKw7KKxqJoFfx11158tbB" />
                </div>
              </div>
              {/* Scenario 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-primary">儿少心理精神: 规模化诊疗与 LTV 长效管理</h3>
                  </div>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    通过 AI 驱动的情感支持与长周期干预模型，实现了针对儿童心理健康的规模化干预与数字化病程追踪。
                  </p>
                  <div className="relative p-8 bg-surface-soft rounded-2xl italic text-text-primary">
                    "它真的让我感觉是在与更高阶的智能协同工作，大大缩减了病历整理和患者随访的机械时间。"
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <img className="w-full h-[400px] object-cover rounded-3xl shadow-xl" alt="Mental health monitoring" src="https://lh3.googleusercontent.com/aida-public/AB6DXuA8jzDsQh3m3J8_fuUXTQKCeGsqGI3xuhZzW1SN6rwAoRy5wmnRDN31soJbLeXN-kUGL9atdJJt3A5o0DQd24rRCoKn-NPH03MqZRrvW-2xdiysd4nOa5IDvOw7K7Fjd_mujl3-SUU1trE7VOD1S-VF7RIIuTcmOyY5kGIqsUqOf-o9VzHt6wSh6g8DqGfHQJ2ruvOqRi6z4QSDbAKrFmUl7ollLx6MuKbLJiE8M1yM6dQooyv9PKqD81q8tawmOQn64vGIlnTHOwUA" />
                </div>
              </div>
              {/* Scenario 3 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-primary">中医名医传承: 隐性临床思维的数字化</h3>
                  </div>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    基于 Michael Truell 提及的执行韧性理论，我们将顶尖中医专家的隐性诊疗思路固化为 AI 逻辑，实现名医经验的规模化复制。
                  </p>
                  <div className="relative p-8 bg-surface-soft rounded-2xl italic text-text-primary">
                    "该系统展现了极强的执行韧性，能处理跨度数月的长周期随访任务，精准还原了名医的临床决策轨迹。"
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <img className="w-full h-[400px] object-cover rounded-3xl shadow-xl" alt="Traditional Chinese medicine digital" src="https://lh3.googleusercontent.com/aida-public/AB6DXuAiOuUtWVE5liFbm0xR1fbIF0amI21byIITbSej_bMCHsUp7l4_lhBsh0BFgek3KxRGD751pbmxdEbTzJGjnqp4EWiEy7BdpWu2nZDD54XTdUkCrcW-vxBs4G39hDQOD5GRrxv2w5a4hCcvsI3zsLnrgUxWfGRuZY3l_n1YKyTs_9zUU7PnPi2zC1DLHH7HibfQ56nQsaQIoNxYLFYokPlE2OoqDXWylWwABkH58aH4x_4p_-nXfyPYzRoDjBoBGd62K_tcCTWsrGGI" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-primary rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="font-hero-title text-4xl md:text-5xl mb-8">开启您的医疗 AI 进化之旅</h2>
                <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">选择适合您的版本，即刻部署 Medical Agent OS 2.0，将医疗服务转化为领先的数字资产。</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="bg-white text-primary px-10 py-5 rounded-full font-bold hover:bg-zinc-100 transition-all">试用 EvoLeap</button>
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all">联系 Enterprise 销售</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MedicalAgentOS
