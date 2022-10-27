import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from '../../assets/goProLogo.png'
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [color, setColor] = useState(true)

  const handleToggle = ()=>{
    setColor(!color)
  }

  return (
    <div>
      <header className="p-4 bg-gray-900 text-white">
        <div className="container flex justify-between mx-auto px-5 py-1">
          <div className="flex">
            <img className="w-10 h-12 sm:h-9" src={logo} alt="" />
            <p
              rel="noopener noreferrer"
              aria-label="Back to homepage"
              className="flex items-center text-2xl"
            >
              Go Pro
            </p>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link to="/">
              <button className="self-center rounded px-5 text-xl hover:text-purple-600">
                Home
              </button>
            </Link>
            <Link to="/courses">
              <button className="self-center rounded px-5 text-xl hover:text-purple-600">
                Courses
              </button>
            </Link>
            <Link to="/about">
              <button className="self-center rounded px-5 text-xl hover:text-purple-600">
                FAQ
              </button>
            </Link>
            <Link to="/pricing">
              <button className="self-center rounded px-5 text-xl hover:text-purple-600">
                Blog
              </button>
            </Link>
            <button className="text-xl" onClick={handleToggle}>{color ? <FaMoon/> : <FaSun/>}</button>
          </div>
          <div className="hidden xl:flex items-center space-x-5">
            {user?.uid ? (
              <Link to="/userProfile">
                <img
                  className="h-8 w-8 rounded-[50%]"
                  title={user?.displayName}
                  src={user.photoURL}
                  alt=""
                />
              </Link>
            ) : (
              <Link to="/login">
                <button className="self-center rounded px-5 text-xl hover:text-purple-600">
                  Login
                </button>
              </Link>
            )}
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
