
import axios from "axios";
import { useState } from "react";

export default function SignUp() {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [repassword, setRepassword] = useState("");
     const [accept, setAccept] = useState(false);
     // const [flag, setFlag] = useState(true);
     const [emailerror, setEmailerror] = useState("");

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
               }
          } catch (err) {
               setEmailerror(err.response.status)
               
          }
     }


     return (
          <div className="father">
               <div className="shape"></div>
               <form onSubmit={Submit}>

                    <h4>Login Here </h4>

                    <label htmlFor="name" >Name</label>
                    <input id="name" type="text" placeholder="Name..."
                         value={name} onChange={(e) => setName(e.target.value)} />
                    {name === "" && accept && <p className="error">name is requierd</p>}
                    
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Email..." required
                         value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && emailerror === 422 && <p className="error">Email is already taken</p>}
                    
                    <label htmlFor="password">PassWord</label>
                    <input id="password" type="password" placeholder="PassWord..."
                         value={password} onChange={(e) => setPassword(e.target.value)} />
                    {password.length < 8 && accept && <p className="error">password most be 8 charcter</p>}

                    
                    <label htmlFor="repeatpassword">RepeatPassWord</label>
                    <input id="repeatpassword" type="password" placeholder="RepeatPassWord..."
                         value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                    {password !== repassword && accept && <p className="error">password isnt match</p>}

                   
                         <button style={{ textAlign: "center" }} type="submit">Regester</button>
           

               </form>

          </div>
     )
}