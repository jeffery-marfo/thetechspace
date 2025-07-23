import { Calendar, User, ArrowRight, Search } from "lucide-react";


export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Web Design Trends That Will Dominate 2024",
      excerpt:
        "Discover the latest web design trends that are shaping the digital landscape and how to implement them in your projects.",
      category: "Design",
      author: "Alex Johnson",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "The Complete Guide to SEO for Small Businesses",
      excerpt: "Learn how to optimize your website for search engines and drive more organic traffic to your business.",
      category: "SEO",
      author: "Sarah Chen",
      date: "Dec 12, 2023",
      readTime: "8 min read",
      featured: false,
    },
    {
      title: "Why Your Business Needs a Mobile-First Website",
      excerpt:
        "Understanding the importance of mobile-first design and how it impacts user experience and conversions.",
      category: "Development",
      author: "Marcus Rodriguez",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      featured: false,
    },
    {
      title: "Building Brand Identity: A Designer's Perspective",
      excerpt: "The essential elements of creating a strong brand identity that resonates with your target audience.",
      category: "Branding",
      author: "Lisa Thompson",
      date: "Dec 8, 2023",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "The Psychology of Color in Web Design",
      excerpt: "How color choices affect user behavior and conversion rates on your website.",
      category: "Design",
      author: "Alex Johnson",
      date: "Dec 5, 2023",
      readTime: "4 min read",
      featured: false,
    },
    {
      title: "Optimizing Website Performance: A Technical Guide",
      excerpt: "Advanced techniques for improving website speed and performance for better user experience.",
      category: "Development",
      author: "David Kim",
      date: "Dec 3, 2023",
      readTime: "10 min read",
      featured: false,
    },
  ];

  const categories = ["All", "Design", "Development", "SEO", "Branding"];

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Insights & Inspiration</h1>
            <p className="text-xl text-slate-600 mb-8">
              Stay updated with the latest trends, tips, and insights from the world of design and development.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 w-full p-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Article</h2>
            <p className="text-slate-600">Our latest and most popular content</p>
          </div>

          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <div key={index} className="border-0 shadow-xl overflow-hidden rounded-lg">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square bg-gradient-to-br from-blue-100 to-purple-100 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{post.title}</h3>
                    <p className="text-slate-600 mb-6 text-lg">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-slate-500 mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-md flex items-center w-fit">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Latest Articles</h2>
            <p className="text-slate-600">Discover our most recent insights and tips</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <div
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden rounded-lg"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-blue-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white/90 text-slate-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-slate-500 mb-4">
                      <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <button
                      className="border border-slate-300 text-slate-700 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 font-semibold px-3 py-1 rounded-md text-sm flex items-center transition-all"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss an Update</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights, tips, and trends delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}