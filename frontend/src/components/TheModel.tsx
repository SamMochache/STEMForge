import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const STEPS = [
{
  step: '01',
  title: 'Discovery',
  description:
  "We assess your school's vision, capacity, and readiness. Not every school is a fit—we select partners aligned with our mission."
},
{
  step: '02',
  title: 'Co-Design',
  description:
  'We customize the academy experience to your student body, timetable, and institutional goals.'
},
{
  step: '03',
  title: 'Immersive Delivery',
  description:
  'Our facilitators deliver workshops, AI-assisted learning, and innovation challenges in your school.'
},
{
  step: '04',
  title: 'Impact & Evolution',
  description:
  'We measure competency growth, portfolio development, and entrepreneurial outcomes—and refine together.'
}];


export function TheModel() {
  const navigate = useNavigate();

  return (
    <section
      id="the-model-section"
      className="py-16 sm:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900 scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            The Model
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight">
            How we partner with schools
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 sm:mb-12">
          {STEPS.map((item) =>
          <div key={item.step} className="relative">
              <div className="mb-3 sm:mb-4">
                <span className="text-3xl font-light text-neutral-200 dark:text-neutral-700">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-50 mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => navigate('/contact')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 dark:hover:bg-white transition-colors">
          
          Request a Discovery Session
          <ArrowRightIcon size={16} aria-hidden="true" />
        </button>
      </div>
    </section>);

}