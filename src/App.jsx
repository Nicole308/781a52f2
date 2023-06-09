import { useEffect, useState } from 'react'
import './App.css'
import PhotoContext from './context/PhotoContext'
import PhotoList from './components/PhotoList'

function App() {

  const CLIENT_SECRET = 'HW7PDbKJ7q1WulL7qHrULFHxEQDt6nS6-OymzFSuSzs'
  const [photosData, setPhotosData] = useState([])

  useEffect(() => {
    getPhotoFromUnsplash();
  }, [])

  const getPhotoFromUnsplash = async () => {
    // Put the json link url inside anc change the id to CLIENT_SECRET
    const photoData = await fetch('')
    const photoJsonData = await photoData.json()
    const requiredData = photoJsonData.map((data) => {
      return {
        image: data.urls.full,
        description: data.alt_description,
        isFavorite: false
      }
    })
    setPhotosData(requiredData)
  }

  return (
    <>
      <PhotoContext.Provider value={{
        photosData,
        setPhotosData
      }}>
        <PhotoList />
      </PhotoContext.Provider>
    </>
  )
}

export default App
