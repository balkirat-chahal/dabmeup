import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSection from './RightSection';

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
        <Feed/>
        {/* Active Users */}
        <RightSection username="User" avatar="" />
      </div>
    </div>
  );
}

export default App;
