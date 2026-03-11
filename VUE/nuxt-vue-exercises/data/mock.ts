interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  img?: string;
  button?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Laptop",
    description: "A high-performance laptop for all your needs.",
    price: 999.99,
  },
  {
    id: 2,
    title: "Smartphone",
    description: "A sleek smartphone with the latest features.",
    price: 499.99,
  },
  {
    id: 3,
    title: "Headphones",
    description: "Noise-cancelling headphones for immersive sound.",
    price: 199.99,
  },
  {
    id: 4,
    title: "Smartwatch",
    description: "A stylish smartwatch to keep you connected.",
    price: 299.99,
  },
];
