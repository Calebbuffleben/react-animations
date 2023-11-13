import logo from './logo.svg';
import './App.css';
import HamburgerMenu from './components/HamburguerMenu';
import ColorRender from './components/ColorRender';
import DarkMode from './components/DarkMode';
import FormValidation from './components/FormValidation';

function App() {
  return (
    <div className="App">
      <DarkMode>
        <HamburgerMenu />
        <ColorRender />
        <FormValidation />
        <br />
      </DarkMode>
    </div>
  );
}

export default App;
