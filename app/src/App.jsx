import "./App.css";
import GameboyList from "./components/GameboyList"; // Path to your GameboyList component
import CarousselSlide from "./components/CarousselSlide";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>RETROMETROID</span>
        <span className="subtitle">Customs Creation</span>
      </div>
      <div className="menu">
        <a href="#">Personnalisation</a>
        <a href="#">PSVita - OLED</a>
        <a href="#">Éditions Limitées</a>
        <a href="#">Accessoires</a>
        <a href="#">Fonds d Écran</a>
      </div>
      <div className="user-cart">
        <a href="#" className="user-icon">
          👤
        </a>
        <a href="#" className="cart-icon">
          🛒
        </a>
      </div>
    </nav>
  );
}

function Bandeau() {
  return (
    <section className="bandeau">
      Construit ta propre console <span>CUSTOMISATION</span>
    </section>
  );
}

function CadrePhoto() {
  return (
    <section className="CadrePhoto">
      <GameboyList />
    </section>
  );
}

function Caroussel() {
  return (
    <div className="caroussel">
      <CarousselSlide />
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Caroussel />
      <Bandeau />
      <CadrePhoto />
    </>
  );
}

export default App;
