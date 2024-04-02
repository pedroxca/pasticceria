import { Box, Container, Fade, Grid, Grow } from '@mui/material';
import { Text } from '../../components/Text';
import { Title } from '../../components/Title';
import { Imagens } from './Comidas';

function Products() {
  const TIMEOUT_IMAGEM = 500
  const products = [
    { imagem: Imagens[0] , name: 'Cafe Espresso',     timeout: 1500 + TIMEOUT_IMAGEM  *1 },
    { imagem: Imagens[1] , name: 'Cappuccino',        timeout: 1700 + TIMEOUT_IMAGEM * 2 },
    { imagem: Imagens[2] , name: 'Pão de Queijo',     timeout: 1800 + TIMEOUT_IMAGEM * 3 },
    { imagem: Imagens[3] , name: 'Bolo de Chocolate', timeout: 1900 + TIMEOUT_IMAGEM * 4 },
    { imagem: Imagens[4] , name: 'Misto Quente',      timeout: 2000 + TIMEOUT_IMAGEM * 5 },
    { imagem: Imagens[5] , name: 'Salada de Frutas',  timeout: 2100 + TIMEOUT_IMAGEM * 6 },
    { imagem: Imagens[6] , name: 'Croissant',         timeout: 2200 + TIMEOUT_IMAGEM * 7 },
  ]

  return (
    <Fade in timeout={1500} >
      <Container maxWidth="lg" sx={{ mt: '1vw' }}>
      <Title>Nossos Produtos</Title>
        <Container>
          <Text sx={{ fontSize: '1.4rem', mb: '1rem', mt: '1rem' }}>
            Explore os deliciosos produtos da Coffee Shops Tia Rosa. Do nosso café fresco aos nossos bolos caseiros, temos algo para todos os gostos!
          </Text>
          <Text sx={{ fontSize: '1.3rem' }}>
            Alguns de nossos produtos são:
          </Text>
          <Box sx={{ flexGrow: 1 }}>
          </Box>
          <Grid sx={{ alignItems: 'flex-end', justifyContent: 'center' }} container spacing={1}>
            {
              products.map(product => {
                return (
                  <Grid key={product.name} item >
                    <Grow in timeout={product.timeout} style={{ transformOrigin: '0 0 0' }}>
                      <Container>
                        <Text>{product.name + '\n'}</Text>
                        <img
                          src={product.imagem}
                          style={{ maxHeight: '22vh' }}
                          loading="lazy" />
                      </Container>
                    </Grow>
                  </Grid>
                )
              })
            }
          </Grid>
        </Container>
      </Container>
    </Fade >
  )
}

export default Products