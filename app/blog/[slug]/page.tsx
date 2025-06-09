import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { blogPosts, author } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach/20 via-background to-purple-accent/10">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none blog-content mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
          </div>

          {/* Author Info */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4" />
                    <h3 className="font-semibold text-lg">{author.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">{author.bio}</p>
                  <div className="flex gap-4 text-sm">
                    <a
                      href={`https://twitter.com/${author.social.twitter.replace("@", "")}`}
                      className="text-orange-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    <a
                      href={`https://github.com/${author.social.github}`}
                      className="text-orange-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={`https://linkedin.com/in/${author.social.linkedin}`}
                      className="text-orange-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  )
}
