import { useEffect, useState } from "react"
import Name from "./components/Name"

export default function App() {

     const [data, setData] = useState([]);

     const datashow = data.map((item,index) => <Name img={item[0]} name={item[1]} key={index} />);

     useEffect(() => {
          fetch('https://api.imgflip.com/get_memes')
               .then((res) => res.json())
               .then((dat) => setData(dat.data.memes.map((item) => [item.url,item.name])))
     },[]);
     

     return (
          <div>
               {datashow}
          </div>)


}