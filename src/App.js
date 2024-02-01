import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <Header/>
      <div className='flex flex-row'>
        <div className='flex flex-col ml-10 mt-3' style={{width: '80%'}}>
          <Carousel/>
          <Feed/>
        </div>
        <Sidebar/>
      </div>
      
    </div>
  );
}

export default App;
