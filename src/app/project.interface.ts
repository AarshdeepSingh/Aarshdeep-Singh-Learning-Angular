export interface product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  // optional
  rarity?: string;
}
