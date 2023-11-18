import React from 'react';

const ProductOrderTable = () => {
  // Sample data for demonstration
  const orders = [
    {
      productName: 'Product A',
      orderId: '1234',
      dateOfOrder: '2023-11-15',
      price: '$50',
      field1: 'Value 1',
    },
    // Add more orders as needed...
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Order ID</th>
            <th className="border border-gray-300 px-4 py-2">Date of Order</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Field 1</th>
            <th className="border border-gray-300 px-4 py-2">Field 2</th>
            <th className="border border-gray-300 px-4 py-2">Field 3</th>
            <th className="border border-gray-300 px-4 py-2">Field 4</th>
            <th className="border border-gray-300 px-4 py-2">Field 5</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border border-gray-300 px-4 py-2">{order.productName}</td>
              <td className="border border-gray-300 px-4 py-2">{order.orderId}</td>
              <td className="border border-gray-300 px-4 py-2">{order.dateOfOrder}</td>
              <td className="border border-gray-300 px-4 py-2">{order.price}</td>
              <td className="border border-gray-300 px-4 py-2">{order.field1}</td>
              <td className="border border-gray-300 px-4 py-2">{order.field2}</td>
              <td className="border border-gray-300 px-4 py-2">{order.field3}</td>
              <td className="border border-gray-300 px-4 py-2">{order.field4}</td>
              <td className="border border-gray-300 px-4 py-2">{order.field5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductOrderTable;
