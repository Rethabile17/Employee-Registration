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
    
   
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };
    

   const validateId = (id) => {
    const re = /^\d{1,12}$/;
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
      <div>
                <form id="form1" role="search">
                    <input className="search" type="search" id="query" name="q" placeholder="Search..." aria-label="Search through site content"/>
                    <button className="svg"><svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Add;