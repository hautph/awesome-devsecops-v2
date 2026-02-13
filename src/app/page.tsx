import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout";
import toolsData from "@/data/tools.json";
import roadmapData from "@/data/roadmap.json";

const lifecyclePhases = [
  { name: "Plan", description: "Threat Modeling & Security Requirements", color: "from-blue-500 to-blue-600" },
  { name: "Code", description: "Secure Coding & SAST", color: "from-cyan-500 to-cyan-600" },
  { name: "Build", description: "SCA & Container Security", color: "from-green-500 to-green-600" },
  { name: "Test", description: "DAST & Penetration Testing", color: "from-yellow-500 to-orange-500" },
  { name: "Release", description: "Artifact Signing & Policies", color: "from-purple-500 to-purple-600" },
  { name: "Deploy", description: "IaC Security & Config", color: "from-pink-500 to-pink-600" },
  { name: "Operate", description: "Runtime Security & RASP", color: "from-red-500 to-red-600" },
  { name: "Monitor", description: "SIEM & Threat Intel", color: "from-indigo-500 to-indigo-600" },
];

const principles = [
  {
    title: "Shift Left",
    description: "Integrate security early in the development lifecycle to find and fix vulnerabilities faster and at lower cost.",
    icon: "🔒",
  },
  {
    title: "Automation First",
    description: "Automate security testing and compliance checks throughout the CI/CD pipeline for consistent protection.",
    icon: "⚡",
  },
  {
    title: "Collaboration",
    description: "Bridge the gap between development, security, and operations teams through shared responsibility.",
    icon: "🤝",
  },
  {
    title: "Continuous Monitoring",
    description: "Real-time visibility into security posture and compliance status across all environments.",
    icon: "📊",
  },
];

const learningPaths = [
  {
    level: "Beginner",
    duration: "4-6 weeks",
    skills: 12,
    description: "Start your DevSecOps journey with fundamentals",
    color: "from-green-500 to-emerald-600",
  },
  {
    level: "Intermediate",
    duration: "8-12 weeks",
    skills: 24,
    description: "Deep dive into security tools and practices",
    color: "from-blue-500 to-cyan-600",
  },
  {
    level: "Advanced",
    duration: "12-16 weeks",
    skills: 36,
    description: "Master complex security architectures",
    color: "from-purple-500 to-pink-600",
  },
];

export default function HomePage() {
  const featuredTools = toolsData.tools.filter(tool => tool.featured).slice(0, 6);
  const totalTools = toolsData.tools.length;
  const totalSkills = roadmapData.phases.reduce((acc, phase) => acc + phase.skills.length, 0);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-4 py-1.5">
              <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              The Complete DevSecOps Resource
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Master DevSecOps
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Learn to integrate security practices into every stage of your DevOps pipeline. 
              From code to production, we&apos;ve got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-6 text-lg">
                <Link href="/roadmap">
                  Start Learning
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link href="/tools">
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Browse Tools
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-[#111118]/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{totalTools}+</div>
              <div className="text-gray-500 text-sm">Security Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{totalSkills}+</div>
              <div className="text-gray-500 text-sm">Skills to Learn</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-gray-500 text-sm">DevSecOps Phases</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">∞</div>
              <div className="text-gray-500 text-sm">Free & Open Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* DevSecOps Lifecycle */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">DevSecOps Lifecycle</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Security integrated at every phase of the software development lifecycle
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {lifecyclePhases.map((phase, index) => (
              <Link 
                href={`/roadmap#${phase.name.toLowerCase()}`} 
                key={phase.name}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`} />
                <div className="relative bg-[#1a1a24] border border-white/10 rounded-xl p-4 text-center group-hover:border-white/20 transition-all h-full">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-white block mb-1">{phase.name}</span>
                  <span className="text-xs text-gray-500 hidden lg:block">{phase.description.split(" ")[0]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Principles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Core principles that guide successful DevSecOps implementation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => (
              <Card key={principle.title} className="bg-[#111118] border-white/10 hover:border-white/20 transition-all group">
                <CardHeader>
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{principle.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Tools</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Industry-leading security tools to secure your DevOps pipeline
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <Link href={`/tools?tool=${tool.slug}`} key={tool.id}>
                <Card className="bg-[#1a1a24] border-white/10 hover:border-blue-500/50 transition-all cursor-pointer h-full group">
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
                    <div className="flex items-center gap-2 mt-3">
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                        {tool.categories[0].toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/tools">View All Tools →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Learning Paths</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Structured learning journeys to master DevSecOps at your pace
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <Card key={path.level} className="bg-[#111118] border-white/10 hover:border-white/20 transition-all relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-r ${path.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center text-white font-bold mb-4`}>
                    {path.level[0]}
                  </div>
                  <CardTitle className="text-2xl">{path.level}</CardTitle>
                  <CardDescription className="text-gray-400">{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{path.duration}</span>
                    <span>{path.skills} skills</span>
                  </div>
                  <Button asChild className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
                    <Link href="/roadmap">Start Path</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#111118] to-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and security professionals who are building secure software with DevSecOps practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-6 text-lg">
              <Link href="/roadmap">Begin Your Journey</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link href="https://github.com/awesome-devsecops" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
