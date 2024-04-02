import { Button, Container, Grow } from '@mui/material'
import { pages } from '../components/Pages'
import { Title } from '../components/Title'
import { NavLink as RouterLink } from 'react-router-dom'
import { theme } from '../Theme'

export const ErrorPage = () => {
  return (
    <Grow in timeout={1500} style={{ transformOrigin: '0 0 0' }} >

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: 'auto',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}>

        <Title>Parece que a página que tentou acessar talvez não exista       🙁 </Title>
        <Container
          sx={{
            margin: '0 auto',
            padding: 0,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {pages.concat({ display: '🏠', path: '/' }).reverse().map(page => {
            return (
              <Button
                variant='outlined'
                key={page.path}
                sx={{ 
                  ml: '0.5rem',
                  ":hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText
                  },
                 }}
                component={RouterLink} to={`${page.path}`}
              >
                {page.display}
              </Button>)
          })}
        </Container>
      </Container>
    </Grow>
  )
}
