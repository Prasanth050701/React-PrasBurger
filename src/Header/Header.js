import React from "react";
import "./Header.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <>
      <div class="home-section">
        <nav class="navbar navbar-expand-lg" id="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="/" id="logo">
              <img src={logo} alt="" width="30px" />
              PRAS BUR<span>GER</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i class="fa-solid fa-bars"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/"
                    id="first-child"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/burger">
                    Burger
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/spclburger">
                    Special Dishes
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/newdishes">
                    New Dishes
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ backgroundColor: "#ffc800" }}
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Pizza
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Fries
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Fried Chicken
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/aboutus">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  LOGIN
                </a>
              </li>
             
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
