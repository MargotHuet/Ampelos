import './App.css';
import  PredictImg  from './components/home-page';
//import { Routes, Route, BrowserRouter } from 'react-router-dom'
import WelcomePage from "./components/welcome-page.js";


function App() {
  return (
    <div>
        <WelcomePage />
        <PredictImg />
    </div>
  )
}

export default App;
