import { useContext } from "react";
import PhotoContext from "../context/PhotoContext";
import PhotoCard from "./PhotoCard";

const PhotoList = () => {
    const photoList = useContext(PhotoContext)

    return (
        <div className="">
            {
                photoList.map((data) => {
                    return <PhotoCard data={data}></PhotoCard>
                })
            }
        </div>
    )
}

export default PhotoList;