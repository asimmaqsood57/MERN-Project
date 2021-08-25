import React from "react";

function Login() {
  return (
    <div>
      <h1 className="text-center mt-4">Log in</h1>

      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
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

          <div className="text-center">
            <button type="submit" class="btn btn-primary  m-4">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
