import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom';


const Addusers =() =>{
 
    // const [users,setUsers] = useState(
    //     {
    //         email:"",
    //         password:"",
    //         phone:"",
    //         username:""
    //     }
    // )




    const[email,setEmail] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    // const navigate = useNavigate();
    const history = useHistory();
    
    // const{ password, phone, username} = users;

// const inputchangehandler = event => {
//     // console.log(e.target.value)
//     // const{ email, value} = event.target;
//     return(
//         setUsers({...users,[event.target.email] : event.target.value})
//     )
  
// }

 const onSubmit  = async e => {
     e.preventDefault();
     await axios.post("https://fakestoreapi.com/users", email,username,password,phone)
     history.push("/")
    
 }
    return(
        <div>
            <h1>
                Add User </h1>
                <form >

                <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput"
   placeholder="name@example.com" name="email" value={email} onChange={event => setEmail(event.target.value)}  />
  <label>Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword"
   placeholder="Password" name="password" value={password}   onChange={event => setPassword(event.target.value)} />  
  <label >Password</label>
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput"
   placeholder="name@example.com" name="phone" value={phone}   onChange={event => setPhone(event.target.value)} />
  <label>phone Number</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" 
  placeholder="Password" name="username" value={username}  onChange={event => setUsername(event.target.value)}  />  
  <label>Usernames</label>
  <button  onSubmit={e => onSubmit(e)} >AddUser</button>
</div>
</form> 
        </div>
         )
    
}
             
                

export default Addusers;