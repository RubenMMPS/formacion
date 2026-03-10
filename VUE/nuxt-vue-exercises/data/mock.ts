class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
  button: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    img: string = "",
    button: string = "Buy Now",
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.img = img;
    this.button = button;
  }
}

export const products: Product[] = [
  new Product(
    1,
    "Laptop",
    "A high-performance laptop for all your needs.",
    999.99,
  ),
  new Product(
    2,
    "Smartphone",
    "A sleek smartphone with the latest features.",
    499.99,
  ),
  new Product(
    3,
    "Headphones",
    "Noise-cancelling headphones for immersive sound.",
    199.99,
  ),
  new Product(
    4,
    "Smartwatch",
    "A stylish smartwatch to keep you connected.",
    299.99,
  ),
];
