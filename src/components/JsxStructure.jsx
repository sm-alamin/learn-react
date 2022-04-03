import React from 'react';

const JsxStructure = () => {
    const profile = <img src="https://robohash.org/a" alt="" height="80px"/>
    const employName = "Mohammad Al Amin"
    const profileDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  return (
    <div>
      <div className='profileCard'>
          <div>{profile}</div>
          <div><h1>{employName}</h1></div>
    </div>
          <div><p>{profileDescription}</p></div>
    </div>
  )
}

export default JsxStructure

      