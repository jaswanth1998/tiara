import { useState } from 'react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { MapPin, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { restaurant } from '@/data/restaurant'

export function ContactPage() {
  useDocumentTitle('Contact')
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    // TODO: Connect to Formspree or similar
    setTimeout(() => setFormStatus('sent'), 1000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[35vh] min-h-[250px] items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-900" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl font-bold text-gold-500 md:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Info + Map */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <ScrollReveal>
            <div className="space-y-8">
              <SectionHeading
                title="Get in Touch"
                subtitle="We'd love to hear from you"
                align="left"
                theme="light"
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold-600" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-warm-900">Address</h3>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-warm-700 hover:text-gold-600"
                    >
                      {restaurant.address}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 shrink-0 text-gold-600" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-warm-900">Phone</h3>
                    <a
                      href={`tel:${restaurant.phone.replace(/-/g, '')}`}
                      className="mt-1 text-warm-700 hover:text-gold-600"
                    >
                      {restaurant.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-6 w-6 shrink-0 text-gold-600" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-warm-900">Hours</h3>
                    <p className="mt-1 text-warm-700">{restaurant.hours}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-warm-900">Services</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {restaurant.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-warm-300 px-3 py-1 text-xs font-medium text-warm-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="Tiara Kebabs & More location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.1!2d-63.667!3d44.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s640+Brookline+Drive+Bedford+Nova+Scotia!5e0!3m2!1sen!2sca!4v1"
                className="h-80 w-full rounded-lg border-0 md:h-full md:min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Send Us a Message"
              subtitle="Questions, feedback, or catering inquiries"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gold-400">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border-navy-600 bg-navy-800 text-gold-300 placeholder:text-gold-300/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gold-400">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="border-navy-600 bg-navy-800 text-gold-300 placeholder:text-gold-300/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gold-400">
                  Phone (optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(902) 000-0000"
                  className="border-navy-600 bg-navy-800 text-gold-300 placeholder:text-gold-300/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gold-400">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="border-navy-600 bg-navy-800 text-gold-300 placeholder:text-gold-300/30"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={formStatus !== 'idle'}
                className="w-full"
              >
                {formStatus === 'idle' && 'Send Message'}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent!'}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-gold-500 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            Skip the wait — order online
          </h2>
          <div className="mt-6">
            <Button variant="secondary" className="border-navy-900 bg-navy-900 text-gold-500 hover:bg-navy-800">
              <a href={restaurant.orderUrl}>Order Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
