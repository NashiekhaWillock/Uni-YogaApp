import React, { useEffect, useState } from 'react';
import FormSignup from './SignupForm';
import { hero } from './Data'
import Home from '../Home';
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

 
  
    useEffect(()=>{
      const submit = () => {
        setIsSubmitted(true)
      }
    return () => {
      submit()
  
  }
})

  return (
    <>
      <div className='form-container'>


        <FormSignup onSubmit={isSubmitted}  {...hero} />

      </div>
    </>
  );
};

export default Form;