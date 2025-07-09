// import { NextRequest, NextResponse } from 'next/server'
// import clientPromise from '../../../lib/mongodb'

// const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY!

// async function verifyRecaptcha(token: string) {
//   try {
//     const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: `secret=${SECRET_KEY}&response=${token}`,
//     })
//     const data = await res.json()
//     console.log('reCAPTCHA verification response:', data)
//     return data.success
//   } catch (error) {
//     console.error('Error verifying reCAPTCHA:', error)
//     return false
//   }
// }

// function validateContactData(data: any) {
//   const { name, email, phone, message } = data
//   if (
//     typeof name !== 'string' || name.trim() === '' ||
//     typeof email !== 'string' || !email.includes('@') ||
//     typeof phone !== 'string' || phone.trim() === '' ||
//     typeof message !== 'string' || message.trim() === ''
//   ) {
//     return false
//   }
//   return true
// }

// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json()

//     if (!data.token || !(await verifyRecaptcha(data.token))) {
//       return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
//     }

//     if (!validateContactData(data)) {
//       return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
//     }

//     const client = await clientPromise
//     const db = client.db('vastuapp')
//     const collection = db.collection('contacts')

//     await collection.insertOne({
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       message: data.message,
//       submittedAt: new Date(),
//     })

//     return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 })
//   } catch (error) {
//     console.error('Error processing contact form:', error)
//     return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
//   }
// }



import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY ?? ''

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  token: string
}

interface RecaptchaResponse {
  success: boolean
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const params = new URLSearchParams()
    params.append('secret', SECRET_KEY)
    params.append('response', token)

    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })

    const data: RecaptchaResponse = await res.json()
    console.log('reCAPTCHA verification response:', data)
    return data.success
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error)
    return false
  }
}

function validateContactData(data: ContactFormData): boolean {
  const { name, email, phone, message } = data
  if (
    typeof name !== 'string' || name.trim() === '' ||
    typeof email !== 'string' || !email.includes('@') ||
    typeof phone !== 'string' || phone.trim() === '' ||
    typeof message !== 'string' || message.trim() === ''
  ) {
    return false
  }
  return true
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as ContactFormData

    if (!data.token || !(await verifyRecaptcha(data.token))) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    if (!validateContactData(data)) {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('vastuapp')
    const collection = db.collection('contacts')

    await collection.insertOne({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      submittedAt: new Date(),
    })

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
