import type { Metadata } from 'next'
import Link from 'next/link'
import { APP_SIGNUP_URL, APP_SIGNIN_URL } from '@/lib/links'
import ZoeMarkSpark from '@/components/marks/ZoeMarkSpark'

export const metadata: Metadata = {
  title: 'Sign up — Zoe',
  description:
    'Create your Zoe account. Set a goal, build the plan, and hand off the work.',
}

const proof = [
  {
    title: 'Default-deny execution',
    detail: 'Every autonomous capability is off until you enable it.',
  },
  {
    title: 'Immutable audit log',
    detail: 'Every action recorded — timestamp, result, cost.',
  },
  {
    title: 'Bring your own API keys',
    detail: 'Your model credentials stay yours. Korda Labs never holds them.',
  },
]

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="max-w-content mx-auto px-5 md:px-20 py-20 md:py-32">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ZoeMarkSpark size={72} />
          </div>
          <p className="text-sm font-bold text-accent uppercase tracking-[0.16em] mb-6">
            Zoe
          </p>
          <h1 className="font-serif font-medium text-4xl md:text-hero-sm text-ink mb-6">
            Set a goal. Zoe does the work.
          </h1>
          <p className="text-lg text-ink mb-10 leading-relaxed">
            Create your account to connect your calendar and tools, set your
            first goal, and hand off the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={APP_SIGNUP_URL}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md bg-accent text-paper hover:bg-mahogany transition-colors duration-300"
            >
              Create your account
            </a>
            <Link
              href="/products/zoe"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md border border-linen text-ink hover:bg-linen transition-colors duration-300"
            >
              See how it works
            </Link>
          </div>

          <p className="text-sm text-ink mb-16">
            Free to start. No credit card required.{' '}
            <a href={APP_SIGNIN_URL} className="text-accent hover:text-mahogany">
              Or sign in if you already have an account.
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6 border-t border-linen pt-12">
          {proof.map((item) => (
            <div key={item.title} className="text-left">
              <h2 className="text-sm font-medium text-ink mb-2">{item.title}</h2>
              <p className="text-sm text-ink leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto text-center text-sm text-ink mt-12">
          Zoe is built on Korda Labs&rsquo; control architecture.
        </p>
      </section>
    </main>
  )
}
