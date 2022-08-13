export type CardModel = {
  id: number;
  number: string;
  name: string;
  expiry: string;
  type: 'classic' | 'gold' | 'platinum' | 'black';
  brand: 'visa' | 'mastercard';
  color: string | string[];
};
