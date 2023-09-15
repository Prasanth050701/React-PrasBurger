import React from "react";
import burger from "../images/burger.png";
import offer1 from "../images/offer1.png";
import offer2 from "../images/offer2.png";
import offer3 from "../images/offer3.png";
import offer4 from "../images/offer4.png";
import cards1 from "../images/cards1.png";
import cards2 from "../images/cards2.png";
import cards3 from "../images/cards3.png";
import cards4 from "../images/cards4.png";
import cards5 from "../images/cards5.png";
import topcard1 from "../images/topcard1.png";
import topcard2 from "../images/topcard2.png";
import topcard3 from "../images/topcard3.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="aaa">
        <section class="home">
          <div class="content">
            <h1>
              Super Delicious
              <br /> <span>Burger</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, iste!
            </p>
            <div id="btn">
              <button>Order Now</button> <span>Rs.100</span>
            </div>
          </div>
          <div class="img">
            <img src={burger} alt="" />
          </div>
        </section>
      </div>

      <div className="bbb">
        <div class="container" id="top-icons">
          <h1>OFFERS</h1>
          <div class="row">
            <div class="col-md-3 py-3 py-md-0">
              <i>
                <img src={offer1} alt="" />
              </i>
              <h3>Burger 50% off</h3>
            </div>
            <div class="col-md-3 py-3 py-md-0">
              <i>
                <img src={offer2} alt="" />
              </i>
              <h3>Free Delivery</h3>
            </div>
            <div class="col-md-3 py-3 py-md-0">
              <i>
                <img src={offer3} alt="" />
              </i>
              <h3>Burger free fries</h3>
            </div>
            <div class="col-md-3 py-3 py-md-0">
              <i>
                <img src={offer4} alt="" />
              </i>
              <h3>Burger with free cold drink</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="ppp">
        <div class="container" id="cards">
          <div class="row">
            <div class="col-md-6 py-3 py-md-0">
              <div class="card">
                <img src={cards1} alt="" />
                <div class="card-img-overlay">
                  <h3>HamBurger</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button id="rn">Order Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 py-3 py-md-0">
              <div class="card">
                <img src={cards2} alt="" />
                <div class="card-img-overlay">
                  <h3>Pizza</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button id="rn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style={{ marginTop: "30px" }}>
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={cards3} alt="" />
                <div class="card-img-overlay">
                  <h3>Italian pizza</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button id="rn">Order Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={cards4} alt="" />
                <div class="card-img-overlay">
                  <h3>Fried Chicken</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button id="rn">Order Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={cards5} alt="" />
                <div class="card-img-overlay">
                  <h3>Chesse Burger</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button id="rn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ccc">
        <div class="banner">
          <h3>Other Product</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto, voluptatibus?
          </p>
          <button id="btnorder" href="/order">
            Order Now
          </button>
        </div>
      </div>

      <div className="ddd">
        <div class="container" id="topcards">
          <div class="row">
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={topcard1} alt="" />
              </div>
            </div>
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={topcard2} alt="" />
              </div>
            </div>
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={topcard3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="topcards">
          <div class="row">
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={topcard2} alt="" />
              </div>
            </div>
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={topcard3} alt="" />
              </div>
            </div>
            <div class="col-md-4 py-3 py-md-0">
              <div class="card">
                <img src={topcard1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
