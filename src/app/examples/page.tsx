"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout";
import examplesData from "@/data/examples.json";

const categoryLabels: Record<string, string> = {
  "github-actions": "GitHub Actions",
  "gitlab-ci": "GitLab CI",
  "jenkins": "Jenkins",
  "docker": "Docker",
  "kubernetes": "Kubernetes",
  "terraform": "Terraform",
  "pre-commit": "Pre-commit",
  "scripts": "Scripts",
};

const categoryColors: Record<string, string> = {
  "github-actions": "from-gray-600 to-gray-700",
  "gitlab-ci": "from-orange-500 to-red-500",
  "jenkins": "from-red-500 to-orange-500",
  "docker": "from-blue-500 to-cyan-500",
  "kubernetes": "from-blue-600 to-indigo-600",
  "terraform": "from-purple-500 to-violet-500",
  "pre-commit": "from-green-500 to-emerald-500",
  "scripts": "from-yellow-500 to-orange-500",
};

export default function ExamplesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const examples = examplesData.examples;

  const categories = useMemo(() => {
    const cats = new Set(examples.map((e) => e.category));
    return Array.from(cats);
  }, [examples]);

  const filteredExamples = useMemo(() => {
    if (!selectedCategory) return examples;
    return examples.filter((e) => e.category === selectedCategory);
  }, [examples, selectedCategory]);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#111118] to-[#0a0a0f] py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Code Examples</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Ready-to-use code snippets and configurations for integrating security into your CI/CD pipelines.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            onClick={() => setSelectedCategory(null)}
            variant={selectedCategory === null ? "default" : "outline"}
            className={
              selectedCategory === null
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "border-white/20 text-gray-400 hover:text-white hover:bg-white/5"
            }
          >
            All Examples
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              variant={selectedCategory === cat ? "default" : "outline"}
              className={
                selectedCategory === cat
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "border-white/20 text-gray-400 hover:text-white hover:bg-white/5"
              }
            >
              {categoryLabels[cat] || cat}
            </Button>
          ))}
        </div>

        {/* Examples Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredExamples.map((example) => (
            <Card
              key={example.id}
              className="bg-[#111118] border-white/10 hover:border-white/20 transition-all"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <CardDescription className="text-gray-400 mt-2">
                      {example.description}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className={`shrink-0 bg-gradient-to-r ${categoryColors[example.category]} text-white border-0`}
                  >
                    {categoryLabels[example.category] || example.category}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {example.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-white/5 text-gray-400"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                {/* Code Block */}
                <div className="relative bg-[#0a0a0f] rounded-lg border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#1a1a24]">
                    <span className="text-xs text-gray-500 font-mono">{example.language}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(example.code, example.id)}
                    >
                      {copiedId === example.id ? (
                        <>
                          <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed max-h-64">
                    <code>{example.code}</code>
                  </pre>
                </div>

                {/* Usage Instructions */}
                {example.usageInstructions && example.usageInstructions.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Usage Instructions:</h4>
                    <ol className="space-y-1">
                      {example.usageInstructions.map((instruction, index) => (
                        <li key={index} className="text-sm text-gray-400 flex gap-2">
                          <span className="text-blue-400 font-mono">{index + 1}.</span>
                          {instruction}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredExamples.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No examples found for this category.</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
