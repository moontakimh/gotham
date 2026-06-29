import { Contact } from "@/components/sections/contact";
import { Craft } from "@/components/sections/craft";
import { Currently } from "@/components/sections/currently";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Opening } from "@/components/sections/opening";
import { Practice } from "@/components/sections/practice";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <main className="min-h-full flex-1 bg-canvas">
      <Opening />
      <Practice />
      <SelectedWork />
      <Craft />
      <Experience />
      <Gallery />
      <Currently />
      <Contact />
      <Footer />
    </main>
  );
}
