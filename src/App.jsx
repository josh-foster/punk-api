import logo from './logo.svg';
import  './App.scss';
import Main from "./components/Main";
import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">
      <nav>
        <Navbar/>
      </nav>
      <section className="main">
        <Main />
      </section>
    </div>
  );
}

export default App;
