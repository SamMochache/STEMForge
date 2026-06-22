import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We assess your school\'s vision, capacity, and readiness. Not every school is a fit—we select partners aligned with our mission.',
  },
  {
    step: '02',
    title: 'Co-Design',
    description:
      'We customize the academy experience to your student body, timetable, and institutional goals.',
  },
  {
    step: '03',
    title: 'Immersive Delivery',
    description:
      'Our facilitators deliver workshops, AI-assisted learning, and innovation challenges in your school.',
  },
  {
    step: '04',
    title: 'Impact & Evolution',
    description:
      'We measure competency growth, portfolio development, and entrepreneurial outcomes—and refine together.',
  },
];

const TheModel = ({ onApplyClick }) => (
  <section className="py-32 bg-neutral-50">
    <div className="max-w-7xl mx-auto px-8">
      <div className="max-w-2xl mb-16">
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">The Model</p>
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight">
          How we partner with schools
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-12">
        {STEPS.map((item) => (
          <div key={item.step} className="relative">
            <div className="mb-4">
              <span className="text-3xl font-light text-neutral-200">{item.step}</span>
            </div>
            <h3 className="text-lg font-normal text-neutral-900 mb-3">{item.title}</h3>
            <p className="text-neutral-500 font-light text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={onApplyClick}
        className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors"
      >
        Request a Discovery Session
        <ArrowRight size={16} />
      </button>
    </div>
  </section>
);

export default TheModel;