// frontend/src/pages/CookiesPage.jsx
import { Cookie, ShieldCheck, Settings, Globe, Info } from 'lucide-react';

const CookiesPage = () => {
  const lastUpdated = "December 1, 2024";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Cookie className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookies Policy</h1>
          <p className="text-neutral-300 text-lg">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-neutral-700">
              This Cookies Policy explains how we use cookies and similar technologies on our website. 
              By using our site, you agree to the use of cookies as described in this policy.
            </p>
          </div>

          {/* What Are Cookies */}
          <div>
            <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>
            <p className="text-neutral-700 mb-4">
              Cookies are small text files placed on your device to improve your browsing experience. 
              They help websites remember your actions and preferences over time.
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Session cookies (deleted when you close your browser)</li>
              <li>Persistent cookies (remain until manually removed or expired)</li>
              <li>First-party cookies (placed by our website)</li>
              <li>Third-party cookies (placed by external services like analytics tools)</li>
            </ul>
          </div>

          {/* Why We Use Cookies */}
          <div>
            <h2 className="text-2xl font-bold mb-4">3. Why We Use Cookies</h2>
            <p className="text-neutral-700 mb-4">
              We use cookies to enhance functionality, improve performance, and ensure you have a smooth browsing experience.
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>To remember user preferences</li>
              <li>To analyze website performance</li>
              <li>To enable essential site features</li>
              <li>To ensure secure login and authentication</li>
            </ul>
          </div>

          {/* Types of Cookies */}
          <div>
            <h2 className="text-2xl font-bold mb-4">4. Types of Cookies We Use</h2>

            {/* Essential Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">4.1 Essential Cookies</h3>
              <p className="text-neutral-700 mb-2">
                These cookies are required for the website to function properly.
              </p>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Login authentication</li>
                <li>Security and fraud prevention</li>
                <li>Core navigation features</li>
              </ul>
            </div>

            {/* Functional Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">4.2 Functional Cookies</h3>
              <p className="text-neutral-700 mb-2">
                These cookies allow us to remember your preferences and improve usability.
              </p>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Language preferences</li>
                <li>Saved settings</li>
                <li>Enhanced user experience features</li>
              </ul>
            </div>

            {/* Analytics Cookies */}
            <div>
              <h3 className="text-xl font-semibold mb-2">4.3 Analytics Cookies</h3>
              <p className="text-neutral-700 mb-2">
                These cookies help us understand how visitors interact with the website.
              </p>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Pages visited</li>
                <li>Time spent on the site</li>
                <li>Website performance insights</li>
              </ul>
            </div>
          </div>

          {/* Managing Cookies */}
          <div>
            <h2 className="text-2xl font-bold mb-4">5. Managing Your Cookies</h2>
            <p className="text-neutral-700 mb-4">
              You can adjust your browser settings to refuse or delete cookies at any time.
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Disable cookies completely</li>
              <li>Delete existing cookies</li>
              <li>Block third-party cookies</li>
              <li>Receive warnings before cookies are stored</li>
            </ul>
          </div>

          {/* Third-Party Cookies */}
          <div>
            <h2 className="text-2xl font-bold mb-4">6. Third-Party Cookies</h2>
            <p className="text-neutral-700">
              Some cookies may be provided by trusted third-party tools such as analytics providers or 
              embedded services. These providers have their own privacy and cookies policies.
            </p>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
            <p className="text-neutral-700">
              We may update this Cookies Policy occasionally. Any changes will be posted on this page with a 
              revised “Last Updated” date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-neutral-700">
              If you have any questions about this Cookies Policy, you can contact us via our official 
              communication channels.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default CookiesPage;
