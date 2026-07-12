import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import { articles } from "../data/articles";
import { CALENDAR_URL } from "../config";

export default function BlogArticle() {
  const slug = window.location.pathname.replace("/blog/", "").replace(/\/$/, "");
  const article = articles.find(item => item.slug === slug);

  if (!article) {
    return <><Header /><main className="articlePage"><h1>Artigo não encontrado</h1></main><Footer /></>;
  }

  document.title = `${article.title} | Paola Leite Eikeset`;

  return (
    <>
      <Header />
      <main className="articlePage">
        <article className="articleShell">
          <img src={article.image} alt={article.title} />
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="articleDescription">{article.description}</p>
          {article.content.map(([heading, text]) => (
            <section key={heading}><h2>{heading}</h2><p>{text}</p></section>
          ))}
          <div className="articleCta">
            <h3>Necessita de apoio jurídico especializado?</h3>
            <a className="button gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
