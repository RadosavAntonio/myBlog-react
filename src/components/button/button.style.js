import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  padding: 10px;
  min-width: ${(props)=>props.width ? props.width : "20px"};
  margin: 20px;
  // border: 1px solid black;
  background-color: ${({ theme }) => theme==="red" ? "#FFADAD" : "#A0C4FF"};
  color: ${({ theme }) => theme==="red" ? "#000" : "#fff"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.3
  }
`