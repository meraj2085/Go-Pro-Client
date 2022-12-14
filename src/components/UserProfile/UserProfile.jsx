import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.error("Logout successful");
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="mx-auto right-0 my-48 w-60">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b">
            {user?.photoURL ? (
              <img
                className="h-24 w-24 text-white rounded-full mx-auto"
                width="32"
                height="32"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <svg
                aria-hidden="true"
                role="img"
                className="h-24 w-24 text-white rounded-full mx-auto"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                ></path>
              </svg>
            )}
            <p className="pt-2 text-lg font-semibold text-gray-50">
              {user?.displayName ? user?.displayName : "No name found"}
            </p>
            <p className="text-sm text-gray-100">
              {user?.email ? user?.email : "No email found"}
            </p>
            <div className="mt-5">
              <button onClick={handleLogOut}>
                <p className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                  Logout
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
