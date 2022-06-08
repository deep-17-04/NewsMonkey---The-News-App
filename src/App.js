import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  let apiKey = process.env.REACT_APP_NEWS_API
  let pageSize = 12

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<News key='general' pageSize={pageSize} country="in" category='general' apiKey={apiKey} />}></Route>
          <Route path='/general' element={<News key='general' pageSize={pageSize} country="in" category='general' apiKey={apiKey} />}></Route>
          <Route exact path='/business' element={<News key='business' pageSize={pageSize} country="in" category='business' apiKey={apiKey} />}></Route>
          <Route exact path='/entertainment' element={<News key='entertainment' pageSize={pageSize} country="in" category='entertainment' apiKey={apiKey} />}></Route>
          <Route exact path='/health' element={<News key='health' pageSize={pageSize} country="in" category='health' apiKey={apiKey} />}></Route>
          <Route exact path='/science' element={<News key='science' pageSize={pageSize} country="in" category='science' apiKey={apiKey} />}></Route>
          <Route exact path='/sports' element={<News key='sports' pageSize={pageSize} country="in" category='sports' apiKey={apiKey} />}></Route>
          <Route exact path='/technology' element={<News key='technology' pageSize={pageSize} country="in" category='technology' apiKey={apiKey} />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
