import "./App.scss";
import { Route, Routes } from "react-router-dom";
//routes
import Layout from "./components/Layout";
// import Sidebar from './components/Sidebar';
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
