import backgroundBanner from "../assets/backgroundBanner.png";
import Banner from "./Banner";
// import Feed from "./Feed";
import Footer from "./Footer";
import "../styles/Layout.css";
function App() {
  return (
    <div>
      <Banner>
        <img
          src={backgroundBanner}
          alt="afterwork"
          className="banner-background"
        />
      </Banner>
      {/* <div className="feed-layout-inner">
        <Feed cart={cart} updateCart={updateCart} />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
