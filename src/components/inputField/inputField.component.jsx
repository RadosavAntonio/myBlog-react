import React from 'react'
import * as IS from './inputField.styled'

export const InputField = ({label}) => {
  return (
    <div>
      <IS.FieldsetStyle>
        <IS.LegendStyle>
          {label}
        </IS.LegendStyle>
        <IS.InputStyle type="text" placeholder={label}/>
      </IS.FieldsetStyle>
    </div>
  )
}
