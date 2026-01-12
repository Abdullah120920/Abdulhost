import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Users, Lightbulb, Target } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Creative Vision",
    description: "Transforming complex problems into elegant solutions",
  },
  {
    icon: Users,
    title: "User-Centered",
    description: "Designing with empathy and user needs first",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with modern design trends",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Delivering measurable results through design",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Passionate Designer
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 glow-purple">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated UI/UX Designer with a passion for crafting 
                <span className="text-foreground font-medium"> intuitive and visually impactful digital experiences</span>. 
                With hands-on experience in designing for SaaS platforms, research management systems, 
                and educational websites, I bring a user-centered approach to every project.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in translating complex requirements into clean, functional designs 
                that enhance usability and drive engagement. My expertise spans 
                <span className="text-foreground font-medium"> wireframing, prototyping, responsive design</span>, 
                and close collaboration with development teams to ensure pixel-perfect implementation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at <span className="text-purple-400 font-medium">Kryon Knowledgeworks</span>, 
                I've contributed to major platforms including journal management systems, 
                conference management tools, and international client projects from NFC Dubai to Study Singapore.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
