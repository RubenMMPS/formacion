export interface bird {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

export interface dog extends bird {
  race: string;
  age: number;
}

export const myDog: dog = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 5,
};
