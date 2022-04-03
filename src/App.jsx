
import './App.css';
import ProfileCard from './components/ProfileCard';
import Data from './Data';

function App() {
  let items =[];
  for (let i =0; i < Data.length ; i++) {
    items.push(<ProfileCard  
      profileType ={Data[i].profileType} 
      profilePhoto ={Data[i].profilePhoto} 
       profileName = {Data[i].profileName} 
     profilePlace ={Data[i].profilePlace} 
     profileStatus1 = {Data[i].profileStatus1} 
     profileStatus2 = {Data[i].profileStatus2} 
     profileMessage = {Data[i].profileMessage} 
     profileFollowing = {Data[i].profileFollowing} 
     skills = {Data[i].skills} 
      />)
  }
  return (
    <div className="App">
     {items}
    
    </div>
  );
}

export default App;
