import React from "react";
import { buyCake, buyIcecream } from "../actions";
import { connect } from "react-redux";

const Shop = (props) => {
  return (
    <>
      <h1>number of cakes: {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>buy cake</button>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.buyCake.numberOfCakes,
    numberOfIcecreams: state.buyIcecream.numberOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
