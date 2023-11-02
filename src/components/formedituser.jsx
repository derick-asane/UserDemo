import React from "react";

import { useState } from 'react'
import { Field, reduxForm } from 'redux-form';


const FormEditUser = (props)=>{

    const { handleSubmit } = props;

  const onSubmit = (formValues) => {
    const newUser = 
    // Handle form submission
    console.log(formValues);
  };

    const [gender, setGender] = useState('male');

  // this is a custom way to implemet the gender for the gender
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // this is a custom date picker
  const renderDatePicker = ({ input }) => (
    <input type="date" {...input} />
  );

  // this is a custom submit
  const renderSubmitButton = () => (
    <button type="submit">Submit</button>
  );

// this is a custom radio Buttons
  const renderRadioButtons = ({ input }) => (
    <div className='flex justify-around w-[70%]'>
      <label>
        <input type="radio" {...input} value="male" checked={input.value === "male"} />
        Male
      </label>
      <label>
        <input type="radio" {...input} value="female" checked={input.value === "female"} />
        Female
      </label>
    </div>
  );
    

    return(
        <div>
        
            {/* here we have our form div */}
            <div className="bg-blue-50 mt-4 w-[50%] h-[400px] mx-auto">
                <form action="" onSubmit={handleSubmit(onSubmit) } className="flex flex-col justify-around w-[80%] h-[100%] mx-auto">
                    {/* user ID div */}
                   <div className='flex justify-between border bottom-3 rounded'>
                     <label htmlFor="">user ID</label>
                     <Field name="id" component="input" type="number" className="w-[80%]" placeholder=" e.g 1 "/>
                   </div>
                   {/* first name div */}
                   <div className='flex justify-between border bottom-3 rounded'>
                     <label htmlFor="">first name</label>
                     <Field name="firstname" component="input" type="text" className="w-[80%]" placeholder="enter first name "/>
                   </div>
                    {/* last name div */}
                   <div className='flex justify-between  border bottom-3 rounded'>
                     <label htmlFor="">last name</label>
                     <Field name="lastname" component="input" type="text" className="w-[80%]" placeholder="enter last name "/>
                   </div>
                    {/* email div */}
                    <div className='flex justify-between  border bottom-3 rounded '>
                     <label htmlFor="">email</label>
                     <Field name="email" component="input" type="email" className="w-[80%]" placeholder="Lebron_james@gmail.com"/>

                   </div>

                    {/* email div */}
                    <div className='flex justify-between  border bottom-3 rounded'>
                     <label htmlFor="">birth date</label>
                     <Field name="birthdate" component={renderDatePicker}  className="w-[80%]  "placeholder="date of birth" />
                   </div>

                   {/* gender div */}
                   <div className='flex justify-between  border bottom-3 rounded'>
                     <label htmlFor="">gender</label>
                     <Field name="gender" component={renderRadioButtons} />
                     
                   </div>
                    <div className="bg-blue-100 mt-9  border bottom-3 rounded">
                        <Field name="submit" component={renderSubmitButton} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default reduxForm({
    form: 'formEditUser', // unique form identifier
  })(FormEditUser);


