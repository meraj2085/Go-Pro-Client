import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../assets/goProLogo.png";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [color, setColor] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let activeStyle = {
    color: "#9333ea",
  };

  const handleToggle = () => {
    setColor(!color);
  };

  return (
    <div>
      <header className="p-4 bg-gray-900 text-white">
        <div className="container relative flex justify-between mx-auto px-5 py-1">
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
            <Link to="/faq">
              <button className="self-center rounded px-5 text-xl hover:text-purple-600">
                FAQ
              </button>
            </Link>
            <Link to="/blog">
              <button className="self-center rounded px-5 text-xl hover:text-purple-600">
                Blog
              </button>
            </Link>
            <button className="text-xl" onClick={handleToggle}>
              {color ? <FaMoon /> : <FaSun />}
            </button>
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
          <button className="p-4 lg:hidden" onClick={() => setIsMenuOpen(true)}>
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
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10 sm:hidden block">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <NavLink
                      to="#"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img className="w-[50px]" src={logo} alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Quick Quiz
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        to="/home"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        to="/courses"
                        aria-label="Courses"
                        title="Courses"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        to="/faq"
                        aria-label="faq"
                        title="faq"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        to="/blog"
                        aria-label="Blogs"
                        title="BLogs"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <button
                          className="text-xl text-gray-700"
                          onClick={handleToggle}
                        >
                          {color ? <FaMoon /> : <FaSun />}
                        </button>
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
                            <button className="self-center rounded px-5 text-xl text-gray-700 hover:text-purple-600">
                              Login
                            </button>
                          </Link>
                        )}
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
