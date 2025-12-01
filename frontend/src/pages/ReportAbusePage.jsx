// frontend/src/pages/ReportAbusePage.jsx
import { AlertTriangle, ShieldCheck, Mail, Phone } from 'lucide-react';

const ReportAbusePage = () => {
  const lastUpdated = "December 1, 2024";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AlertTriangle className="w-14 h-14 mx-auto mb-6 text-red-400" />
          <h1 className="text-4xl font-bold mb-4">Report Abuse</h1>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Help us keep our platform safe. If you witness misuse, harmful behavior, 
            or any violation of our policies, please report it immediately.
          </p>
          <p className="text-neutral-400 text-sm mt-4">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          {/* What you can report */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">What You Can Report</h2>
            <p className="text-neutral-700 mb-4">
              You may report any activity that violates our Terms of Service, puts users at risk,
              or involves misuse of our platform. Examples include:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Harassment, bullying, or abusive communication</li>
              <li>Threats, hate speech, or discriminatory behavior</li>
              <li>Fraudulent activity or impersonation</li>
              <li>Posting harmful, inappropriate, or illegal content</li>
              <li>Misuse of platform features or unauthorized access</li>
              <li>Any safety or privacy concerns involving users</li>
            </ul>
          </div>

          {/* How we handle reports */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Handle Reports</h2>
            <p className="text-neutral-700 mb-4">
              Our team reviews all reports carefully to ensure user safety. Depending on severity,
              actions we may take include:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Investigating the issue internally</li>
              <li>Reaching out for additional details if needed</li>
              <li>Temporarily restricting or permanently banning accounts</li>
              <li>Notifying relevant authorities in severe cases</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              All reports are kept confidential. Your identity will not be shared with the violating party.
            </p>
          </div>

          {/* How to make a report */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">How to Make a Report</h2>
            <p className="text-neutral-700 mb-4">You can report abuse through the following channels:</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-neutral-600">support@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold">Phone (Urgent cases only)</p>
                  <p className="text-neutral-600">+254 700 123 456</p>
                </div>
              </div>
            </div>

            <p className="text-neutral-700 mt-6">
              When reporting, please provide any helpful details such as usernames, screenshots,
              timestamps, or links. This helps us review the matter faster.
            </p>
          </div>

          {/* Commitment to safety */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex items-start space-x-4">
            <ShieldCheck className="w-10 h-10 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Commitment to Your Safety</h3>
              <p className="text-neutral-700">
                We take abuse seriously. Every user deserves a safe, respectful, and secure environment.
                Thank you for helping us protect our community.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ReportAbusePage;
