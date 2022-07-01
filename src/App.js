// import logo from './logo.svg';
// import './App.css';
import "./style.css";
import Componentleft from "./Componentleft";
import Componentright from "./Componentright";
import Componentcenter from "./Componentcenter";


function App() {
  return (
    <div className="container">
      <Componentleft/>
      <Componentright/>
      <Componentcenter/>
    </div>
   
  );
}

export default App;
