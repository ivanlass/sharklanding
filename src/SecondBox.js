import './App.css';
import secondShark from './images/secondshark.png'

function SecondBox() {
  var w = window.innerWidth;
  return (
      <div className="right-box">
      <div className={`${w >994? "col-md-6 ":"col-md-12 "}`}>
        <p className= "sm-label-two box-label text-right">Trustless DAO Treasury Management</p>
        <div className="box-text mt-5 bg-centered" style={{backgroundImage: "url(" + secondShark + ")"}}>
        Allow your DAO members to view how assets in your treasury are being actively managed 
        via price controls and ensure the DAO can keep running smoothly even during periods of 
        market volatility.
        </div>
    </div>
    </div>
  );
}

export default SecondBox;
