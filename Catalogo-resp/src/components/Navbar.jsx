import "./Navbar.css";

export default function Header() {

  return (
    <header className="header">
      <nav className="navbar">
        <div className="conteudo">
          <ul className="links">
            <li>
                <a href="sobre">Sobre</a>
            </li>
            <li>
                <a href="sobre">Categorias</a>
            </li>
            <li>
                <a href="sobre">Gêneros</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}