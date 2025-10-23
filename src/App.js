import Acceuil from './pages/acceuil.jsx';
import About from './pages/about.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Acceuil}></Route>
          <Route path='/about' exact Component={About}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
