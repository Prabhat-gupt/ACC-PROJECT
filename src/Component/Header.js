import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white ">
        <div className="container">
            <a className="navbar-brand" href="/">
            <img src="./Image/acc.png" alt="" width="80" height="80" className="d-inline-block align-text-top"/>
            </a>
        </div>
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="/">
              Navbar
            </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
            <img src="./Image/home.png" alt="" width="40" height="40" className="d-inline-block align-text-top"/>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">SignUp</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">About Us</a>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
    </div>
  )
}
