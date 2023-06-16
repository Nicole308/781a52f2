import { useContext, useEffect, useState } from "react";
import PhotoContext from "../context/PhotoContext";
import PhotoCard from "../components/PhotoCard";
import NavigationBar from "../components/NavigationBar";

/* eslint-disable react/prop-types */
const Favorites = () => {
    const [filterfavPhotos, setFilterFavPhotos] = useState([])
    const { photosData } = useContext(PhotoContext)

    useEffect(() => {

        const filterPhotos = photosData.filter((p) => p.isFavorite === true) // return an array of all photos that are favourited
        console.log(filterPhotos)
        

        setFilterFavPhotos(filterPhotos)

        // console.log(photosData.map((test) => {
        //     console.log(test.isFavorite, "test data: ")
        // }))


    }, [])

    // function handleRemoveFav(photo){ // passes in a photo that will be un-favourited

    //    const newFavPhotosArr = filterfavPhotos.filter((p) => p.id !== photo.id) 
    //    // filters all the favourite photos that has the same id as the one that was un-favourited

    //    setFilterFavPhotos(newFavPhotosArr)

    // }

    return (

        <>
            <NavigationBar />
            <div style={{backgroundColor: '#fff', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                {filterfavPhotos.map((data) => {
                // eslint-disable-next-line react/jsx-key
                return <PhotoCard data={data}/>;
                })}
            </div>
        </>
       
    )
}

export default Favorites;