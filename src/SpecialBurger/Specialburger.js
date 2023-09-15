import React from 'react'
import p1 from "../images/p1.png"
import p3 from "../images/p3.png"
import p2 from "../images/p2.png"
import p4 from "../images/p4.png"

function Specialburger() {
  return (
    <>
        <div class="container" id="burger">
    <div class="row" >
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={p1} alt="" />
          <div class="card-body">
            <h3>Italian Pizza</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.600.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={p2} alt="" />
          <div class="card-body">
            <h3>Fried Chicken</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.200.30 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={p3} alt="" />
          <div class="card-body">
            <h3>Tasty Fries</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.99 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={p4} alt="" />
          <div class="card-body">
            <h3>Pizza Slice</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.450 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container" id="burger">
    <div class="row" >
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={p1} alt="" />
          <div class="card-body">
            <h3>Italian Pizza</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.600.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={p2} alt="" />
          <div class="card-body">
            <h3>Fried Chicken</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.250.30 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={p3} alt="" />
          <div class="card-body">
            <h3>Tasty Fries</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.100.20 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={p4} alt="" />
          <div class="card-body">
            <h3>Pizza Slice</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.350.20 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Specialburger
