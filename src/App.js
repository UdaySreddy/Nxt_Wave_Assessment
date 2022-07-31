import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import AddResource from './components/AddResource'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/addresource" component={AddResource} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
