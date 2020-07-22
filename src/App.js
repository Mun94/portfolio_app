import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Hungref from './components/detail/Hungref.js';
import Calculator from './components/detail/Calculator.js';
import Movieapp from './components/detail/Movieapp.js';
import Newsapp from './components/detail/Newsapp.js';
import Paint from './components/detail/Paint.js';
import Rps from './components/detail/Rps.js';
import Todolist from './components/detail/Todolist.js';
import Weatherapp from './components/detail/Weatherapp.js';

function App() {
  return (
    <>
      <Route path = '/' component = {HomePage} exact/>
      <Route path = '/:project/hungref' component = {Hungref}/>
      <Route path = '/:project/calculator' component = {Calculator}/>
      <Route path = '/:project/movieapp' component = {Movieapp}/>
      <Route path = '/:project/newsapp' component = {Newsapp}/>
      <Route path = '/:project/paint' component = {Paint}/>
      <Route path = '/:project/rps' component = {Rps}/>
      <Route path = '/:project/todolist' component = {Todolist}/>
      <Route path = '/:project/weatherapp' component = {Weatherapp}/>
    </>
  );
}

export default App;
