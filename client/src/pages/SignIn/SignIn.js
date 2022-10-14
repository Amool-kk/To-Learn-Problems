import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css'

const SignIn = () => {
    const[email,setEmail]=useState("");
    const[pass,setPass] = useState("");
    const[entry,setEntry]=useState("");

    const submitForm =(e) =>{
       e.preventDefault();
       if(email && pass)
       {
           const newEntry = {id:new Date().getTime().toString(),email:email,pass:pass};
           setEntry([...entry,newEntry]);
           toast.success("Login success",{position:"top-center"});
           setEmail("");
           setPass("");
       }
      else{
         toast.error("Fill the data");
      }

    }
        return ( 

           <div className="container">
           <h2>LOGIN</h2>
           <div className="forms">

               <form action="" onSubmit={submitForm}>
                   <div>
                        <label htmlFor="email">Email :</label>
                        <input type="text" name="email" autoComplete="off" value={email} 
                        onChange={(e)=>setEmail(e.target.value)} />
                   </div>
                   <div>
                        <label htmlFor="password">Password :</label>
                        <input type="password" name="password" autoComplete="off" value={pass} 
                        onChange={(e)=>setPass(e.target.value)} />
                   </div>
                   <button type="submit">Login</button>
               </form>
               <p>Don't have account ? <Link to ="/register">  Register here</Link></p>
               <ToastContainer />
               </div>
           </div>
         );
}
 
export default SignIn;