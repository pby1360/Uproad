import React from "react";

function test () {
  console.log('test');
};
const Product = () => {
  return (
    <div>Product 페이지 입니다
      <button onClick={test}>test</button>
    </div>
  )
}

export default Product;