"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageWrapper } from "@/components/layout";
import toolsData from "@/data/tools.json";

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = toolsData.categories;
  const tools = toolsData.tools;

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        !selectedCategory || tool.categories.includes(selectedCategory as any);

      return matchesSearch && matchesCategory;
    });
  }, [tools, searchQuery, selectedCategory]);

  const getCategoryCount = (categoryId: string) => {
    return tools.filter((tool) => tool.categories.includes(categoryId as any)).length;
  };

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#111118] to-[#0a0a0f] py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tools Directory</h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Discover the best security tools for your DevSecOps pipeline. Browse by category or search for specific tools.
          </p>
          <div className="max-w-xl relative">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              placeholder="Search tools by name, category, or feature..."
              className="bg-[#1a1a24] border-white/10 pl-12 h-12 text-white placeholder:text-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Categories
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all flex items-center justify-between ${
                    selectedCategory === null
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>All Tools</span>
                  <Badge variant="secondary" className="bg-white/10 text-gray-400">
                    {tools.length}
                  </Badge>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <Badge variant="secondary" className="bg-white/10 text-gray-400">
                      {getCategoryCount(cat.id)}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400 text-sm">
                Showing {filteredTools.length} of {tools.length} tools
              </p>
            </div>

            {filteredTools.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">No tools found matching your search.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={tool.website || tool.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="bg-[#111118] border-white/10 hover:border-blue-500/50 transition-all cursor-pointer group h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-lg group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                            {tool.name[0]}
                          </div>
                          {tool.stars && (
                            <div className="flex items-center gap-1 text-yellow-500">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                              <span className="text-sm">{(tool.stars / 1000).toFixed(1)}k</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              tool.type === "open-source"
                                ? "border-green-500/50 text-green-400"
                                : tool.type === "freemium"
                                ? "border-blue-500/50 text-blue-400"
                                : "border-purple-500/50 text-purple-400"
                            }`}
                          >
                            {tool.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-gray-400 line-clamp-2 mb-4">
                          {tool.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {tool.categories.slice(0, 2).map((cat) => (
                            <Badge
                              key={cat}
                              variant="secondary"
                              className="text-xs bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
                            >
                              {cat.toUpperCase()}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full border-white/20 text-white hover:bg-white/10 group-hover:border-blue-500/50"
                        >
                          Visit Website
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
