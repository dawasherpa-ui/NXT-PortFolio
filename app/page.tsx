"use client";
import { useState } from "react";
import ActionButton from "@/components/action-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";
import Sidebar from "@/components/sidebar";
import SkillOutline from "@/components/skill-outline";
import { Separator } from "@/components/ui/separator";
import WorkShowcase from "@/components/work-showcase";

import {
  Project,
  WorkExperience,
  aboutYou,
  marketingHeadlines,
  projects,
  skills,
  workExperiences,
} from "@/lib/data";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="max-w-full md:max-w-4xl mx-auto md:mt-8">
      <Navbar />
      <div className="flex flex-col md:flex-row my-5 md:my-10 mx-4 md:mx-0 space-y-5 md:space-y-0 md:space-x-10">
        <button
          className="md:hidden text-left text-sm font-medium text-muted-foreground"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        <div
          className={`${isSidebarOpen ? "block" : "hidden"} md:block w-10/12`}
        >
          <Sidebar />
        </div>
        <div className="w-full md:min-w-[65vh] space-y-10">
          {/* Hero */}
          <section id="home" key="home" className="space-y-5">
            <div className="text-xl md:text-2xl font-bold tracking-tight">
              {marketingHeadlines.mainHeadline}
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {marketingHeadlines.subHeadline}
            </div>
            <Separator />
            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <ActionButton actionText="Hire me" />
              <div className="flex justify-between sm:justify-end space-x-4">
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">
                    {aboutYou.yearsOfExperience}
                  </h3>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">
                    {aboutYou.location}
                  </h3>
                  <p className="text-xs text-muted-foreground">Location</p>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.map((skill) => (
                  <SkillOutline
                    key={skill.text}
                    Icon={skill.icon}
                    text={skill.text}
                  />
                ))}
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mr-2">
                  <Icon  icon="simple-icons:langchain" className="mr-2 h-4 w-4" />
                  Langchain
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Tech stack</p>
            </div>
          </section>
          {/* Projects */}
          <section id="projects" key="projects">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Projects
            </h2>
            <div className="space-y-5 mt-5">
              {projects.map((project: Project) => (
                <ProjectShowcase key={project.title} project={project} />
              ))}
            </div>
          </section>
          {/* Work */}
          <section id="work" key="work">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Work
            </h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-4 md:p-6 space-y-6">
                {workExperiences.map(
                  (experience: WorkExperience, index: number) => (
                    <WorkShowcase
                      key={experience.company}
                      experience={experience}
                      whetherlast={workExperiences.length == index + 1}
                    />
                  )
                )}
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" key="contact">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Contact
            </h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
              <p className="p-4 md:p-6 text-sm text-muted-foreground">
                Best way to reach me is through:{" "}
                <a href={`mailto:${aboutYou.email}`} className="break-all">
                  {aboutYou.email}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
