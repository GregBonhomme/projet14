import { Provider } from 'react-redux'
import { store } from './store';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../pages/Home';
import Employees from '../pages/Employees';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/employees' element = { <Employees /> } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
