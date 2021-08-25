import React from "react";

function Signup() {
  return (
    <div>
      <h1 className="text-center mt-4">Sign Up</h1>

      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputPassword1">Your Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Your Name"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone No.</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="phone"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Your Profession</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Your Profession"
            />
          </div>

          <div className="text-center">
            <button type="submit" class="btn btn-primary  m-4">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
