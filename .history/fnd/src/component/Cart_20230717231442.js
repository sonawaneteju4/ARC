import React, { useEffect, useState, useCallback } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";
import CartToggle from "../Pages/CartToggle";
import FormatPrice from "../helper.js/FormatPrice";
import LoginComp from "./LoginComp";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Spinner from "./Spinner";
import ShopNow from "../helper.js/ShopNow";
import UserAddress from "../Pages/UserAddress";
import OrderSuccess from "../Pages/OrderSuccess";
import AddAddress from "../Pages/AddAddress";

const Cart = () => {
  const [showLogin, setshowLogin] = useState(false);
  const [loading, setloading] = useState(false);
  const [fornew, setfornew] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [address, setaddress] = useState(false);
  const [amount, setamount] = useState(0);
  const [stock, setstock] = useState(0);
  const [productData, setProductData] = useState([]);
  const [total, setTotal] = useState(0);
  const [shippingCharges, setshippingCharges] = useState(0);
  const [removeCart, setremoveCart] = useState();
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const [cartId, setCartId] = useState(null);
  const [userId, setUserId] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setisLoggedIn(true);
    } else {
      setshowLogin(true);
      setisLoggedIn(false);
    }
  }, []);

  const handleLoginSuccess = () => {
    setisLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const fetchCartItems = async () => {
        setloading(true);
        try {
          const res = await fetch(
            `${process.env.REACT_APP_BASE_API}/cart/cartuser`,
            {
              method: "GET",
              headers: {
                "auth-token": sessionStorage.getItem("token"),
              },
            }
          );
          const data = await res.json(); // convert the response to a JSON object
          setcartItems(data.items);
          setloading(false);
          setTotal(data.total);
          setamount(data.price);
          setshippingCharges(data.shippingCharges);
          setremoveCart(data._id);
          setCartIsEmpty(data.items.length === 0);
          console.log(data);
          const userId = data.user;
          setUserId(userId);
          const cartId = data._id;
          setCartId(cartId);
        } catch (error) {
          setfornew(true);
          console.log(error);
        }
      };

      fetchCartItems();
    }
  }, [isLoggedIn]);

  const fetchProductData = useCallback(async () => {
    setloading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const productDataPromises = cartItems.map((item) =>
        fetch(
          `${process.env.REACT_APP_BASE_API}/product/fetchproduct?_id=${item.productId}`
        ).then((res) => res.json())
      );
      const productData = await Promise.all(productDataPromises);
      setProductData(productData);
      setstock(productData[0]?.stock);
      const updatedCartItems = cartItems.map((item, index) => {
        return { ...item, price: productData[index]?.price };
      });
      setcartItems(updatedCartItems);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  }, [cartItems]);

  useEffect(() => {
    if (!cartIsEmpty) {
      fetchProductData();
    }
  }, [cartIsEmpty]);

  const handleRemoveCart = async (itemId, e) => {
    console.log("itemId:", itemId);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_API}/cart/removefromcart/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      const updatedCartItems = cartItems.filter((item) => item._id !== itemId); // Define updatedCartItems here

      setcartItems(updatedCartItems);
      setTotal(
        updatedCartItems.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0
        )
      );

      // handle the response data here
      console.log(data);
      const cartId = data._id;
      setCartId(null);
    } catch (error) {
      // handle the error here
      console.error(error);
    }
  };

  const handleQuantityChange = async (itemId, quantity, price) => {
    if (!itemId) return;

    const updatedCartItems = cartItems.map((item) => {
      if (item._id === itemId) {
        return { ...item, quantity: quantity };
      } else {
        return item;
      }
    });
    const updatedTotal = updatedCartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    setcartItems(updatedCartItems);
    setTotal(updatedTotal);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_API}/cart/updatecart/${itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            quantity: quantity,
          }),
        }
      );

      const data = await res.json();
      setcartItems(updatedCartItems);
      const cartId = data._id;
      setCartId(cartId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mt-16 min-h-screen divide-y-2">
        <p className="lg:text-5xl text-3xl py-2 pt-5 font-bold flex justify-center">
          <span className="py-1 px-2 ">
            <FiShoppingCart />
          </span>
          Shoping Cart
        </p>
        {loading && <Spinner />}

        <div className="flex lg:flex-row md:flex-col max-sm:flex-col">
          <div className="basis-2/3 p-5 h-[75vh]  lg:scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-sky-300 overflow-y-scroll dark:scrollbar-thumb-blue-100 dark:scrollbar-track-gray-700 scrollbar-track-rounded-full">
            {fornew ? (
              <div className="flex flex-col items-center justify-center h-96 w-screen odd:bg-gray-100 even:bg-gray-200">
                <svg
                  className="w-24 h-24 mb-4 animate-bounce text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14-2v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4m14-2H5"
                  />
                </svg>
                <p className="text-gray-600 text-xl font-bold">
                  Your cart is empty.
                </p>
                <p className="text-gray-400 text-base mt-2">
                  Add some items to your cart and come back here to complete
                  your purchase.
                </p>
              </div>
            ) : (
              <div>
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-96 w-screen odd:bg-gray-200 even:bg-teal-300p">
                    <svg
                      className="w-24 h-24 mb-4 animate-bounce text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14-2v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4m14-2H5"
                      />
                    </svg>
                    <p className="text-gray-600 text-xl font-bold">
                      Your cart is empty.
                    </p>
                    <p className="text-gray-400 text-base mt-2">
                      Add some items to your cart and come back here to complete
                      your purchase.
                    </p>
                  </div>
                ) 
                
                
              </div>
            )}




          </div>
          <div className="basis-1/3 p-5 m-2 ">
            {!cartIsEmpty ? (
              <div className="flex flex-col">
                <div className="font-semibold text-xl">Order Summary</div>
                <div className="">
                  <div className="flex pt-2 justify-between">
                    <div className="text-lg font-mono">Subtotal: </div>{" "}
                    <div className="text-lg font-mono">
                      {" "}
                      <FormatPrice price={total} />
                    </div>
                  </div>
                  <div className="flex pt-2 justify-between">
                    <div className="text-lg font-mono">
                      Shiping Charge:
                      {total >= 0 ? (
                        <span className="text-xs text-green-400">
                          (Free Shipping)
                        </span>
                      ) : (
                        <span className="text-xs">
                          (Shipping Charges: <FormatPrice price={0} />)
                        </span>
                      )}
                    </div>
                    <div className="text-lg font-mono">
                      <FormatPrice price={0} />
                    </div>
                  </div>
                  <div className="flex pt-2 justify-between">
                    <div className="text-xl font-semibold font-mono">
                      Total :
                    </div>{" "}
                    <div className="text-xl font-semibold font-mono">
                      {" "}
                      <FormatPrice price={total + (total >= 0 ? 0 : 50)} />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="flex justify-end mt-2">
                    <ShopNow
                      onClick={() => setaddress(true)}
                      value={"SHOP NOW"}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          {showLogin ? (
            <div
              className="fixed top-20 backdrop-sepia-0 bg-black/50 backdrop-blur-sm left-0 right-0 bottom-0 z-50 flex items-center justify-center cursor-pointer"
              // onClick={() => setshowModal(false)}
            >
              <LoginComp
                link="/cart"
                onLoginSuccess={handleLoginSuccess}
                setloading={setloading}
                onClose={() => setshowLogin(false)}
              />
            </div>
          ) : null}

          {address ? (
            <div
              // onClick={() => setaddress()}
              className="fixed top-0 backdrop-sepia-0 bg-black/50 backdrop-blur-sm left-0 right-0 bottom-0 z-50 flex items-center justify-center cursor-pointer"
            >
              <form>
                {/* <OrderSuccess /> */}
                <AddAddress
                  cartId={cartId}
                  onClose={() => setaddress(false)}
                  userId={userId}
                />
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Cart;
