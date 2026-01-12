import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactFormDialog({ open, onOpenChange }: ContactFormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiry: "Hire",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Web3Forms access key and recipient email. Prefer environment variables, fallback to provided values.
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "e280f205-7042-4f4a-948d-b01bec6c4546";
  const WEB3FORMS_TO_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "12ronamabdul@gmail.com"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: formData.subject || `${formData.inquiry} Inquiry`,
        name: formData.name,
        email: formData.email,
        message: `Inquiry Type: ${formData.inquiry}\n\n${formData.message}`,
        to_email: WEB3FORMS_TO_EMAIL,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "", inquiry: "Hire" });
        onOpenChange(false);
      } else {
        // Provide actionable guidance for 403 errors (common when access_key is invalid or restricted)
        if (res.status === 403) {
          toast.error("403 Forbidden: Web3Forms access key rejected. Check your access key status and allowed origins in the Web3Forms dashboard.");
          console.error("Web3Forms 403 response:", data);
        } else {
          toast.error(data.message || "Failed to send message. Please try again later.");
          console.error("Web3Forms error response:", data);
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }; 

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-purple-500/20 sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Get In Touch</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Your Name
            </label>
            <Input
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/50 border-border rounded-xl h-12"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background/50 border-border rounded-xl h-12"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Subject
            </label>
            <Input
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-background/50 border-border rounded-xl h-12"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Inquiry Type
            </label>
            <select
              value={formData.inquiry}
              onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
              className="bg-background/50 border-border rounded-xl h-12 w-full p-2"
              required
            >
              <option value="Hire">Hire</option>
              <option value="Contact Us">Contact Us</option>
              <option value="Get in Touch">Get in Touch</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Message
            </label>
            <Textarea
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background/50 border-border rounded-xl min-h-[120px] resize-none"
              required
            />
          </div>

          <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
