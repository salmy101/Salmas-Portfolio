import "./App.scss";
import { Route, Routes } from "react-router-dom";
//routes
import Layout from "./components/Layout";
// import Sidebar from './components/Sidebar';
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
