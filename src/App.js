import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/UI/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import NoPage from './pages/NoPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<Register/>}></Route>
            <Route path='*' element={<NoPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
