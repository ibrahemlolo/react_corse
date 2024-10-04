import { useEffect } from "react"

export default function App() {
     useEffect(() =>
     {
          fetch('https://api.imgflip.com/get_memes')
               .then((res) => res.json())
               .then((data) => console.log(data.data.memes.map((item)=> item.name)))}
     )
     return (
          <div >
               
          </div>

     )
}