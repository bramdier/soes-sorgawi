export type SoesSize = 'Regular' | 'Mini' | 'Super Mini';

export interface ProductItem {
  id: string;
  name: string;
  sizeTag: SoesSize;
  badge: string;
  description: string;
  image: string;
  piecesPerBox: number;
  basePriceIdr: number;
  recommendedFor: string;
  popularFlavors: string[];
}

export interface MenuCategory {
  id: string;
  label: string;
  image: string;
  alt: string;
}

export interface OrderCategory {
  id: string;
  label: string;
}

export interface FlavorOption {
  id: string;
  name: string;
  color: string;
  description: string;
  sweetness: number; // 1-5
  richness: number; // 1-5
  isHalal: boolean;
  isBestseller?: boolean;
}

export interface OrderCartItem {
  productId: string;
  sizeTag: SoesSize;
  flavorId: string;
  quantity: number;
  notes?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsappNumber: string;
  operatingHours: string;
  mapsUrl: string;
  isMainBranch?: boolean;
}

export type DeliveryPlatform = 'gofood' | 'grabfood' | 'shopeefood';

export interface DeliveryLink {
  title: string;
  url: string;
  platform: DeliveryPlatform;
}

export interface DeliveryOutlet {
  id: string;
  name: string;
  links: DeliveryLink[];
}
