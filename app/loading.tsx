export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach/20 via-background to-purple-accent/10 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-orange-accent/20 border-t-orange-accent animate-spin mx-auto mb-4"></div>
        </div>
        <p className="text-lg text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
