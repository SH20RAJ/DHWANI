import { BandsLeaderboardView } from "@/components/views/BandsLeaderboardView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Charts - Dhwani Bands Rankings",
    description: "The official leaderboard of BIT Mesra's music scene. See who is topping the charts this week.",
    openGraph: {
        title: "Dhwani Top Charts",
        images: ["/og-bands.jpg"],
    },
};

export default function BandsPage() {
    return <BandsLeaderboardView />;
}
