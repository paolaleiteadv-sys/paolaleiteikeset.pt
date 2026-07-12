import { useMemo, useState } from 'react'; import Home from './pages/Home'; import Article from './pages/Article'; import { copy } from './data/content';
export default function App(){const[lang,setLang]=useState('pt');const t=useMemo(()=>copy[lang],[lang]);return location.pathname.startsWith('/blog/')?<Article/>:<Home t={t} lang={lang} setLang={setLang}/>}
