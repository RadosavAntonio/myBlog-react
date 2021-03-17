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
        <Button theme="red" width="60%" onClick={handleLogin}>Login</Button>
        <Button theme="blue" width="60%" onClick={handleSignup}>Signup</Button>
      </Paper>
    </MDS.Background>
  )
}