import React from 'react';
import { AlertTriangleIcon, ShieldCheckIcon, MailIcon, PhoneIcon } from 'lucide-react';

export function ReportAbusePage() {
  const lastUpdated = 'December 1, 2024';

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangleIcon
            aria-hidden="true"
            className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-5 sm:mb-6 text-red-400" />
          
          <h1 className="text-3xl sm:text-4xl font-light mb-4">Report Abuse</h1>
          <p className="text-neutral-300 font-light max-w-2xl mx-auto">
            Help us keep our programs safe. If you witness misuse, harmful behavior, or any violation
            of our policies, please report it immediately.
          </p>
          <p className="text-neutral-400 text-sm mt-4">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-14">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-50 mb-4">
              What You Can Report
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light mb-4">
              You may report any activity that violates our Terms of Service, puts students at risk,
              or involves misuse of our platform. Examples include:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 dark:text-neutral-400 font-light space-y-2">
              <li>Harassment, bullying, or abusive communication</li>
              <li>Threats, hate speech, or discriminatory behavior</li>
              <li>Fraudulent activity or impersonation</li>
              <li>Posting harmful, inappropriate, or illegal content</li>
              <li>Misuse of platform features or unauthorized access</li>
              <li>Any safety or privacy concern involving students</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-50 mb-4">
              How We Handle Reports
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light mb-4">
              Our team reviews all reports carefully to ensure student safety. Depending on severity,
              actions we may take include:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 dark:text-neutral-400 font-light space-y-2">
              <li>Investigating the issue internally</li>
              <li>Reaching out for additional details if needed</li>
              <li>Temporarily restricting or permanently removing access</li>
              <li>Notifying the partner school and relevant authorities in severe cases</li>
            </ul>
            <p className="text-neutral-600 dark:text-neutral-400 font-light mt-4">
              All reports are kept confidential. Your identity will not be shared with the violating
              party.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-50 mb-4">
              How to Make a Report
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light mb-4">
              You can report abuse through the following channels:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MailIcon
                  aria-hidden="true"
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Email</p>
                  <a
                    href="mailto:support@stemforge.co.ke"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors break-all">
                    
                    support@stemforge.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <PhoneIcon
                  aria-hidden="true"
                  className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    Phone (urgent cases only)
                  </p>
                  <a
                    href="tel:+254740532120"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                    
                    +254 740 532 120
                  </a>
                </div>
              </div>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 font-light mt-6">
              When reporting, please include any helpful detail such as names, screenshots,
              timestamps, or links. This helps us review the matter faster.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4">
            <ShieldCheckIcon
              aria-hidden="true"
              className="w-10 h-10 text-green-600 dark:text-green-400 flex-shrink-0" />
            
            <div>
              <h2 className="text-lg sm:text-xl font-normal text-neutral-900 dark:text-neutral-50 mb-2">
                Our Commitment to Safety
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 font-light">
                We take abuse seriously. Every student deserves a safe, respectful, and secure
                learning environment. Thank you for helping us protect our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>);

}