import { Link } from 'react-router-dom'
import { PersianDivider } from '@/components/common/PersianDivider'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <div className="animate-fade-in-up text-center" style={{ animationFillMode: 'both' }}>
        <h1 className="font-display text-8xl font-bold text-gold-gradient md:text-9xl">404</h1>
        <PersianDivider variant="accent" className="mx-auto my-6" />
        <p className="text-lg text-gold-300/80">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
