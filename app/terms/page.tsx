import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Korda Labs',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-DEFAULT">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-white/30 text-sm mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-white/50 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using any Korda Labs product or service, including Zoe, you agree to be bound
              by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Use of Services</h2>
            <p className="mb-3">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Use the services in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorized access to any part of our platform.</li>
              <li>Transmit any harmful, offensive, or disruptive content.</li>
              <li>Reverse engineer, copy, or redistribute any part of our software.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all
              activity that occurs under your account. You agree to notify us immediately of any unauthorized
              use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services — including software, design, text, and
              graphics — are owned by Korda Labs and protected by applicable intellectual property laws. You
              may not use our intellectual property without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Third-Party Integrations</h2>
            <p>
              Our services may integrate with third-party platforms and APIs. Your use of those integrations
              is subject to the respective third-party terms of service. Korda Labs is not responsible for
              the conduct of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Disclaimers</h2>
            <p>
              Our services are provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied.
              We do not warrant that the services will be uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Korda Labs shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of — or inability to use —
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at our discretion,
              with or without notice, if we believe you have violated these Terms or for any other reason
              we deem appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Updated Terms will be posted with a revised date.
              Continued use of our services after changes are posted constitutes your acceptance of the
              new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Contact</h2>
            <p>
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@kordalabs.com" className="text-accent hover:underline">
                legal@kordalabs.com
              </a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
