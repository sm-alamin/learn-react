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
        <div className="card-container">
	        <span class="pro">{profileType}</span>
	            <img class="round" src={profilePhoto} alt="user" />
	            <h3>{profileName}</h3>
	            <h6>{profilePlace}</h6>
	            <p>{profileStatus1} <br/> {profileStatus2} </p>
	        <div class="buttons">
		        <button  class="primary">{profileMessage}</button>
		        <button class="primary ghost">{profileFollowing}</button>
	        </div>
	        <div class="skills">
                <h6>Skills</h6>
                <ul>
                    <li>{skills}</li>
                </ul>
	        </div>
        </div>
  )
}

export default ProfileCard