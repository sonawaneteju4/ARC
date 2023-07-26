import { useEffect, useState } from "react";
import React from "react";

const OrderProducts = ({ productId, price, quantity, total,device , brand }) => {
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
    <>
      {product && (
        <>
          <div key={product._id} className="basis-40">
            <img className="h-32 w-36 px-2 pb-2 rounded-2xl" src={product.image} alt="" />
          </div>
          <div className="basis-1/4">
            <p>{product.name}</p>
            <p>Type : {product.type}</p>
            <p>Color : {product.color}</p>
            <p>Color : {device}</p>
            <p>Color : {product.color}</p>
          </div>
          <div className="basis-1/5">Price: {price}</div>
          <div className="basis-1/5">Quantity: {quantity}</div>
          <div className="basis-1/5">Total : {total}</div>
        </>
      )}
    </>
  );
};

export default OrderProducts;
