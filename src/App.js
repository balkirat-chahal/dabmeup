import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSection from './RightSection';

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen dark:bg-gray-700">
      {/* Header */}
      <Header username="Balkirat" avatar=""/>
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
