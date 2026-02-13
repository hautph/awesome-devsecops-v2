import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout";

const waysToContribute = [
  {
    title: "Add New Tools",
    description: "Submit security tools to our directory with detailed descriptions and categorization.",
    icon: "💻",
    color: "text-cyan-400",
  },
  {
    title: "Improve Documentation",
    description: "Help improve our guides, fix typos, and add helpful explanations.",
    icon: "📖",
    color: "text-blue-400",
  },
  {
    title: "Share Code Examples",
    description: "Contribute practical CI/CD templates and security configurations.",
    icon: "📝",
    color: "text-green-400",
  },
  {
    title: "Report Issues",
    description: "Found a bug or outdated information? Help us keep the content accurate.",
    icon: "⚠️",
    color: "text-yellow-400",
  },
];

const events = [
  {
    name: "DevSecCon 2024",
    date: "March 15-16, 2024",
    location: "Virtual",
    type: "Conference",
  },
  {
    name: "RSA Conference",
    date: "April 24-27, 2024",
    location: "San Francisco",
    type: "Conference",
  },
  {
    name: "KubeCon EU",
    date: "May 16-19, 2024",
    location: "Paris",
    type: "Conference",
  },
  {
    name: "Black Hat USA",
    date: "August 5-10, 2024",
    location: "Las Vegas",
    type: "Conference",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    description: "Star & Contribute",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    url: "https://github.com/awesome-devsecops",
    color: "hover:border-gray-500",
  },
  {
    name: "Discord",
    description: "Join Community",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
    ),
    url: "https://discord.gg/devsecops",
    color: "hover:border-indigo-500",
  },
  {
    name: "Twitter/X",
    description: "Follow Updates",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    url: "https://twitter.com/awesomedevsecop",
    color: "hover:border-sky-500",
  },
  {
    name: "LinkedIn",
    description: "Network",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    url: "https://linkedin.com/company/awesome-devsecops",
    color: "hover:border-blue-500",
  },
];

export default function CommunityPage() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#111118] to-[#0a0a0f] py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 px-4 py-1.5">
            <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Open Source Community
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Join the Community</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contribute, learn, and connect with fellow DevSecOps practitioners. Together, we build better security practices.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* How to Contribute */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How to Contribute</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToContribute.map((item) => (
              <Card key={item.title} className="bg-[#111118] border-white/10 hover:border-white/20 transition-all group">
                <CardHeader>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contribution Guidelines */}
        <section className="mb-16">
          <Card className="bg-[#111118] border-white/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Contribution Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4">Getting Started</h4>
                  <ol className="space-y-3 text-sm text-gray-400">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</span>
                      Fork the repository on GitHub
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">2</span>
                      Create a feature branch for your changes
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">3</span>
                      Make your changes following our style guide
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">4</span>
                      Submit a pull request for review
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-white/10 text-gray-300 hover:text-white hover:bg-white/5">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      View Full Guidelines
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-white/10 text-gray-300 hover:text-white hover:bg-white/5">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      PR Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-white/10 text-gray-300 hover:text-white hover:bg-white/5">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a3 3 0 110-6 3 3 0 010 6zm0 0c0 4.418-4.03 8-9 8" />
                      </svg>
                      Style Guide
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Connect With Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Connect With Us</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className={`bg-[#111118] border-white/10 ${link.color} transition-all cursor-pointer h-full`}>
                  <CardContent className="py-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      {link.icon}
                    </div>
                    <h3 className="font-semibold text-white">{link.name}</h3>
                    <p className="text-xs text-gray-500">{link.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {events.map((event) => (
              <Card key={event.name} className="bg-[#111118] border-white/10 hover:border-white/20 transition-all">
                <CardContent className="py-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white truncate">{event.name}</h3>
                    <p className="text-sm text-gray-400">{event.date} • {event.location}</p>
                  </div>
                  <Badge variant="outline" className="border-purple-500/50 text-purple-400 shrink-0">
                    {event.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" className="border-white/10 text-gray-300 hover:text-white">
              View Full Events Calendar
            </Button>
          </div>
        </section>

        {/* Code of Conduct */}
        <section id="code-of-conduct">
          <Card className="bg-[#111118] border-white/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Code of Conduct
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                We are committed to providing a welcoming and inspiring community for all. Please read and follow our Code of Conduct to ensure a positive experience for everyone.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Be respectful and inclusive
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Welcome diverse perspectives
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Focus on constructive feedback
                </div>
              </div>
              <Button variant="outline" className="border-white/10 text-gray-300 hover:text-white">
                Read Full Code of Conduct
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageWrapper>
  );
}
