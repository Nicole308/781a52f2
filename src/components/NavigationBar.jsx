import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: '#212121'}}>
                <Toolbar>
                    <Button>
                        <Link to={'/'} style={{color: 'white'}}>Activity Feed</Link>
                    </Button>
                    <Button>
                        <Link to={'/archive'} style={{color: 'white'}}>Archived Calls</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavigationBar;