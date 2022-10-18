import './index.scss'
import 'animate.css';
import { Link } from 'react-router-dom';
import logo from "../../assests/images/logo-s.png"

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br/> I'm
        <img src={logo} alt="developer"/>
        alma
        <br />
        Web Developer
        </h1>
        <h2>tag line ......</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home