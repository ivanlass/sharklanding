import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header'
import TextBox from './TextBox'
import SecondBox from './SecondBox'
import ThirdBox from './ThirdBox';
import LastBox from './LastBox';
import CoinVideos from './CoinVideos';
import BigVideo from './BigVideo';
import Pipes from './Pipes';
import Footer from './Footer';

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
          <BigVideo />
          <CoinVideos />
          <Pipes />
          <SecondBox/>
          <ThirdBox/>
          <LastBox />
        </div>
      </div>
    </div>
      <Footer />
  </div>
  );
}

export default App;
