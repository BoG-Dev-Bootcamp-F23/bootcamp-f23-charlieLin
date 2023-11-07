import "./App.css";
import LinesPage from "../src/pages/LinesPage";
import Home from "./pages/Home";
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route  index element={<Home />}/>
          <Route path={'about'} element={<About />} />
          <Route path={'linespage'}>
            <Route path="gold" element={<LinesPage startingColor="gold" />}/>
            <Route path="red" element={<LinesPage startingColor="red" />}/>
            <Route path="blue" element={<LinesPage startingColor="blue" />}/>
            <Route path="green" element={<LinesPage startingColor="green" />}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
