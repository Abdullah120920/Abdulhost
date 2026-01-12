import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Layout,
  Layers,
  GitBranch,
  Monitor,
  CheckCircle,
  PenTool,
  Code,
  FileCode,
  Braces,
  Atom,
  Terminal,
  Figma,
  Bot,
  Sparkles,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  { name: "Design", percentage: 85, color: "from-purple-500 to-violet-500" },
  { name: "Development", percentage: 45, color: "from-blue-500 to-cyan-500" },
];

const designSkills = [
  { name: "UI Design", icon: Palette },
  { name: "UX Design", icon: Layout },
  { name: "Wireframing & Prototyping", icon: Layers },
  { name: "User Flows & IA", icon: GitBranch },
  { name: "Responsive Web Design", icon: Monitor },
  { name: "Usability Testing", icon: CheckCircle },
  { name: "Graphic Design", icon: PenTool },
];

const devSkills = [
  { name: "HTML", icon: Code, color: "#E34F26" },
  { name: "CSS", icon: FileCode, color: "#1572B6" },
  { name: "JavaScript", icon: Braces, color: "#F7DF1E" },
  { name: "React", icon: Atom, color: "#61DAFB" },
  { name: "Python", icon: Terminal, color: "#3776AB" },
];

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Adobe Illustrator", icon: PenTool },
  { name: "Adobe Photoshop", icon: Palette },
  { name: "Lovable", icon: Sparkles },
  { name: "ChatGPT", icon: Bot },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skill Percentages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto"
        >
          {skillCategories.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                <span className="text-2xl font-bold gradient-text">{skill.percentage}%</span>
              </div>
              <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.percentage}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                  className={`absolute h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Design Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Palette className="w-4 h-4 text-white" />
            </div>
            Design Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {designSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="glass-card rounded-2xl p-5 hover:scale-105 transition-all duration-300 group cursor-default"
              >
                <skill.icon className="w-8 h-8 text-purple-400 mb-3 group-hover:text-purple-300 transition-colors" />
                <p className="font-medium text-foreground">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            Development Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {devSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="glass-card rounded-2xl px-6 py-4 hover:scale-105 transition-all duration-300 flex items-center gap-3 group cursor-default"
              >
                <skill.icon className="w-6 h-6 transition-colors" style={{ color: skill.color }} />
                <p className="font-medium text-foreground">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            Tools & Software
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className="glass-card rounded-full px-6 py-3 hover:scale-105 transition-all duration-300 flex items-center gap-3 group cursor-default border border-purple-500/20"
              >
                <tool.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <p className="font-medium text-foreground">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
