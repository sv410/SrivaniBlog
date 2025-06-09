import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`}>
        {post.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {post.featured && <Badge className="absolute top-3 left-3 bg-orange-accent text-white">Featured</Badge>}
          </div>
        )}

        <CardHeader className="pb-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </div>
          </div>

          <h2 className="text-xl font-semibold line-clamp-2 group-hover:text-orange-accent transition-colors">
            {post.title}
          </h2>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-muted-foreground line-clamp-3 mb-4">{post.description}</p>

          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{post.tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
