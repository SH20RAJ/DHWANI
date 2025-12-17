import { HeroSection } from "@/components/ui/hero-odyssey";
import { EventsSection } from "@/components/sections/EventsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { LegacySection } from "@/components/sections/LegacySection";

export default function Home() {
	return (
		<main className="bg-black min-h-screen">
			<HeroSection />
			<EventsSection />
			<MusicSection />
			<TeamSection />
			<GallerySection />
			<NewsSection />
			<LegacySection />
			<ContactSection />
		</main>
	);
}
