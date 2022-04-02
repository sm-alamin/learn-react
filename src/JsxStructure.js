import React from 'react';

const JsxStructure = () => {
    const profile = <img src="https://robohash.org/a" alt="" height="150px"/>
    const employName = "Mohammad Al Amin"
    const profileDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  return (
    <div className='profileCard'>
        <div className='controlProfile'>
            <div className='profile'>{profile}</div>
            <div className='employName'>{employName}</div>
        </div>
        <div className='profileDescription'>{profileDescription}</div>
    </div>
  )
}

export default JsxStructure