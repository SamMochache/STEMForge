import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = ({ onBookingClick }) => {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-tight mb-8">
            Get in Touch
          </h1>
          <p className="text-neutral-600 text-lg font-light leading-relaxed">
            We welcome inquiries from families interested in learning more about our programs 
            and community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium mb-1">Location</h3>
                  <p className="text-neutral-600 font-light">
                    Westlands, Nairobi<br />
                    Kenya
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium mb-1">Phone</h3>
                  <p className="text-neutral-600 font-light">
                    <a href="tel:+254740532120" className="hover:text-neutral-900 transition-colors">
                      +254 740 532 120
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium mb-1">Email</h3>
                  <p className="text-neutral-600 font-light">
                    <a href="mailto:admissions@stemforge.co.ke" className="hover:text-neutral-900 transition-colors">
                      admissions@stemforge.co.ke
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium mb-1">Hours</h3>
                  <p className="text-neutral-600 font-light">
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* School Visit CTA */}
            <div className="border-t border-neutral-200 pt-8">
              <h3 className="text-lg font-normal text-neutral-900 mb-3">
                Schedule a School Visit
              </h3>
              <p className="text-neutral-600 font-light text-sm mb-6">
                Organizing a field trip or looking to bring STEM education to your institution? 
                We offer tailored experiences for schools and groups.
              </p>
              <button
                onClick={onBookingClick}
                className="bg-neutral-900 text-white px-8 py-3 text-sm tracking-wide hover:bg-neutral-800 transition-colors"
              >
                Book a School Visit
              </button>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div>
            <div className="aspect-square bg-neutral-100 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
                  Visit Us
                </p>
                <p className="text-2xl font-light text-neutral-900 mb-2">
                  Westlands, Nairobi
                </p>
                <p className="text-neutral-500 font-light">
                  Contact us for detailed directions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;