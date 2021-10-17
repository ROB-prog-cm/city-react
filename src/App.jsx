import {Header} from "./components/Header";
import {Main} from "./components/Mains";
import {useState} from "react";
import {Route, Switch} from 'react-router-dom'
import {NotFound} from "./pages/NotFound";
import {Details} from "./pages/Detalis";
import {HomePage} from "./pages/HomePages";

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header/>
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage countries={countries} setCountries={setCountries}/>
          </Route>
          <Route path="/country/:name" component={Details}/>
          <Route component={NotFound}/>
        </Switch>
      </Main>
    </>
  );
}


export default App;
