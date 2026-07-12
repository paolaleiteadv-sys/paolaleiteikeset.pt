import { articles } from "../data/articles";

export default function Articles() {
  return (
    <section id="publicacoes" className="articlesSection">
      <div className="container">
        <div className="sectionIntro reveal">
          <p className="kicker">Publicações</p>
          <h2>Conhecimento jurídico para decidir com segurança.</h2>
        </div>
        <div className="articlesGrid reveal">
          {articles.map((article) => (
            <a className="articleCard" href={`/blog/${article.slug}`} key={article.slug}>
              <img src={article.image} alt={article.title} />
              <div>
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <span>Ler artigo →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
