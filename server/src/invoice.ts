interface Invoice {
  id: string;
  details: string;
  item: string;
  quantity: number;
  price: number;
}
export const invoice:Invoice[] = [
  {
    id: "001",
    details: "cash",
    item: "sugar",
    quantity: 8,
    price:6000
  },
  {
    id: "002",
    details: "credit",
    item: "Rolex",
    quantity: 4,
    price:9000
   
  },
  {
    id: "003",
    details: "cash",
    item: "soda",
    quantity: 4,
    price:8000
  }
];
