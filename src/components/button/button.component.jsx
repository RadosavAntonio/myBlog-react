import React from 'react'
import * as BS from './button.style'

export const Button = ({children, width, onClick, theme}) => {
  return (
    <BS.ButtonWrapper theme={theme} width={width} onClick={onClick}>
      {children}
    </BS.ButtonWrapper>
  )
}


