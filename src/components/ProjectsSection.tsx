import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NFC Dubai",
    category: "Car Rental Website",
    description:
      "A premium car rental platform with an intuitive booking system and luxury vehicle showcase.",
    role: "UI/UX Designer",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Study Singapore",
    category: "Educational Platform",
    description:
      "A comprehensive college website helping international students explore educational opportunities in Singapore.",
    role: "UI/UX Designer",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "StreamSpace",
    category: "Journal Platform",
    description:
      "A modern platform for academic journal paper management, submission, and peer review processes.",
    role: "Lead Designer",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Journal Management System",
    category: "SaaS Platform",
    description:
      "End-to-end journal management solution with editorial workflows, author dashboards, and reviewer portals.",
    role: "UI/UX Designer",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Conference Management System",
    category: "Event Platform",
    description:
      "A complete conference management platform for paper submissions, reviews, and event coordination.",
    role: "UI/UX Designer",
    color: "from-rose-500 to-pink-600",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactDefaults, setContactDefaults] = useState<{ subject?: string; inquiry?: string } | null>(null);

  function openProject(project: typeof projects[0]) {
    setSelectedProject(project);
    setIsProjectDialogOpen(true);
  }

  function contactAbout(project: typeof projects[0]) {
    setContactDefaults({ subject: `${project.title} - ${project.category}`, inquiry: "Hire" });
    setIsContactOpen(true);
  }

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden h-full hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                {/* Project preview gradient */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-6xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-purple-400">{project.category}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {project.role}
                    </span>
                    <button
                      onClick={() => openProject(project)}
                      className="text-purple-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                      aria-label={`View details for ${project.title}`}
                    >
                      View Details
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project detail dialog */}
        <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
          <DialogContent className="max-w-3xl">
            {selectedProject && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img src={`${import.meta.env.BASE_URL}projects/nfc-dubai.svg`} alt={selectedProject.title} className="w-full rounded-lg shadow-md" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-sm text-purple-400 mb-2">{selectedProject.category}</p>

                  <p className="text-muted-foreground mb-4">{selectedProject.description}</p>

                  <h4 className="font-semibold mb-2">Project Overview</h4>
                  <p className="text-sm mb-4">NFC Luxury Car Rental is a premium car rental service based in Dubai, offering luxury, sports, and exotic cars for tourists and residents. The goal of this project was to design a modern, elegant, and user-friendly website that reflects the brand's luxury identity and improves the online booking experience.</p>

                  <h4 className="font-semibold mb-2">Design Objective</h4>
                  <p className="text-sm mb-4">To build a centralized, secure, and user-friendly system that simplifies the car rental process while highlighting premium vehicle collections.</p>

                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside mb-4 text-sm space-y-1">
                    <li>Clean and modern luxury UI</li>
                    <li>High-quality car showcase sections</li>
                    <li>Easy-to-use booking flow</li>
                    <li>Responsive design for mobile, tablet, and desktop</li>
                    <li>Clear contact and location information</li>
                    <li>Strong call-to-action buttons</li>
                  </ul>

                  <h4 className="font-semibold mb-2">My Role</h4>
                  <p className="text-sm mb-4">UI/UX Designer — UI/UX Design, Website Layout & Structure, Color Palette & Typography, Responsive Design Concept, Design for Home, Car Listing, Booking, and Contact pages</p>

                  <div className="flex gap-3">
                    <a href="#" className="btn btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-amber-500 to-orange-600 text-white">View Case Study <ExternalLink className="w-4 h-4" /></a>
                    <button onClick={() => { contactAbout(selectedProject); setIsProjectDialogOpen(false); }} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border">Contact About Project</button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Contact dialog triggered from project */}
        <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} defaultSubject={contactDefaults?.subject} defaultInquiry={contactDefaults?.inquiry} />
      </div>
    </section>
  );
}
