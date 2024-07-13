/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import ContactContext from '../context/ContactContext';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PhotoCard = ({ data }) => {
    const { contactsData, setContactsData } = useContext(ContactContext);
    const [contactCalls, setContactCalls ] = useState([]);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/call/${data.id}`)
    }

    const handleArchive = () => {

        const contactListAfterFav = contactsData.map((contactObject) => {
            if (contactObject.id === data.id) {

                contactObject.isArchived = !contactObject.isArchived;
                setContactCalls([...contactCalls, contactObject])
            }
            return contactObject;
            
        });
        setContactsData(contactListAfterFav);        
    };
   
    return (
        <Card sx={{display: 'flex', justifyContent: 'space-between', height: '100px'}} style={{ margin: '1em', background: data.isArchived ? `#607d8b` : `#212121`}} elevation={3}>
            <CardActionArea onClick={handleNavigate} sx={{display: 'flex', width: 'auto'}}>
                <CardMedia 
                    component="img"
                    height='100%'
                    width='100%'
                    sx={{objectFit: 'contain'}}
                    image={data.image}
                    alt="image from unsplash API"
                />

                <CardContent sx={{width: '100%', display: 'flex', alignItems: 'center'}}>
                    <Typography color='white' sx={{marginLeft: '1em'}}>
                        {data.firstname} {data.lastname}
                    </Typography>
                    <Typography variant="body2" color="initial" sx={{marginLeft: '1em', color: 'darkgray'}}>
                        +911234563428
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                
                <Button onClick={handleArchive} variant='contained' size="small" color='primary'>
                    {data.isArchived ? `Remove From Archive` : `Add to Archive`}        
                </Button>

            </CardActions>
        </Card>
    );
  };
  

export default PhotoCard;