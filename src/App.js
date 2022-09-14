import Navbar from './Components/navbar/Navbar';
import Intro from './Components/intro/Intro';
import './App.css' ;
import Services from './Components/services/Services';
import Exp from './Components/exp/Exp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Exp/>  
    </div>
  );
}

export default App;
