
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

 
  style: string;
  bitternes: "low" | "medium" | "high";
  volume: string;
  tastingNotes: string;
  ingredients: string[];
}
