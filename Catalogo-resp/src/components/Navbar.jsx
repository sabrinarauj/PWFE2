import "./Navbar.css";
import { useState } from 'react';

export default function Header() {
  const [active, setActive] = useState(0);

  const items = ["Sobre", "Categorias", "Gêneros"];
  return (
    <header className="header">
      <nav className="navbar">
        <div className="conteudo">
          <ul className="links">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  className={active === index ? "active" : ""}
                  onClick={() => setActive(index)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}