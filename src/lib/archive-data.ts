export interface ArchivePost {
    id: string;
    title: string;
    slug: string;
    year: string;
    coverImage: string;
    images: string[];
    description: string;
    tags: string[];
}

export const archivePosts: ArchivePost[] = [
    {
        id: "1",
        title: "Bitotsav 2024: The Awakening",
        slug: "bitotsav-2024",
        year: "2024",
        coverImage: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2670&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2670&auto=format&fit=crop"
        ],
        description: "A night where the amps turned up to 11. The main auditorium was packed to the rafters as Dhwani unleashed a sonic storm.",
        tags: ["Concert", "Headliner", "Bitotsav"]
    },
    {
        id: "2",
        title: "Unplugged Sessions: Winter '23",
        slug: "unplugged-winter-23",
        year: "2023",
        coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1445985543470-410296631679?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1485278537138-4e8911a13c02?q=80&w=2670&auto=format&fit=crop"
        ],
        description: "Cozy vibes, acoustic guitars, and warm coffee. Our winter sessions brought out the soulful side of the club.",
        tags: ["Acoustic", "Intimate", "Cafeteria"]
    },
    {
        id: "3",
        title: "Battle of Bands: Regionals 2022",
        slug: "bob-regionals-2022",
        year: "2022",
        coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2679&auto=format&fit=crop"
        ],
        description: "We took home the gold. Competing against 15 other colleges, Dhwani's metal lineup crushed the competition.",
        tags: ["Competition", "Win", "Metal"]
    },
    {
        id: "4",
        title: "The Garage Jams: 1998",
        slug: "garage-jams-1998",
        year: "1998",
        coverImage: "https://images.unsplash.com/photo-1583795489711-d07b39679297?q=80&w=2574&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2670&auto=format&fit=crop"
        ],
        description: "Where it all began. Grainy photos from the very first jam sessions in the old activity center.",
        tags: ["History", "Origins", "Retro"]
    }
];
