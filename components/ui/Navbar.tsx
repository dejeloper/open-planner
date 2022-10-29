import { useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui/UIContext';


export const Navbar = () => {

    const { openSideMenu } = useContext(UIContext);

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton size='large' edge="start" onClick={openSideMenu} >
                    <MenuOutlinedIcon />
                </IconButton>
                <Typography variant='h6'>Open Planner</Typography>
            </Toolbar>
        </AppBar>
    )
}
