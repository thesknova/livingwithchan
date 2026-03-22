export interface Listing {
  id: string;
  address: string;
  community: string;
  city: string;
  province: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  featured?: boolean;
  type: "Detached" | "Semi-Detached" | "Condo" | "Townhouse";
  description?: string;
}
