"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PageWrapper } from "@/components/layout";
import roadmapData from "@/data/roadmap.json";

const difficultyColors: Record<string, string> = {
  beginner: "border-green-500/50 text-green-400",
  intermediate: "border-yellow-500/50 text-yellow-400",
  advanced: "border-orange-500/50 text-orange-400",
  expert: "border-red-500/50 text-red-400",
};

// Helper function to load progress from localStorage
function loadProgress(): Record<string, string[]> {
  if (typeof window === "undefined") return {};
  const saved = localStorage.getItem("devsecops-progress");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return {};
    }
  }
  return {};
}

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [progress] = useState<Record<string, string[]>>(loadProgress);

  const getPhaseProgress = (phaseId: string) => {
    const phaseSkills = roadmapData.phases.find(p => p.id === phaseId)?.skills || [];
    const completed = progress[phaseId]?.length || 0;
    return Math.round((completed / phaseSkills.length) * 100);
  };

  const phases = roadmapData.phases;

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#111118] to-[#0a0a0f] py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              {phases.length} Phases
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              {phases.reduce((acc, p) => acc + p.skills.length, 0)} Skills
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">DevSecOps Roadmap</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Your step-by-step guide to mastering DevSecOps. Click on each phase to explore the skills and topics.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Roadmap Visualization */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />

              {/* Phase Nodes */}
              <div className="space-y-4">
                {phases.map((phase, index) => {
                  const phaseProgress = getPhaseProgress(phase.id);
                  const isSelected = selectedPhase === index;
                  const isCompleted = phaseProgress === 100;
                  const inProgress = phaseProgress > 0 && phaseProgress < 100;

                  return (
                    <div
                      key={phase.id}
                      onClick={() => setSelectedPhase(index)}
                      className={`relative pl-16 cursor-pointer group transition-all ${
                        isSelected ? "scale-[1.02]" : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      {/* Node Circle */}
                      <div
                        className={`absolute left-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                          isCompleted
                            ? "bg-green-500 border-green-400"
                            : inProgress
                            ? "bg-[#1a1a24] border-blue-500"
                            : "bg-[#1a1a24] border-white/20"
                        } ${isSelected ? "ring-2 ring-blue-500/50 ring-offset-2 ring-offset-[#0a0a0f]" : ""}`}
                      >
                        {isCompleted ? (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <span className="text-sm font-bold text-white">{index + 1}</span>
                        )}
                      </div>

                      {/* Phase Card */}
                      <Card
                        className={`bg-[#111118] border-white/10 transition-all ${
                          isSelected ? "border-blue-500/50" : ""
                        }`}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <CardTitle className="text-lg">{phase.name}</CardTitle>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className={`text-xs capitalize ${difficultyColors[phase.difficulty]}`}
                              >
                                {phase.difficulty}
                              </Badge>
                              <Badge variant="outline" className="text-xs border-white/20 text-gray-400">
                                {phase.skills.length} skills
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Progress value={phaseProgress} className="h-1" />
                          <p className="text-sm text-gray-400 mt-2">
                            {phaseProgress}% Complete • ~{phase.estimatedTime}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-[#111118] border-white/10">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${
                      phases[selectedPhase]?.color || "from-blue-500 to-purple-500"
                    } flex items-center justify-center text-white font-bold text-2xl mb-4`}
                  >
                    {selectedPhase + 1}
                  </div>
                  <CardTitle className="text-2xl">{phases[selectedPhase]?.name}</CardTitle>
                  <Badge
                    variant="outline"
                    className={`w-fit text-xs capitalize ${
                      difficultyColors[phases[selectedPhase]?.difficulty || "beginner"]
                    }`}
                  >
                    {phases[selectedPhase]?.difficulty}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6">{phases[selectedPhase]?.description}</p>

                  <h4 className="text-sm font-semibold text-white mb-3">Skills Covered</h4>
                  <div className="space-y-2 mb-6">
                    {phases[selectedPhase]?.skills.map((skill) => (
                      <div key={skill.id} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg
                          className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>

                  {phases[selectedPhase]?.tools && phases[selectedPhase].tools.length > 0 && (
                    <>
                      <h4 className="text-sm font-semibold text-white mb-3">Related Tools</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {phases[selectedPhase].tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="secondary"
                            className="bg-white/5 text-gray-300"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Estimated Time</span>
                      <span className="text-white font-medium">
                        {phases[selectedPhase]?.estimatedTime}
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400">
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
