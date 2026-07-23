import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import SideMenu from './components/SideMenu';
import Header from './components/Header';
import MainGrid from './components/MainGrid';


export default function Dashboard() {

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          display: 'flex'
        }}
      >

        <SideMenu />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3
          }}
        >

          <Header />

          <Box
            sx={{
              mt: 3
            }}
          >
            <MainGrid />
          </Box>

        </Box>

      </Box>
    </>
  );
}
