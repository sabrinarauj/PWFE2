import './Banner.css';

export default function Banner() {
    return (
        <section className="topinho" id="sobre">
            <div className="topinho-conteudo">
                <h1>Personagens Favs</h1>
                <p>
                Personagens favoritos da Sabrina s2
                </p>
                <div className="topinho-botoes">
                    <a className="btn btn-primary" href="#cat_btn">Categorias</a>
                </div>
            </div>

            <article className="topinho-card">
                <div className="top-cardzinho">
                    <figure className="cardzinho-img">
                        {/* <img src="https://i.pinimg.com/1200x/4d/69/3b/4d693b9a7732a788952066dc1a419c5f.jpg" alt="Killua Zoldyck"/> */}
                    </figure>
                </div>
            </article>
        </section>
    );
}