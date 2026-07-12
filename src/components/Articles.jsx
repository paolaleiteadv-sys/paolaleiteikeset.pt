import { articles } from "../data/articles";

export default function Articles() {
  return (
    <section id="publicacoes" className="publications">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Publicações</p>
          <h2>Conhecimento jurídico para decidir com segurança.</h2>
        </div>
      </div>

      <div className="publicationGrid">
        {articles.map((article) => (
          <a href={`/blog/${article.slug}`} key={article.slug}>
            <img src={article.image} alt={article.title} />
            <div>
              <span>{article.category}</span>
              <h3>{article.title}</h3>
              <p>Ler artigo →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
