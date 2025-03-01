import { Link } from "react-router-dom"
// import { useState } from "react";
export default function Header() {


     // const [logout, setlougout]= useState(false);
     
    

     return (
          <nav
               style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
               }}
               className="regester"
          >
               <div>
                    <Link
                         to ='/'
                         className="reglink">Home</Link>
                    <button className="regester">About</button>
               </div>
               <div>
               
                    <Link
                         to="/regester"
                         style={{ textAlign: "center" }} className="reglink">
                         Regester
                    </Link>
                    <Link
                         to='/login'
                         style={{ textAlign: "center",  }} className="reglink">
                         login
                    </Link>
                        
                         
                         {/* <div
                              // to='/logout'
                              style={{ textAlign: "center", }} className="reglink"
                              onClick={handleLogout}>
                              Logout
                              </div>) */}
               </div>
          </nav>
     )
}