import { SxProps, Typography } from '@mui/material'
import React from 'react'

export const Text = (props: { children: React.ReactNode, sx?: SxProps }) => {
  return (
    <Typography sx={props.sx} component='p' fontFamily={'Times New Roman'} fontSize='20px' letterSpacing='.05rem' fontWeight='light'>
      {props.children}
    </Typography>
  )
}
