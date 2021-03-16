import style from 'styled-components'

export const PageContainer = style.div`
  position: relative;
  min-height: calc(100vh - 60px);
  margin-bottom: 20px;
`

export const FixHeader = style.div`
  position: fixed;
  top: 0;
  width: 100%
`

export const ContentContainer = style.div`
  margin-top: 40px;
  margin-bottom: 20px;
`

export const FixFooter = style.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  position: fixed;
`