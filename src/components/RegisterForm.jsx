import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [formValues, setformValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    registerbox: false,
  });

  const [errors, setErrors] = useState({
    name:null,
    username: null,
    email: null,
    phone: null,
    registerbox: null,
  });

 const navigate=useNavigate()
  const handleSubmit=()=>{

    let isError=false;
    if(formValues.name.trim().length===0)
    {
        setErrors((prev)=>{
            return {...prev,name:"Name is required"}
        });
        isError=true;
    }
    else {
        setErrors((prev)=>{
            return {...prev,name:null};
        });

    }

    if(formValues.phone.trim().length===0)
    {
        setErrors((prev)=>{
            return {...prev,phone:"Phone is required"}
        });
        isError=true;
    }
    else {
        setErrors((prev)=>{
            return {...prev,name:null};
        })
    }
    if(formValues.username.trim().length===0)
    {
        setErrors((prev)=>{
            return {...prev,username:"UserName is required"}
        });
        isError=true;
    }
    else {
        setErrors((prev)=>{
            return {...prev,Username:null};
        })
    }
    if(formValues.email.trim().length===0)
    {
        setErrors((prev)=>{
            return {...prev,email:"Email is required"}
        });
        isError=true;
    }
    else {
        setErrors((prev)=>{
            return {...prev,name:null};
        });

    }
  if(isError)
  {
    return;
  }
  else {
    window.localStorage.setItem("userInfo",JSON.stringify(formValues));
    navigate("/info")
  }



  }

  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        flexDirection:"column"
    }}>
      <input
        value={formValues.name}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
        type="text"
        placeholder="Name"
      />
      <p>{errors.name}</p>
      <br/>
      <input
        value={formValues.username}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, username: e.target.value };
          });
        }}
        type="text"
        placeholder="Username"
      />
      <p>{errors.username}</p>
      <br/>
      <input
        value={formValues.email}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
        type="text"
        placeholder="Email"
      />
      <p>{errors.email}</p>
      <br/>

      <input
       value={formValues.phone}
        onChange={(e) => {
          setformValues((prev) => {
             return { ...prev, phone: e.target.value };
          });
        }}
        type="text"
        placeholder="Phone"
      />
      <p>{errors.phone}</p>
      <br/>

      <label htmlFor="registerbox">
        <input 
        checked={formValues.registerbox}
        id="registerbox"
        type="checkbox"
        onChange={(e) => {
          setformValues((prev) => {
             return { ...prev, registerbox: e.target.checked };
          });
        }}
       />
       Share my registration with Superapp
      </label>
      <p>{errors.registerbox}</p>
      
  <button onClick={handleSubmit} style={{border:"none",padding:"5", backgroundColor:"greenyellow"}}>Sign Up</button>
  

    </div>
  );
}
