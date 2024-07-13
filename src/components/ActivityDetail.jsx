import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactContext from '../context/ContactContext';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const ActivityDetail = () => {
    const { id } = useParams();
    const { contactsData } = useContext(ContactContext);
    const navigate = useNavigate();

    const contactCall = contactsData.find(contact => contact.id === id);

    if (!contactCall) {
        return <div>Contact not found</div>;
    }
    console.log("id:", id, " contactCall: ", contactCall);

    return (
        <div style={{display: 'flex', justifyContent: 'center', background: '#f5f5f5', height: '100vh'}}>
            <Card sx={{ width: '500px', height: '600px', overflowY: 'auto'}} style={{margin: '3em 1em', background: '#212121', color: 'white'}}>
                <CardActions>
                    <Button onClick={() => navigate(-1)} size="small" color='primary'>
                        <h4>Go Back</h4>
                    </Button>
                </CardActions>

                <CardActionArea sx={{height: '100%'}}>
                    <CardMedia
                        component="img"
                        height="40%"
                        width='auto'
                        sx={{objectFit: 'contain', borderRadius: '25px'}}
                        image={contactCall.image}
                        alt="image from unsplash API"
                    />

                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography color='white' sx={{fontWeight: 'bolder', margin: '1em'}}>
                            {contactCall.firstname} {contactCall.lastname}
                        </Typography>
                        <Typography variant="body2" color="gray" sx={{margin: '1em'}}>
                            +911234563428
                        </Typography>
                        <Typography variant='body2' color='white' sx={{margin: '1em'}}>
                            {contactCall.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                
            </Card>
        </div>
    )
}

export default ActivityDetail
