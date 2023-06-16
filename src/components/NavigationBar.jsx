import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: '#ADC178'}}>
                <Toolbar>
                    <Button>
                        <Link to={'/'} style={{color: 'black'}}>Homepage</Link>
                    </Button>
                    <Button>
                        <Link to={'/favorites'} style={{color: 'black'}}>Favorites</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavigationBar;