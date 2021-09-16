import React from 'react';
import {
    AppBar, Toolbar, Box,
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function NavBar() {

    return (
        <AppBar elevation={0} color="transparent" position="static">
            <Toolbar>
                <Box display='flex' flexGrow={1}>

                    <NavLink>    Blog     </NavLink>
                    <NavLink>    Pricing     </NavLink>
                    <NavLink>    Help     </NavLink>
                </Box>

                <Button color="inherit">Login</Button>
                <Button variant="contained" color="secondary">SignUp</Button>

            </Toolbar>
        </AppBar>
    );
}

function NavLink(props) {
    return (
        <Box m={0.5} >
            <Typography variant="h6" >
                {props.children}
            </Typography>
        </Box>
    );
}