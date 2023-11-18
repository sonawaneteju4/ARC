import React from "react";

const ProductOrderTable = () => {
  // Sample data for demonstration
  const orders = [
    {
      productName: "Product A",
      orderId: "1234",
      dateOfOrder: "2023-11-15",
      price: "50",
      field1: "42 A Datta Colony Sakri 424304",
    },{
        productName: "Product B",
        orderId: "12366",
        dateOfOrder: "2023-11-15",
        price: "50",
        field1: "42 A Datta Colony Sakri",
      },{
        productName: "Product C",
        orderId: "1236",
        dateOfOrder: "2023-11-15",
        price: "50",
        field1: "42 A Datta Colony Sakri 424304",
      },
      {
        productName: "Product d",
        orderId: "1237",
        dateOfOrder: "2023-11-15",
        price: "50",
        field1: "42 A Datta Colony Sakri 424304",
      },
    // Add more orders as needed...
  ];

  return (
    <div className="overflow-x-auto text-sm">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Order ID</th>
            <th className="border border-gray-300 px-4 py-2">Date of Order</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">View Order</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border border-gray-300 px-4 py-2">
                {order.productName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {order.orderId}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {order.dateOfOrder}
              </td>
              <td className="border border-gray-300 px-4 py-2">
              &#x20B9; {order.price}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-xs">
                {order.field1}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                {" "}
                <button className="bg-blue-200 p-3 text-xs rounded-xl">
                    Check Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductOrderTable;
