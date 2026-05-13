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
    imageUrl: "/catalog/tke/spring-kitchen-faucet.png",
    icon: "plumbing"
  },
  {
    slug: "toilets-sanitary-ware",
    name: "Toilets & Sanitary Ware",
    description: "Water closets, basins, bathroom sets and sanitary accessories.",
    imageHint: "toilets and sinks",
    imageUrl: "/catalog/sanitary/vanity-bathroom-set.jpeg",
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
    imageUrl: "/catalog/tke/junction-box-white.png",
    icon: "electrical"
  },
  {
    slug: "lighting-solutions",
    name: "Lighting Solutions",
    description: "LED panels, bulbs, fittings and efficient lighting products.",
    imageHint: "LED lighting",
    imageUrl: "/catalog/tke/ceiling-light-crystal.png",
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
    imageUrl: "/catalog/tke/electrical-tape.png",
    icon: "tools"
  }
];

export const products: Product[] = [
  {
    slug: "modern-water-closet",
    name: "Bathroom Vanity Cabinet",
    category: "toilets-sanitary-ware",
    spec: "Wall-mounted vanity with mirror storage",
    description: "A modern vanity cabinet set suitable for home bathrooms, guest washrooms and upgrade projects.",
    availability: "Available",
    imageUrl: "/catalog/sanitary/vanity-open-shelf.jpeg",
    featured: true,
    specs: ["Wall-mounted style", "Mirror storage", "Modern bathroom finish", "Ask for available sizes"]
  },
  {
    slug: "pedestal-sink",
    name: "Mirror Cabinet Vanity Set",
    category: "toilets-sanitary-ware",
    spec: "Vanity basin with mirror cabinet",
    description: "A clean vanity set for bathrooms, guest wash areas and renovation projects.",
    availability: "Available",
    imageUrl: "/catalog/sanitary/vanity-mirror-cabinet.jpeg",
    featured: true,
    specs: ["Mirror cabinet included", "Vanity basin style", "Mixer compatible", "Multiple sizes available"]
  },
  {
    slug: "shower-mixer-set",
    name: "Bathroom Spray Set",
    category: "plumbing-supplies",
    spec: "Chrome handheld spray set with hose",
    description: "A practical bathroom spray set for plumbing installations, wash areas and bathroom upgrades.",
    availability: "Available",
    imageUrl: "/catalog/tke/toilet-spray-set.png",
    featured: true,
    specs: ["Chrome finish", "Flexible hose included", "Bathroom installation", "Ask for matching fittings"]
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
    name: "Basin & Kitchen Faucets",
    category: "plumbing-supplies",
    spec: "Tap and faucet options for homes and projects",
    description: "Reliable faucet options supplied for home builds, bathroom upgrades, kitchens and maintenance work.",
    availability: "Available",
    imageUrl: "/catalog/tke/high-neck-kitchen-faucet.png",
    specs: ["General plumbing use", "Useful for kitchens and wash areas", "Multiple styles available", "Ask for matching accessories"]
  },
  {
    slug: "electrical-sockets",
    name: "YAKI Switch & Socket Set",
    category: "electrical-supplies",
    spec: "Switches and universal socket options",
    description: "YAKI switch and socket options for homes, shops and commercial wiring projects.",
    availability: "Available",
    imageUrl: "/catalog/electrical/yaki-switch-socket.jpeg",
    brand: "YAKI",
    featured: true,
    specs: ["Single and double options", "Modern face plates", "Contractor quantities", "Matching switches available"]
  },
  {
    slug: "led-panel-lights",
    name: "LED Panel Lights",
    category: "lighting-solutions",
    spec: "YAKI LED panel light range",
    description: "Bright YAKI LED panel lights for shops, offices, homes and commercial interiors.",
    availability: "Available",
    imageUrl: "/catalog/tke/ceiling-light-crystal.png",
    brand: "YAKI",
    featured: true,
    specs: ["Energy efficient", "Ceiling mount", "Multiple wattages", "Clean white light"]
  },
  {
    slug: "wash-basin",
    name: "Vanity Wash Basin Set",
    category: "toilets-sanitary-ware",
    spec: "Vanity basin with mirror shelf options",
    description: "Stylish vanity wash basin sets for bathroom projects and finishing work.",
    availability: "Available",
    imageUrl: "/catalog/sanitary/vanity-shelf-mirror.jpeg",
    featured: true,
    specs: ["Modern profiles", "Vanity cabinet style", "Tap compatible", "Several styles"]
  },
  {
    slug: "bathroom-accessories",
    name: "Chrome Basin Faucet",
    category: "toilets-sanitary-ware",
    spec: "Single-lever basin mixer tap",
    description: "A clean chrome basin faucet for bathroom vanity installations and finishing work.",
    availability: "Available",
    imageUrl: "/catalog/plumbing/chrome-basin-faucet.jpeg",
    featured: true,
    specs: ["Chrome finish", "Single-lever control", "Vanity compatible", "Ideal for renovations"]
  },
  {
    slug: "switches-breakers",
    name: "Circuit Breakers & Protection",
    category: "electrical-supplies",
    spec: "Protection devices and circuit control",
    description: "YAKI protection devices for safer electrical installations, boards and power control.",
    availability: "Available",
    imageUrl: "/catalog/tke/mini-breaker-box.png",
    brand: "YAKI",
    featured: true,
    specs: ["Switch plates", "Circuit breakers", "Wiring accessories", "Ask for ratings"]
  },
  {
    slug: "construction-tools",
    name: "Electrical Tape & Accessories",
    category: "tools-accessories",
    spec: "PVC insulation tape and accessory items",
    description: "Useful electrical accessories for installers, electricians, repairs and site work.",
    availability: "Available",
    imageUrl: "/catalog/tke/electrical-tape.png",
    brand: "YAKI",
    featured: true,
    specs: ["PVC electrical tape", "Useful for installations", "Trade-friendly stock", "Multiple colors available"]
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
    name: "Corrugated Conduit with Draw Wire",
    category: "electrical-supplies",
    spec: "Flexible conduit for cable routing",
    description: "Flexible corrugated conduit with draw wire for residential and commercial wiring runs.",
    availability: "Available",
    imageUrl: "/catalog/tke/corrugated-conduit.png",
    brand: "YAKI",
    specs: ["Multiple sizes", "Wiring projects", "Bulk supply", "Useful for cable protection"]
  }
];

export const galleryImages = [
  {
    title: "Bathroom Fixtures",
    category: "toilets-sanitary-ware",
    imageUrl: "/catalog/sanitary/vanity-bathroom-set.jpeg"
  },
  {
    title: "Sink Sets",
    category: "toilets-sanitary-ware",
    imageUrl: "/catalog/sanitary/vanity-open-shelf.jpeg"
  },
  {
    title: "Pipes & Plumbing",
    category: "pipes-fittings",
    imageUrl: "/catalog/tke/spring-kitchen-faucet.png"
  },
  {
    title: "Construction Materials",
    category: "building-materials",
    imageUrl: "https://images.unsplash.com/photo-1770823556202-2eba715a415b"
  },
  {
    title: "Electrical Fittings",
    category: "electrical-supplies",
    imageUrl: "/catalog/tke/junction-box-white.png"
  },
  {
    title: "Lighting Products",
    category: "lighting-solutions",
    imageUrl: "/catalog/tke/ceiling-light-crystal.png"
  },
  {
    title: "Tools & Hardware",
    category: "tools-accessories",
    imageUrl: "/catalog/tke/electrical-tape.png"
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
