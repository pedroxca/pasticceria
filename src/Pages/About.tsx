import { Container, Fade } from '@mui/material'
import { Text } from '../components/Text'
import { Title } from '../components/Title'

function About() {
  return (
    <Fade in timeout={1500}>
      <Container maxWidth="lg" sx={{ mt: '1vw' }}>
        <Text>
          <Title>Sobre nós</Title>
          Tia Rosa é a personificação da hospitalidade italiana-brasileira na Coffee Shops Tia Rosa. Com sua presença calorosa e sorriso acolhedor, ela é uma figura querida que está sempre presente na loja, cuidando de seus funcionários e garantindo que tudo funcione perfeitamente. Como uma verdadeira nonna, Tia Rosa prioriza o atendimento ao cliente e o bem-estar de sua equipe, inspirando todos ao seu redor com sua dedicação e paixão pelo negócio.
          <br />
          <br />
          Com raízes profundas na tradição familiar, Tia Rosa é a guardiã das receitas secretas que passaram de geração em geração. Ela mantém viva a autenticidade das delícias da padaria, garantindo que cada produto seja feito com os mesmos ingredientes e cuidado que suas ancestrais italianas e brasileiras usavam. Sua presença na loja não apenas adiciona um toque de familiaridade, mas também transmite o compromisso da Coffee Shops Tia Rosa em proporcionar uma experiência genuína e acolhedora para seus clientes.
        </Text>
        <br />
        <img
          src="/src/assets/Tia Rosa.jpg"
          style={{ maxHeight: '50vh' }}
          alt="Tia Rosa" />
      </Container>
    </Fade>
  )
}

export default About