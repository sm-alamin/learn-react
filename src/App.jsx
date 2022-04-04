import React from 'react';
import './App.css';
import BootstrapDesign from './components/BootstrapDesign/BootstrapDesign';
import Card from './components/ClassComponent/Card';
import BindEvent from './components/Event/BindEvent';
import EventHandler from './components/Event/EventHandler';
import ProfileCard from './components/ProfileCard';
import RenderingCondition from './components/RenderingCondition';
import State from './components/State/State';
import List from './components/UniqueList/List';
import NestedMapping from './components/UniqueList/NestedMapping';
import Data from './Data';

function App() {

  return (
    <div className="App">
      <BindEvent />
      <EventHandler />
      <RenderingCondition />
      <State />
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
