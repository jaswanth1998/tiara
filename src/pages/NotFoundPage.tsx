import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="font-display text-6xl font-bold text-gold-500">404</h1>
      <p className="text-lg text-gold-300">The page you're looking for doesn't exist.</p>
      <Button render={<Link to="/" />}>
        Return to Home
      </Button>
    </div>
  )
}

export default NotFoundPage
