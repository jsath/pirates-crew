
import './App.css';
import {Routes, Route} from 'react-router-dom';
import One from './components/One';
import Two from './components/Two';
import Crew from './components/Crew';
import View from './components/View';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/*' element={<Crew/>}/>
        <Route path='/one' element={<One/>}/>
        <Route path='/two' element={<Two/>}/>
        <Route path='/pirates' element={<Crew/>}/>
        <Route path='/pirate/:id' element={<View/>}/>
        <Route path='/pirate/new' element={<Add/>}/>
      </Routes>
    </div>
  );
}

export default App;
