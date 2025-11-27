type Size = "Small" | "Medium" | "Large";
type Concept = "Potato" | "Sweet-Potato" | "Cream" | "Hot-Chicken";
type Pizza = `${Size}-${Concept}-Pizza`;

const makePizza = (pizza: Pizza) => {
  if (pizza == "Large-Hot-Chicken-Pizza") {
    console.log("핫치킨 라지 피자!");
  }
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type EndPoint = "Posts" | "Comments" | "Users";
type API = `api/${EndPoint}`;
const test: API = "api/Comments";
type Students = `javascript-${string}`;
const name10: Students = "javascript-여진이";
type Color = `#${string}`;
const red: Color = "#333333";
