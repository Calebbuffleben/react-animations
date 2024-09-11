import { DarkThemeFactory } from './components/abstractFactory/DarkThemeFactory';
import { LightThemeFactory } from './components/abstractFactory/LightThemeFactory';
import { FakeApiService } from './service/abstractFatory/FakeApiService';
import Login from './components/Login';

const AbstractFactory = () => {
    const isDarkTheme = false;
    const themeFactory = isDarkTheme ? new DarkThemeFactory() : new LightThemeFactory(); 

    const apiService = new FakeApiService();

    return(
        <>
            <Login componentFactory={themeFactory} apiServiceFactory={apiService} />
        </>
    );
}
export default AbstractFactory;