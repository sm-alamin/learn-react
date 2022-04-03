import React from 'react';

const NestedMapping = () => {
    const  users =[
        {
            name: "Al-Amin",
            profession: "student",
            phones: [
                {
                    home: "01712345678",
                },
                {
                    office: "0198755565"
                }
            ]
        },
        {
            name: "Rasel",
            profession: "Businessman",
            phones: [
                {
                    home: "01712345678",
                },
                {
                    office: "0198755565"
                }
            ]
        },
    
    ];
  return (
    <div>
        {users.map((user, index) => 
            <div key={index}>
                <h1>User Name: {user.name}</h1>
                <h6>User Profession: {user.profession}</h6>
                {
                user.phones.map((phone, index) =>
                <div key={index}>
                    <p>  {phone.home}</p>
                    <p> {phone.office}</p>
                </div>
                )
                }
                
            </div>
        )}
    </div>
  )
}

export default NestedMapping