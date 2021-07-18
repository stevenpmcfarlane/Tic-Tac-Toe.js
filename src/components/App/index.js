import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Home from '../Home'

const App = () =>
  <Router>
    <Switch>
      <Route path='/:lobbyId' component={Home} />
      <Route path='/' component={Home} />
    </Switch>
  </Router>

export default App
