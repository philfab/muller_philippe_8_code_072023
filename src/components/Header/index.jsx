import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Logo KASA</div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
