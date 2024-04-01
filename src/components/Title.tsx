import React from 'react'
import { Text } from './Text'

export const Title = (props: { children: React.ReactNode}) => {
  return (
    <Text sx={{fontSize:'2rem', fontWeight:'bold', fontFamily:'Montserrat'}}>{props.children}</Text>
  )
}
