
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Feeds from './pages/feeds/Feeds';
import Home from './pages/home/Home';
import Navbar from './pages/navbar/Navbar';
import Posts from './pages/posts/Posts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/feeds'element={<Feeds/>}/>
      </Routes>
    </div>
  );
}
export default App;