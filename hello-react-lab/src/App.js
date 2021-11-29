import './App.css';
import ironLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


function SayHello(){
  return (
    <div>
      <div className="toplogos">
        <img className="logo1" src={ironLogo} alt="ironHackLogo"/>
        <img className="logo2" src={menuTop} alt="ironHackLogo"/>
      </div>

      <h1>Say hello to Reactjs</h1>
      <span>You will learn how to use</span><br></br>
      <span>the most popular frontend library</span><br></br>
      <span>and become a super Ninja developer</span><br></br>

      <div className="button">Awesome!</div>
      <div className="containerIcons">
        <img src={icon1} alt="ironHackLogo"/>
        <img src={icon2} alt="ironHackLogo"/>
        <img src={icon3} alt="ironHackLogo"/>
        <img src={icon4} alt="ironHackLogo"/>
      </div>
      
    </div>
 
    
  )
}

function App() {
  return (
    <div className="App">
      <SayHello />
    </div>
  );
}



export default App;
