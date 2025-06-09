import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach/20 via-background to-purple-accent/10">
      <Navbar />

      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-orange-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button className="bg-orange-accent hover:bg-orange-accent/90 text-white">Back to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
