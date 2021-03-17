import React from 'react'
import { Button } from '../button'
import { Paper } from '../paper'
import * as MDS from './maindash.style'

export const Maindash = () => {
  const handleLogin = () => {
    console.log("string de log in")
  }
  const handleSignup = () => {
    console.log("sign upppppppp")
  }
  return (
    <MDS.Background>
      <Paper width="60%">
        <Button width="50%" radius="50px" onClick={handleLogin}>Login</Button>
        <Button width="50%" radius="50px" onClick={handleSignup}>Signup</Button>
      </Paper>
    </MDS.Background>
  )
}