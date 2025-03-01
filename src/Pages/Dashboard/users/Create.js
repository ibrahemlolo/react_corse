import Form from "../../../components/Forms/Form"
export default function Create() {

     return (<div>
          <Form
               Title="Create"
               endpoint="user/create"
               target='dashboard/users'
               isSignUp={false}

          />
     </div>)
}