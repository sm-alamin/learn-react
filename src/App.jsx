
import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard  
      profileType ="Pro" 
      profilePhoto ="https://randomuser.me/api/portraits/women/79.jpg"
       profileName = "Ricky Park"
     profilePlace = "New York"
     profileStatus1 = "User interface designer and "
     profileStatus2 = " front-end developer"
     profileMessage = "Message"
     profileFollowing = "Following"
     skills ={[
      "UI/ UX ",
      "Frontend Development ",
      "Html ",
      "Php ",
      "Laravel"
     ]
     }
      
      />
       <ProfileCard  
      profileType ="Pro" 
      profilePhoto ="https://randomuser.me/api/portraits/women/79.jpg"
       profileName = "Ricky Park"
     profilePlace = "New York"
     profileStatus1 = "User interface designer and "
     profileStatus2 = " front-end developer"
     profileMessage = "Message"
     profileFollowing = "Following"
     skills ={[
      "UI/ UX ",
      "Frontend Development ",
      "Html ",
      "Php ",
      "Laravel"
     ]
     }
      
      />
    
    </div>
  );
}

export default App;
