import React from 'react'
import { Input } from 'antd'


export const Input = ({
    prefix=false,
    placeholder,
    value,
    color
}) => {
  return (
    <div className='parantclass'  >
<Input  prefix={prefix}  placeholder={placeholder}   value={value}  />


    </div>
  )
}
