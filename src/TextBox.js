import './App.css';
import shark1 from './images/sharkbox.png'

function TextBox() {
  var w = window.innerWidth;

  return (
      <div className={`${w >994? "col-md-6 ":"col-md-12 "}z-index`}>
        <p className="box-label sm-label">{w > 995 && "Welcome to DeFi 3.0 -> "}Smart Contract Automation</p>
        <div className="box-text mt-5" style={{backgroundImage: "url(" + shark1 + ")"}}>
        <p>Time to level the playing field for Decentralized Exchange users. 
        Set up your Tank NFT to take profit for you on the way up and keep an 
        eye on the price for you. Likewise, preserve the value of your assets 
        of ETH, BTC, and other popular tokens whilst making full use of the 
        liquidity available on the largest DEXes.</p>
        </div>
    </div>
  );
}

export default TextBox;
