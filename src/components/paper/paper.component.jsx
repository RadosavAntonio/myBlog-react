import React from 'react'
import * as PS from './paper.style'

export const Paper = ({children, width}) => {
  return (
    <PS.PaperWrapper width={width}>
      {children}
    </PS.PaperWrapper>
  )
}
