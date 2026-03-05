type bird2 = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
};

type dog2 = bird2 & {
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
};

const myDog2: dog2 = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 5,
};
