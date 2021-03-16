import style from 'styled-components'

export const Background = style.div`
  background-image: url(https://www.transparenttextures.com/patterns/45-degree-fabric-light.png), linear-gradient( #FFADAD, #BDB2FF);
  padding: 5px;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Comic Sans MS, Textile, Cursive;
`

export const Post = style.div`
  padding: 10px;
  margin: 20px;
  // border: 1px solid black;
  background-color: rgba(16, 18, 27, 60%);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  max-width: 500px;
`