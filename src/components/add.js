import React from "react";
import { useState } from "react";

function Add (props){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age,setAge] = useState("");
    const [email, setEmail] = useState("");
    const [PhoneNumber,setPhoneNumber] =useState("")
    const [position,setPosition] = useState("");
    const [id,setId] = useState("")
   


    const add = () => {
        props.add(firstName, lastName, age, email,position, PhoneNumber);
        setFirstName("");
        setLastName("");
        setAge("");
        setEmail("");
        setPhoneNumber("")
        setPosition("");
        setId("")
      
      };


    return(
        <div className="Add employee">

            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="number" placeholder="age" value={age} onChange={(e) =>  setAge(e.target.value)} />
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="phonenumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <input type="text" placeholder="position" value={position} onChange={(e) => setPosition(e.target.value)} />
            <input type="text" placeholder="id" value={id}onChange={(e) => setId(e.target.value)}/>
            <button onClick={add}>Add Button</button>


        </div>
    )
}

export default Add;