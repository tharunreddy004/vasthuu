"use client"
import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' }) // Clear error on change
  }

  function validate() {
    const newErrors: { [key: string]: string } = {}

    if (!form.name.trim()) newErrors.name = 'Name is required'
    else if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) newErrors.name = 'Name can only contain letters and spaces'

    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = 'Invalid email address'

    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(form.phone.trim())) newErrors.phone = 'Phone number must be 10 digits'

    if (!form.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  // This function handles the form submission, including reCAPTCHA verification and server communication.
    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError(null)
    setSubmitted(false)

    if (!validate()) return

    setLoading(true)

    if (!recaptchaRef.current) {
      setServerError('reCAPTCHA not loaded. Please refresh the page.')
      setLoading(false)
      return
    }

    let token: string | null = null;
    try {
      token = await recaptchaRef.current?.executeAsync() ?? null;
      // Do NOT reset here immediately to avoid timeout issues
    } catch (error) {
      console.error('reCAPTCHA executeAsync error:', error)
      setServerError('reCAPTCHA timed out or failed. Please try again.')
      setLoading(false)
      return
    }

    if (!token) {
      setServerError('Failed to get reCAPTCHA token. Please try again.')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Submission failed')
      }

      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
      setErrors({})
      recaptchaRef.current.reset() // Reset only after successful submission
    } catch (err: any) {
      console.error('Submit error:', err)
      setServerError(err.message || 'An unexpected error occurred. Please try again.')
      recaptchaRef.current.reset() // Reset on failure as well
    } finally {
      setLoading(false)
    }
  }


  return (
    <main className="container mx-auto px-4 py-12 max-w-lg">
      <h1 className="text-4xl font-bold mb-8 text-yellow-700 text-center">Contact Us</h1>
      <section className="mb-10">
        <form onSubmit={handleSubmit} noValidate className="bg-white shadow rounded-2xl p-8 space-y-5">
          {/* Inputs with error display */}
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
              className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.name ? 'border-red-500' : 'border-yellow-200'
              }`}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
              required
            />
            {errors.name && <p id="name-error" className="text-red-600 mt-1 text-sm font-semibold">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
              className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.email ? 'border-red-500' : 'border-yellow-200'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              required
            />
            {errors.email && <p id="email-error" className="text-red-600 mt-1 text-sm font-semibold">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
              className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.phone ? 'border-red-500' : 'border-yellow-200'
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby="phone-error"
              required
            />
            {errors.phone && <p id="phone-error" className="text-red-600 mt-1 text-sm font-semibold">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              disabled={loading}
              rows={4}
              className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.message ? 'border-red-500' : 'border-yellow-200'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
              required
            />
            {errors.message && <p id="message-error" className="text-red-600 mt-1 text-sm font-semibold">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold text-white transition ${
              loading ? 'bg-yellow-300 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {/* Server error message */}
          {serverError && <p className="text-red-600 mt-2 text-center font-semibold">{serverError}</p>}

          {/* Success message */}
          {submitted && !serverError && (
            <p className="text-green-600 mt-2 text-center font-semibold">Thank you! We will get back to you soon.</p>
          )}
        </form>
      </section>

      {/* Contact Info Section */}
      <section className="mb-12 text-center">
        <h2 className="text-xl font-semibold mb-3 text-yellow-800">Other Ways to Reach Us</h2>
        <div className="w-12 h-1 bg-yellow-400 rounded mx-auto mb-4"></div>
        <p className="font-semibold text-gray-700 mb-1">
          Phone: <a href="tel:+919876543210" className="text-yellow-700 hover:underline">+91 98765 43210</a>
        </p>
        <p className="font-semibold text-gray-700 mb-1">
          Email: <a href="mailto:info@vastuharmony.com" className="text-yellow-700 hover:underline">info@vastuharmony.com</a>
        </p>
        <p className="font-semibold text-gray-700 mb-1">
          Address: <span className="text-yellow-700">123 Harmony Avenue, Bengaluru, India</span>
        </p>
        <p className="font-semibold text-gray-700 mb-3">Operating Hours: 9am - 7pm (Mon-Sat)</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 hover:text-yellow-800 text-3xl transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 hover:text-yellow-800 text-3xl transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 hover:text-yellow-800 text-3xl transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* Invisible reCAPTCHA */}
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        size="invisible"
        ref={recaptchaRef}
      />
    </main>
  )
}

