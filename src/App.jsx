import Home from "./pages/Home";
import BlogArticle from "./pages/BlogArticle";
import "./styles/global.css";

export default function App() {
  if (window.location.pathname.startsWith("/blog/")) return <BlogArticle />;
  return <Home />;
}
