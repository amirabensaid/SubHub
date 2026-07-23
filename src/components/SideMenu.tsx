import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';


const drawerWidth = 240;


const menuItems = [
  {
    text: "Tableau de bord",
    icon: <DashboardIcon />
  },
  {
    text: "Mes abonnements",
    icon: <SubscriptionsIcon />
  },
  {
    text: "Ajouter un abonnement",
    icon: <AddCircleIcon />
  },
  {
    text: "Paiements",
    icon: <PaymentIcon />
  },
  {
    text: "Statistiques",
    icon: <BarChartIcon />
  },
  {
    text: "Paramètres",
    icon: <SettingsIcon />
  }
];


export default function SideMenu() {

  return (

    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,

        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
    >


      {/* Logo */}

      <Box
        sx={{
          p: 3,
          textAlign: "center"
        }}
      >

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "primary.main"
          }}
        >
          SubTrack
        </Typography>

      </Box>


      <Divider />


      {/* Menu */}

      <List>

        {
          menuItems.map((item) => (

            <ListItemButton key={item.text}>

              <ListItemIcon>
                {item.icon}
              </ListItemIcon>


              <ListItemText
                primary={item.text}
              />

            </ListItemButton>

          ))
        }

      </List>


      <Box
        sx={{
          mt: "auto",
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2
        }}
      >

        <Avatar>
          R
        </Avatar>


        <Box>

          <Typography
            sx={{
              fontWeight: 600
            }}
          >
            Rayen
          </Typography>


          <Typography
            variant="caption"
            sx={{
              color: "text.secondary"
            }}
          >
            Utilisateur
          </Typography>

        </Box>


      </Box>


    </Drawer>

  );
}