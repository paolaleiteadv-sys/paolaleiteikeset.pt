import Home from "./pages/Home";
import BlogArticle from "./pages/BlogArticle";
import "./styles/global.css";

export default function App() {
  return window.location.pathname.startsWith("/blog/") ? <BlogArticle /> : <Home />;
}
