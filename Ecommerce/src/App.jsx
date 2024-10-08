// App.jsx
import { Outlet } from 'react-router-dom';
import Header from './Component/Header'; // Import your Header component
import './App.css';

function App() {
  return (
    <>
      
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
    </>
  );
}

export default App;
