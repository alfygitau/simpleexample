import React from 'react'

const Login = () => {
    return (
        <div>
<div class="container" className="cont">
<div class="row">
  <div class="col-lg-10 col-xl-9 mx-auto">
    <div class="card card-signin flex-row my-5">
      <div class="card-img-left d-none d-md-flex">
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">Login</h5>
        <form class="form-signin">
          <div class="form-label-group">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required/>
            <label for="inputEmail">Email address</label>
          </div>
          <hr/>
          <div class="form-label-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
            <label for="inputPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
          <a class="d-block text-center mt-2 small" href="/register">Register</a>
        </form>
    </div>
    </div>
    </div>
  </div>
</div>
</div>
    )
}

export default Login
