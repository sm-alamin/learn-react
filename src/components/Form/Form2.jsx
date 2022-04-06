import React, { useState } from 'react'
import './form.css'

function Form2() {
    const [user, setUser] = useState({
        name: "",email: "", password: ""
    })
    const {name,email,password} =user

    const handleNameChange = (e) => {
        setUser({name: e.target.value, email, password})
    }
    const handleEmailChange = (e) => {
        setUser({name, email: e.target.value, password})
    }
    const handlePasswordChange = (e) => {
        setUser({name, email, password: e.target.value})
    }
    const handleSubmit =(e) => {

        console.log(user)
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

export default Form2