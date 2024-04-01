import { Container, Fade } from '@mui/material'
import { Text } from '../components/Text'
import { Title } from '../components/Title'

function WorkWithUs() {
  return (
    <Fade in timeout={1500} >
      <Container maxWidth="lg" sx={{ mt: '1vw' }}>
        <Text>
          <Title>Junte-se à nossa Equipe!</Title>
          <br />
          Você é ágil, proativo e tem vontade de aprender sobre o universo das padarias? Nós, da Coffee Shops Tia Rosa, estamos procurando por você!
          <br />
          <br />
          <strong>
            Oportunidades de Trabalho:
          </strong>
          <br />
          Atendente de Balcão
          <br />
          Auxiliar de Cozinha
          <br />
          Barista
          <br />
          <br />
          <strong>
          Requisitos:
          </strong>
          <br />
          Agilidade e eficiência no atendimento
          <br />
          Proatividade e disposição para aprender
          <br />
          Disponibilidade para trabalhar em horários flexíveis
          <br />
          <br />
          Envie seu currículo para recrutamento@coffeeshopstiarosa.com para se candidatar a uma vaga.
          <br />
          <br />
          Entre em Contato:
          Para mais informações, entre em contato pelo telefone (12) 3456-7890.
          <br />
          <small>Contratamos sem experiência sujeito a entrevista e treinamento</small>
        </Text>
      </Container>
    </Fade>
  )
}

export default WorkWithUs