import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "./index.css";
import { User } from "../../Pages/website/Context/Context";


export default function Form(props) {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [repassword, setRepassword] = useState("");
     // const [accept, setAccept] = useState(false);
     // const [flag, setFlag] = useState(true);
     const [emailerror, setEmailerror] = useState("");
     const [showPassword, setShowPassword] = useState(false);

     const userNow = useContext(User);  
     console.log(userNow);

     const FormStyles = {
          top: '50 %',
          left: '50 %',
          alignItems: "center",
          boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
          padding: '50px 35px',
          justifyContent: 'center',
     }


    
     //for Update return name and email
     useEffect(() => {
          setName(props.name);
          setEmail(props.email);
     }, [props.name, props.email])

     async function Submit(e) {
          e.preventDefault();
          try {
               //send Data
               let res = await axios.post(`http://127.0.0.1:8000/api/${props.endpoint}`, {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: repassword,
               });
               const Token = res.data.token;
               const userDetails = res.data.data.user;
               console.log(Token);
               console.log(userDetails);
               userNow.setAuth("stored");
              

          } catch (err) {
               setEmailerror(err.response.status);
          }


     }
     

     return (<div>
          <div style={{}} className="father">
               <div className="shape"></div>
               <form
                    style={props.isStyle && FormStyles}
                    onSubmit={Submit}>
                    <h2>{props.Title}  </h2>

                    { /* Name */}
                    <label htmlFor="name" >Name</label>
                    <input id="name"
                         type="text"
                         placeholder="Name..."
                         value={name}
                         onChange={(e) => setName(e.target.value)} />
                    {/* {name === "" && accept && <p className="error">name is requierd</p>} */}

                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input id="email"
                         type="email"
                         placeholder="Email..." required
                         value={email}
                         onChange={(e) => setEmail(e.target.value)} />
                    {/* {accept && emailerror === 422 && <p className="error">Email is already taken</p>} */}

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
                    {/* {password.length < 8 && accept && <p className="error">Password must be at least 8 characters</p>} */}


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
                    {/* {password !== repassword && accept && <p className="error">Passwords don't match</p>} */}

                    <button style={{ textAlign: "center" }} type="submit">{props.Title}</button>


               </form>

          </div>

     </div>
     )
}