import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const API = `${process.env.REACT_APP_BASE_API}/orders/orderhistory` 

const OrderHistory = () => {
  const [loading, setLoading] = useState(true)
  // const [data, setdata] = useState([])
  // useEffect(()=>{
  //   axios.get("")
  // })

  

  let navigate = useNavigate();
  
  const [oderhistroy, setoderhistroy] = useState([]);

  const fetchApiData = async(url) => {
    try {
        const res = await fetch(url);
        setLoading(true)
        const data = await res.json();
        setoderhistroy(data)
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error)
        
      }
    }
  
    useEffect(()=>{
  fetchApiData(API)
  },[])

  return (
    <div className='mt-16'>
          <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Items</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {setoderhistroy.map((order) => (
            <tr key={order._id}>
              <td className="p-2 border">{order._id}</td>
              <td className="p-2 border">{order.createdAt}</td>
              <td className="p-2 border">
                {order.items.map((item) => (
                  <div key={item.productId}>
                    <p className="mb-1">{item.productId}</p>
                    <p className="text-gray-500 text-sm">
                      Price: {item.price}, Quantity: {item.quantity}
                    </p>
                  </div>
                ))}
              </td>
              <td className="p-2 border">{order.total}</td>
              <td className="p-2 border">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    </div>
  )
}

export default OrderHistory