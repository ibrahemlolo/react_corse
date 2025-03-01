import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Users() {

     const [users, setUsers] = useState([]);
     const [run, setRun] = useState(0);

     useEffect(() => {
          fetch("http://127.0.0.1:8000/api/user/show")
               .then((res) => res.json())
               .then((data) => setUsers(data));
     }, [run])

     //Function to show the users
     const showUsers = users.map((user, index) =>
     (<tr key={index}>
          <td>{index + 1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td style={{ display: "flex", padding: "20px", justifyContent: "space-between" }} >
               <Link to={`${user.id}`}>
                    <i style={{ cursor: "pointer" }} className="fa-solid fa-pen-to-square">
                    </i>
               </Link>



               <i style={{ color: "red", cursor: "pointer" }} className="fa-solid fa-user-xmark"
                    onClick={() => deleteUser(user.id)} ></i>
          </td>
     </tr>

     )

     )
     // Function to delete user by id
     async function deleteUser(id) {
          try {
               const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
               if (res.status === 200) {
                    setRun((prev) => prev + 1);
               }
          } catch {
               console.log('err');
          }
     }


     return (<div>
          <table>
               <thead>
                    <tr>
                         <th>ID</th>
                         <th>USER</th>
                         <th>EMAIL</th>
                         <th>ACTION</th>
                    </tr>
               </thead>
               <tbody>
                    {showUsers}
               </tbody>
          </table>
     </div>)
}