import './App.css';
import { Nav } from './components/nav/Nav'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'



function App() {

  return (
    <div>
      <Nav />
      <Header/>
      <section className="section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
