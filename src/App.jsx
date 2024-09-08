import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import One from './Pages/one/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Success from './Pages/Success/Success';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path='/three' element={<Three />} />
        <Route path='/Four' element={<Four />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;