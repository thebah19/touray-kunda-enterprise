import {
  Bath,
  Blocks,
  Cable,
  Drill,
  Grid2X2,
  Lightbulb,
  Plug,
  ShowerHead,
  Toilet,
  Wrench
} from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  description: string;
  imageHint: string;
  imageUrl: string;
  icon: keyof typeof categoryIcons;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  spec: string;
  description: string;
  availability: "Available" | "Request availability";
  imageUrl: string;
  specs: string[];
  brand?: string;
  featured?: boolean;
};

export const categoryIcons = {
  building: Blocks,
  plumbing: Wrench,
  sanitary: Toilet,
  pipes: ShowerHead,
  electrical: Plug,
  lighting: Lightbulb,
  tiles: Grid2X2,
  tools: Drill,
  bath: Bath,
  cable: Cable
};

export const categories: Category[] = [
  {
    slug: "building-materials",
    name: "Building Materials",
    description: "Core construction essentials for homes, shops and project sites.",
    imageHint: "cement, blocks, tools",
    imageUrl: "https://images.unsplash.com/photo-1770823556202-2eba715a415b",
    icon: "building"
  },
  {
    slug: "plumbing-supplies",
    name: "Plumbing Supplies",
    description: "Reliable parts for water systems, bathrooms and maintenance work.",
    imageHint: "valves, taps, pipe joints",
    imageUrl: "https://www.ifan-solution.com/uploads/202535186/small/ifan-white-ppr-fittings1b76e019-caeb-4caf-bb89-ff64f78be6e2.webp",
    icon: "plumbing"
  },
  {
    slug: "toilets-sanitary-ware",
    name: "Toilets & Sanitary Ware",
    description: "Water closets, basins, bathroom sets and sanitary accessories.",
    imageHint: "toilets and sinks",
    imageUrl: "https://images.unsplash.com/photo-1721825154501-a75ca17ed1c4",
    icon: "sanitary"
  },
  {
    slug: "pipes-fittings",
    name: "Pipes & Fittings",
    description: "PVC pipes, elbows, tees, couplers and installation fittings.",
    imageHint: "PVC pipes",
    imageUrl: "https://www.ifan-solution.com/uploads/202235186/small/ppr-pipe-for-hot-and-cold-water58357910166.jpg",
    icon: "pipes"
  },
  {
    slug: "electrical-supplies",
    name: "Electrical Supplies",
    description: "Switches, sockets, breakers, cables and wiring accessories.",
    imageHint: "switches and sockets",
    imageUrl: "https://images.unsplash.com/photo-1484024091473-858a1e7ece52",
    icon: "electrical"
  },
  {
    slug: "lighting-solutions",
    name: "Lighting Solutions",
    description: "LED panels, bulbs, fittings and efficient lighting products.",
    imageHint: "LED lighting",
    imageUrl: "https://images.unsplash.com/photo-1545164415-0fae860defbd",
    icon: "lighting"
  },
  {
    slug: "tiles-finishing",
    name: "Tiles & Finishing",
    description: "Finishing products for bathrooms, kitchens and modern interiors.",
    imageHint: "tiles and finishing",
    imageUrl: "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7",
    icon: "tiles"
  },
  {
    slug: "tools-accessories",
    name: "Tools & Accessories",
    description: "Practical tools and accessories for installation and construction.",
    imageHint: "construction tools",
    imageUrl: "https://images.unsplash.com/photo-1759200165738-6366977a73c6",
    icon: "tools"
  }
];

