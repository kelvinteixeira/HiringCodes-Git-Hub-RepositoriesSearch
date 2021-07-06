import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


import Repositories from './pages/Repositories'
import Home from './pages/Home'

export default function Router() {
  return (
    <BrowserRouter>
  <Switch> 
    <Route path='/' exact component= { Home }></Route>
    <Route path='/repositories' exact component= { Repositories }></Route>
  </Switch>
 </BrowserRouter>
  )
}