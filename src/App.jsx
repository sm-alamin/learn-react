
import './App.css';
import ProfileCard from './components/ProfileCard';
import Data from './Data';

function App() {

  return (
    <div className="App">
     {Data.map((item,index) => <ProfileCard  
     key={index} 
      profileType ={item.profileType} 
      profilePhoto ={item.profilePhoto} 
       profileName = {item.profileName} 
     profilePlace ={item.profilePlace} 
     profileStatus1 = {item.profileStatus1} 
     profileStatus2 = {item.profileStatus2} 
     profileMessage = {item.profileMessage} 
     profileFollowing = {item.profileFollowing} 
     skills = {item.skills} 
      /> )}
    
    </div>
  );
}

export default App;
