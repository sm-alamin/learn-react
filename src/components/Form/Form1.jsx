import React, { useState } from 'react';
import './form.css';

function Form1() {
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")


    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit =(e) => {
       let  userInfo ={
            name: name,
            email:email,
            password: password
        }
        console.log(userInfo)
        e.preventDefault();
    }
  return (
    <div>
        <form action='' onSubmit={handleSubmit} >
           <div className='formGroup'>
           <label>Name: </label>
            <input type="text" name="name" value={name} onChange={handleNameChange} required />
           </div>
           <div className='formGroup'> 
           <label>Email: </label>
            <input type="email" email="email" value={email} onChange={handleEmailChange} required />
           </div>
           <div className='formGroup'>
           <label>Password: </label>
            <input type="password" name="password"value={password} onChange={handlePasswordChange} required/>
           </div>
           <div className='formGroup'>
               <button type="submit" name="submit">Submit</button>
           </div>
        </form>
    </div>
  )
}

export default Form1