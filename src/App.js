import Navbar from './Components/navbar/Navbar';
import Intro from './Components/intro/Intro';
import './App.css' ;
import Services from './Components/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>  
    </div>
  );
}

export default App;
