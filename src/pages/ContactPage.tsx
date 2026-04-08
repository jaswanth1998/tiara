import { useState } from 'react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { MapPin, Phone, Clock, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { PersianDivider } from '@/components/common/PersianDivider'
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
      {/* Hero with client interior */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden">
        <img
          src="/images/client-interior/client-interior-08-lg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/50 to-navy-900" />
        <div className="relative z-10 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 className="font-display text-4xl font-bold md:text-6xl">
              <span className="text-gold-gradient">Contact Us</span>
            </h1>
            <p className="mt-3 font-accent text-lg italic text-gold-300/70">
              We&apos;d love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Info + Map */}
      <section className="bg-warm-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <ScrollReveal variant="slide-left">
            <div className="space-y-8">
              <SectionHeading
                title="Get in Touch"
                subtitle="Visit us or give us a call"
                align="left"
                theme="light"
              />

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Address',
                    content: restaurant.address,
                    href: `https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`,
                    external: true,
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: restaurant.phone,
                    href: `tel:${restaurant.phone.replace(/-/g, '')}`,
                    external: false,
                  },
                  {
                    icon: Clock,
                    title: 'Hours',
                    content: restaurant.hours,
                    href: undefined,
                    external: false,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-5 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-warm-900">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="mt-1 text-warm-700 hover:text-gold-600 transition-colors duration-300"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="mt-1 text-warm-700">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-warm-900">Services</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {restaurant.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-warm-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-warm-700 transition-all duration-300 hover:border-gold-500 hover:text-gold-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={200}>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                title="Tiara Kebabs & More location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.1!2d-63.667!3d44.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s640+Brookline+Drive+Bedford+Nova+Scotia!5e0!3m2!1sen!2sca!4v1"
                className="h-80 w-full border-0 md:h-full md:min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Send Us a Message"
              subtitle="Questions, feedback, or catering inquiries"
            />
          </ScrollReveal>

          <ScrollReveal delay={200} variant="fade-up">
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gold-400">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-xl border-navy-600 bg-navy-800 py-3 text-gold-300 placeholder:text-gold-300/30 focus:border-gold-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gold-400">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="rounded-xl border-navy-600 bg-navy-800 py-3 text-gold-300 placeholder:text-gold-300/30 focus:border-gold-500 transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gold-400">
                  Phone (optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(902) 000-0000"
                  className="rounded-xl border-navy-600 bg-navy-800 py-3 text-gold-300 placeholder:text-gold-300/30 focus:border-gold-500 transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gold-400">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="rounded-xl border-navy-600 bg-navy-800 text-gold-300 placeholder:text-gold-300/30 focus:border-gold-500 transition-colors duration-300"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-2">
                  {formStatus === 'idle' && <><Send className="h-4 w-4" /> Send Message</>}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && 'Message Sent!'}
                </span>
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Order CTA */}
      <section className="relative overflow-hidden py-14 md:py-18">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]" />
        </div>
        <ScrollReveal variant="scale">
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <PersianDivider variant="accent" className="mx-auto mb-6 [&_svg]:text-navy-900/30" />
            <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
              Skip the wait — order online
            </h2>
            <div className="mt-6">
              <a href={restaurant.orderUrl} className="btn-navy">
                <span>Order Now</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

export default ContactPage
