
export default function name(props) {
     return <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <p>{props.index} -- {props.name}</p>
          <img src={props.img} alt="img" width={180} style={{ marginLeft: "40px" }} />
     </div>
}