import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, name, picture, details, price } = course;
  return (
    <div className="my-16 mx-20">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p className="text-lg">Price: ${price}</p>
          <Link to={`/courses/checkout/${id}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Purchase</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
