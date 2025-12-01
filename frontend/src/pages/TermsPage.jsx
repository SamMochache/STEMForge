// frontend/src/pages/TermsPage.jsx
import { FileText, CheckCircle, XCircle, AlertCircle, Scale } from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = "December 1, 2024";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText size={32} className="text-blue-400" />
            <p className="text-neutral-400 text-sm tracking-widest uppercase">Legal</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Terms of Service
          </h1>
          <p className="text-xl text-neutral-300 font-light">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto prose prose-neutral prose-lg">
          
          {/* Acceptance */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6 flex items-center gap-3">
              <CheckCircle size={24} className="text-green-600" />
              Acceptance of Terms
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-lg">
              Welcome to STEMForge Academy. By accessing or using our website (stemforge.co.ke) 
              and services, you agree to be bound by these Terms of Service ("Terms"). If you do 
              not agree to these Terms, please do not use our services.
            </p>
            <p className="text-neutral-600 font-light leading-relaxed text-lg">
              These Terms constitute a legally binding agreement between you and STEMForge Academy, 
              a registered educational institution in Kenya.
            </p>
          </div>

          {/* Services Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Our Services
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              STEMForge Academy provides:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>STEM education programs for students ages 5-18</li>
              <li>Online and in-person learning experiences</li>
              <li>Access to educational resources, materials, and facilities</li>
              <li>Mentorship and career guidance services</li>
              <li>Community events and competitions</li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Eligibility and Registration
            </h2>
            
            <h3 className="text-xl font-normal text-neutral-900 mb-4">Age Requirements</h3>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2 mb-6">
              <li>Students must meet the age requirements for their selected program</li>
              <li>Parents/guardians must be 18+ to register students</li>
              <li>Parental consent is required for all students under 18</li>
            </ul>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">Account Registration</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              To access certain services, you must create an account and provide accurate information:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>You are responsible for maintaining account confidentiality</li>
              <li>You must notify us immediately of unauthorized access</li>
              <li>You are responsible for all activities under your account</li>
              <li>One account per family/student is permitted</li>
            </ul>
          </div>

          {/* Enrollment and Payment */}
          <div className="mb-16 bg-blue-50 border-l-4 border-blue-600 p-8">
            <h2 className="text-2xl font-light text-neutral-900 mb-6">
              Enrollment and Payment Terms
            </h2>
            
            <h3 className="text-lg font-normal text-neutral-900 mb-3">Application Process</h3>
            <ul className="list-disc pl-6 text-neutral-700 font-light space-y-2 mb-6">
              <li>Program enrollment is subject to availability and acceptance</li>
              <li>We reserve the right to accept or decline applications</li>
              <li>Acceptance is confirmed via email within 48 hours</li>
            </ul>

            <h3 className="text-lg font-normal text-neutral-900 mb-3">Payment</h3>
            <ul className="list-disc pl-6 text-neutral-700 font-light space-y-2 mb-6">
              <li>Fees must be paid in full before program start (unless payment plan arranged)</li>
              <li>We accept M-Pesa, bank transfer, and online card payments</li>
              <li>All fees are in Kenyan Shillings (KSh)</li>
              <li>Payment confirmation will be sent via email</li>
            </ul>

            <h3 className="text-lg font-normal text-neutral-900 mb-3">Refund Policy</h3>
            <ul className="list-disc pl-6 text-neutral-700 font-light space-y-2">
              <li><strong>Full refund:</strong> Cancellation 7+ days before program start</li>
              <li><strong>50% refund:</strong> Cancellation 3-6 days before start</li>
              <li><strong>No refund:</strong> Cancellation less than 3 days before start or after program begins</li>
              <li><strong>Transfer option:</strong> Program credits valid for 12 months</li>
              <li>Refunds processed within 14 business days</li>
            </ul>
          </div>

          {/* User Conduct */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6 flex items-center gap-3">
              <AlertCircle size={24} className="text-amber-600" />
              User Conduct and Responsibilities
            </h2>
            
            <h3 className="text-xl font-normal text-neutral-900 mb-4">Acceptable Use</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. 
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2 mb-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Harass, abuse, or harm others</li>
              <li>Share false or misleading information</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Distribute viruses or malicious code</li>
              <li>Interfere with other users' access to services</li>
              <li>Use services for commercial purposes without permission</li>
            </ul>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">Student Behavior</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Students are expected to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Treat instructors, staff, and peers with respect</li>
              <li>Attend classes regularly and on time</li>
              <li>Complete assignments and projects honestly</li>
              <li>Follow safety protocols in labs and workshops</li>
              <li>Take care of equipment and facilities</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              Violation of conduct policies may result in warnings, suspension, or program termination 
              without refund.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Intellectual Property Rights
            </h2>
            
            <h3 className="text-xl font-normal text-neutral-900 mb-4">Our Content</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              All content on our website and in our programs (text, images, videos, code, curriculum, 
              designs, logos, trademarks) is owned by STEMForge Academy or licensed to us. This content 
              is protected by Kenyan and international copyright, trademark, and intellectual property laws.
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              You may not copy, reproduce, distribute, modify, or create derivative works without 
              our explicit written permission.
            </p>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">Student Work</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Students retain ownership of their original work. However, by enrolling, you grant STEMForge:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Right to display student work in portfolios, marketing, and exhibitions (with credit)</li>
              <li>Right to use anonymized student work for educational purposes</li>
              <li>Permission to photograph/record students in class (with parental consent)</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              Parents/guardians may opt out by contacting{' '}
              <a href="mailto:privacy@stemforge.co.ke" className="text-blue-600 hover:underline">
                privacy@stemforge.co.ke
              </a>
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6 flex items-center gap-3">
              <Scale size={24} className="text-blue-600" />
              Disclaimers and Limitation of Liability
            </h2>
            
            <h3 className="text-xl font-normal text-neutral-900 mb-4">Service Availability</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              We strive to provide uninterrupted services but cannot guarantee 100% uptime.
            </p>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">"As Is" Provision</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              Our services are provided "as is" without warranties of any kind.
            </p>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">Limitation of Liability</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              To the fullest extent permitted by law, STEMForge Academy shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or opportunities</li>
              <li>Damages resulting from unauthorized access to your account</li>
              <li>Third-party actions or content</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              Our total liability shall not exceed the amount you paid in the past 12 months.
            </p>
          </div>

          {/* Safety */}
          <div className="mb-16 bg-amber-50 border-l-4 border-amber-600 p-8">
            <h2 className="text-2xl font-light text-neutral-900 mb-6">
              Safety and Insurance
            </h2>
            <ul className="list-disc pl-6 text-neutral-700 font-light space-y-2">
              <li>We maintain general liability insurance</li>
              <li>Parents/guardians handle personal health/accident insurance</li>
              <li>Medical emergencies follow the contact info provided</li>
              <li>Students must follow all safety protocols</li>
              <li>We are not liable for injuries caused by negligence</li>
            </ul>
          </div>

          {/* Program Changes */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Program Modifications and Cancellations
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              STEMForge Academy reserves the right to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Modify curriculum, schedules, or instructors</li>
              <li>Cancel programs due to low enrollment (full refund)</li>
              <li>Reschedule classes due to emergencies</li>
              <li>Update pricing for future cohorts</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              We notify affected students at least 7 days before major changes.
            </p>
          </div>

          {/* Termination */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6 flex items-center gap-3">
              <XCircle size={24} className="text-red-600" />
              Termination
            </h2>
            
            <h3 className="text-xl font-normal text-neutral-900 mb-4">By You</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              You may cancel your enrollment or close your account anytime (subject to refund policy).  
              Contact{' '}
              <a href="mailto:admissions@stemforge.co.ke" className="text-blue-600 hover:underline">
                admissions@stemforge.co.ke
              </a>.
            </p>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">By Us</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              We may suspend or terminate your access if you:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Violate these Terms</li>
              <li>Engage in harmful behavior</li>
              <li>Fail to pay fees</li>
              <li>Provide false information</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              Termination for cause does not entitle you to a refund.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Governing Law and Dispute Resolution
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              These Terms are governed by the laws of the Republic of Kenya.
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              Disputes will follow this process:
            </p>
            <ol className="list-decimal pl-6 text-neutral-600 font-light space-y-2">
              <li><strong>Informal negotiation</strong></li>
              <li><strong>Mediation</strong></li>
              <li><strong>Arbitration</strong> in Nairobi</li>
            </ol>
          </div>

          {/* Misc */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Miscellaneous
            </h2>
            
            <h3 className="text-xl font-normal text-neutral-900 mb-4">Severability</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              If any provision is unenforceable, the rest remain valid.
            </p>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">Entire Agreement</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              These Terms + Privacy Policy + Cookie Policy form the full agreement.
            </p>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">Waiver</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Failure to enforce any term does not waive our right to enforce it later.
            </p>
          </div>

          {/* Changes */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Changes to These Terms
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              We may modify these Terms anytime. We will notify users by:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Posting the updated Terms</li>
              <li>Email notices</li>
              <li>Website notices</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              Continued use means acceptance of changes.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-lg">
            <h2 className="text-2xl font-light text-neutral-900 mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              Contact us:
            </p>
            <div className="space-y-3 text-neutral-600 font-light">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:legal@stemforge.co.ke" className="text-blue-600 hover:underline">
                  legal@stemforge.co.ke
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+254740532120" className="text-blue-600 hover:underline">
                  +254 740 532 120
                </a>
              </p>
              <p>
                <strong>Address:</strong><br />
                STEMForge Academy<br />
                Westlands, Nairobi<br />
                Kenya
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
export default TermsPage;
