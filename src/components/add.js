import React from "react";
import { useState } from "react";

function add (){
    return(
        <div className="Add employee">
            <h1 class="head">employee Registration from</h1>
            <p class="p">Please fill out this form with the required information</p>

            <fieldset class="title">

               <label for="name"> Name<input id="name"  type="text" placeholder="Enter detail here" /></label>
               <button type="button">Delete</button>
               <button>Update</button>

            <label for="last-name">Last name <input id="last-name" type="text" placeholder="Enter detail here"/></label>
            <button type="button">Delete</button>
            <button>Update</button>

            <label for="age">Age<input id="age" type="text" placeholder="Enter detail here"/>Update
            </label><button type="button">Delete</button>
            <button>Update</button>

            <label for="gender">gender<input id="gender" type="text" placeholder="Enter detail here"/>
            </label><button type="button">Delete</button>
            <button>Update</button>

            <label for="email-address">Email Address<input id="email-address" type="text" placeholder="Enter detail here"/>
            </label><button type="button">Delete</button>
            <button>Update</button>

            <label for="phone-number">Phone Number<input id="phone-number" type="text" placeholder="Enter detail here"/>
            </label><button type="button">Delete</button>
            <button>Update</button>

            <label for="image">Upload employee image: <input id="file" type="file" name="file" /></label>

            <label for="position">Position<input id="position" type="text" placeholder="Enter detail here"/>
            </label><button type="button">Delete</button>
            <button>Update</button>

            <label for="id">ID<input id="id" type="text" placeholder="Enter detail here"/>
            </label><button type="button">Delete</button>
            <button>Update</button>

           </fieldset>
           
           <fieldset>
            <form>
                <input type="search"  id="query" name="q" placeholder='Search ID'/>
                <button>Search</button>

            </form>

           </fieldset>
            


        </div>
    )
}

export default add;