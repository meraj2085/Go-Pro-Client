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
              Learn online and
              <strong className="block font-extrabold text-purple-600">
                Go pro mode
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-stone-200">
              Quality learning is our main priority. We will help you learn online and develop your desired skill. Learn from us and go pro mode.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-lg font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto"
              >
                Our Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
