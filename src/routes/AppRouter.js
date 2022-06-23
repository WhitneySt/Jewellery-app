import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Template from '../container/Template'
import { GlobalStyles } from '../styles/GlobalStyles'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/design' element={<Template />} />
        <Route path='*' element={<Navigate to={'/design'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter