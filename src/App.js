import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSection from './RightSection';

function App() {
  return (
    <div className="App  bg-gray-50 min-h-screen dark:bg-gray-700">
      {/* Header */}
     <div className='fixed top-0 left-0 right-0 bottom-0'>
      <Header username="Balkirat" avatar=""/>
      </div>
      
      <div className='
      body
      w-full
      md:flex-row
      flex
      flex-col
      md:justify-end
      
      '>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed/>
        {/* Active Users */}
        <RightSection/>
      </div>
    </div>
  );
}

export default App;
