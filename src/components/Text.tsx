import { Typography } from '@mui/material'
import React from 'react'

export const Text = (props: { children: React.ReactNode }) => {
  return (
    <Typography component='p' fontFamily={'Times New Roman'} fontSize='22px' letterSpacing='.05rem' fontWeight='light'>
      {props.children}
    </Typography>
  )
}
