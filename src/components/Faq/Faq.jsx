import React from "react";

const Faq = () => {
  return (
    <div className="my-28">
      <section className=" text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Do we provide certificates?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes. We provide certificates. If you score high marks in our
                  quizzes and assignments we will provide you a certificate. You
                  must score average 90% in every assignment and average 80% in
                  every quizzes.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Do we have support session?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes! We provide daily three time support sessions. Daily
                  9:00am to 11:00am, 1:00pm to 3:00pm and 8:00pm to 12:30am. To
                  be noted, this service is not available on friday.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Is there any special reward after completing any of these
                course?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Yes! There is a super special reward if you can complete any
                  of our course with 90% average mark and 50% above on everyy
                  assignment. There we will train you for job interviews and
                  after that we will let you work with job hunting team. They
                  will help you find your job.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
