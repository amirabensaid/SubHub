import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import Avatar from '@mui/material/Avatar';


export default function Header() {

  return (

    <Box>

      <AppBar
        position="static"
        color="primary"
      >

        <Toolbar>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 1
            }}
          >
            SubTrack Dashboard
          </Typography>


          <IconButton color="inherit">

            <NotificationsIcon />

          </IconButton>


          <IconButton color="inherit">

            <HelpIcon />

          </IconButton>


          <IconButton color="inherit">

            <Avatar
              sx={{
                width: 32,
                height: 32
              }}
            >
              R
            </Avatar>

          </IconButton>


        </Toolbar>

      </AppBar>


    </Box>

  );

}