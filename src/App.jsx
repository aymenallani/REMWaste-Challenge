import React from 'react'
import {  Routes, Route  } from 'react-router-dom'
import SkipSelectionPage from './pages/SkipSelectionPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (

      <Routes>
        <Route path='/' element={<SkipSelectionPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>

  )
}

export default App