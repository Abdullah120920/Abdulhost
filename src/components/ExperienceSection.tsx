import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "UI/UX Designer",
    company: "Kryon Knowledgeworks",
    location: "Remote",
    period: "Sep 2024 – Present",
    current: true,
    description:
      "Designing and prototyping user-centric interfaces for SaaS products, research platforms, and educational websites. Collaborating with developers to ensure seamless implementation.",
    highlights: [
      "On-site Experience at IIT Madras - Gained practical exposure to industrial processes and engineering applications.",
    ],
    projects: [
      "NFC Dubai – Car Rental Website",
      "Study Singapore – College Website",
      "StreamSpace – Journal Paper Platform",
      "Journal Management System",
      "Conference Management System",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Eye Catcher",
    location: "Madurai",
    period: "2020",
    current: false,
    description:
      "Created visual designs for marketing materials, social media content, and brand identities for local businesses.",
    highlights: [],
    projects: [],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-violet-500 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                <div className="md:w-1/2" />

                <div className="md:w-1/2">
                  <div className="glass-card rounded-3xl p-6 md:p-8 glow-purple hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium gradient-bg text-white">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {exp.highlights.length > 0 && (
                      <div className="mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <p key={i} className="text-sm text-purple-300 bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                            {highlight}
                          </p>
                        ))}
                      </div>
                    )}

                    {exp.projects.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-sm font-medium text-foreground mb-3">
                          Key Projects:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project) => (
                            <span
                              key={project}
                              className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
