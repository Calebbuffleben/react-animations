import './App.css';
import HamburgerMenu from './components/HamburguerMenu';
import ColorRender from './components/ColorRender';
import DarkMode from './components/DarkMode';
import FormValidation from './components/FormValidation';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DarkMode>
          <HamburgerMenu />
          <ColorRender />
          <FormValidation />
          <br />
          <LoginContainer />
        </DarkMode>
      </div>
    </Provider>
  );
}

export default App;
