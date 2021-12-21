import './App.css';
import pipe from './images/pipe.png'
import coin1 from './images/coin1.png'
import coin2 from './images/coin2.svg'


function Pipes() {
  var w = window.innerWidth;
  return (
    <>
        <img src={w > 994 ?coin1 : undefined} className="coin-one"/>
        <img src={w > 994 ? pipe: undefined} className="pipe"/>
        <img src={w > 994 ?coin2 : undefined} className="coin-two"/>
    </>
  );
}

export default Pipes;
