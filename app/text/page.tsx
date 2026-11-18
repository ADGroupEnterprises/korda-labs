import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { KeelMark } from '@/components/marks/Brand'

// Source: Project 5 (Text Channel), ZOE-1739 provider & compliance pack, section 5 (drafted
// 2026-10-31). Product name updated from Zoe to Keel. Wording is pending a legal read.
export const metadata: Metadata = {
  title: 'Keel texts: opt-in and SMS terms — Korda Labs',
  description: 'How Keel text messages work: how you opt in, what you get, how to stop, and the SMS terms.',
}

const SUPPORT = 'legal@kordalabs.com'

const replies = [
  { you: 'HELP', keel: `Keel by Korda Labs: texts about your Keel tasks and reminders. Help: ${SUPPORT}. Msg & data rates may apply. Reply STOP to cancel.` },
  { you: 'STOP', keel: 'You’re unsubscribed from Keel texts and won’t get more. Reply START to turn them back on.' },
  { you: 'START', keel: 'Keel texts are back on. Reply STOP any time to cancel. Msg & data rates may apply.' },
]

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display font-bold text-2xl text-ink mb-4">{children}</h2>
}

export default function TextPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="eyebrow text-accent mb-4">Keel texts</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-ink leading-tight mb-5">Opt-in and SMS terms</h1>
        <p className="text-lg text-ink-soft leading-relaxed mb-3">
          Keel can text you about your tasks, goals and reminders. Texts are off unless you turn them on. This page shows exactly what you agree to, what you will receive and how to stop.
        </p>
        <p className="text-sm text-ink-soft mb-12">
          Keel texts are not switched on yet. This is how they work when they are. Last updated: November 2026.
        </p>

        <div className="space-y-14 text-ink leading-relaxed">
          {/* Opt-in */}
          <section>
            <H2>How you opt in</H2>
            <p className="mb-5 text-ink-soft">
              You opt in inside Keel, in Settings, after entering your mobile number. The box is unticked by default and is separate from every other consent. This is the wording you see:
            </p>
            <figure className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/text/opt-in-screen.png"
                width={720}
                height={566}
                alt="The Keel opt-in screen, under Settings, Texts. A mobile number field, then an unticked checkbox that reads: Text me from Keel. Korda Labs will send texts about your Keel tasks, goals and reminders to the number above. Message frequency varies, up to 20 a day. Msg and data rates may apply. Reply HELP for help, STOP to cancel. Consent is not a condition of using Keel. Links to Terms and Privacy. A Send verification code button that stays off until the box is ticked."
                className="w-full h-auto rounded-2xl border border-ink/[0.08]"
              />
              <figcaption className="mt-2.5 text-sm text-ink-soft">
                The opt-in screen in Keel, under Settings › Texts. The box starts unticked, and the button stays off until you tick it. Shown as designed; texts are not switched on yet.
              </figcaption>
            </figure>
            <p className="mb-4 text-ink-soft">The same wording, as text:</p>
            <div className="glass rounded-3xl p-6 sm:p-7">
              <div className="flex items-start gap-3.5">
                <span className="mt-1 w-5 h-5 rounded-md border-2 border-ink/30 bg-white flex-shrink-0" role="img" aria-label="Unticked checkbox" />
                <p className="text-ink">
                  <span className="font-semibold">Text me from Keel.</span> Korda Labs will send texts about your Keel tasks, goals and reminders to the number above. Message frequency varies, up to 20 a day. Msg &amp; data rates may apply. Reply HELP for help, STOP to cancel. Consent is not a condition of using Keel.{' '}
                  <Link href="/text#terms" className="text-accent font-medium hover:underline">Terms</Link> · <Link href="/privacy#text-messages" className="text-accent font-medium hover:underline">Privacy</Link>
                </p>
              </div>
            </div>
            <p className="mt-5 text-ink-soft">
              To confirm the number is yours, Keel then sends one verification text:
            </p>
            <p className="mt-3 w-fit max-w-full rounded-[18px_18px_18px_6px] bg-white border border-ink/[0.08] shadow-sm px-4 py-2.5 text-[0.95rem]">
              Your Keel code is 123456. Enter it in the app to turn on texts. If you didn’t ask for this, ignore it.
            </p>
            <p className="mt-5 text-ink-soft">Texts start only after you enter that code.</p>
          </section>

          {/* What you get */}
          <section>
            <H2>What you will receive</H2>
            <ul className="space-y-2.5 list-disc pl-5 marker:text-accent">
              <li>Texts about your own Keel tasks, goals and reminders. No marketing.</li>
              <li>Message frequency varies with how you use Keel, up to 20 texts a day.</li>
              <li>Message and data rates may apply, depending on your mobile plan.</li>
              <li>Sensitive content stays in the app and is never sent by text.</li>
            </ul>
          </section>

          {/* Replies */}
          <section>
            <H2>HELP, STOP and START</H2>
            <p className="mb-5 text-ink-soft">Reply with one of these words to any Keel text. This is what comes back.</p>
            <div className="space-y-5">
              {replies.map((r) => (
                <div key={r.you} className="glass rounded-3xl p-5 space-y-2.5">
                  <p className="ml-auto w-fit rounded-[18px_18px_6px_18px] bg-accent text-paper font-semibold px-4 py-2">{r.you}</p>
                  <p className="w-fit max-w-[92%] rounded-[18px_18px_18px_6px] bg-white border border-ink/[0.08] px-4 py-2.5 text-[0.95rem] flex items-start gap-2.5">
                    <KeelMark size={16} className="mt-1 flex-shrink-0" />
                    <span>{r.keel}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-ink-soft">You can also turn texts off at any time in Keel, in Settings.</p>
          </section>

          {/* Terms */}
          <section id="terms" className="scroll-mt-28">
            <H2>SMS terms</H2>
            <ol className="space-y-4 list-decimal pl-5 marker:font-semibold marker:text-accent">
              <li><span className="font-semibold">Program.</span> Keel texts, from Korda Labs. Texts about the tasks, goals and reminders in your own Keel account, sent to the mobile number you gave and verified.</li>
              <li><span className="font-semibold">Consent.</span> You receive texts only if you tick the opt-in box in Keel and confirm your number. Consent is not a condition of using Keel or of buying anything.</li>
              <li><span className="font-semibold">Frequency.</span> Message frequency varies, up to 20 texts a day.</li>
              <li><span className="font-semibold">Cost.</span> Korda Labs does not charge for texts. Message and data rates may apply from your mobile carrier.</li>
              <li><span className="font-semibold">Stopping.</span> Reply STOP to any Keel text, or turn texts off in Settings. You get one message confirming it, then no more. Reply START to turn them back on.</li>
              <li><span className="font-semibold">Help.</span> Reply HELP to any Keel text, or email <a href={`mailto:${SUPPORT}`} className="text-accent hover:underline">{SUPPORT}</a>.</li>
              <li><span className="font-semibold">Carriers.</span> Mobile carriers are not liable for delayed or undelivered messages. Delivery depends on your carrier and your coverage.</li>
              <li><span className="font-semibold">Your number.</span> If you change or give up your mobile number, turn texts off first or tell us, so messages do not go to someone else.</li>
              <li><span className="font-semibold">Privacy.</span> We do not sell your mobile number or share it, or your text opt-in, with third parties or affiliates for their marketing. See the <Link href="/privacy#text-messages" className="text-accent hover:underline">Privacy Policy</Link>.</li>
              <li><span className="font-semibold">Other terms.</span> These SMS terms add to the Korda Labs <Link href="/terms" className="text-accent hover:underline">Terms of Service</Link>.</li>
            </ol>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
