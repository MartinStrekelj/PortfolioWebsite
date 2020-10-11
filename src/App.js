import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import PcBuilds from './pages/PcBuilds';
import Page404 from './pages/Page404';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/pcbuilding" component={PcBuilds}/>
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
