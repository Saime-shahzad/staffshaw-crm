import { Input } from 'antd'
import "./Input.css"
import React, { forwardRef } from 'react';


// export const Inputs = ({
//     prefix=false,
//     placeholder,
//     value,
//     color,
//     className,
//     ref
// }) => {
//   return (
//     <div className='parantclass'  >
// <Input  prefix={prefix} ref={ref} placeholder={placeholder} className={className} style={{backgroundColor:color}}  value={value}  />


//     </div>
//   )
// }


export  const Inputs = forwardRef(({   prefix=false,
  placeholder,
  value,
  color,
  className,onCloseClick, suffix}, ref) => {

 

  return <Input  prefix={prefix} ref={ref} placeholder={placeholder} suffix={
    <div onClick={onCloseClick} style={{cursor:"pointer"}}>
{suffix}
    </div>
    
    } className={className} style={{backgroundColor:color}}  value={value}  />
  
});

