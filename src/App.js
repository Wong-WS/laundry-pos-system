import React, { useState } from "react";
import ItemSelection from "./components/ItemSelection";

function App() {
    const [order, setOrder] = useState([]);

    const handleAddItem = (item) => {
        setOrder((prevOrder) => [...prevOrder, item]);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Laundry POS System</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Item Selection */}
                <div style={{ flex: 2 }}>
                    <ItemSelection onAddItem={handleAddItem} />
                </div>

                {/* Order Summary */}
                <div style={{ flex: 1 }}>
                    <h2>Order Summary</h2>
                    {order.length > 0 ? (
                        <ul>
                            {order.map((item, index) => (
                                <li key={index}>
                                    {item.name} - {item.service}, {item.quantity} {item.unit} - RM{item.total.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No items added to the order yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;




