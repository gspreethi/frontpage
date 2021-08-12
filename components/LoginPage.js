import React from 'react'
import { useState} from "react";

export default function LoginForm() {
       const[l_data,setL_data]=useState({
        id:"",  
        emailID:"",
          password:""
        });

      const handleSubmit=(e)=>{
          e.preventDefault();
          console.log(l_data);

         fetch("http://localhost:8080/customer/8")
        .then((response) => response.json())
        .then((res) => {console.log(res);
          if((l_data.emailID === res.emailID) && (l_data.password === res.password))
                {
               alert("Login successful");
                }
              else{
                 alert("not successfull");
              }
         });
 }
 
      return (
        <div  style={{backgroundColor:"burlywood"}}>
            <form onSubmit={handleSubmit} >

            ID<input type="number" className="form-control" name="id" 
            onChange={(c)=> setL_data({...l_data,id:c.target.value})}  />

            Email-ID<input type="email" className="form-control" name="email" 
            onChange={(c)=> setL_data({...l_data,emailID:c.target.value})}  />
              
            Password<input type="password" className="form-control" name="pass" 
            onChange={(c)=> setL_data({...l_data,password:c.target.value})}  />

            <button type="submit" className="btn btn-primary">Submit</button>
    </form>
      </div>
    )
}