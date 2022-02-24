import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import ViewOrdersPage from './pages/ViewOrdersPage'
import CreateOrdersPage from './pages/CreateOrdersPage'

const NavBar = () => {
  return (
    <ul>
      <li><Link to="/">View Orders</Link></li>
      <li><Link to="/create">Create Orders</Link></li>
    </ul>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ViewOrdersPage} />
          <Route path="/orders" component={ViewOrdersPage} />
          <Route path="/create" component={CreateOrdersPage} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
