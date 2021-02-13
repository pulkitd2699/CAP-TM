import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Title from './components/Title/title';
import Views from './components/Views/views';
import Loader from './Loader';
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [])

  return (
    <div className="App">
      {
        loading ? 
        <Loader /> 
        :
        <div>
          <Title />
          <Views /> 
        </div>
      }
    </div>
  );
}

export default App;
