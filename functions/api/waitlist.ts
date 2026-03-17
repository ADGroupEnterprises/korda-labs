export const onRequestPost: PagesFunction<{
  RESEND_API_KEY: string
  RESEND_AUDIENCE_ID: string
}> = async (context) => {
  try {
    const body = await context.request.json() as { email?: string }
    const { email } = body

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const RESEND_API_KEY = context.env.RESEND_API_KEY
    const RESEND_AUDIENCE_ID = context.env.RESEND_AUDIENCE_ID

    if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
      console.warn('[waitlist] Resend env vars not set — simulating success')
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const res = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    )

    if (res.status === 409 || res.status === 422) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (!res.ok) {
      const error = await res.json().catch(() => ({}))
      console.error('[waitlist] Resend API error:', res.status, error)
      return new Response(
        JSON.stringify({ error: 'Failed to join waitlist. Please try again.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('[waitlist] Unhandled error:', err)
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
