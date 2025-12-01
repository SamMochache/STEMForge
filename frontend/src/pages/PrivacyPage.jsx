// frontend/src/pages/PrivacyPage.jsx
import { Shield, Eye, Lock, Database, Mail, FileText } from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = "December 1, 2024";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield size={32} className="text-blue-400" />
            <p className="text-neutral-400 text-sm tracking-widest uppercase">Legal</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-300 font-light">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto prose prose-neutral prose-lg">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6 flex items-center gap-3">
              <Eye size={24} className="text-blue-600" />
              Introduction
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-lg">
              STEMForge Academy ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website stemforge.co.ke and use our services.
            </p>
            <p className="text-neutral-600 font-light leading-relaxed text-lg">
              By using our services, you agree to the collection and use of information in 
              accordance with this policy. If you do not agree with our policies and practices, 
              please do not use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6 flex items-center gap-3">
              <Database size={24} className="text-blue-600" />
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-normal text-neutral-900 mb-4">Personal Information</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2 mb-6">
              <li><strong>Parent/Guardian Information:</strong> Name, email address, phone number</li>
              <li><strong>Student Information:</strong> Name, age, educational background</li>
              <li><strong>Payment Information:</strong> Processed securely through third-party payment processors (we do not store credit card details)</li>
              <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send us</li>
            </ul>

            <h3 className="text-xl font-normal text-neutral-900 mb-4">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent, navigation patterns</li>
              <li><strong>Device Information:</strong> Browser type, IP address, operating system</li>
              <li><strong>Cookies:</strong> Small files stored on your device (see Cookie Policy)</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              How We Use Your Information
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Process program applications and registrations</li>
              <li>Communicate about programs, schedules, and updates</li>
              <li>Process payments and maintain financial records</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send educational content, newsletters, and program updates (with consent)</li>
              <li>Improve our website, services, and user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Analyze usage patterns and website performance</li>
            </ul>
          </div>

          {/* Data Protection for Minors */}
          <div className="mb-16 bg-blue-50 border-l-4 border-blue-600 p-8">
            <h2 className="text-2xl font-light text-neutral-900 mb-4 flex items-center gap-3">
              <Shield size={24} className="text-blue-600" />
              Protection of Minors
            </h2>
            <p className="text-neutral-700 font-light leading-relaxed mb-4">
              We take special care with information about children under 18:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 font-light space-y-2">
              <li>We only collect student information with parental/guardian consent</li>
              <li>Student data is stored securely and accessed only by authorized staff</li>
              <li>We never sell or share student information with third parties for marketing</li>
              <li>Parents/guardians can request to review or delete their child's information</li>
              <li>Student photos/videos are only used with explicit parental permission</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6 flex items-center gap-3">
              <Lock size={24} className="text-blue-600" />
              Information Sharing and Disclosure
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              We do not sell your personal information. We may share information in these limited circumstances:
            </p>
            
            <h3 className="text-xl font-normal text-neutral-900 mb-3">With Your Consent</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              We may share information when you give us explicit permission.
            </p>

            <h3 className="text-xl font-normal text-neutral-900 mb-3">Service Providers</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              We may share data with trusted third parties who help us operate our business:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2 mb-6">
              <li>Payment processors (M-Pesa, bank gateways)</li>
              <li>Email service providers (for communications)</li>
              <li>Cloud storage providers (AWS, Google Cloud)</li>
              <li>Analytics services (Google Analytics)</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              These providers are contractually obligated to protect your information and use it only for specified purposes.
            </p>

            <h3 className="text-xl font-normal text-neutral-900 mb-3">Legal Requirements</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              We may disclose information if required by law, court order, or government regulation, 
              or to protect the rights, property, or safety of STEMForge, our users, or others.
            </p>
          </div>

          {/* Data Security */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Data Security
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure database storage with access controls</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
              <li>Limited access to personal information (need-to-know basis)</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              However, no method of transmission over the internet is 100% secure. While we strive 
              to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Your Rights and Choices
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information (subject to legal obligations)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing emails at any time</li>
              <li><strong>Data Portability:</strong> Request your data in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@stemforge.co.ke" className="text-blue-600 hover:underline">
                privacy@stemforge.co.ke
              </a>
            </p>
          </div>

          {/* Data Retention */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Data Retention
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Provide our services and fulfill the purposes outlined in this policy</li>
              <li>Comply with legal, accounting, or regulatory requirements</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              Student records are retained for 7 years after program completion, as required by Kenyan education regulations.
            </p>
          </div>

          {/* International Transfers */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              International Data Transfers
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed">
              Your information may be transferred to and processed in countries other than Kenya, 
              including the United States (cloud storage providers). We ensure appropriate safeguards 
              are in place to protect your information in accordance with this Privacy Policy and 
              applicable data protection laws.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Third-Party Websites
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for 
              the privacy practices or content of these external sites. We encourage you to review 
              the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Changes to This Policy
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
              <li>Posting the new policy on this page with an updated "Last Updated" date</li>
              <li>Sending an email notification to registered users</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p className="text-neutral-600 font-light leading-relaxed mt-4">
              Your continued use of our services after changes are posted constitutes acceptance 
              of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-lg">
            <h2 className="text-2xl font-light text-neutral-900 mb-6 flex items-center gap-3">
              <Mail size={24} className="text-blue-600" />
              Contact Us
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our 
              data practices, please contact us:
            </p>
            <div className="space-y-3 text-neutral-600 font-light">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@stemforge.co.ke" className="text-blue-600 hover:underline">
                  privacy@stemforge.co.ke
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
              <p className="mt-6 pt-6 border-t border-neutral-200">
                <strong>Data Protection Officer:</strong> Dr. Amara Okonkwo<br />
                <a href="mailto:dpo@stemforge.co.ke" className="text-blue-600 hover:underline">
                  dpo@stemforge.co.ke
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;