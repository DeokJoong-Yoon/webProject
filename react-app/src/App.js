import logo from './logo.svg';
import './App.css';
function Header() {
  return (
  <div>
    <header>
      <h1><a href="/">React</a></h1>
    </header>
  </div>
  )
}

function Nav() {
  return (
    <nav>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li>
      </ol>
    </nav>
  )
}
function Article() {
  return (
    <article>
    <h2>Welcom</h2>
      Wello, WEB
  </article>
  )
}
function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
