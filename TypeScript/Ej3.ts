type bird3 = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
};

type dog3 = bird3 & {
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
};

type cat = {
  name: string;
  color: string;
  canSleep: boolean;
};

type Snake = {
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
};

const myDog3: dog3 = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 5,
};
