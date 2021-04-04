import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Delicias del Carmen</h1>
    </div>
  );
}

export default App;
