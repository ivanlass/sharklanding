import './App.css';


function BigVideo() {
  var w = window.innerWidth;
  return (
    <>
      {w > 994 && <div className="video">
        {w > 1399 && <iframe  width="992" height="558" src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow=" autoplay;" ></iframe>}
        {w > 1199 && w < 1399 && <iframe width="850" height="477" src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}
        {w> 994 && w < 1199 && <iframe width="743" height="416" src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>}
      </div>}
    </>
  );
}

export default BigVideo;
