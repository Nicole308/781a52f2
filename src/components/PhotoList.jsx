import { useContext } from "react";
import PhotoContext from "../context/PhotoContext";
import PhotoCard from "./PhotoCard";
import NavigationBar from "./NavigationBar";

const PhotoList = () => {
    const { photosData } = useContext(PhotoContext);

 
    return (
        <>
            <NavigationBar />
            <div style={{backgroundColor: '#DDE5B6', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                {photosData.map((data) => {
                // eslint-disable-next-line react/jsx-key
                return <PhotoCard data={data} />;
                })}
            </div>
        </>
       
    );
  };
  

export default PhotoList;