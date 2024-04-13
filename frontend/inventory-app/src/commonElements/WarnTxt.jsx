import React from 'react'
import Txt from './Txt'

const WarnTxt = ({children}) => {
  return (
    <Txt variant="overline" display="block" gutterbomb={true} color='red'>
    {children}
    </Txt>
  )
}

export default WarnTxt