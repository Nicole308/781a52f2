import { useEffect, useState } from 'react'
import './App.css'
import PhotoContext from './context/PhotoContext'
import PhotoList from './components/PhotoList'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Favorites from './pages/Favorites'

function App() {

  const ACCESS_KEY = 'HW7PDbKJ7q1WulL7qHrULFHxEQDt6nS6-OymzFSuSzs'
  const [photosData, setPhotosData] = useState([])

  
  useEffect(() => {

    const getPhotoFromUnsplash = async () => {
      // Put the json link url inside anc change the id to CLIENT_SECRET
      const photoData = await fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
      const photoJsonData = await photoData.json()
      const requiredData = photoJsonData.map((data) => {
      return {
        image: data.urls.full,
        description: data.alt_description,
        isFavorite: false,
        id: data.id,
      };
    });
      setPhotosData(requiredData)
      // console.log(photoJsonData)
    }

    getPhotoFromUnsplash()

  }, [])

  return (
    <>
       <Router>
          <PhotoContext.Provider
            value={{
              photosData,
              setPhotosData,
            }}
          >
          <Routes>
            <Route path='/' index element={<PhotoList />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
        </PhotoContext.Provider>
      </Router>
    </>
   
  )

  // return (
  //   <PhotoContext.Provider
  //     value={{
  //       photosData,
  //       setPhotosData,
  //     }}
  //   >
  //     <PhotoList />
  //   </PhotoContext.Provider>
  // )
}

export default App
