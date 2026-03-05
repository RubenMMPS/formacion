type bird = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
};

type dog = bird & {
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
};

const myDog1: dog = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 5,
};
