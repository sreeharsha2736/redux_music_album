const BUYCAKE = "BUY_CAKE";
const BUYICECREAM = "BUY_ICECREAM";

export const buyCake = (numberOfCakes) => {
  return {
    type: BUYCAKE,
    payload: numberOfCakes,
  };
};

export const buyIcecream = (numberofIcecreams) => {
  return {
    type: BUYICECREAM,
    payload: numberofIcecreams,
  };
};
