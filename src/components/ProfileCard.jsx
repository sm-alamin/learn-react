import React from 'react';

const ProfileCard = () => {
    const profileType = "Pro";
    const profilePhoto = "https://randomuser.me/api/portraits/women/79.jpg";
    const profileName = "Ricky Park";
    const profilePlace = "New York";
    const profileStatus1 = "User interface designer and ";
    const profileStatus2 = " front-end developer";
    const profileMessage = "Message";
    const profileFollowing = "Following"
    const skills =[
        "UI/ UX ",
        "Frontend Development ",
        "Html ",
        "Php ",
        "Laravel"
    ]


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