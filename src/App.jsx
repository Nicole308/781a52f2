import { useEffect, useState } from 'react'
import './App.css'
import ContactContext from './context/ContactContext'
import ActivityFeed from './components/ActivityFeed'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Archive from './pages/Archive'
import ActivityDetail from './components/ActivityDetail'

function App() {
  const [contactsData, setContactsData] = useState([])

  
  useEffect(() => {

    const getContactsFromUnsplash = async () => {
      // Put the json link url inside anc change the id to CLIENT_SECRET
      const contactData = await fetch(`https://api.unsplash.com/search/photos?page=1&query=people&client_id=${ACCESS_KEY}`)
      const contactJsonData = await contactData.json();
      console.log('contactJsonData: ', contactJsonData.results);
      const requiredData = contactJsonData.results.map((data) => {
        return {
          image: data.urls.full,
          firstname: data.user.first_name,
          lastname: data.user.last_name,
          description: data.user.bio,
          isArchived: false,
          id: data.id,
        };
      });
      setContactsData(requiredData)
    }

    getContactsFromUnsplash()

  }, [])

  return (
    <>
       <Router>
          <ContactContext.Provider
            value={{
              contactsData,
              setContactsData,
            }}
          >
          <Routes>
            <Route path='/' index element={<ActivityFeed />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/call/:id' element={<ActivityDetail/>} />
         </Routes>
        </ContactContext.Provider>
      </Router>
    </>
   
  )
}

export default App
