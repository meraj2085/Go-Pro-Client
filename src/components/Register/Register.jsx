import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="mx-5 my-5">
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form3Example1" className="form-control" />
              <label className="form-label" htmlFor="form3Example1">
                First name
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form3Example2" className="form-control" />
              <label className="form-label" htmlFor="form3Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form3Example3" className="form-control" />
          <label className="form-label" htmlFor="form3Example3">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form3Example4" className="form-control" />
          <label className="form-label" htmlFor="form3Example4">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Register
        </button>

        <div className="text-center">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p>or register with:</p>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
