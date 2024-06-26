import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-display'>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
