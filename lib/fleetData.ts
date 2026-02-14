export interface AircraftSpec {
    icon: string;
    label: string;
    value: string;
}

export interface Aircraft {
    id: string;
    name: string;
    model: string;
    tagline: string;
    image: string;
    interiorImage?: string;
    specs: AircraftSpec[];
    description: string;
    detailedFeatures?: string[];
    capacity: number;
    price: string;
}

export const fleetData: Aircraft[] = [
    {
        id: "g650er",
        name: "Gulfstream G650ER",
        model: "G650ER",
        tagline: "The pinnacle of private aviation",
        image: "/fleet/Private jet.jpg", // Reverted due to rename failure
        interiorImage: "https://images.unsplash.com/photo-1540962351504-03099e0a75c3?auto=format&fit=crop&q=95&w=2000",
        specs: [
            { icon: "⚡", label: "Max Speed", value: "0.925 Mach" },
            { icon: "🌍", label: "Range", value: "7,500 nm" },
            { icon: "⬆️", label: "Max Altitude", value: "51,000 ft" },
            { icon: "👥", label: "Capacity", value: "19 passengers" },
        ],
        description: "Experience unparalleled luxury and performance with the world's fastest and longest-range business jet.",
        detailedFeatures: [
            "Advanced Gulfstream Symmetry Flight Deck",
            "Whisper-quiet cabin with 100% fresh air",
            "Panoramic oval windows - the largest in aviation",
            "Dedicated rest area for crew and passengers"
        ],
        capacity: 19,
        price: "Starting at $75M",
    },
    {
        id: "g700",
        name: "Gulfstream G700",
        model: "G700",
        tagline: "The future of business aviation",
        image: "/fleet/g700.jpg",
        interiorImage: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=95&w=2000",
        specs: [
            { icon: "⚡", label: "Max Speed", value: "0.925 Mach" },
            { icon: "🌍", label: "Range", value: "7,750 nm" },
            { icon: "⬆️", label: "Max Altitude", value: "51,000 ft" },
            { icon: "👥", label: "Capacity", value: "19 passengers" },
        ],
        description: "The industry's largest purpose-built business jet, featuring the most spacious cabin and advanced technology.",
        detailedFeatures: [
            "Industry's most spacious cabin with five living areas",
            "All-new Gulfstream Symmetry Flight Deck",
            "Predictive Landing Performance System",
            "Ultra-high-definition entertainment systems"
        ],
        capacity: 19,
        price: "Starting at $78M",
    },
    {
        id: "global7500",
        name: "Bombardier Global 7500",
        model: "Global 7500",
        tagline: "Redefining business aviation",
        image: "/fleet/global7500.jpg",
        specs: [
            { icon: "⚡", label: "Max Speed", value: "0.925 Mach" },
            { icon: "🌍", label: "Range", value: "7,700 nm" },
            { icon: "⬆️", label: "Max Altitude", value: "51,000 ft" },
            { icon: "👥", label: "Capacity", value: "19 passengers" },
        ],
        description: "Fly farther, faster with the smoothest ride and most spacious cabin in business aviation.",
        capacity: 19,
        price: "Starting at $73M",
    },
    {
        id: "falcon8x",
        name: "Dassault Falcon 8X",
        model: "Falcon 8X",
        tagline: "Tri-jet excellence",
        image: "/fleet/falcon8x.jpg",
        specs: [
            { icon: "⚡", label: "Max Speed", value: "0.90 Mach" },
            { icon: "🌍", label: "Range", value: "6,450 nm" },
            { icon: "⬆️", label: "Max Altitude", value: "51,000 ft" },
            { icon: "👥", label: "Capacity", value: "16 passengers" },
        ],
        description: "Unmatched versatility with three engines, exceptional fuel efficiency, and legendary Falcon performance.",
        capacity: 16,
        price: "Starting at $58M",
    },
    {
        id: "citationx",
        name: "Cessna Citation X+",
        model: "Citation X+",
        tagline: "Speed meets sophistication",
        image: "/fleet/citationx.jpg",
        specs: [
            { icon: "⚡", label: "Max Speed", value: "0.935 Mach" },
            { icon: "🌍", label: "Range", value: "3,460 nm" },
            { icon: "⬆️", label: "Max Altitude", value: "51,000 ft" },
            { icon: "👥", label: "Capacity", value: "12 passengers" },
        ],
        description: "The fastest civilian aircraft in the world, combining speed, range, and Citation reliability.",
        capacity: 12,
        price: "Starting at $23M",
    },
    {
        id: "challenger650",
        name: "Bombardier Challenger 650",
        model: "Challenger 650",
        tagline: "Proven performance",
        image: "/fleet/falcon.jpg", // Reverted due to rename failure
        specs: [
            { icon: "⚡", label: "Max Speed", value: "0.85 Mach" },
            { icon: "🌍", label: "Range", value: "4,000 nm" },
            { icon: "⬆️", label: "Max Altitude", value: "41,000 ft" },
            { icon: "👥", label: "Capacity", value: "12 passengers" },
        ],
        description: "A wide-body cabin with exceptional comfort, reliability, and operational flexibility for any mission.",
        capacity: 12,
        price: "Starting at $32M",
    },
];
