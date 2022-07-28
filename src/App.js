import { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './style.css';

function App() {
  
  const [tab, setTab] = useState('profile');
  
  return (
    <div>
      <Navbar tab={tab} setTab={setTab} />
      <Main tab={tab} setTab={setTab} />
    </div>
  );
}

export default App;
