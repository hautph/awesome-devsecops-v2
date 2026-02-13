"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout";
import resourcesData from "@/data/resources.json";

const resourceTypeIcons: Record<string, string> = {
  book: "📚",
  course: "🎓",
  certification: "🏆",
  video: "📺",
  podcast: "🎙️",
  blog: "📰",
  newsletter: "📧",
  practice: "💻",
  ctf: "🚩",
};

const levelColors: Record<string, string> = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  advanced: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  all: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const costColors: Record<string, string> = {
  free: "bg-green-500/20 text-green-400",
  paid: "bg-purple-500/20 text-purple-400",
  freemium: "bg-blue-500/20 text-blue-400",
};

export default function ResourcesPage() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const resources = resourcesData.resources;

  const resourceTypes = useMemo(() => {
    const types = new Set(resources.map((r) => r.type));
    return ["all", ...Array.from(types)];
  }, [resources]);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesType = selectedType === "all" || resource.type === selectedType;
      const matchesLevel = !selectedLevel || resource.level === selectedLevel;
      return matchesType && matchesLevel;
    });
  }, [resources, selectedType, selectedLevel]);

  const getTypeCount = (type: string) => {
    if (type === "all") return resources.length;
    return resources.filter((r) => r.type === type).length;
  };

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#111118] to-[#0a0a0f] py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Learning Resources</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Everything you need to master DevSecOps — books, courses, videos, podcasts, and hands-on practice platforms.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {resourceTypes.map((type) => (
              <Button
                key={type}
                onClick={() => setSelectedType(type)}
                variant={selectedType === type ? "default" : "outline"}
                className={
                  selectedType === type
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "border-white/20 text-gray-400 hover:text-white hover:bg-white/5"
                }
              >
                {type === "all" ? "📚 All" : `${resourceTypeIcons[type] || "📄"} ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                <Badge variant="secondary" className="ml-2 bg-white/10 text-gray-300">
                  {getTypeCount(type)}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Level Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-400 text-sm self-center mr-2">Level:</span>
            {["beginner", "intermediate", "advanced", "all"].map((level) => (
              <Button
                key={level}
                onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                variant={selectedLevel === level ? "default" : "outline"}
                size="sm"
                className={
                  selectedLevel === level
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "border-white/20 text-gray-400 hover:text-white"
                }
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No resources found with the current filters.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSelectedType("all");
                setSelectedLevel(null);
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card
                key={resource.id}
                className="bg-[#111118] border-white/10 hover:border-white/20 transition-all group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl">{resourceTypeIcons[resource.type] || "📄"}</span>
                    <div className="flex gap-2">
                      <Badge className={`${costColors[resource.cost]} border-0`}>
                        {resource.cost === "free" ? "✅ Free" : resource.cost === "paid" ? "💰 Paid" : "🔶 Freemium"}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </CardTitle>
                  {resource.author && (
                    <p className="text-sm text-gray-500">by {resource.author}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 line-clamp-3 mb-4">
                    {resource.description}
                  </CardDescription>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <Badge className={`${levelColors[resource.level]} border capitalize`}>
                      {resource.level}
                    </Badge>
                    {resource.rating && (
                      <div className="flex items-center gap-1 text-yellow-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="text-sm">{resource.rating}</span>
                      </div>
                    )}
                  </div>
                  <Button
                    asChild
                    className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white"
                  >
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      View Resource
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
