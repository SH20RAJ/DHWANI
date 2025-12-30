import { TheBand } from "@/components/sections/TheBand";
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';
import { getTeam } from "@/lib/api";

export default async function TeamPage() {
    const teamMembers = await getTeam();

    return (
        <main className="bg-black min-h-screen">
            <TheBand teamMembers={teamMembers} />
            <FooterNewsletter />
        </main>
    );
}
