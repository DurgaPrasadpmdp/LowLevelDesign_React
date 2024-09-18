import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';


function App() {
  return (
    <div className="App">
        <Header/>
        <div className='font-bold text-center text-3xl'>
          Welcome to the World Front End....................
        </div>
        <Outlet></Outlet>
        
    </div>
  );
}

export default App;
