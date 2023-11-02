import React from "react";
import { useState } from 'react'
import NavBar from "../components/navbar";

import FormEditUser from "../components/formedituser";


const EditUser = () =>{
   
    const [gender, setGender] = useState('male');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with the selected gender value
    console.log('Selected gender:', gender);
  };

    return(
        <div>
            <div>
            <NavBar />

           
            <div className="w-[100%]">
                <h1 className="text-stone-500 text-lg">modify user info</h1>
            </div>

            {/* here we have our form div */}
            <FormEditUser />
            
        </div>
        </div>
    );
};


export default EditUser;



