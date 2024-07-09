 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EmailComponent from './Components/EmailComponent.js';

function App() {
  return (
      <div>
         <Router>
        <Routes>

        <Route path="/signup" element={<EmailComponent/>}></Route>
        <Route path="/" element={<EmailComponent/>}></Route>

        </Routes>
       
       </Router>
      </div>
  );
}

export default App;
