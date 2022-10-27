import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from '../../components/LeftSideNav/LeftSideNav'

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <div class="flex">
        <div class="flex-none w-1/4 hidden sm:block h-14 bg-slate-200">
          <LeftSideNav></LeftSideNav>
        </div>
        <div class="grow h-14 bg-red-300">02</div>
      </div>
    </div>
  );
};

export default Courses;
