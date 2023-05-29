import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/HomePage/HomePage';
import CountryDetail from './Components/CountryDetail/CountryDetail';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/countries' component={HomePage} />
        <Route path='/countries/:idCountry' component={CountryDetail} />
        <Route path='/form/:idCountry' component={Form} />
      </Switch>
    </div>
  );
}

export default App;
