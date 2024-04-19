import './App.css';
import Dropdownmenu from "./components/Dropdownmenu";
import  Logo from "./assets/logo procone white transparent.png"


function App() {
  return (
    <div className="App">
      <div className="logo-container" >
        <img 
        src={Logo}
        alt="Procone-logo"/>
      </div>
      <div className="title-container">
        <div className="title">
          <h1>Check Control</h1>
        </div>
      </div>

      <Dropdownmenu />

     {/* div de app */}
    </div>
  );
}

export default App;
