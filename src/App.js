import logo from './logo.svg';
import {NewsPage} from './components/newspage';
import {Header} from './components/header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/brazil">
          <NewsPage code="br"/>
        </Route>

        <Route path="/">
          <NewsPage code="us"/>
        </Route>

      </Switch>
    
    </Router>
    
    
  );
}

export default App;
