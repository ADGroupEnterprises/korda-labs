import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Korda Labs',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-ink mb-2">Privacy Policy</h1>
        <p className="text-ink/40 text-sm mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-ink/60 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">1. Introduction</h2>
            <p>
              Korda Labs (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our
              products and services, including Zoe.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Account information such as name and email address when you register.</li>
              <li>Usage data including how you interact with our services.</li>
              <li>Information you voluntarily provide when using product features.</li>
              <li>Technical data such as device type, browser, and IP address.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Provide, operate, and improve our products and services.</li>
              <li>Communicate with you about updates, support, and announcements.</li>
              <li>Ensure the security and integrity of our platform.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share information with trusted third-party service
              providers who assist in operating our services, subject to confidentiality agreements. We may
              also disclose information when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">5. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services or as required by
              law. You may request deletion of your account and associated data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">6. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your data. However,
              no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">7. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, or delete your
              personal data, as well as the right to data portability and the right to object to certain
              processing. To exercise these rights, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes
              by updating the date at the top of this page. Continued use of our services constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">9. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@kordalabs.com" className="text-accent hover:underline">
                privacy@kordalabs.com
              </a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
