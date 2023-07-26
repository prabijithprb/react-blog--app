import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Addblog from './components/Addblog';
import Viewblog from './components/Viewblog';
import Notfound from './components/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/addblog' element={<Addblog/>}></Route>
          <Route path='/blogs/:id' element={<Viewblog/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
