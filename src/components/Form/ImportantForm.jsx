import React, { useState } from 'react';

function ImportantForm() {
    const [user, setUser] = useState({
        name:"", email: "", password: ""
    })
const {name, email, password} = user;
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit =(e) =>{
        console.log(user)
        e.preventDefault();
    }
  return (
    <div>
         <form action='' onSubmit={handleSubmit} >
           <div className='formGroup'>
           <label>Name: </label>
            <input type="text" name="name" value={name} onChange={handleChange} required />
           </div>
           <div className='formGroup'> 
           <label>Email: </label>
            <input type="email" name="email" value={email} onChange={handleChange} required />
           </div>
           <div className='formGroup'>
           <label>Password: </label>
            <input type="password" name="password"value={password} onChange={handleChange} required/>
           </div>
           <div className='formGroup'>
               <button type="submit" name="submit">Submit</button>
           </div>
        </form>
    </div>
  )
}

export default ImportantForm