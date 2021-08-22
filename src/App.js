import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Start from './components/Start'
import Levels from './components/Levels';
import Easy from './components/Easy';
import Medium from './components/Medium';
import Hard from './components/Hard';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/Hangman_React' component={Start}/>
          <Route exact path='/levels' component={Levels}/>
          <Route exact path='/levels/easy' component={Easy}/>
          <Route exact path='/levels/medium' component={Medium}/>
          <Route exact path='/levels/hard' component={Hard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
