import React from 'react';
import './App.css';
import Child from './components/PassData/Child';

function App() {
const data ="Hello! Child, How Are You?"

const onReplyData =(childData) => {
  console.log(childData)
}
  return (
    <div className="App">
      <Child data={data}  onReplyData={onReplyData}/>
      {/* <ImportantForm /> */}

      {/* <LearnHooks /> */}
      {/* <BindEvent />
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
      /> )} */}
    
    </div>
  );
}

export default App;
