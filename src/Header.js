import './App.css';
import poolshark from './images/poolshark.png'
import logo from './images/logo.png'
import shark from './images/shark.png'
import coins from './images/coins.svg'
import lines from './images/hero-bg.png'

function Header() {
  var w = window.innerWidth;
  return (
  <div className="cointainer">
    <div className="header-images-wrapper ">
      <div className="row">
        <div className="col-md-4">
          <div className="cta-wrapper">
            <img src={logo} className="logo"/>
            <img src={poolshark} className="poolshark-name" width="476px"/>
            <p className="slogan">Take a Bite out of Smart Contract Automation</p>
            <button onClick={() =>window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"} className="cta">{w > 994 ? "VIEW DEMO": "ENTER APP"}</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="shark">
            <img src={shark} className="shark-img" />
          </div>
        </div>
        <div className="col-md-2 mt-5">
          <img src={coins} className="coins" width="191px" />

          
        </div>
      </div>
    </div>
    <img src={lines} className="lines" />



    <svg className="burger-menu" width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1263_633)">
              <rect width="45.5" height="35" rx="10.5" fill="black"/>
              <path d="M7.00049 28H38.5005V24.5H7.00049V28ZM7.00049 19.25H38.5005V15.75H7.00049V19.25ZM7.00049 7V10.5H38.5005V7H7.00049Z" fill="url(#paint0_linear_1263_633)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_1263_633" x1="23" y1="7" x2="23" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0.0273358" stop-color="#C18FFF"/>
                <stop offset="0.510949" stop-color="#0CB6FF"/>
                <stop offset="1" stop-color="#27F09E"/>
              </linearGradient>
              <clipPath id="clip0_1263_633">
                <rect width="45.5" height="35" fill="white"/>
              </clipPath>
            </defs>
          </svg>
  </div>
  );
}

export default Header;
