import React , {useContext} from 'react'
import './style.css';
import {AppBar , Avatar , Toolbar , IconButton} from "@material-ui/core";
import { Menu, ThreeDRotation } from '@material-ui/icons';
import { UserContext } from '../../Providers/UserProvider';

const Navbar = () => {
    const user = useContext(UserContext);
    return (
        
        <AppBar style = {{background: 'white'}} position = 'sticky' dir = 'rtl' >
            <Toolbar>
                <IconButton>
                    <Avatar
                    alt = 'Kawaljeet'
                    src = {user.photoURL}
                    onClick = {() => {alert('clicked the avatar')}}
                    />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
