import React from 'react'
import * as AS from './app.style'
import { Header } from '../header/header.component'
import { Footer } from '../footer/footer.component'
import { Maindash } from '../maindash'


export const App = () => {
  return (
    <AS.PageContainer>
      <AS.FixHeader>
        <Header />
      </AS.FixHeader>
      <AS.ContentContainer>
        <Maindash />
      </AS.ContentContainer>
      <AS.FixFooter>
        <Footer />
      </AS.FixFooter>
    </AS.PageContainer>
  )
}