import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 M. Abdullah. All rights reserved.
          </p>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Designed with <Heart className="w-4 h-4 text-purple-500 fill-purple-500" /> by M. Abdullah
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
