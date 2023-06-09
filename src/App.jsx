import { useState } from 'react'
import './App.css'
import PhotoContext from './context/PhotoContext'
import PhotoList from './components/PhotoList'

function App() {

  return (
    <>
      <PhotoContext.Provider>
        <PhotoList />
      </PhotoContext.Provider>
    </>
  )
}

export default App
