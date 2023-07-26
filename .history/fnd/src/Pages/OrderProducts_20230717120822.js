import React from 'react'

const OrderProducts = ({productId}) => {
    // const { productId } = useParams();
    const [product, setproduct] = useState(null);
  
    useEffect(() => {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BASE_API}/product/fetchproduct/${productId}`,
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
          set(data);
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