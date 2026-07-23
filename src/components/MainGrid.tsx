import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const subscriptions = [
  {
    name: "Netflix",
    price: "15,99 €",
    category: "Streaming",
    date: "25/07/2026",
    status: "Actif"
  },
  {
    name: "Spotify",
    price: "10,99 €",
    category: "Musique",
    date: "01/08/2026",
    status: "Actif"
  },
  {
    name: "Disney+",
    price: "8,99 €",
    category: "Streaming",
    date: "12/08/2026",
    status: "Actif"
  },
  {
    name: "Adobe Creative Cloud",
    price: "24,99 €",
    category: "Productivité",
    date: "18/08/2026",
    status: "Actif"
  }
];


export default function MainGrid() {

  return (

    <Box>

      {/* Cartes statistiques */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)"
          },
          gap: 3,
          mb: 3
        }}
      >

        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Total abonnements
            </Typography>

            <Typography variant="h4">
              8
            </Typography>
          </CardContent>
        </Card>


        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Dépenses mensuelles
            </Typography>

            <Typography variant="h4">
              82,50 €
            </Typography>
          </CardContent>
        </Card>


        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Prochain paiement
            </Typography>

            <Typography variant="h4">
              25 Juil.
            </Typography>
          </CardContent>
        </Card>


        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Abonnements actifs
            </Typography>

            <Typography variant="h4">
              6
            </Typography>
          </CardContent>
        </Card>

      </Box>


      {/* Liste abonnements */}

      <Card>

        <CardContent>

          <Typography variant="h5" gutterBottom>
            Mes abonnements
          </Typography>


          {
            subscriptions.map((sub) => (

              <Box
                key={sub.name}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "2fr 1fr 1fr 1fr 1fr"
                  },
                  gap: 2,
                  py: 1.5,
                  borderBottom: "1px solid #ddd"
                }}
              >

                <Typography>
                  {sub.name}
                </Typography>


                <Typography>
                  {sub.category}
                </Typography>


                <Typography>
                  {sub.price}
                </Typography>


                <Typography>
                  {sub.date}
                </Typography>


                <Typography color="success.main">
                  {sub.status}
                </Typography>


              </Box>

            ))
          }


        </CardContent>

      </Card>


    </Box>

  );
}
