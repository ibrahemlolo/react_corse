
import axios from "axios";
import { useState } from "react";

export default function SignUp() {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [accept, setAccept] = useState(false);
     // const [flag, setFlag] = useState(true);
     const [passerror, setpasserror] = useState("");
     const [showPassword, setShowPassword] = useState(false);


     // console.log(flag)

     async function Submit(e) {
          let flag = true;
          e.preventDefault();
          setAccept(true);

          if ( password.length < 8 ) {
               flag = false;
          }
          else flag = true;
          try {
               if (flag) {
                    //send Data
                    let res = await axios.post("http://127.0.0.1:8000/api/login", {
                         email: email,
                         password: password,
                    });
                    if (res.status === 200) {
                         window.localStorage.setItem("email", email);
                         window.location.pathname = "/home";
                    }
               }
          } catch (err) {
               setpasserror(err.response.status)

          }
     }


     return (
          <div className="father">
               <div className="shape"></div>
               <form onSubmit={Submit}>
                    <h4>Login Here </h4>

                  
                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input id="email"
                         type="email"
                         placeholder="Email..." required
                         value={email}
                         onChange={(e) => setEmail(e.target.value)} />

                    

                    {/* Password */}
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
                    {passerror === 401 && accept && <p className="error"> Password or Email uncorrect</p>}



                    <button style={{ textAlign: "center" }} type="submit">Login</button>


               </form>

          </div>
     )
}