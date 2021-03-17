import styled from 'styled-components'

export const PaperWrapper = styled.div`
  padding: 10px;
  min-width: ${(props)=>props.width ? props.width : "20px"};
  margin: 20px;
  // border: 1px solid black;
  background-color: rgba(16, 18, 27, 60%);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`