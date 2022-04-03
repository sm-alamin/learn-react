
import './App.css';
import ProfileCard from './components/ProfileCard';
import Data from './Data';

function App() {
  return (
    <div className="App">
      <ProfileCard  
      profileType ={Data[0].profileType} 
      profilePhoto ={Data[0].profilePhoto} 
       profileName = {Data[0].profileName} 
     profilePlace ={Data[0].profilePlace} 
     profileStatus1 = {Data[0].profileStatus1} 
     profileStatus2 = {Data[0].profileStatus2} 
     profileMessage = {Data[0].profileMessage} 
     profileFollowing = {Data[0].profileFollowing} 
     skills = {Data[0].skills} 
      />
       <ProfileCard  
      profileType ={Data[1].profileType} 
      profilePhoto ={Data[1].profilePhoto} 
       profileName = {Data[1].profileName} 
     profilePlace ={Data[1].profilePlace} 
     profileStatus1 = {Data[1].profileStatus1} 
     profileStatus2 = {Data[1].profileStatus2} 
     profileMessage = {Data[1].profileMessage} 
     profileFollowing = {Data[1].profileFollowing} 
     skills = {Data[1].skills} 
      />
     <ProfileCard  
      profileType ={Data[2].profileType} 
      profilePhoto ={Data[2].profilePhoto} 
       profileName = {Data[2].profileName} 
     profilePlace ={Data[2].profilePlace} 
     profileStatus1 = {Data[2].profileStatus1} 
     profileStatus2 = {Data[2].profileStatus2} 
     profileMessage = {Data[2].profileMessage} 
     profileFollowing = {Data[2].profileFollowing} 
     skills = {Data[2].skills} 
      />
    
    </div>
  );
}

export default App;
