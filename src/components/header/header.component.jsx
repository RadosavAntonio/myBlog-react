import React from 'react'
import * as HS from './header.style'

export const Header = () => {
  return (
    <HS.Background>
      <HS.Logo src="https://www.flaticon.com/svg/vstatic/svg/1187/1187595.svg?token=exp=1615893842~hmac=682a3019bdbe56f3d88033c62c913c1d" alt="img"/>
      <HS.Title>Fun in LONDON</HS.Title>
    </HS.Background>
  )
}