import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { id, name, picture, details } = course;
  return (
    <div>
      <div className="rounded-md shadow-md bg-gray-50 text-gray-800">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-800">
              {details.length > 200 ? (
                <>{details.slice(0, 200) + "..."}</>
              ) : (
                <>{details}</>
              )}
            </p>
          </div>
          <Link to={`/courses/${id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-purple-600 text-gray-50"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
