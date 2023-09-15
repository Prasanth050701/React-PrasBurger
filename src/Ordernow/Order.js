/* import React from "react";
import "./Order.css";

function OrderForm() {
  return (
    <>
      <div className="lol">
        <h1>Place Your Order Here!</h1>
          <form>
        
          
            <div className="input-group"> 
            <h3 style={{fontFamily:"sans-sheriff"}}>1.Your Info</h3>
          
            <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              
            />
          </div>
          </div>
         
       
        

        <legend>
          <div class="number">2</div> Pasta Choice:
        </legend>
        <input type="radio" id="spaghetti" name="pasta " />
        <label>Spaghetti</label>
        <input type="radio" id="penne" name="pasta" />
        <label>Penne</label>
        <input type="checkbox" id="glutenfree" name="glutenfree" />
        <label>Gluten Free?</label>

        <fieldset>
          <legend>
            <div class="number">3</div> Filling Choice:
          </legend>
          <input type="radio" id="mince" name="filling" />
          <label>Meatless Mince</label>
          <input type="radio" id="lentils" name="filling" />
          <label>Lentils</label>
        </fieldset>
        <fieldset>
          <legend>
            <div class="number">4</div> Your Sides:
          </legend>
          <input type="radio" id="bread" name="side" />
          <label>Garlic Bread</label>
          <input type="radio" id="nobread" name="side" />
          <label>No Garlic Bread</label>
          <input type="checkbox" id="glutenfree" name="glutenfree" />
          <label>Gluten Free?</label>
        </fieldset>

        <legend>
          <div class="number">5</div> Extra Fillings:
        </legend>
        <input type="checkbox" id="mushrooms" name="mushrooms" />
        <label>Mushrooms</label>
        <input type="checkbox" id="onions" name="onions" />
        <label>Onions</label>
        <input type="checkbox" id="carrots" name="carrots" />
        <label>Carrots</label>
        <input type="checkbox" id="celery" name="celery" />
        <label>Celery</label>
        <input type="checkbox" id="peas" name="peas" />
        <label>Peas</label>

        <fieldset>
          <legend>
            <div class="number">6</div> Any Special Requests:
          </legend>
          <textarea></textarea>
        </fieldset>
        </form>
        <input class="button" type="submit" value="Give me Food!" />
               
        <div class="order">
          <h1>Thanks for your order!</h1>
          <img src="https://i.imgur.com/O0oqbwc.jpg" />
        </div>
      </div>
      
    </>
  );
}

export default OrderForm;
 */