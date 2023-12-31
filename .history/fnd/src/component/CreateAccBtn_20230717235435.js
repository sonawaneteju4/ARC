import React from 'react'

const CreateAccBtn = () => {
  return (
    <div>
        <button
            className="px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            onClick={() => setshowModal(true)}
          >
            {/* Facebook */}
            <span className="text-2xl px-2">
              <AiOutlineUsergroupAdd />
            </span>
            Create New Account
          </button>
    </div>
  )
}

export default CreateAccBtn