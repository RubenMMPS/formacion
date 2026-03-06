import { bird } from "./Ej1";
import { dog2 } from "./Ej2";

type cat = Pick<bird, "name" | "canSleep"> & {
  color: string;
};

type Snake = Omit<bird, "name" | "canFly">;

const myDog3: dog2 = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 5,
};

console.log(myDog3);
