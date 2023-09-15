import React from 'react'
import b1 from '../images/b1.png';
import b2 from '../images/b2.png';
import b3 from '../images/b3.png';
import b4 from '../images/b4.png';
import b5 from '../images/b5.png';
import b6 from '../images/b6.png';
import b7 from '../images/b7.png';
import b8 from '../images/b8.png';
import './Burger.css'

function Burger() {
  return (
    <>
       <div class="container" id="burger">
    <h1>Delicious Burger</h1>
    <div class="row" style={{margin: 'top30px'}}>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b1} alt="" />
          <div class="card-body">
            <h3>Tasty Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.450 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b2} alt="" />
          <div class="card-body">
            <h3>Onion burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.505.60 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b3} alt="" />
          <div class="card-body">
            <h3>Classic Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.300.20 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b4} alt="" />
          <div class="card-body">
            <h3>Best Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.110.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" >
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b5} alt="" />
          <div class="card-body">
            <h3>Chesse Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.460.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b6} alt="" />
          <div class="card-body">
            <h3>Tasty Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.250.30 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b7} alt="" />
          <div class="card-body">
            <h3>Chesse Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.150.20 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b8} alt="" />
          <div class="card-body">
            <h3>Delicious B</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.100.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container" id="burger">
    <div class="row" style={{margin: 'top30px'}}>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b1} alt="" />
          <div class="card-body">
            <h3>Tasty Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.300.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b2} alt="" />
          <div class="card-body">
            <h3>Onion burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.650.60 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b3} alt="" />
          <div class="card-body">
            <h3>Classic Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.350.20 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b4} alt="" />
          <div class="card-body">
            <h3>Best Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.150.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" >
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b5} alt="" />
          <div class="card-body">
            <h3>Chesse Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.460.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b6} alt="" />
          <div class="card-body">
            <h3>Tasty Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.200.30 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b7} alt="" />
          <div class="card-body">
            <h3>Chesse Burger</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.100.20 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src={b8} alt="" />
          <div class="card-body">
            <h3>Delicious B</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>RS.100.50 <span><i class="fa-solid fa-basket-shopping"></i></span></h5>
            <button id="rn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Burger;
