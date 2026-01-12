import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.E Mechanical Engineering",
    institution: "Engineering College",
    period: "2021 – 2024",
    description:
      "Developed strong analytical and problem-solving skills with a foundation in engineering principles that complement my design thinking approach.",
  },
  {
    degree: "Diploma in DEEE",
    institution: "Polytechnic College",
    period: "2017 – 2020",
    description:
      "Gained foundational knowledge in electrical and electronics engineering, understanding the technical aspects that inform better UX decisions.",
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="glass-card rounded-3xl p-6 md:p-8 hover:scale-[1.01] transition-transform duration-300 glow-blue">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-purple-400 font-medium mb-3">
                      {edu.institution}
                    </p>

                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
