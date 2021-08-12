import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';

export default function GetDetails() {
    const [list,setList]=useState([])

    useEffect(()=> {
        fetch("http://localhost:8080/customers/all")
      .then(res => res.json())
      .then(res=> {console.log(res);setList(res);});
    },[]);
    
   return (
        <div>
          <Table>
           <thead>
           <tr>   
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>EmailID</th>
            <th>Password</th>
            </tr> 
             </thead>
            <tbody>
            {
            list.map((val,ind)=>{
                return(
                    <tr key={ind}>
                        <td>{val.id}</td>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.emailID}</td>
                        <td>{val.password}</td>
                    </tr>
                )
            })
        }
        </tbody>
       </Table>
        </div>
    )
}