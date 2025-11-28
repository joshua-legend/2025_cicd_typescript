// | union type
const a2: string | number = "1";
const a3: number | boolean = !!1;
// const lunchBoxes: { main: string; subs: string[]; dessert: null | string }[]= [];

// & intersection type
// const a4: string & number
const a5: { name: string } & { age: number } & { isMale: boolean } = {
  name: "신여진",
  age: 30 - 1,
  isMale: false,
};
