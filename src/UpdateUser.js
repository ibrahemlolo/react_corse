import axios from "axios";
import { useState } from "react";

export default function UpdataUser() {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [repassword, setRepassword] = useState("");
     const [accept, setAccept] = useState(false);
     // const [flag, setFlag] = useState(true);
     const [emailerror, setEmailerror] = useState("");
     const [showPassword, setShowPassword] = useState(false);


     // console.log(flag)

     async function Submit(e) {
          let flag = true;
          e.preventDefault();
          setAccept(true);

          if (name === "" || password.length < 8 || repassword !== password) {
               flag = false;
          }
          else flag = true;
          try {
               if (flag) {
                    //send Data
                    let res = await axios.post("http://127.0.0.1:8000/api/register", {
                         name: name,
                         email: email,
                         password: password,
                         password_confirmation: repassword,
                    });
                    if (res.status === 200) {
                         window.localStorage.setItem("email", email);
                         window.location.pathname = "/";
                    }
               }
          } catch (err) {
               setEmailerror(err.response.status)

          }

     }

     return (<div >
     
               <div className="father">
                    <div className="shape"></div>
                    <form onSubmit={Submit}>
                         <h4>Login Here </h4>
     
                         { /* Name */}
                         <label htmlFor="name" >Name</label>
                         <input id="name"
                              type="text"
                              placeholder="Name..."
                              value={name}
                              onChange={(e) => setName(e.target.value)} />
                         {name === "" && accept && <p className="error">name is requierd</p>}
     
                         {/* Email */}
                         <label htmlFor="email">Email</label>
                         <input id="email"
                              type="email"
                              placeholder="Email..." required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} />
                         {accept && emailerror === 422 && <p className="error">Email is already taken</p>}
     
                         {/* Password */ }
                              <label htmlFor="password">Password</label>
                    <div className="password-input">
                         <input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Password..."
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                         />
                         <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                         >
                              {showPassword ? "Hide" : "Show"}
                         </button>
                    </div>
                    {password.length < 8 && accept && <p className="error">Password must be at least 8 characters</p>}
                         
                         
                         {/* Repassword */}
                         <label htmlFor="repeatpassword">Repeat Password</label>
                         <div className="password-input">
                              <input
                                   id="repeatpassword"
                                   type={showPassword ? "text" : "password"}
                                   placeholder="Repeat Password..."
                                   value={repassword}
                                   onChange={(e) => setRepassword(e.target.value)}
                              />
                              <button
                                   type="button"
                                   onClick={() => setShowPassword(!showPassword)}
                              >
                                   {showPassword ? "Hide" : "Show"}
                              </button>
                         </div>
                         {password !== repassword && accept && <p className="error">Passwords don't match</p>}
     
                         <button style={{ textAlign: "center" }} type="submit">Regester</button>
     
     
                    </form>
     
               </div>
          </div>
          )
}