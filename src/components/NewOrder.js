import React from "react";
import "./NewOrder.css"
import OrderTab from "./OrderTab"
import OrderSummary from "./OrderSummary"

function NewOrder() {
  return (
    <div className="new-order">
      <OrderTab />
      <OrderSummary />
    </div>
  )
}

export default NewOrder;