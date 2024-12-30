import React, {useState} from "react";
import "./NewOrder.css"
import OrderTab from "./OrderTab"
import OrderSummary from "./OrderSummary"

function NewOrder() {

  const [formData, setFormData] = useState({});

  return (
    <div className="new-order">
      <OrderTab  setFormData={setFormData} />
      <OrderSummary formData={formData} />
    </div>
  )
}

export default NewOrder;