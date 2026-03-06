import { bird } from "./Ej1";

export interface dog2 extends bird {
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
}

const myDog2: dog2 = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 5,
};
