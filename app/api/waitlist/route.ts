export const runtime = 'edge'

export async function POST(request: Request) {
  const body = await request.json()
  const { email } = body

  if (!email || !email.includes('@')) {
    return Response.json({ success: false, error: 'Invalid email' }, { status: 400 })
  }

  // TODO: Connect to email list provider (Resend, ConvertKit, etc.)
  console.log(`[Waitlist] New signup: ${email}`)

  return Response.json({ success: true, message: "You're on the list." })
}
