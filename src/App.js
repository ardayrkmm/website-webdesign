import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/page/home/home';
import Tentang from './components/page/tentangH/tentang';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home-tentang' element={<Tentang />} />

      </Routes>
    </Router>
  );
}

export default App;
