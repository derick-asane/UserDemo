import React from "react";
import NavBar from "../components/navbar";
import { useState } from 'react'
import { Field, reduxForm } from 'redux-form';

import FormCreateUser from "../components/formcreateuser";




export default function CreateUser(){


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
            <NavBar />
            <div className="w-[100%]">
                <h1 className="text-stone-500 text-lg">create a new user</h1>
            </div>

            {/* here we have our form div */}
            <FormCreateUser />
        </div>
    );
};


