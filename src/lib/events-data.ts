export interface Event {
    id: number;
    title: string;
    slug: string;
    date: string;
    time: string;
    location: string;
    image: string;
    status: "SELLING FAST" | "RSVP OPEN" | "REGISTRATION CLOSED" | "SOLD OUT";
    type: "CONCERT" | "ACOUSTIC" | "COMPETITION" | "WORKSHOP";
    description?: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: "Bitotsav Headliner '25",
        slug: "bitotsav-headliner-25",
        date: "FEB 14",
        time: "20:00 EST",
        location: "Main Auditorium",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2574&auto=format&fit=crop",
        status: "SELLING FAST",
        type: "CONCERT",
        description: "The biggest night of the year. Dhwani presents the Bitotsav Headliner featuring our top bands and a special guest performance. Get ready for high-octane energy, mesmerizing light shows, and a night you won't forget."
    },
    {
        id: 2,
        title: "Unplugged: Rooftop Sessions",
        slug: "unplugged-rooftop-sessions",
        date: "MAR 03",
        time: "18:00 EST",
        location: "IC Arena Roof",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop",
        status: "RSVP OPEN",
        type: "ACOUSTIC",
        description: "Strip down the noise. Join us for an intimate evening of acoustic covers and originals under the stars. Bring a blanket, grab a coffee, and enjoy the raw talent of our songwriters."
    },
    {
        id: 3,
        title: "Battle of Bands: Regionals",
        slug: "battle-of-bands-regionals",
        date: "APR 10",
        time: "14:00 EST",
        location: "CAT Hall",
        image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2670&auto=format&fit=crop",
        status: "REGISTRATION CLOSED",
        type: "COMPETITION",
        description: "Witness the clash of titans. Top college bands from across the region compete for the ultimate title. Heavy riffs, thundering drums, and unparalleled stage presence."
    }
];
