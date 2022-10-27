import React from "react";

const Blog = () => {
  return (
    <div className="my-24">
      <section className=" text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Blog
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">what is cors?</h3>
              <p className="mt-1 text-gray-600">
                Cross-origin resource sharing is a mechanism that allows
                restricted resources on a web page to be requested from another
                domain outside the domain from which the first resource was
                served. A web page may freely embed cross-origin images,
                stylesheets, scripts, iframes, and videos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h3>
              <p className="mt-1 text-gray-600">
                The Firebase Realtime Database lets you build rich,
                collaborative applications by allowing secure access to the
                database directly from client-side code. Data is persisted
                locally, and even while offline, realtime events continue to
                fire, giving the end user a responsive experience.
              </p>
              <p>
                Single-Factor/Primary Authentication, Two-Factor Authentication,
                Single Sign-On, Multi-Factor Authentication, Password
                Authentication Protocol, Challenge Handshake Authentication
                Protocol, Extensible Authentication Protocol
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                How does the private route work?
              </h3>
              <p className="mt-1 text-gray-600">
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in)
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                What is Node? How does Node work?
              </h3>
              <p className="mt-1 text-gray-600">
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on a JavaScript Engine and
                executes JavaScript code outside a web browser, which was
                designed to build scalable network applications. Node. js takes
                a different approach. It runs a single-threaded event loop
                registered with the system to handle connections, and each new
                connection causes a JavaScript callback function to fire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
