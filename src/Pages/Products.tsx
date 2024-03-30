import { CssBaseline } from '@mui/material'
import { Text } from '../components/Text'

function Products() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <div>
        <Text>
          Products
        </Text>
        <ul>
          <li>
            <Text>
              Café Espresso
            </Text>

          </li>
          <li>
            <Text>
              Cappuccino Tradicional
            </Text>

          </li>
          <li>
            <Text>
              Pão de Queijo
            </Text>

          </li>
          <li>
            <Text>
              Bolo de Chocolate
            </Text>

          </li>
          <li>
            <Text>
              Sanduíche de Presunto e Queijo
            </Text>

          </li>
          <li>
            <Text>
              Salada de Frutas
            </Text>

          </li>
          <li>
            <Text>
              Cookies de Chocolate
            </Text>

          </li>
          <li>
            <Text>
              Chá Preto
            </Text>

          </li>
          <li>
            <Text>
              Chocolate Quente
            </Text>

          </li>
          <li>
            <Text>
              Croissant
            </Text>

          </li>
        </ul>
      </div>
    </>
  )
}

export default Products