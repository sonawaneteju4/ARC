import { useEffect, useState } from "react";
import React from "react";

const OrderProducts = ({ productId , price, quantity, total }) => {
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
         
           <div className="basis-1/3">
           <img className="h-32 w-36" src={product.image} alt="" />
              </div>
              <div className="basis-1/4">{product.name}</div>
              <div className="basis-1/5">{price}</div>
              <div className="basis-1/5">Quantity: quantity}</div>
              <div className="basis-1/5">Total  = {item.price*item.quantity} </div>
          <p>{product.name}</p>
          <p>{product.type}</p>
          <p>{product.color}</p>
       </div>)}    
    </div>
  );
};

export default OrderProducts;
