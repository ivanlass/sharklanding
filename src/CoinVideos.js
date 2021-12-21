import './App.css';
import firstvideo from './images/firstvideo.mp4'
import secondvideo from './images/secondvideo.mp4'
import thirdvideo from './images/thirdvideo.mp4'
import fourthvideo from './images/fourthvideo.mp4'

import CoinVideo from './CoinVideo';

function CoinVideos() {
  var w = window.innerWidth;
  return (
    <>
      {w > 994 && <div className="coin-video">
        {/* FIRST VIDEO */}
        {w > 1399 && <CoinVideo src={firstvideo} class="first-video" width="392" height="200"/>}
        {w > 1199 && w < 1398 && <CoinVideo src={firstvideo} class="first-video" width="397" height="169"/>}
        {w > 994 && w < 1198 && <CoinVideo src={firstvideo} class="first-video" width="410" height="147"/>}

        {/* SECOND VIDEO */}
        {w > 1399 && <CoinVideo src={secondvideo} class="second-video" width="394" height="200"/>}
        {w > 1199 && w < 1399 && <CoinVideo src={secondvideo} class="second-video" width="490" height="170"/>}
        {w > 994 && w < 1199 && <CoinVideo src={secondvideo} class="second-video" width="433" height="147"/>}
        
        {/* THIRD VIDEO */}
        {w > 1399 && <CoinVideo src={thirdvideo} class="third-video" width="400" height="198"/>}
        {w > 1199 && w < 1399 && <CoinVideo src={thirdvideo} class="third-video" width="338" height="180"/>}
        {w > 994 && w < 1199 && <CoinVideo src={thirdvideo} class="third-video" width="295" height="160"/>}

        {/* FOURTH VIDEO */}
        {w > 1399 && <CoinVideo src={fourthvideo} class="fourth-video" width="400" height="198"/>}
        {w > 1199 && w < 1399 && <CoinVideo src={fourthvideo} class="fourth-video" width="338" height="180"/>}
        {w > 994 && w < 1199 && <CoinVideo src={fourthvideo} class="fourth-video" width="293" height="153"/>}
    </div>}
    </>
  );
}

export default CoinVideos;
