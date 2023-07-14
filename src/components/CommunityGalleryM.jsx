export default function CommunityGalleryM() {
    function backgroundWine(e) {
        e.target.style.background = "#8d4d45";
        e.target.style.color = "white"
      }
      function backgroundWhite(e) {
        e.target.style.background = "#fffef6";
        e.target.style.color = "#8d4d45"
      }

  return (
    <div id="CommunityGalleryM">
      <div className="row">
        <img className="thin" src="./carousel1.png" alt="photo 1" />
        <img className="wide" src="./carousel2.png" alt="photo 2" />
      </div>
      <div className="row">
        <img className="wide" src="./carousel3.png" alt="photo 3" />
        <img className="thin" src="./carousel4.png" alt="photo 4" />
      </div>
      <div className="row">
        <img className="thin" src="./carousel5.png" alt="photo 5" />
        <img className="wide" src="./carousel6.png" alt="photo 6" />
      </div>
      <div className="row">
        <img className="wide" src="./carousel7.png" alt="photo 7" />
        <img className="thin" src="./carousel8.png" alt="photo 8" />
      </div>
      <p>Quiénes hacen especial este lugar: las <span>juno women</span>.</p>
      <button onMouseOver={backgroundWine} onMouseLeave={backgroundWhite}>Book a tour</button>
    </div>
  );
}
