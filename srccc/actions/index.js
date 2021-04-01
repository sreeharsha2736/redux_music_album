const BUYCAKE = "BUY_CAKE";
const BUYICECREAM = "BUY_ICECREAM";

export const cake = (cakeNumber) => {
  return {
    type: BUYCAKE,
    payload: cakeNumber,
  };
};

export const icecream = (icecreamNumber) => {
  return {
    type: BUYICECREAM,
    payload: icecreamNumber,
  };
};
