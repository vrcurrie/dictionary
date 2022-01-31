import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Mango & Pimp's Online Dictionary
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://serene-wing-4e9b5a.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanessa Robin
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/vrcurrie/dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
