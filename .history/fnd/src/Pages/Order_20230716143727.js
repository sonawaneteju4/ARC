import React from 'react'

const Order = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
  
    useEffect(() => {
      const fetchOrderDetails = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BASE_API}/order/${orderId}`, {
            headers: {
              "Content-Type": "application/json",
              "auth-token": sessionStorage.getItem("token"),
            },
          });
  
          if (!response.ok) {
            throw new Error("Failed to fetch order details");
          }
  
          const data = await response.json();
          setOrder(data);
        } catch (error) {
          console.error(error);
          // Handle error state
        }
      };
  
      fetchOrderDetails();
    }, [orderId]);
  
  return (
    <div className='flex flex-row'>
        <div className="basis-1/2">

        </div>
        <div className="basis-1/2">
        <div>
      <h1>Order Details</h1>
      <p>Order ID: {order._id}</p>
      <p>User: {order.user.name}</p>
      <p>Email: {order.user.email}</p>
      {/* Render other order details */}
    </div>
        </div>
        
    </div>
  )
}

export default Order