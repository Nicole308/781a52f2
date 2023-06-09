const PhotoCard = ({data}) => {

    const handleAddFav = () => {

    }

    
    return (
        <div>
            <img style={{width: '200px', height: '200px'}} src={data.image} alt="" />
            <p>{data.description}</p>
            <button onClick={handleAddFav}>Add Fav</button>
        </div>
    )
}

export default PhotoCard;