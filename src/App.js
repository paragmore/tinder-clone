import './App.css';
import Header from './Components/Header'
import Cards from "./Components/Cards";
import SwipeButtons from './Components/SwipeButtons'

function App() {
  return (
    // using BEM naming convention
    <div className="app">
      {/* header */}
      <Header/>
      {/* Cards */}
      <Cards/>
      {/* bottom buttons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
