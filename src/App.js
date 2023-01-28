import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Verification from './pages/Verification';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<Register/>}/>
          <Route path='/verification' element={<Verification/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
