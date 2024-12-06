export interface IProduct {
  id: number,
  title: string,
  description: string,
  category: string,
  price: number ,
  discountPercentage: number,
  rating?: number,
  brand: string,
  warrantyInformation: string,
  thumbnail: string,
  selected?: boolean;
}

export type NewProductType = Omit<IProduct, 'id'>