import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Home = () => {
  const user = useContext(AuthContext)
  return (
    <div>
      <section className="relative bg-[url('/src/assets/background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex min-h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                Vacation Spot.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-stone-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto"
              >
                Booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
