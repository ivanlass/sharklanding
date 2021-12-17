import './App.css';
import shark from './images/lastshark.png'

function LastBox() {
  var w = window.innerWidth;
  return (
    <div className="center-box">
      <div className={`${w >994? "col-md-6 ":"col-md-12 "}`}>
        <p className="box-label sm-label-two">Strike as a Community</p>
        <div className=" mt-5 bg-centered box-text" style={{backgroundImage: "url(" + shark + ")"}}>
        Govern exactly how the "magic hand of DeFi" operates by voting with other
         FIN token holders to secure the next major liquidity source or DeFi 
         protocol integration for the PoolSharks community.
        </div>
    </div>
    </div>
  );
}

export default LastBox;
