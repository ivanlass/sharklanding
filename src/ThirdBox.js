import './App.css';
import shark from './images/thirdshark.png'

function ThirdBox() {
  var w = window.innerWidth;
  return (
    <div className="left-box">
      <div className={`${w >994? "col-md-6 ":"col-md-12 "}`}>
        <p className="box-label sm-label">Roam the Open DeFi Waters</p>
        <div className="box-text mt-5" style={{backgroundImage: "url(" + shark + ")"}}>
        Deposit your managed assets in a staking or yield farming contract to have the greatest 
        advantage against the market and convert to a more preferred asset once your reward threshold 
        is met.
        </div>
    </div>
    </div>
  );
}

export default ThirdBox;
