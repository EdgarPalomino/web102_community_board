import CONMEBOL from "/CONMEBOL.png";
import WC2026 from "/WC2026.png";
import "./App.css";

const Header = () => {
  return (
    <div className="Header">
        <img src={CONMEBOL} />
        <h1> CONMEBOL Qualifiers Games </h1>
        <img src={WC2026} />
    </div>
  );
};

export default Header;
