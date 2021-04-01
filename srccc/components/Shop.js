import React from "react";
import { cake, icecream } from "../actions";
import { connect } from "react-redux";
const Shop = (props) => {
  return (
    <>
      <h1>No of cakes={props.cakeNumber}</h1>
      <button onClick={props.cake}>Buy cake</button>
      <h1>No of Icecreams={props.icecreamNumber}</h1>
      <button onClick={props.icecream}>Buy Icecream</button>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cakeNumber: state.cake.cakeNumber,
    icecreamNumber: state.icecream.icecreamNumber,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cake: () => dispatch(cake()),
    icecream: () => dispatch(icecream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
