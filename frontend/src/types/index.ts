
export  interface Beer {
  id: string;          
  name: string;
  brewery: string;
  description: string;
  price: number;
  alcohol: string;      
  image: string;
}

export interface BeerDetails {
  id: string;

  name: string;
  brewery: string;
  description: string;
  price: number;
  alcohol: string;
  image: string;
  imagePublicId:string;
 
  style: string;
  bitternes: "low" | "medium" | "high";
  volume: string;
  tastingNotes: string;
  ingredients: string[];
}

export interface BeerFormData {
  id?: string;
  name: string;
  brewery: string;
  description: string;
  price: number;
  alcohol: string;
  image: string;
  style: string;
  bitternes: "low" | "medium" | "high";
  volume: string;
  tastingNotes: string;
  ingredients: string[];
}

export interface Brewery{
  id:string;
  name:string;
  location:string;
  founded:number;
  shortDescription:string;
  story:string;
  image:string;
  imagePublicId:string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}
