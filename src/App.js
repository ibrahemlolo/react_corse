import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Home from "./components/Home"
import Users from "./Users"
// import { useEffect, useState } from "react"
// import Name from "./components/Name"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import UpdataUser from "./UpdateUser"


export default function App() {



   return (
      <div>


         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/regester' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />}>
               <Route exact path="users" element={<Users />}/>
               <Route path="users/:id" element={<UpdataUser />}/>
            </Route>
         </Routes>

      </div>)


}







// const [data, setData] = useState([])
// useEffect(() => {
//    fetch("https://api.imgflip.com/get_memes")
//       .then((res) => res.json())
//       .then((data) => setData(data.data.memes.map((items) => items))
//       )
// })
// const datashow = data.map((item, index) => <Name key={index} index={index} name={item.name} img={item.url} />)
