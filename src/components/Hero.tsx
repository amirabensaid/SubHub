import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.png';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  maxWidth: 900,
  height: 360,
  marginTop: theme.spacing(6),
  borderRadius: 24,
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
  background: 'linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(8),
    height: 460,
  },
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)',
        py: { xs: 8, sm: 10 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ alignItems: 'center', maxWidth: 900 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 1,
              px: 1.5,
              py: 0.75,
              borderRadius: 999,
              bgcolor: 'white',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Box component="img" src={logo} alt="SubTrack logo" sx={{ width: 42, height: 42, borderRadius: 12 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1d4ed8' }}>
              SubTrack
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', sm: '3.2rem' },
              lineHeight: 1.15,
              fontWeight: 700,
              color: '#0f172a',
            }}
          >
            Manage every client subscription
            <br />
            in one calm dashboard.
          </Typography>

          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              maxWidth: 720,
              lineHeight: 1.7,
            }}
          >
            SubTrack helps freelancers, agencies, and growing teams track renewals,
            upcoming payments, and client billing without missing a single
            subscription.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} useFlexGap>
            <Button variant="contained" color="primary" size="large">
              Start Free
            </Button>
            <Button variant="outlined" color="primary" size="large">
              View Features
            </Button>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2, width: '100%', justifyContent: 'center' }}>
            <Box sx={{ px: 2, py: 1.5, borderRadius: 3, bgcolor: 'white', minWidth: 140 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>120+</Typography>
              <Typography variant="body2" color="text.secondary">active subscriptions</Typography>
            </Box>
            <Box sx={{ px: 2, py: 1.5, borderRadius: 3, bgcolor: 'white', minWidth: 140 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>99.8%</Typography>
              <Typography variant="body2" color="text.secondary">renewal accuracy</Typography>
            </Box>
            <Box sx={{ px: 2, py: 1.5, borderRadius: 3, bgcolor: 'white', minWidth: 140 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>24/7</Typography>
              <Typography variant="body2" color="text.secondary">visibility</Typography>
            </Box>
          </Stack>

          <StyledBox id="image">
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#1d4ed8' }}>
              Your subscription control center
            </Typography>
          </StyledBox>
        </Stack>
      </Container>
    </Box>
  );
}