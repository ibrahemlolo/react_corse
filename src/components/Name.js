export default function Name(props){
     return (
          <div>
               <h4 style={{marginLeft: "30px"}}>{props.name}</h4>
               <img src={props.img} width={180} alt="img" style={{ marginLeft: "40px" }}/>
          </div>
     )
}