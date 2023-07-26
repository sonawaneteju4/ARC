import { useEffect, useState } from "react";
import React from "react";

const OrderProducts = ({ productId }) => {
  // const { productId } = useParams();
  const [product, setproduct] = useState();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_API}/product/fetchproduct?_id=${productId}`,
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
        setproduct(data);
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
     {product && (
        <div key={product._id}>
          <img className="h-16 w-16" src={product.image} alt="" />
 w-        </div>)}    
    </div>
  );
};

export default OrderProducts;
