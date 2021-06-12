
import './App.css';
import Header from "./profile/Header";
import developpeur from "./profile/Developpeur.jpg";

import Profile from "./profile/Profile";



const profile ={
  fullName: "Jihen Bouheni",
  bio: "this is bio",
function App() {
  const handleName = (me) => {
    alert(me);
   
  }}


function App() {
  return (
    
      <>
        <Header /> 
        <div className="App">
          <img
              style={{padding:'1% 0'}}
              src={Developpeur}
              alt="developpeur"
              width="100px"
              height="200px"
            />
          <Profile profile={profile} handleName={handleName}/>
        </div>
        </>
  );
}
  


export default App
