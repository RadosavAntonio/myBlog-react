import React from 'react'
import * as PS from './paper.style'

export const Paper = ({width, onClick}) => {
  return (
    <PS.PaperWrapper width={width} onClick={onClick}>
      <div>test</div>
      <div>2334</div>
    </PS.PaperWrapper>
  )
}
