import { useCounter } from '../hooks/useCounter';

const Stats = () => {
  const [s1, r1] = useCounter(500);
  const [s2, r2] = useCounter(98);
  const [s3, r3] = useCounter(12);

  const stats = [
    { value: s1, suffix: '+', label: 'Alumni Worldwide', ref: r1 },
    { value: s2, suffix: '%', label: 'Parent Satisfaction', ref: r2 },
    { value: s3, suffix: '', label: 'Years of Excellence', ref: r3 },
  ];

  return (
    <section className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((s, i) => (
            <div key={i} ref={s.ref} className="text-center">
              <div className="text-3xl md:text-5xl font-light text-neutral-900 mb-2 tracking-tight">
                {s.value}
                {s.suffix}
              </div>
              <div className="text-neutral-500 text-xs md:text-sm tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;