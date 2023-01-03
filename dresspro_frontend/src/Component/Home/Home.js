import React from 'react'
import localforage from 'localforage';
import SecondLayer from '../SecondLayer/SecondLayer';
import Specific from '../Specific/Specific';
import Feature from '../Feature/Feature';
import Product from '../Product/Product';

export default function Home(props) {

  let dressProData = props.dressProData
  let addToCartHandler = props.addToCartHandler
  let navbar_closer = props.navbar_closer

  function second_layer_hover(event) {
    event.currentTarget.querySelector(".on_hover_display").style.display =
      "block";
  }
  function second_layer_hover_remove(event) {
    event.currentTarget.querySelector(".on_hover_display").style.display =
      "none";
  }




  return (
    <div onClick={navbar_closer}>
      {/* <SecondLayer /> */}
      <Product
        second_layer_hover={second_layer_hover}
        second_layer_hover_remove={second_layer_hover_remove}
        dressProData = {dressProData}
      />
      <Specific dressProData={dressProData} addToCartHandler={addToCartHandler}/>
      {/* <Feature /> */}
    </div>
  );
}
