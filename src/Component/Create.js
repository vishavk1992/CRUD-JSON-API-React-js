import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Create(){
    const[input , setInput] = useState({name:'' , email:"", phone:"" , website: ''})

    const navigate = useNavigate();
    const handleSubmit=(event)=> {
      event.preventDefault();
      if(input.email && input.name && input.phone && input.website ){
        axios.post("http://localhost:3000/user", input)
        .then((response) =>{console.log(response)
        navigate('/') })
         .catch((error)=> console.log(error))

    }
 else{
    // If user details are not filled out, display an error message or take appropriate action
    alert('User details are incomplete. Cannot submit data.');
}
    }
    return(
            <div className="d-flex justify-content-center vh-100 w-100 align-items-center bg-light">
             <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Add a User </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Your Name" onChange={(e)=>setInput({...input, name:e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Your Email" onChange={(e)=>setInput({...input, email:e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="email" className="form-control" placeholder="Enter Your Phone Number" onChange={(e)=>setInput({...input , phone:e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="website" className="form-control" placeholder="Enter Your website" onChange={(e)=>setInput({...input , website: e.target.value})}/>
                    </div>
                    <button className="btn btn-success">SUBMIT</button>
                    <Link to="/" className="btn btn-primary ms-3">BACK</Link>
                </form>

             </div>

            </div>
    )
}
export default Create;