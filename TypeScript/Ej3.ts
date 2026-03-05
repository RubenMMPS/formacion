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

type cat = Pick<bird3, "name" | "canSleep"> & {
  color: string;
};

type Snake = Omit<bird3, "name" | "canFly">;

const myDog3: dog3 = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 5,
};
