import './App.css';
import * as React from 'react';
import Home from "./Components/Home";
import CharOrNum from './Components/CharOrNum';
import FullColor from './Components/FullColor';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
   
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path=":char" element={<CharOrNum/>}/>
        <Route exact path="/:char/:color/:bgc" element={<FullColor/>}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;