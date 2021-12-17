import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header'
import TextBox from './TextBox'
import pipe from './images/pipe.png'
import SecondBox from './SecondBox'
import ThirdBox from './ThirdBox';
import LastBox from './LastBox';
import coin1 from './images/coin1.png'
import coin2 from './images/coin2.svg'

var w = window.innerWidth;

function App() {
  return (
    <div className="wholeapp">
    <div className="container ">
      <Header />
      <div className="container big-margin">
      <TextBox />
      </div>
      <div className="container">
        <div className="pipe-box ">
      {w > 994 && <div className="video">
        {w > 1399 && <iframe  width="992" height="558" src="https://www.youtube.com/embed/Es1srXc67Ao?autoplay=1&mute=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow=" autoplay;" ></iframe>}
        {w > 1199 && w < 1399 && <iframe width="850" height="477" src="https://www.youtube.com/embed/lPVytYQwPgk?autoplay=1&mute=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}
        {w> 994 && w < 1199 && <iframe width="709" height="400" src="https://www.youtube.com/embed/WWW7WCk7fT4?autoplay=1&mute=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>}
      </div>}
      <img src={w > 994 ?coin1 : undefined} className="coin-one"/>
      <img src={w > 994 ? pipe: undefined} className="pipe"/>
      <img src={w > 994 ?coin1 : undefined} className="coin-two"/>
      <SecondBox/>
      <ThirdBox/>
      <LastBox />
      </div>
      </div>
    </div>

    
    <div className="container">
    <div className="row">
    <div className="col-md-6 offset-md-1 mb-5 "> 

    </div>
    </div>
    </div>

    </div>
  );
}

export default App;
