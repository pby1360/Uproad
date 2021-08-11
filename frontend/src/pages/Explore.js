import React from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../store/actions";

// redux test
const Explore = ({ item }) => {

  const dispatch = useDispatch();
  const cart = useSelector(store => store.cartReducer);

  return (
    <div>
      <article>
        <Button onClick={() => dispatch(addCart(item))}>카트에 추가</Button>
        <Button onClick={() => console.log(cart.length)}>카트 물건 수</Button>
      </article>
    </div>
  )
}

export default Explore;