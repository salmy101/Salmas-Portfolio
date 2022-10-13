import './App.scss';
import { Route, Routes } from 'react-router-dom';
//routes
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}/>
    </Routes>
    </>
    
  );
}

export default App;
