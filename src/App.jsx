
import './App.css';
import BootstrapDesign from './components/BootstrapDesign/BootstrapDesign';
import Card from './components/ClassComponent/Card';
import ProfileCard from './components/ProfileCard';
import List from './components/UniqueList/List';
import NestedMapping from './components/UniqueList/NestedMapping';
import Data from './Data';

function App() {

  return (
    <div className="App">
      
       <BootstrapDesign  />
      <Card name=" Sheikh Mohammad Al Amin" title="teacher"  />
      < NestedMapping  />
      <List/>
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
