import React, { useState } from "react";

const AddAddress = () => {
  const [userAddress, setUserAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    addType: "default",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Save userAddress to local storage
    localStorage.setItem("userAddress", JSON.stringify(userAddress));
    console.log(userAddress)
    // Optionally, you can also perform any other actions here, such as making an API call or redirecting the user.
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white text-black rounded-xl w-96 py-2">
      <p className="text-center text-xl font-semibold py-2">Add Address</p>
      <hr />
      <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
        {/* ...your existing form code... */}
        {/* Add the onSubmit attribute to the form tag and handleFormSubmit function */}
        {/* Add the onChange attribute to each input and handleInputChange function */}
        <div className="mx-4 py-1 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="line1"
          >
            Line1
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="line1"
            name="line1"
            type="text"
            placeholder="Line 1"
            value={userAddress.line1}
            onChange={handleInputChange}
          />
        </div>
        {/* ...rest of the inputs with onChange attribute... */}
        <div className="flex justify-end">
          <button className="bg-black text-white px-2 py-2 mr-2 rounded-xl" type="submit">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
