import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
  const ref = React.createRef();
  const { id, name, picture, details, price } = course;

  return (
    <div className="my-16 mx-20">
      <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{name}</h2>

            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => (
                <button
                  onClick={toPdf}
                  type="button"
                  className="px-4 text-2xl py-2 font-semibold border rounded-full border-gray-800 text-gray-800"
                >
                  <FaCloudDownloadAlt />
                </button>
              )}
            </Pdf>
          </div>
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
