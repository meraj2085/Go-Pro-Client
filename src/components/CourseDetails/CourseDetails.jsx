import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
     const course = useLoaderData();
     return (
          <div>
               <p>{course.name}</p>
          </div>
     );
};

export default CourseDetails;