export const products: Product[] = [
  {
    slug: "modern-water-closet",
    name: "Modern Water Closet",
    category: "toilets-sanitary-ware",
    spec: "Close-coupled ceramic WC with cistern",
    description: "A clean modern water closet suitable for residential and commercial bathrooms.",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1721825154501-a75ca17ed1c4",
    featured: true,
    specs: ["Ceramic finish", "Includes cistern", "Modern bathroom style", "Ask for current models"]
  },
  {
    slug: "pedestal-sink",
    name: "Pedestal Sink",
    category: "toilets-sanitary-ware",
    spec: "White ceramic basin with pedestal",
    description: "A practical sink set for bathrooms, guest toilets and renovation projects.",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1721394739600-e474156df793",
    featured: true,
    specs: ["White ceramic", "Pedestal support", "Mixer compatible", "Multiple sizes available"]
  },
  {
    slug: "shower-mixer-set",
    name: "Shower Mixer Set",
    category: "plumbing-supplies",
    spec: "Chrome mixer with shower accessories",
    description: "Chrome shower mixer set for bathroom installations and upgrades.",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1564518823771-494a12735793",
    featured: true,
    specs: ["Chrome finish", "Wall mounted", "Bathroom installation", "Ask for matching fittings"]
  },
  {
    slug: "pvc-pipes",
    name: "PPR & PVC Pipe Range",
    category: "pipes-fittings",
    spec: "Common plumbing sizes and lengths",
    description: "Durable pipe options for plumbing, renovation and construction water systems.",
    availability: "Available",
    imageUrl: "https://www.ifan-solution.com/uploads/202235186/small/ppr-pipe-for-hot-and-cold-water58357910166.jpg",
    brand: "IFAN",
    featured: true,
    specs: ["Multiple diameters", "Hot and cold water options", "Pipe fittings available", "Bulk requests supported"]
  },
  {
    slug: "ppr-pipe-fittings",
    name: "PPR Pipe Fittings",
    category: "pipes-fittings",
    spec: "Tees, elbows, couplers and reducers",
    description: "PPR fitting options for plumbers, contractors and water system installations.",
    availability: "Available",
    imageUrl: "https://www.ifan-solution.com/uploads/202535186/small/ifan-white-ppr-fittings5859aedc-d2d2-47c3-857d-76bf16504d1c.webp",
    brand: "IFAN",
    specs: ["Installation fittings", "Multiple fitting types", "Project quantities", "Suitable for plumbing systems"]
  },
  {
    slug: "water-line-fittings",
    name: "Water Line Fittings",
    category: "plumbing-supplies",
    spec: "General fittings for residential and project plumbing",
    description: "Reliable plumbing fittings supplied for home builds, maintenance work and construction projects.",
    availability: "Available",
    imageUrl: "https://www.ifan-solution.com/uploads/202535186/small/ifan-white-ppr-fittingsee572d6d-a567-4f7c-a8a6-f219c0752d84.webp",
    brand: "IFAN",
    specs: ["General plumbing use", "Useful for repairs and new work", "Sizing options available", "Ask for matching pipe systems"]
  },
  {
    slug: "electrical-sockets",
    name: "Electrical Sockets",
    category: "electrical-supplies",
    spec: "Single, double and switched options",
    description: "Electrical sockets for homes, shops and commercial wiring projects.",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1484024091473-858a1e7ece52",
    featured: true,
    specs: ["Single and double options", "Modern face plates", "Contractor quantities", "Switches also available"]
  },
  {
    slug: "led-panel-lights",
    name: "LED Panel Lights",
    category: "lighting-solutions",
    spec: "Energy-efficient ceiling light panels",
    description: "Bright LED panels for shops, offices, homes and commercial interiors.",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1545164415-0fae860defbd",
    featured: true,
    specs: ["Energy efficient", "Ceiling mount", "Multiple wattages", "Clean white light"]
  },
  {
    slug: "wash-basin",
    name: "Wash Basin",
    category: "toilets-sanitary-ware",
    spec: "Countertop and wall-hung options",
    description: "Stylish wash basins for bathroom projects and finishing work.",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1721394739600-e474156df793",
    featured: true,
    specs: ["Modern profiles", "White ceramic", "Tap compatible", "Several styles"]
  },
  {
    slug: "bathroom-accessories",
    name: "Bathroom Accessories",
    category: "toilets-sanitary-ware",
    spec: "Towel rails, holders and fittings",
    description: "Finishing accessories that complete bathroom installations.",
    availability: "Request availability",
    imageUrl: "https://images.unsplash.com/photo-1564518823771-494a12735793",
    featured: true,
    specs: ["Chrome options", "Wall mounted", "Matching sets", "Ideal for renovations"]
  },
  {
    slug: "switches-breakers",
    name: "Switches & Breakers",
    category: "electrical-supplies",
    spec: "Switch plates, MCBs and wiring protection",
    description: "Essential electrical control and protection products for safe installations.",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1508920291026-c344bbfca1ab",
    featured: true,
    specs: ["Switch plates", "Circuit breakers", "Wiring accessories", "Ask for ratings"]
  },
  {
    slug: "construction-tools",
    name: "Construction Tools",
    category: "tools-accessories",
    spec: "Hand tools and site accessories",
    description: "Useful construction and installation tools for builders and tradespeople.",
    availability: "Request availability",
    imageUrl: "https://images.unsplash.com/photo-1759200165738-6366977a73c6",
    featured: true,
    specs: ["Hand tools", "Installation accessories", "Builder friendly", "Stock changes often"]
  },
  {
    slug: "tile-finishing-set",
    name: "Tile Finishing Set",
    category: "tiles-finishing",
    spec: "Tile trims, adhesive and finishing accessories",
    description: "Finishing items for neat tile and bathroom installations.",
    availability: "Request availability",
    imageUrl: "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7",
    specs: ["Tile trims", "Bathroom finishing", "Multiple finishes", "Project quantities"]
  },
  {
    slug: "electrical-cable-roll",
    name: "Electrical Cable Roll",
    category: "electrical-supplies",
    spec: "Cable rolls for wiring projects",
    description: "Electrical cable options for residential and commercial wiring.",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1508920291026-c344bbfca1ab",
    specs: ["Multiple sizes", "Wiring projects", "Bulk supply", "Ask for current ratings"]
  }
];

export const galleryImages = [
  {
    title: "Bathroom Fixtures",
    category: "toilets-sanitary-ware",
    imageUrl: "https://images.unsplash.com/photo-1721825154501-a75ca17ed1c4"
  },
  {
    title: "Sink Sets",
    category: "toilets-sanitary-ware",
    imageUrl: "https://images.unsplash.com/photo-1721394739600-e474156df793"
  },
  {
    title: "Pipes & Plumbing",
    category: "pipes-fittings",
    imageUrl: "https://www.ifan-solution.com/uploads/202235186/small/ppr-pipe-for-hot-and-cold-water58357910166.jpg"
  },
  {
    title: "Construction Materials",
    category: "building-materials",
    imageUrl: "https://images.unsplash.com/photo-1770823556202-2eba715a415b"
  },
  {
    title: "Electrical Fittings",
    category: "electrical-supplies",
    imageUrl: "https://images.unsplash.com/photo-1484024091473-858a1e7ece52"
  },
  {
    title: "Lighting Products",
    category: "lighting-solutions",
    imageUrl: "https://images.unsplash.com/photo-1545164415-0fae860defbd"
  },
  {
    title: "Tools & Hardware",
    category: "tools-accessories",
    imageUrl: "https://images.unsplash.com/photo-1759200165738-6366977a73c6"
  },
  {
    title: "Tiles & Finishing",
    category: "tiles-finishing",
    imageUrl: "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7"
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}
