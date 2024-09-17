import HamburgerMenu from './components/HamburguerMenu';
import ColorRender from './components/ColorRender';
import DarkMode from './components/DarkMode';
import FormValidation from './components/FormValidation';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginContainer from './containers/LoginContainer';
import Input from './algorithms/Input';
import MyVideo from './animations/FadeIn';
import CalendarComponent from './components/Calendar/CalendarComponent';

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
          <Input />
        </DarkMode>
        <h1>Motion Canvas Example in React & TypeScript</h1>
        <CalendarComponent />
      </div>
    </Provider>
  );
}

export default App;
