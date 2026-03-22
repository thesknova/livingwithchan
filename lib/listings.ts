import { Listing } from "./types";

export const listings: Listing[] = [
  {
    id: "1",
    address: "142 Tuscany Ravine Terrace NW",
    community: "Tuscany",
    city: "Calgary",
    province: "AB",
    price: 749900,
    beds: 4,
    baths: 3,
    sqft: 2180,
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    featured: true,
    type: "Detached",
    description:
      "Stunning two-storey home in sought-after Tuscany with mountain views, open-concept main floor, and a fully developed basement.",
  },
  {
    id: "2",
    address: "87 Cranston Drive SE",
    community: "Cranston",
    city: "Calgary",
    province: "AB",
    price: 624900,
    beds: 3,
    baths: 2,
    sqft: 1750,
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    featured: true,
    type: "Detached",
    description:
      "Beautiful detached home in family-friendly Cranston with access to the Century Hall amenities, close to Fish Creek Park.",
  },
  {
    id: "3",
    address: "310 Aspen Hills Way SW",
    community: "Aspen Woods",
    city: "Calgary",
    province: "AB",
    price: 899000,
    beds: 5,
    baths: 4,
    sqft: 2950,
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    featured: true,
    type: "Detached",
    description:
      "Executive estate home in prestigious Aspen Woods, featuring high-end finishes, a chef's kitchen, and a triple-car garage.",
  },
  {
    id: "4",
    address: "#204 – 1020 9 Avenue SE",
    community: "Inglewood",
    city: "Calgary",
    province: "AB",
    price: 359900,
    beds: 2,
    baths: 2,
    sqft: 980,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    featured: false,
    type: "Condo",
    description:
      "Stylish urban condo in vibrant Inglewood steps from the river pathway, boutique shops, and excellent restaurants.",
  },
  {
    id: "5",
    address: "56 Cougar Ridge Close SW",
    community: "Cougar Ridge",
    city: "Calgary",
    province: "AB",
    price: 579000,
    beds: 3,
    baths: 3,
    sqft: 1640,
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    featured: false,
    type: "Semi-Detached",
    description:
      "Bright and modern semi-detached in Cougar Ridge with a south-facing backyard, updated kitchen, and easy access to Stoney Trail.",
  },
  {
    id: "6",
    address: "23 Nolan Hill Boulevard NW",
    community: "Nolan Hill",
    city: "Calgary",
    province: "AB",
    price: 519900,
    beds: 3,
    baths: 3,
    sqft: 1520,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    featured: false,
    type: "Townhouse",
    description:
      "Immaculate townhouse in Nolan Hill with a double attached garage, open-plan living, and quick access to Stoney Trail.",
  },
  {
    id: "7",
    address: "1812 Bowness Road NW",
    community: "Montgomery",
    city: "Calgary",
    province: "AB",
    price: 689000,
    beds: 4,
    baths: 3,
    sqft: 1920,
    imageUrl:
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800&q=80",
    featured: false,
    type: "Detached",
    description:
      "Charming detached bungalow in Montgomery with a large lot, updated interior, and steps from the Bow River pathway system.",
  },
  {
    id: "8",
    address: "#810 – 738 1 Avenue SW",
    community: "Eau Claire",
    city: "Calgary",
    province: "AB",
    price: 1149000,
    beds: 2,
    baths: 2,
    sqft: 1210,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    featured: false,
    type: "Condo",
    description:
      "Luxury penthouse-level condo in Eau Claire with floor-to-ceiling windows, panoramic city views, and premium finishes throughout.",
  },
  {
    id: "9",
    address: "44 Evanspark Circle NW",
    community: "Evanston",
    city: "Calgary",
    province: "AB",
    price: 564900,
    beds: 3,
    baths: 3,
    sqft: 1680,
    imageUrl:
      "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=800&q=80",
    featured: false,
    type: "Detached",
    description:
      "Move-in ready home in Evanston, perfect for young families — close to schools, parks, and with a gorgeous kitchen renovation.",
  },
];

export const featuredListings = listings.filter((l) => l.featured);
