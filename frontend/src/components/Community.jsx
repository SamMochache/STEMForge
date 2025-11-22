const Community = () => (
  <section id="community" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid lg:grid-cols-3 gap-16">
        <div>
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Community
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight mb-6">
            More than an academy
          </h2>
          <p className="text-neutral-600 font-light leading-relaxed">
            STEMForge is an elite innovation community. A place where ambitious
            young learners collaborate, take risks, and discover how far their
            potential can truly go.
          </p>
        </div>

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Mentorship Network',
              desc: 'Direct access to industry leaders, researchers, and successful alumni who guide our students.',
            },
            {
              title: 'Innovation Labs',
              desc: 'State-of-the-art facilities equipped with professional-grade tools and technologies.',
            },
            {
              title: 'Global Competitions',
              desc: 'Representation at international STEM competitions with comprehensive preparation.',
            },
            {
              title: 'Parent Partnership',
              desc: 'Regular insights, workshops, and community events for families.',
            },
          ].map((item, i) => (
            <div key={i} className="border-t border-neutral-200 pt-6">
              <h3 className="text-lg font-normal text-neutral-900 mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Community;