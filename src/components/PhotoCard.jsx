/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import PhotoContext from '../context/PhotoContext';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const PhotoCard = ({ data }) => {
    const { setPhotosData, photosData } = useContext(PhotoContext);
    const [favPhotos, setFavPhotos ] = useState([]);

    const handleAddFav = () => {

        const photosListAfterFav = photosData.map((photoObject) => {
            if (photoObject.id === data.id) {
            photoObject.isFavorite = !photoObject.isFavorite;
            setFavPhotos([...favPhotos, photoObject])
            }
            return photoObject;
            
        });
        setPhotosData(photosListAfterFav);
        
    };
   
    return (
        <Card sx={{ width: '300px' }} style={{margin: '3em 1em', background: data.isFavorite ? `#ADC178` : `#fff`}} elevation={3}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="180"
                    image={data.image}
                    alt="image from unsplash API"
                />

                <CardContent>
                    <Typography variant='body2' color='text.secondary'>
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                
                <Button onClick={handleAddFav} size="small" color='primary'>
                    {data.isFavorite ? `Remove From Fav` : `Add to Fav`}        
                </Button>

            </CardActions>
            {/* <Favorites data= {favPhotos} /> */}
        </Card>
    //   <div
    //     style={{
    //       background: data.isFavorite ? `red` : `#fff`,
    //       boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    //       padding: '2px',
    //     }}
    //   >
    //     <img width={200} src={data.image} />
    //     <p>{data.description}</p>
    //     <button onClick={handleAddFav}>
    //       {data.isFavorite ? `Remove From Fav` : `Add to Fav`}
    //     </button>
    //   </div>
    );
  };
  

export default PhotoCard;