import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const LeftSideNav = () => {
  const courses = useLoaderData();
  return (
    <div>
      {courses.map((course) => (
        <p className="mb-5 text-xl" key={course.id}>
          <button className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 w-full">
            <Link>{course.name}</Link>
          </button>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
