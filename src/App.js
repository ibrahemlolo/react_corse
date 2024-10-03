import React, { useState } from "react"

export default function App() {
     const [FirstName, setFirstName] = useState()
     const [LastName, setLastName] = useState()
     const [Email, setEmail] = useState()
     console.log(FirstName)

     return (
          <div >
               <form action="">
                    <label htmlFor='1'> First Name :</label>
                    <input id="1"
                         type="text"
                         placeholder={FirstName}
                         value={FirstName}
                         onChange={(event) => setFirstName(event.target.value)}
                         required/>
                    <label htmlFor='2'> Last Name :</label>
                    <input
                         id="2"
                         type="text"
                         placeholder={LastName}
                         value={LastName}
                         onChange={(event)=>setLastName(event.target.value)}
                         required />
                    <label htmlFor='3'> Email :</label>
                    <input
                         id="3"
                         type="email"
                         placeholder={Email}
                         value={Email}
                         onChange={(event)=>setEmail(event.target.value)}
                         required />
                    <button type="submit">submit</button>
               </form>

          </div>

     )
}