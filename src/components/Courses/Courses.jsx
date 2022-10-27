import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-none sm:w-1/4 w-full bg-slate-200 px-10 py-16">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="grow grid lg:grid-cols-3 grid-cols-1 my-10 mx-10 gap-10">
          {courses.map((course) => (
            <SingleCourse key={course.id} course={course}></SingleCourse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
