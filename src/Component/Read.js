import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read(){

    const [data , setData] = useState([]);
    const {id} = useParams();

useEffect(()=>{
       axios.get("http://localhost:3000/user/" + id).then(response => setData(response.data))
        .catch((error)=> console.log(error))
    },[id]);    


    return(
        <div className="d-flex justify-content-center vh-100 w-100 align-items-center bg-light">
             <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
              <h3>Detail Of User</h3>
              <div className="mb-2">
                <strong>Name:{data.name}</strong>
              </div>
              <div className="mb-2">
                <strong>Email:{data.email}</strong>
              </div>
              <div className="mb-2">
                <strong>Phone:{data.phone}</strong>
              </div>
              <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
              <Link to="/" className="btn btn-primary ms-3">BACK</Link>

             </div>

        </div>
    )
}
export default Read;