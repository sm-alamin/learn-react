import React from 'react';

const ProfileCard = (props) => {
    const  {profileType , profilePhoto, profileName,profilePlace,profileStatus1,profileStatus2,profileMessage,profileFollowing,skills} = props;


  return (
        <div className="cardContainer">
	        <span className="pro">{profileType}</span>
	            <img className="round" src={profilePhoto} alt="user" />
	            <h3>{profileName}</h3>
	            <h6>{profilePlace}</h6>
	            <p>{profileStatus1} <br/> {profileStatus2} </p>
	        <div className="buttons">
		        <button  className="primary">{profileMessage}</button>
		        <button className="primary ghost">{profileFollowing}</button>
	        </div>
	        <div className="skills">
                <h6>Skills</h6>
                <ul>
                    <li>{skills}</li>
                </ul>
	        </div>
        </div>
  )
}

export default ProfileCard