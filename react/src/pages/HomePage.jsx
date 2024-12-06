import hero from "../assets/hero.jpg";


const HomePage = () => {
  return (
    <div className="container">
      <img
        src={hero}
        alt="hero models with clothing"
        width="800px"
        height="400px"
      />
      <a href="/products" className="shop-now-btn">Shop Now</a>
    </div>
  );
};

export default HomePage;
