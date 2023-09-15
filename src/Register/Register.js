import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Register.css';

function Register() {
  const [email, femail] = useState("");
  const [password, fpassword] = useState("");

  const navigate = useNavigate();



  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(" http://localhost:3010/signup", { email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/");
  }

  return (
    <>
    <div className="ppk">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Login Form</h2>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => femail(e.target.value)}
              />
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
              className="btn btn-success"
              style={{ marginLeft: "100px" }}
            >
              Login
            </button>
            <Link to="/signup">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginLeft: "100px" }}
              >
                SignUp
              </button>
            </Link>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Register;
