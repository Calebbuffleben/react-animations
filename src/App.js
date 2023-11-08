import logo from './logo.svg';
import './App.css';
import HamburgerMenu from './components/HamburguerMenu';
import ColorRender from './components/ColorRender';
import DarkMode from './components/DarkMode';

function App() {
  return (
    <div className="App">
      <DarkMode>
        <HamburgerMenu />
        <ColorRender />
      </DarkMode>
    </div>
  );
}

export default App;
