import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import { articles } from "../data/articles";
import { CALENDAR_URL } from "../config";

function setMeta(name, value, attr = "name") {
  let element = document.querySelector(`meta[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value || "");
}

export default function BlogArticle() {
  const slug = window.location.pathname.replace("/blog/", "").replace(/\/$/, "");
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <><Header /><main className="articlePage"><h1>Artigo não encontrado</h1></main><Footer /></>;
  }

  document.title = `${article.title} | Paola Leite Eikeset`;
  setMeta("description", article.description);
  setMeta("keywords", article.keywords);
  setMeta("author", article.author);
  setMeta("robots", "index, follow");
  setMeta("og:title", article.title, "property");
  setMeta("og:description", article.description, "property");
  setMeta("og:type", "article", "property");

  return (
    <>
      <Header />
      <main className="articlePage">
        <article className="articleShell">
          <img className="articleHero" src={article.image} alt={article.title} />
          <p className="kicker">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="articleDescription">{article.description}</p>
          <p className="articleMeta">{article.author} · {new Date(article.date).toLocaleDateString("pt-PT")}</p>
          {article.content.map((block) => (
            <section key={block.heading}>
              <h2>{block.heading}</h2>
              <p>{block.text}</p>
            </section>
          ))}
          <div className="articleCta">
            <h3>Necessita de apoio jurídico especializado?</h3>
            <p>Agende uma consulta ou envie o seu pedido para análise.</p>
            <a className="btn gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
