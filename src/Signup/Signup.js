import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Signup.css'

function Signup() {
  const navigate = useNavigate();
  const [name, fname] = useState("");
  const [email, femail] = useState("");
  const [password, fpassword] = useState("");

  function handlesignup(event) {
    event.preventDefault();
    axios
      .post(" http://localhost:3010/signup ", { name, email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/register");
  }

  const submit=()=> {
    alert("Registeration is Successfully done");
  }

  return (
    <>
    <div className="ppk">
      <div>
        <form onSubmit={handlesignup}>
          <div>
            <h2 style={{ textAlign: "center" }}>Signup Form</h2>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Example input placeholder"
                onChange={(e) => {
                  fname(e.target.value);
                }}
              />

              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  femail(e.target.value);
                }}
              />

              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  fpassword(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary "
              style={{ marginLeft: "100px" }}
              onClick={submit}
            >
              SignUp
            </button>
            <Link to="/register">
              <button
                className="btn btn-success"
                style={{ marginLeft: "100px" }}
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Signup;
