"use client"

import { useState, useMemo } from "react"
import { blogPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog-card"
import { SearchBar } from "@/components/search-bar"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return blogPosts

    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }, [searchQuery])

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach/20 via-background to-purple-accent/10">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-accent to-purple-accent bg-clip-text text-transparent">
            Srivani's Blog
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Thoughts, Tutorials, and Projects</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to my corner of the internet where I share insights about web development, design patterns, and the
            latest technologies shaping our digital world.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            {searchQuery ? `Search Results (${filteredPosts.length})` : "Latest Posts"}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No posts found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery ? filteredPosts : regularPosts).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
