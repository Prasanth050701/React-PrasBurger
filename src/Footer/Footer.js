import React from 'react'
import './Footer.css';
import logo from '../images/logo.png';

function Footer() {
  return (
    <>
      <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <a class="navbar-brand" href="#" id="logo2">
                <img src={logo} alt="" width="30px" />PRASBurger</a>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero.</p>
            <p>
              Madurai
              Tamilnadu 
              India
            </p>
            <strong><i class="fa-solid fa-phone"></i> Phone: <strong>+0000000000000000</strong></strong>
            <strong><i class="fa-solid fa-envelope"></i> Email: <strong>example@gmail.com</strong></strong>
          </div>
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Privacy policay</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam.</p>
            <ul>
              <li><a href="#">Pizza</a></li>
              <li><a href="#">Fried chicken</a></li>
              <li><a href="#">Fries</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Socail Links</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, minus.</p>
            <div class="socail-links mt-3">
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-google-plus"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  <div class="container py-4">
    <div class="copyright">
      &copy; Copyright <strong>PRASBurger</strong>.All Rights reserved
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
