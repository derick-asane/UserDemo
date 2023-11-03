import React from "react";
import { useState } from 'react'
import NavBar from "../components/navbar";

import FormEditUser from "../components/formedituser";
import { useLocation } from 'react-router-dom';

const EditUser = () =>{

  const location = useLocation()
  const item = location.state?.item || {};
  console.log(item)
   
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
            <FormEditUser initialValues={item}/>
            
        </div>
        </div>
    );
};


export default EditUser;



