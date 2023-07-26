import React from 'react'

const OrderProducts = ({productId}) => {
    const { productId } = useParams();
    const [order, setOrder] = useState(null);
  
    useEffect(() => {
      const fetchOrderDetails = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BASE_API}/orders/order/${orderId}`,
            {
              headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem("token"),
              },
            }
          );
  
          if (!response.ok) {
            throw new Error("Failed to fetch order details");
          }
          const data = await response.json();
          console.log(data);
          console.log(data.status);
          const cartId = data._id;
          setOrder(data);
        } catch (error) {
          console.error(error);
          // Handle error state
        }
      };
  
      fetchOrderDetails();
    }, [orderId]);


  return (
    <div>
        
    </div>
  )
}

export default OrderProducts