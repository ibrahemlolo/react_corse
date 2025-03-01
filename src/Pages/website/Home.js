import Header from "../../components/Header"
import { Link } from "react-router-dom"
export default function Home() {
     return <>  <Header />
          <h1>
        
          
               Home </h1>
          {window.localStorage.getItem("email")}
          {window.localStorage.getItem("email") ?
               <Link
                    to='/dashboard'
                    style={{ textAlign: "center", }} className="reglink">
                    Dashboard
               </Link>:<></>}
     </>}