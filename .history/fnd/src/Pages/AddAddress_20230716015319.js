import React from "react";

const AddAddress = () => {
  return (
    <div className="bg-white text-black rounded-xl w-96 py-2">
      <p className="text-center text-xl font-semibold py-2">Add Address</p>
      <hr />
      <form  className="w-full max-w-sm">
        <div className="mx-4 py-1 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="line 1"
          >
            Line1
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Line 1"
            name="line1"
            type="text"
            placeholder="Line 1"
          />
        </div>
        <div className="mx-4 py-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="line 1"
          >
            Line 2
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Line 1"
            name="line2"
            type="text"
            placeholder="Line 1"
          />
        </div>
        <div className="flex">
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="line 1"
            >
              City
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Line 1"
              type="text"
              name="city"
              placeholder="City"
            />
          </div>
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="line 1"
            >
              State
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Line 1"
              type="text"
              name="state"
              placeholder="State"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="line 1"
            >
              Pin Code
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Line 1"
              type="text"
              name="pincode"
              placeholder="101010"
            />
          </div>
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="line 1"
            >
              Phone
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Line 1"
              type="text"
              name="phone"
              placeholder="8080080808"
            />
          </div>
        </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Address Type
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name=""
              >
                <option>Default</option>
                <option>Home</option>
                <option>Other</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        <div className="flex justify-end">
          <button className="bg-black text-white px-2 py-2 mr-2 rounded-xl">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
