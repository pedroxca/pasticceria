import { Container, CssBaseline, Grow } from "@mui/material";
import pao1 from '../assets/bread.jpg';
import BakeryInside from '../assets/BakeryInside.jpg';
import Facade from '../assets/Facade.jpg';
import { Text } from "../components/Text";
import { Title } from "../components/Title";
function Home() {
  console.log(pao1)
  return (
    <>
      <CssBaseline enableColorScheme />
      <Grow style={{ transformOrigin: '0 0 0' }} in timeout={1500}>
        <Container maxWidth="lg" sx={{ mt: '1vw' }}>
          <Title>A Padaria</Title>
          <Container sx={{ display: { md: 'flex', flexDirection: 'row', }, verticalAlign: 'center' }} >
            <Text>
              Bem-vindo à nossa padaria, onde os sabores do Brasil e da Itália se encontram em um ambiente moderno e acolhedor! Na nossa padaria, não apenas oferecemos uma ampla variedade de produtos frescos e deliciosos, mas também proporcionamos um tratamento excepcional aos nossos clientes.
            </Text>
            <img
              srcSet={`${pao1}`}
              src={`${pao1}`}
              style={{ maxHeight: '20vh' }}
              alt='Pão bonito'
              loading="lazy"
            />
          </Container>
          <Container sx={{ display: { md: 'flex', flexDirection: 'row' }, mt: '.5rem', }}>

            <Text>
              Nossos produtos são cuidadosamente elaborados com ingredientes de alta qualidade, trazendo o melhor da culinária brasileira e italiana diretamente para o seu paladar. De pães artesanais a doces tradicionais, nossos produtos são feitos com amor e paixão pela gastronomia.
            </Text>
            <br />
            <Text>
              Além disso, nosso ambiente foi cuidadosamente projetado para oferecer uma experiência única aos nossos clientes. Com um design moderno e acolhedor, você se sentirá em casa assim que entrar em nossa padaria.
            </Text>
            <br />
          </Container>

          <Container sx={{ display: { md: 'flex', flexDirection: 'column' } }}>
            <Text sx={{ mt: '.5rem' }}>
              Na nossa padaria, valorizamos cada cliente e nos esforçamos para oferecer um tratamento excepcional a todos que nos visitam. Nossa equipe está sempre pronta para recebê-lo com um sorriso caloroso e ajudá-lo a encontrar exatamente o que você procura.
            </Text>
            <br />
            <Text sx={{ mt: '.5rem' }}>
              Então, se você está em busca de produtos frescos e saborosos, um ambiente acolhedor e um tratamento excepcional, venha nos visitar! Estamos ansiosos para recebê-lo em nossa padaria e compartilhar com você os melhores sabores do Brasil e da Itália.
            </Text>
            <br />
          </Container>
          <Container sx={{ display: { md: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }, verticalAlign: 'center', mb: '3rem' }}>
            <img
              srcSet={`${BakeryInside}`}
              src={`${BakeryInside}`}
              style={{ maxHeight: '40vh' }}
              alt='Pão bonito'
              loading="lazy"
            />
            <img
              srcSet={`${Facade}`}
              src={`${Facade}`}
              style={{ maxHeight: '40vh' }}
              alt='Pão bonito'
              loading="lazy"
            />
          </Container>
        </Container>
      </Grow >
    </>
  )
}

export default Home