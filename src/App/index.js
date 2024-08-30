
import { useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../pages/Home';
import Employees from '../pages/Employees';
import { mockup } from '../mockup';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {

  const [database,setDatabase] = useState(mockup)

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={ <Home database={database} setDatabase={setDatabase} /> }/>
          <Route path='/employees' element = { <Employees database={database} /> } />
        </Routes>
      </Router>
  );
}

export default App;
