import React from "react";
import { useState } from "react";

function Add (props){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [email, setEmail] = useState("");
    const [PhoneNumber,setPhoneNumber] =useState("")
    const [position,setPosition] = useState("");
    const [id,setId] = useState("")
    const [errorMessage, setErrorMessage ] = useState("");

const update = () => {
  
}
    
   
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };
    

   const validateId = (id) => {
    const re = /^\d{1,13}$/;
    return re.test(id);
    }

    const validatePhoneNumber = (PhoneNumber) => {
        const re = /^\d{10}$/;
        return re.test(PhoneNumber);
      };

    const add = () => {

        if (!firstName || !lastName ||  !age || !gender || !email || !PhoneNumber || !position || !id) {
            setErrorMessage("All fields are required");
            return;
          }

          if (!validateEmail(email)) {
            setErrorMessage("Invalid email format");
            return;
          }

          if (age < 16 || age > 65) {
            setErrorMessage("Age must be between 16 and 65");
            return;
          }

          if (!validatePhoneNumber(PhoneNumber)) {
            setErrorMessage("Phone number must be 10 digits");
            return;
          }
      
          if (!validateId(id)) {
            setErrorMessage("Employee ID must be between 1 and 12 digits");
            return;
          }

        props.add(firstName, lastName, age, gender, email,PhoneNumber, position,id);
        setFirstName("");
        setLastName("");
        setAge("");
        setGender("")
        setEmail("");
        setPhoneNumber("")
        setPosition(""); 
        setId("")
      
      };


    return(
        <div className="Add employee">
            <div className="container">
              <h1>Add Employee</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}

            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="number" placeholder="age" value={age} onChange={(e) =>  setAge(e.target.value)} />
            <input type="text" placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="phonenumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <input type="text" placeholder="position" value={position} onChange={(e) => setPosition(e.target.value)} />
            <input type="text" placeholder="id" value={id}onChange={(e) => setId(e.target.value)}/>
      
            <button className="add-button" onClick={add}>Submit</button>
     
            </div>
        </div>
    )
}

export default Add;