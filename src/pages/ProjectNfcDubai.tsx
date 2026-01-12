import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export default function ProjectNfcDubai() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">NFC Dubai</h1>
          <p className="text-purple-400 mt-2">Car Rental Website</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <img src={`${import.meta.env.BASE_URL}projects/nfc-dubai.svg`} alt="NFC Dubai" className="w-full rounded-xl shadow-lg" />
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-2">Project Overview</h3>
            <p className="text-sm text-muted-foreground mb-4">NFC Luxury Car Rental is a premium car rental service based in Dubai, offering luxury, sports, and exotic cars for tourists and residents. The goal of this project was to design a modern, elegant, and user-friendly website that reflects the brand's luxury identity and improves the online booking experience.</p>

            <h4 className="font-semibold">My Role</h4>
            <p className="text-sm text-muted-foreground mb-4">UI/UX Designer — UI/UX Design, Website Layout & Structure, Color Palette & Typography, Responsive Design Concept</p>

            <div className="flex flex-col gap-3">
              <Link to="/">
                <Button variant="outline">Back to Portfolio</Button>
              </Link>
              <Button variant="gradient" onClick={() => setIsContactOpen(true)}>Contact About Project</Button>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-3">Design Objective</h3>
          <p className="text-sm text-muted-foreground mb-4">To build a centralized, secure, and user-friendly system that simplifies the car rental process while highlighting premium vehicle collections.</p>

          <h4 className="font-semibold mb-2">Key Features</h4>
          <ul className="list-disc list-inside text-sm space-y-1 mb-4">
            <li>Clean and modern luxury UI</li>
            <li>High-quality car showcase sections</li>
            <li>Easy-to-use booking flow</li>
            <li>Responsive design for mobile, tablet, and desktop</li>
            <li>Clear contact and location information</li>
            <li>Strong call-to-action buttons</li>
          </ul>

          <h4 className="font-semibold mb-2">Pages & Modules Designed</h4>
          <ul className="list-disc list-inside text-sm space-y-1 mb-6">
            <li>Home Page</li>
            <li>Car Listing Page</li>
            <li>Car Details Page</li>
            <li>Booking Page</li>
            <li>Contact Page</li>
          </ul>

          <h4 className="font-semibold mb-2">Outcome</h4>
          <p className="text-sm text-muted-foreground">The website provides a seamless luxury car rental experience that reflects the brand's premium identity, increases user engagement, and simplifies the booking process for customers.</p>
        </section>
      </div>

      <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} defaultSubject={"NFC Dubai - Car Rental Website"} defaultInquiry={"Hire"} />
    </main>
  );
}
