import React,{useState} from 'react'

export default function Registration() {
    const [data,setData]= useState({
        "id":"",
        "firstName": "" ,
        "lastName": "",
        "emailID": "",
        "password": "",
        "confirmPassword":""
    })
    
    const handleSubmit=h=>{
        h.preventDefault();
        console.log(data);
        fetch('http://localhost:8080/customer',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'},
       })
        .then(res=>res.json())
        .then(json=>setData(json.data))

        if(data.password === data.confirmPassword)
        {
            alert("password Confirmed");	
        }

        else
        {
            alert("password Confirmation not done")
        }
    }
    return (
        <div  style={{backgroundColor:"azure"}}>
        <form onSubmit={handleSubmit}>
            ID<input type="number" className="form-control" name="id" 
            onChange={(e)=> setData({...data,id:e.target.value})}  />

            First Name<input type="text" className="form-control" name="firstName" 
            onChange={(e)=> setData({...data,firstName:e.target.value})}  />

            Last Name<input type="text" className="form-control" name="lastName" 
            onChange={(e)=> setData({...data,lastName:e.target.value})}  />

            Email ID<input type="email" className="form-control" name="emailId" 
            onChange={(e)=> setData({...data,emailID:e.target.value})}  /> 

            Password<input type="password" className="form-control" name="password" 
            onChange={(e)=> setData({...data,password:e.target.value})}  />

            Confirm Password<input type="password" className="form-control" name="confirmPassword" 
            onChange={(e)=> setData({...data,confirmPassword:e.target.value})}  />

        <button className="btn btn-success" type="submit">Submit</button>
        </form>
    </div>
    )
}