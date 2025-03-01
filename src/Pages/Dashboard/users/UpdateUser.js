import { useState, useEffect } from "react";
import Form from "../../../components/Forms/Form";

export default function UpdataUser() {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");

     const id = window.location.pathname.split("/").slice(-1)[0];
     console.log(id);


     useEffect(() => {
          fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
               .then((res) => res.json())
               .then((data) => {
                    setName(data[0].name);
                    setEmail(data[0].email);
               });
     },[])
     // console.log(flag)

     // async function Submit(e) {
     //      let flag = true;
     //      e.preventDefault();
     //      setAccept(true);

     //      if (name === "" || password.length < 8 || repassword !== password) {
     //           flag = false;
     //      }
     //      else flag = true;
     //      try {
     //           if (flag) {
     //                //send Data
     //                let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
     //                     name: name,
     //                     email: email,
     //                     password: password,
     //                     password_confirmation: repassword,
     //                });
     //                if (res.status === 200) {
     //                     window.localStorage.setItem("email", email);
     //                     window.location.pathname = "/dashboard";
     //                }
     //           }
     //      } catch (err) {
     //           console.log(err);
     //      }

     // }

     return (<div >

          <Form
               Title="UpDate"
               name={name}
               email={email}
               endpoint={`user/update/${id}`}
               target='dashboard/users'
               isSignUp={false}

          />
     </div>
     )
}