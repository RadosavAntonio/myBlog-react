import style from 'styled-components'

export const Background = style.div`
  background-image: url(https://www.transparenttextures.com/patterns/brick-wall.png), linear-gradient(to right top, #962938, #aa2f40, #be3447);
  height: 30px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
`

export const Logo = style.img`
  height: 30px;
  border-radius: 10px;
`

export const Title = style.h1`
  padding-left: 20px;
`