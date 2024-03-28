import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){

const [data , setData] = useState([]);
 
useEffect(()=>{
       axios.get("http://localhost:3000/user").then(response => setData(response.data))
        .catch((error)=> console.log(error))
    },[]);

//     const handleDelete=(id)=>{
//         const confirm =window.confirm("would you like to Delete?")
//         if (confirm){
//       axios.delete("http://localhost:3000/user/"+id)
//       .then(response=> { response(
//         window.location.reload());
//     })
//       .catch(err => console.log(err))
//     }
// }

const handleDelete=(id)=>{
    const confirm =window.confirm("would you like to Delete?")
    if (confirm){
  axios.delete("http://localhost:3000/user/"+id)
  .then(response=> { alert("record has deleted");
    window.location.reload();
})    
  .catch(err => console.log(err))
}
}
    return(
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
      <div className="d-flex justify-content-end" >
      <Link to="/create"><button className="btn btn-success">Add +</button></Link>
      </div>
.      <table className="table table-striped">
 
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                        <td>{d.website}</td>
                        <td>
                            <Link to={`/read/${d.id}`} className="btn btn-success me-2 ">Read</Link>
                            <Link to={`/update/${d.id}`} className="btn btn-primary me-2 ">Edit</Link>
                            <button className="btn btn-danger" onClick={()=>handleDelete(d.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>


       </div>
      </div>
    )
}
export default Home;