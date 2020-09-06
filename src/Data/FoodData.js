export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "img/banner.jpeg",
    section: "Pizza",
    price: 1,
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/banner.jpeg",
    section: "Pizza",
    price: 1.5,
  },
  {
    name: "Chicken Pizza",
    img: "/img/banner.jpeg",
    section: "Pizza",
    price: 2,
  },
  {
    name: "Veggie Pizza",
    img: "/img/banner.jpeg",
    section: "Pizza",
    price: 2,
  },
  {
    name: "Burger",
    img: "/img/banner.jpeg",
    section: "Sandwich",
    price: 3,
  },
  {
    name: "Burger",
    img: "/img/banner.jpeg",
    section: "Sushi",
    price: 3,
  },
  {
    name: "Shrimp PoBoy",
    img: "/img/banner.jpeg",
    section: "Sushi",
    choices: ["Coke", "Sprite", "Root Beer"],
    price: 6,
  },
  {
    name: "Fries",
    img: "/img/banner.jpeg",
    section: "Sides",
    price: 1,
  },
  {
    name: "Soda",
    img: "/img/banner.jpeg",
    choices: ["Coke", "Sprite", "Fanta"],
    section: "Drinks",
    price: 1,
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
