import React from 'react'


const Navbar = () => {
    const signinLinks = (
        <>
        <a style={{marginRight:'30px',marginLeft:'600px'}} href="/login">Sign In</a>
        <a href="/register">Register</a>
        </>
    )
    // const signoutLinks = (
    //     <a href="/logout">Logout</a>
    // )

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">RESEARCH.COM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">ACADEMIC CONTENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">ESSAYS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">RESEARCH PROJECTS</a>
        </li>
      </ul>
      <span class="navbar-text">
       { signinLinks}
      </span>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
