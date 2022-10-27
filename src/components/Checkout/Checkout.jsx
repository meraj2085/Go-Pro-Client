import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaPaypal, FaCcVisa, FaMoneyCheckAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Checkout = () => {
  const course = useLoaderData();
  const { name, picture, price } = course;
  const handleBuy = () => {
    toast.success("Purchase successful", { duration: 4000 });
  };

  return (
    <div className="mx-20">
      <div className="h-screen flex flex-col gap-4 items-center justify-center bg-white">
        <a
          href="#0"
          className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
        >
          <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
            {" "}
            FEATURED{" "}
          </p>

          <div className="grid grid-cols-6 p-5 gap-y-2">
            <div>
              <img
                src={picture}
                className="max-w-16 max-h-16 rounded-full"
                alt=""
              />
            </div>

            <div className="col-span-5 md:col-span-4 ml-4">
              <p className="text-gray-600 font-bold">{name}</p>
              <p>Select payment methods</p>
              <div className="flex my-5 text-lg">
                <FaPaypal className="mx-5"></FaPaypal>
                <FaCcVisa className="mx-5"></FaCcVisa>
                <FaMoneyCheckAlt className="mx-5"></FaMoneyCheckAlt>
              </div>
            </div>

            <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
              <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
                {" "}
                $ {price}{" "}
              </p>
            </div>
            <button
              onClick={handleBuy}
              type="button"
              className="py-1 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              Buy
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Checkout;
