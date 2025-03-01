
import Header from "../../../components/Header";
import Form from "../../../components/Forms/Form";

export default function SignUp() {

     return <div>

          <Header />
          <Form
               Title="Register"
               endpoint="register"
               target=""
               isStyle={true}


          />
     </div>
     
}