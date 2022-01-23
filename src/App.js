import './App.css';
import Landing from '../src/pages/Landing/landing';
import Crypto from '../src/pages/crypto/crypto';
import News from '../src/pages/news/news';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
