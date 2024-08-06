import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Messages from './Messages';
import Map from './Map';
import Friends from './Friends';
import Post from './Post';
import RightSection from './RightSection';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App  bg-gray-50 min-h-screen dark:bg-gray-700">
      {/* Header */}
     <div className='fixed md:top-0 left-0 right-0'>
      <Header username="User" avatar=""/>
      </div>
      
      <div className='
      w-full
      md:flex-row
      flex
      flex-col
      md:justify-center
      min-h-screen
      '>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/post' element={<Post/>}/>
        </Routes>
        {/*<Feed/>*/}
        {/* Active Users */}
        <RightSection username="User" avatar="" />
      </div>
    </div>
  );
}

export default App;
