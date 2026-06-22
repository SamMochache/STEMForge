const WHY_FEATURES = [
  {
    title: 'AI-Native, Not AI-Aware',
    description:
      'Students don\'t just learn about AI—they build with AI. Every module integrates generative tools, automation, and data literacy.',
  },
  {
    title: 'Entrepreneurship as Pedagogy',
    description:
      'Students launch real ventures, not hypothetical projects. Revenue, customers, failure, iteration.',
  },
  {
    title: 'Classical Liberal Foundations',
    description:
      'We connect innovation to freedom, property rights to progress, and voluntary exchange to prosperity.',
  },
  {
    title: 'Measurable Human Flourishing',
    description:
      'Outcomes tracked: critical thinking growth, venture creation, AI competency portfolios, civic engagement.',
  },
  {
    title: 'Selective Partnership',
    description:
      'We limit new partners to ensure quality. Our facilitators are trained, vetted, and continuously developed.',
  },
];

const WhySTEMForge = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-8">
      <div className="max-w-2xl mb-16">
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">Why STEMForge</p>
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight">
          What sets us apart
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_FEATURES.map((feature, i) => (
          <div key={i} className="border-t border-neutral-200 pt-6">
            <h3 className="text-lg font-normal text-neutral-900 mb-3">{feature.title}</h3>
            <p className="text-neutral-500 font-light text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySTEMForge;