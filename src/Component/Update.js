import { useState, useEffect } from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";
import axios from "axios";


function Update(){
   const [values ,setValues] = useState({name: '', email:'', phone:''})
    const {id} = useParams();


    useEffect(()=>{
        axios.get("http://localhost:3000/user/" + id)
        .then(response =>{setValues(response.data)})
         .catch((error)=> console.log(error))
     },[id]);

     const navigate = useNavigate();
    //  const handleUpdate =(event)=>{
    //     event.preventDefault();
    //     axios.put("http://localhost:3000/user/"+id, values)
    //     .then(()=>{
    //         alert ("updated successfully")
    //         navigate('/')
    //     })
    //     .catch(err => console.log(err))
    //  }

    const handleUpdate =(event)=>{
        event.preventDefault();
        axios.put("http://localhost:3000/user/"+id, values)
        .then(response=>{ console.log(response)
            navigate('/')
        })
        .catch(err => console.log(err))
     }



    return(
        <div className="d-flex justify-content-center vh-100 w-100 align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
           <h1>Update a User </h1>
           <form onSubmit={handleUpdate}>
               <div className="mb-2">
                   <label htmlFor="name">Name:</label>
                   <input type="text" name="name" className="form-control" placeholder="Enter Your Name" value={values.name} onChange={(e)=>setValues({...values, name: e.target.value})}/>
               </div>
               <div className="mb-2">
                   <label htmlFor="email">Email:</label>
                   <input type="email" name="email" className="form-control" placeholder="Enter Your Email" value={values.email} onChange={(e)=>setValues({...values, email: e.target.value})}/>
               </div>
               <div className="mb-2">
                   <label htmlFor="phone">Phone:</label>
                   <input type="text" name="email" className="form-control" placeholder="Enter Your Phone Number" value={values.phone} onChange={(e)=>setValues({...values , phone: e.target.value})}/>
               </div>
               <button className="btn btn-success">Update</button>
               <Link to="/" className="btn btn-primary ms-3">BACK</Link>
           </form>

        </div>

       </div>
    )
}
export default Update;