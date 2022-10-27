import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [entry, setEntry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && pass && name && cpass) {
      if (pass === cpass) {
        const newEntry = {
          id: new Date().getTime().toString(),
          name: name,
          email: email,
          pass: pass,
        };
        setEntry([...entry, newEntry]);
        toast.success("Login success", { position: "top-center" });
        setEmail("");
        setPass("");
      } else {
        toast.error("password didn't match");
      }
    } else {
      toast.error("Fields can't be empty");
    }
  };
  return (
    <div className="container">
      <h2>REGISTER</h2>
      <div className="forms">
        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <label className="label">Username</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="input">
            <label className="label">Confirm password</label>
            <input
              type="password"
              name="cpassword"
              autoComplete="off"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account ? <Link to="/login"> Login here</Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
